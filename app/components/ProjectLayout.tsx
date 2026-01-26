import Link from 'next/link';
import { ReactNode } from 'react';

interface ProjectLayoutProps {
    title: string;
    description: string;
    date?: string;
    tags?: string[];
    heroImage?: string;
    projectUrl?: string;
    children: ReactNode;
    prevProject?: { url: string; title: string };
    nextProject?: { url: string; title: string };
}

export default function ProjectLayout({
    title,
    description,
    date,
    tags,
    heroImage,
    projectUrl,
    children,
    nextProject
}: ProjectLayoutProps) {
    return (
        <article className="project-article">
            <div className="wrapper">
                <header className="project-hero">
                    <div className="project-meta">
                        {date && <time>{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</time>}
                        {projectUrl && (
                            <>
                                <span>•</span>
                                <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    View Live ↗
                                </a>
                            </>
                        )}
                    </div>

                    <h1>{title}</h1>

                    {tags && tags.length > 0 && (
                        <div className="project-tags">
                            {tags.map(tag => (
                                <span key={tag} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <p className="hero-description" style={{ maxWidth: '65ch', marginTop: '1.5rem', opacity: 0.8 }}>
                        {description}
                    </p>
                </header>
            </div>

            {heroImage && (
                <div className="project-media-full">
                    <img
                        src={heroImage}
                        alt={title}
                    />
                </div>
            )}

            <div className="wrapper">
                <div className="project-content-wrapper project-content">
                    {children}

                    {nextProject && (
                        <div className="project-next-nav">
                            <span style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                Next Project
                            </span>
                            <Link href={nextProject.url} className="project-next-link">
                                {nextProject.title} →
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}
