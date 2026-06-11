import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '../../lib/constants';
import { OG_DEFAULT_IMAGE } from '@/lib/metadata';
import { profilePageSchema, toJsonLd } from '@/lib/schema';
import TrackedLink from '../components/TrackedLink';

export const metadata: Metadata = {
    title: 'About',
    description: 'Joost Helfers is a Berlin-based creative technologist and AI artist focused on AI visuals and film, generative pipelines, and agentic systems.',
    alternates: { canonical: '/about' },
    openGraph: {
        title: 'About | Joost Helfers',
        description: 'Berlin-based creative technologist and AI artist focused on AI visuals and film, generative pipelines, and agentic systems.',
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
                        I am a creative technologist and AI artist in Berlin. I help brands, agencies, studios, and product teams turn generative AI into production work. Campaign visuals and film that hold up under a brand name, generative pipelines that hold up under real deadlines, and platforms other people can use without me in the room.
                    </p>

                    <p>
                        My background is in architecture and computational design (MSc, DesignMorphine). Before going independent I built digital twins and 3D platforms at INYO Mobility. Today most of my work is AI visual production and AI systems. In practice that means generative pipelines in ComfyUI, prompt engineering at production scale, and full-stack AI tooling with Next.js and Python.
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

                    <h2>Built for the agentic web</h2>
                    <p>
                        This site is also an experiment in being readable by machines. Every project and post exists as structured data, the whole portfolio is queryable over a public <Link href="/agents">MCP server</Link>, and there is a dedicated mailbox for AI agents that want to get in touch on someone&apos;s behalf. I build the same kind of agent-readable presence for clients, and I find it more honest to run it on my own site first.
                    </p>

                    <h2>Work with me</h2>
                    <p>
                        If you have a project that needs someone who understands both the creative and the technical side, I would like to hear about it.
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
