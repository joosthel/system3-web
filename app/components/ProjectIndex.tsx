"use client";

import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { Project } from '@/lib/data';

const PREVIEW_WIDTH = 320;

export default function ProjectIndex({ projects }: { projects: Project[] }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const previewRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState<number | null>(null);
    const [category, setCategory] = useState<string | null>(null);

    const categories = useMemo(
        () => Array.from(new Set(projects.map((p) => p.category).filter(Boolean) as string[])),
        [projects]
    );

    const visible = category
        ? projects.filter((p) => p.category === category)
        : projects;

    // Position is written imperatively so mousemove never re-renders.
    const handleMouseMove = (e: React.MouseEvent) => {
        const container = containerRef.current;
        const preview = previewRef.current;
        if (!container || !preview) return;
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
        const rect = container.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left + 24, rect.width - PREVIEW_WIDTH));
        const y = e.clientY - rect.top - 110;
        preview.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    return (
        <div>
            {categories.length > 1 && (
                <div className="project-filter-row">
                    <button
                        className={`tag-filter ${category === null ? 'tag-filter-active' : ''}`}
                        onClick={() => setCategory(null)}
                    >
                        All
                    </button>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`tag-filter ${category === cat ? 'tag-filter-active' : ''}`}
                            onClick={() => setCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            )}
            <div
                className="project-index"
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setActive(null)}
            >
                {visible.map((project, i) => (
                    <Link
                        key={project.id}
                        href={project.url}
                        className="project-row"
                        onMouseEnter={() => setActive(i)}
                    >
                        <h3 className="project-row-title">{project.title}</h3>
                        <span className="meta project-row-meta">
                            {[project.category, project.date?.slice(0, 4), project.badge]
                                .filter(Boolean)
                                .join(' · ')}
                        </span>
                    </Link>
                ))}
                <div className="project-preview" ref={previewRef} aria-hidden="true">
                    {visible.map((project, i) =>
                        project.image ? (
                            <img
                                key={project.id}
                                src={project.image}
                                alt=""
                                width="600"
                                height="400"
                                loading="lazy"
                                decoding="async"
                                className={active === i ? 'visible' : undefined}
                            />
                        ) : null
                    )}
                </div>
            </div>
        </div>
    );
}
