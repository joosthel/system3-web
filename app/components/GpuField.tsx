'use client';

import { useEffect, useRef } from 'react';
import type { Gpu } from 'vgpu';

// Hairline dot grid rendered with vgpu (WebGPU). Dots sit in the rule color
// and lean towards the accent near the pointer; a faint, live grain replaces
// the static SVG grain while the canvas is active. Browsers without WebGPU,
// and readers who prefer reduced motion, keep the CSS fallback untouched.

type Variant = 'paper' | 'panel';

const COLORS: Record<Variant, { base: [number, number, number]; rule: [number, number, number] }> = {
    paper: { base: [0.969, 0.969, 0.973], rule: [0.902, 0.902, 0.918] },
    panel: { base: [0.957, 0.957, 0.965], rule: [0.863, 0.863, 0.886] },
};

const ACCENT: [number, number, number] = [0.0, 0.341, 1.0];

const SHADER = /* wgsl */ `
struct Params {
  res: vec2f,
  pointer: vec2f,
  base: vec3f,
  time: f32,
  rule: vec3f,
  focus: f32,
  accent: vec3f,
  dpr: f32,
}
@group(0) @binding(0) var<uniform> p: Params;

fn hash(v: vec2f) -> f32 {
  let q = vec2u(max(v, vec2f(0.0)));
  var h = q.x * 1664525u + q.y * 1013904223u;
  h ^= h >> 16u;
  h *= 0x7feb352du;
  h ^= h >> 15u;
  h *= 0x846ca68bu;
  h ^= h >> 16u;
  return f32(h) / 4294967295.0;
}

@fragment
fn fs_main(@location(0) uv: vec2f, @builtin(position) pos: vec4f) -> @location(0) vec4f {
  let cell = 24.0;
  let px = pos.xy / p.dpr;
  let local = fract(px / cell) * cell - vec2f(cell * 0.5);
  let d = length(local);

  let dist = distance(px, p.pointer);
  let glow = (1.0 - smoothstep(0.0, 240.0, dist)) * p.focus;

  let radius = 0.55 + 1.1 * glow;
  let edge = 0.6 / p.dpr;
  let dot = 1.0 - smoothstep(radius - edge, radius + edge, d);

  let dotColor = mix(p.rule, p.accent, glow);
  var color = mix(p.base, dotColor, dot * (0.75 + 0.25 * glow));

  let grain = hash(floor(px) + vec2f(floor(p.time * 12.0), 0.0)) - 0.5;
  color += grain * 0.03;

  return vec4f(color, 1.0);
}
`;

// One device for every field on the page.
let gpuPromise: Promise<Gpu> | null = null;
let gpuUsers = 0;

async function acquireGpu(): Promise<Gpu> {
    gpuUsers += 1;
    gpuPromise ??= import('vgpu').then((mod) => mod.init());
    return gpuPromise;
}

function releaseGpu() {
    gpuUsers -= 1;
    if (gpuUsers > 0 || !gpuPromise) return;
    const pending = gpuPromise;
    gpuPromise = null;
    void pending.then((gpu) => gpu.dispose()).catch(() => undefined);
}

export default function GpuField({ variant = 'paper' }: { variant?: Variant }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        if (!('gpu' in navigator)) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const host = canvas.parentElement ?? canvas;
        let disposed = false;
        let cleanup: (() => void) | undefined;

        (async () => {
            let gpu: Gpu;
            let vgpu: typeof import('vgpu');
            try {
                vgpu = await import('vgpu');
                gpu = await acquireGpu();
            } catch {
                return;
            }
            if (disposed) {
                releaseGpu();
                return;
            }

            const { surface, effect, frameLoop, clock } = vgpu;
            const { base, rule } = COLORS[variant];

            try {
                const output = surface(gpu, canvas, { dpr: [1, 1.5], alphaMode: 'opaque' });
                const field = effect(gpu, SHADER, {
                    label: `gpu-field-${variant}`,
                    set: {
                        p: {
                            res: [output.size[0], output.size[1]],
                            pointer: [-1e4, -1e4],
                            base,
                            time: 0,
                            rule,
                            focus: 0,
                            accent: ACCENT,
                            dpr: output.dpr,
                        },
                    },
                });

                let sizeCss: [number, number] = [1, 1];
                const unsubscribeResize = output.onResize(({ width, height, dpr }) => {
                    sizeCss = [width / dpr, height / dpr];
                    field.set({ p: { res: [width, height], dpr } });
                });

                // Pointer in CSS pixels relative to the host; eased per frame.
                let target: [number, number] | null = null;
                const pointer: [number, number] = [-1e4, -1e4];
                let focus = 0;
                let settled = false;

                const onPointerMove = (event: PointerEvent) => {
                    if (event.pointerType === 'touch') return;
                    const rect = host.getBoundingClientRect();
                    target = [event.clientX - rect.left, event.clientY - rect.top];
                };
                const onPointerLeave = () => {
                    target = null;
                };
                host.addEventListener('pointermove', onPointerMove, { passive: true });
                host.addEventListener('pointerleave', onPointerLeave);
                host.addEventListener('pointercancel', onPointerLeave);

                const time = clock(gpu);
                let handle: ReturnType<typeof frameLoop> | undefined;
                let visible = false;

                const tick = (frame: Parameters<Parameters<typeof frameLoop>[1]>[0]) => {
                    const t = time.time;
                    const dt = Math.min(time.deltaTime || 1 / 30, 0.1);
                    const ease = 1 - Math.exp(-dt / 0.18);

                    // Slow drift when idle so the field stays alive without a cursor.
                    const drift: [number, number] = [
                        sizeCss[0] * (0.62 + 0.22 * Math.sin(t * 0.21)),
                        sizeCss[1] * (0.5 + 0.28 * Math.cos(t * 0.17)),
                    ];
                    const goal = target ?? drift;
                    const goalFocus = target ? 1 : 0.45;

                    if (!settled) {
                        pointer[0] = goal[0];
                        pointer[1] = goal[1];
                        settled = true;
                    } else {
                        pointer[0] += (goal[0] - pointer[0]) * ease;
                        pointer[1] += (goal[1] - pointer[1]) * ease;
                    }
                    focus += (goalFocus - focus) * ease;

                    field.set({ p: { pointer: [pointer[0], pointer[1]], time: t, focus } });
                    frame.pass(output, field);
                };

                const start = () => {
                    if (handle || disposed) return;
                    handle = frameLoop(gpu, tick, { fps: 30 });
                };
                const stop = () => {
                    handle?.stop();
                    handle = undefined;
                };
                const sync = () => {
                    if (visible && !document.hidden) start();
                    else stop();
                };

                const observer = new IntersectionObserver(([entry]) => {
                    visible = entry.isIntersecting;
                    sync();
                });
                observer.observe(host);
                document.addEventListener('visibilitychange', sync);

                host.dataset.gpu = 'on';

                cleanup = () => {
                    stop();
                    observer.disconnect();
                    document.removeEventListener('visibilitychange', sync);
                    host.removeEventListener('pointermove', onPointerMove);
                    host.removeEventListener('pointerleave', onPointerLeave);
                    host.removeEventListener('pointercancel', onPointerLeave);
                    unsubscribeResize();
                    delete host.dataset.gpu;
                    try {
                        output.dispose();
                    } catch {
                        // Surface may already be gone with the device.
                    }
                    releaseGpu();
                };

                if (disposed) cleanup();
            } catch {
                releaseGpu();
            }
        })();

        return () => {
            disposed = true;
            cleanup?.();
        };
    }, [variant]);

    return <canvas ref={canvasRef} className="gpu-field" aria-hidden="true" />;
}
