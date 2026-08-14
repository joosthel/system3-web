import type { Metadata } from 'next';
import ProjectLayout from '../../components/ProjectLayout';
import { projectMetadata } from '@/lib/metadata';

export const metadata: Metadata = projectMetadata('prompt-engine');

export default function PromptEnginePage() {
    return (
        <ProjectLayout
            slug="prompt-engine"
            title="Prompt Enhancement Engine"
            description="An AI tool that turns a creative brief and reference images into a full set of optimised, consistent prompts."
            date="2025-03-01"
            heroImage="/assets/imgs/proj_prompt-engine/promptenhancer_screenshot.png"
            projectUrl="https://promptenhancer.joosthelfers.com"
            nextProject={{
                title: "AI Video Production for a Global Brand Campaign",
                url: "/projects/ai-video-campaign"
            }}
        >
            <div className="space-y-12">
                <section>
                    <h2>What it does</h2>
                    <p>
                        You give it a creative brief and reference images. It gives you back an art direction brief (the kind an experienced art director would write) plus a full set of structured prompts for image generation, image editing, and video tools.
                    </p>
                    <p>
                        The prompts stay consistent with each other, so you can iterate on a visual concept across tools without losing coherence. The goal: less distance between a creative idea and a usable AI output.
                    </p>
                </section>

                <section>
                    <h2>Who it&apos;s for</h2>
                    <p>
                        AI artists and creative teams iterating on generative visual projects. Also useful if you&apos;re not deeply fluent in prompt writing but still need reliable output.
                    </p>
                </section>

                <section>
                    <h2>Why I built it</h2>
                    <p>
                        Mostly to speed up my own workflow. Prompt engineering is one of the most useful skills in AI visual production right now, but writing prompts by hand across several tools is slow and repetitive. Automating the structured part (brief interpretation, prompt formatting, consistency between shots) frees up attention for the decisions that actually matter.
                    </p>
                    <p>
                        It also became a testing ground for engineering patterns I now use in client work: streaming responses, multi-model orchestration, structured JSON validation from LLM output, and keeping a UI fast without reaching for a component library.
                    </p>
                </section>

                <section>
                    <h2>The stack</h2>
                    <ul>
                        <li><strong>Framework:</strong> Next.js (App Router, server routes, Turbopack) · React 19 · TypeScript</li>
                        <li><strong>Styling:</strong> Tailwind CSS v4. All UI hand-rolled, no component library.</li>
                        <li><strong>LLM / API:</strong> OpenRouter, raw fetch, no SDK. Primary models: Gemini 2.5 Flash (vision) and DeepSeek v3.2 (briefs and prompts). Fallbacks: Gemma 4 31B and Qwen 3.</li>
                        <li><strong>Validation:</strong> Zod for runtime validation of all LLM JSON responses.</li>
                        <li><strong>Deployment:</strong> Vercel, serverless, SSE streaming via ReadableStream.</li>
                        <li><strong>Notable:</strong> No database, no auth, no state management library. Zero dependencies beyond React. All state is held with the built-in React primitives.</li>
                    </ul>
                </section>

            </div>
        </ProjectLayout>
    );
}
