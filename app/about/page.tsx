import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '../../lib/constants';
import { OG_DEFAULT_IMAGE } from '@/lib/metadata';
import { profilePageSchema, toJsonLd } from '@/lib/schema';
import TrackedLink from '../components/TrackedLink';

export const metadata: Metadata = {
    title: 'About',
    description: 'Joost Helfers is a Berlin-based creative technologist focused on AI visual production, generative pipelines, and platforms teams can run themselves.',
    alternates: { canonical: '/about' },
    openGraph: {
        title: 'About | Joost Helfers',
        description: 'Berlin-based creative technologist focused on AI visual production, generative pipelines, and platforms teams can run themselves.',
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
                        I am a creative technologist in Berlin. I help agencies, studios, and product teams move from AI experiments to production work. Campaign visuals that hold up under a brand name, generative pipelines that hold up under real deadlines, and platforms other people can use without me in the room.
                    </p>

                    <p>
                        My background is in architecture and computational design (MSc, DesignMorphine). Before going independent I built digital twins and 3D platforms at INYO Mobility. Today most of my work is AI visual production and technical AI systems. In practice that means generative pipelines in ComfyUI, prompt engineering at production scale, and full-stack AI tooling with Next.js, Python, and Three.js.
                    </p>

                    <p>
                        Along the way, work I produced or contributed to has shipped for brands including Lindt, Zeiss, Google, Bosch, CADFEM, and Souly. Some of that came through direct projects, some through the agencies and studios that held the contract. The <Link href="/#work">selected work</Link> section shows how I approach projects in more detail.
                    </p>

                    <h2>XD Network</h2>
                    <p>
                        Outside of client work I am a core member of <a href="https://xdnet.work/" target="_blank" rel="noopener noreferrer">XD Network</a>, a Berlin collective running community-led events around new technology and culture. That includes SOIREE XD, an ongoing talk series on early signs of disruption in business, design, art, and culture, plus formats like Science of Rave and Demo Days.
                    </p>

                    <figure className="about-page-figure">
                        <img
                            src="/assets/imgs/proj_soireexd/SoireeXD-thumbnail.webp"
                            alt="SOIREE XD, an XD Network event series in Berlin"
                            loading="lazy"
                        />
                        <figcaption>SOIREE XD, an XD Network event series</figcaption>
                    </figure>

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
