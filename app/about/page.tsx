import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '../../lib/constants';
import { OG_DEFAULT_IMAGE } from '@/lib/metadata';
import { profilePageSchema, toJsonLd } from '@/lib/schema';
import TrackedLink from '../components/TrackedLink';

export const metadata: Metadata = {
    title: 'About',
    description: 'Joost Helfers is a Berlin-based creative technologist building local generative AI technology: self-hosted pipelines, custom AI solutions, and campaign-grade AI visuals.',
    alternates: { canonical: '/about' },
    openGraph: {
        title: 'About | Joost Helfers',
        description: 'Berlin-based creative technologist building local generative AI technology: self-hosted pipelines, custom AI solutions, and campaign-grade AI visuals.',
        url: '/about',
        type: 'profile',
        images: [{ url: OG_DEFAULT_IMAGE, width: 1200, height: 630 }],
    },
};

export default function AboutPage() {
    return (
        <div className="about-page">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(toJsonLd(profilePageSchema())) }}
            />
            <div className="wrapper">
                <header className="about-page-header">
                    <span className="label">About</span>
                    <h1>Joost Helfers</h1>
                </header>

                <div className="about-page-content">
                    <p>
                        I&apos;m a creative technologist in Berlin. I build AI systems that run on hardware you control: self-hosted pipelines that turn models into production workflows, custom tools your team operates without me, and campaign-grade AI visuals produced on top of those same systems.
                    </p>

                    <p>
                        My background is in architecture and computational design (MSc, DesignMorphine). Before going independent I built digital twins and 3D platforms at INYO Mobility. Today most of my work is local generative AI technology. In practice that means pipelines engineered in ComfyUI and Python, purpose-built interfaces with Next.js and TypeScript, and prompt engineering at production scale. Where a hosted model genuinely earns its place, I use one; the infrastructure underneath stays on my clients&apos; side of the network line by default.
                    </p>

                    <p>
                        Along the way, work I produced or contributed to has shipped for brands including Lindt, Zeiss, Google, Bosch, CADFEM, and Souly. Some of that came through direct projects, some through the agencies and studios that held the contract. The <Link href="/#work">selected work</Link> section shows how I approach projects in more detail.
                    </p>

                    <h2>The art side</h2>
                    <p>
                        Not everything here is client work. I make AI film and visual experiments of my own, like the hybrid music video for Souly and Boondawg, and my roots are in computational design and parametric architecture. That side of the practice feeds the client side: most techniques I use on brand work started as an experiment without a brief.
                    </p>

                    <figure className="about-page-figure">
                        <img
                            src="/assets/imgs/proj_Souly-Boondawg-igotthisfeelling/Souly-Boondawg_igotthisfeeling-02.webp"
                            alt="Still from the Souly and Boondawg hybrid AI music video"
                            loading="lazy"
                        />
                        <figcaption>Souly &amp; Boondawg, I got this feeling. Hybrid AI music video.</figcaption>
                    </figure>

                    <h2>How I work with AI</h2>
                    <p>
                        AI is a tool. One part in a workflow, something you tweak and work with to get the most out of it. That applies to every element in the toolchain, from models and prompts to pipelines and agents. In practice it means:
                    </p>
                    <ol className="manifesto-list">
                        <li>
                            <strong>AI is a tool, not the work.</strong> A model on its own produces nothing a brand can use. The result comes from the workflow around it and the decisions made at every step.
                        </li>
                        <li>
                            <strong>Workflows beat prompts.</strong> A single prompt is a gamble. A pipeline with controlled inputs and repeatable settings is a production method. I build pipelines.
                        </li>
                        <li>
                            <strong>Tweak until it holds.</strong> Default output is a draft. I adjust samplers and control inputs and do real post-work until a result survives a client review.
                        </li>
                        <li>
                            <strong>Know the failure modes.</strong> Every model breaks somewhere: text in frame, product details, motion. Knowing where it breaks decides whether AI is the right tool for the job at all.
                        </li>
                        <li>
                            <strong>The model does not replace craft.</strong> Art direction and editing decide the final result. The model widens what one person can produce. It does not decide what is good.
                        </li>
                    </ol>

                    <h2>Built for the agentic web</h2>
                    <p>
                        This site is also an experiment in being readable by machines. Every project and post exists as structured data, the whole portfolio is queryable over a public <Link href="/agents">MCP server</Link>, and there&apos;s a dedicated mailbox for AI agents that want to get in touch on someone&apos;s behalf. For clients, agent surfaces like these are one part of the toolchain I work with, and I find it more honest to run them on my own site first.
                    </p>

                    <h2>Work with me</h2>
                    <p>
                        If you have a project that needs someone who understands both the creative and the technical side, I&apos;d like to hear about it.
                    </p>

                    <div className="about-page-actions">
                        <TrackedLink
                            href={`mailto:${SITE_CONFIG.email}`}
                            className="btn-primary"
                            eventName="contact_click"
                            eventParams={{ location: 'about_page' }}
                        >
                            Get in touch
                        </TrackedLink>
                        <TrackedLink
                            href="/assets/pdf/CV-Helfers.pdf"
                            className="btn-secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                            eventName="download_cv"
                        >
                            CV (PDF)
                        </TrackedLink>
                    </div>

                    <p className="about-page-links">
                        <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <span> · </span>
                        <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                        <span> · </span>
                        <a href={SITE_CONFIG.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
