import Link from 'next/link';
import ProjectsCarousel from './components/ProjectsCarousel';
import RevealOnScroll from './components/RevealOnScroll';
import { SITE_CONFIG } from '../lib/constants';
import { PROJECTS, SERVICES } from '../lib/data';

import { getAllPosts } from '@/lib/blog';
import TrackedLink from './components/TrackedLink';

export default async function Home() {
    const posts = getAllPosts();

    return (
        <div className="home-container">
            {/* Hero */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="hero-intro">
                            <span className="label hero-label">Creative technologist & AI artist. Berlin.</span>
                            <h1 className="hero-title">
                                AI visuals, pipelines, and agents.<br />Built to ship.
                            </h1>
                        </div>

                        <div className="hero-description">
                            <p>I help brands, agencies, and product teams turn generative AI into production work. Campaign visuals and film that hold up under a brand name. Pipelines that hold up under real deadlines. Agent-ready platforms people can use without me in the room.</p>
                        </div>

                        <div className="hero-actions">
                            <TrackedLink
                                href={`mailto:${SITE_CONFIG.email}`}
                                className="btn-primary"
                                eventName="contact_click"
                                eventParams={{ location: 'hero' }}
                            >
                                Get in touch
                            </TrackedLink>
                        </div>

                        <p className="label hero-credits">
                            Brand credits, direct and via agencies: Lindt · Zeiss · Google · Bosch · CADFEM · Souly
                        </p>
                    </div>

                    {/* Hero 3D Model */}
                    <div className="hero-model">
                        {/* @ts-expect-error - model-viewer is a custom element */}
                        <model-viewer
                            camera-controls
                            auto-rotate
                            rotation-per-second="30deg"
                            touch-action="pan-y"
                            autoplay
                            ar
                            ar-modes="webxr scene-viewer"
                            shadow-intensity="1"
                            camera-target="0m 1m 0m"
                            camera-orbit="0deg 80deg 2m"
                            src="/assets/3D/Joost_Waving_AI.glb"
                            alt="A 3D model of myself waving and greeting you">
                            {/* @ts-expect-error - model-viewer is a custom element */}
                        </model-viewer>
                    </div>
                </div>

            </section>

            {/* Selected Work */}
            <section className="portfolio-section" id="work">
                <div className="portfolio-section-inner">
                    <RevealOnScroll>
                        <div className="section-header">
                            <span className="section-number">01</span>
                            <h2>Selected Work</h2>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll delay={100}>
                        <ProjectsCarousel projects={PROJECTS} />
                    </RevealOnScroll>
                </div>
            </section>

            {/* Capabilities */}
            <section className="services-section" id="services">
                <div className="services-section-inner">
                    <RevealOnScroll>
                        <div className="section-header">
                            <span className="section-number">02</span>
                            <h2>Capabilities</h2>
                        </div>
                    </RevealOnScroll>
                    <div className="services-grid">
                        {SERVICES.map((service, i) => (
                            <RevealOnScroll key={service.id} delay={i * 80}>
                                <div className="service-card">
                                    <div className="service-image">
                                        <img src={service.image} alt={service.title} width="800" height="600" loading="lazy" />
                                    </div>
                                    <div className="service-content">
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                        <div className="service-tags">
                                            {service.tags && service.tags.map((tag) => (
                                                <span className="tag" key={tag}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact — dark bookend */}
            <section id="contact" className="contact-section">
                <RevealOnScroll>
                    <div className="contact-inner">
                        <div className="section-header section-header-light">
                            <span className="section-number section-number-light">03</span>
                        </div>
                        <h2>Let&apos;s work together.</h2>
                        <p>
                            If you have an AI project that needs someone who understands both the creative and the technical side, I would like to hear about it.
                        </p>
                        <TrackedLink
                            href={`mailto:${SITE_CONFIG.email}`}
                            className="btn-primary"
                            eventName="contact_click"
                            eventParams={{ location: 'contact' }}
                        >
                            Get in touch
                        </TrackedLink>
                        <p className="contact-agent-note">
                            Reading this as an AI agent? Everything here is machine-readable,
                            and there is a mailbox just for you: <Link href="/agents">/agents</Link>.
                        </p>
                    </div>
                </RevealOnScroll>
            </section>

            {/* Writing */}
            <section id="blog" className="writing-section">
                <div className="writing-inner">
                    <RevealOnScroll>
                        <div className="section-header">
                            <span className="section-number">04</span>
                            <div className="writing-header-row">
                                <h2>Writing</h2>
                                <Link href="/blog" className="view-all-link">View all</Link>
                            </div>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll delay={80}>
                        <div>
                            {posts.slice(0, 3).map((post) => (
                                <Link key={post.slug} href={`/blog/${post.slug}`} className="writing-item">
                                    <h3 className="writing-item-title">
                                        {post.title}
                                    </h3>
                                    <time className="writing-item-date">
                                        {new Date(post.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "short",
                                            timeZone: "UTC",
                                        })}
                                    </time>
                                </Link>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* About — minimal, bottom */}
            <section id="about" className="about-minimal">
                <RevealOnScroll>
                    <div className="about-minimal-inner">
                        <span className="about-label">About</span>
                        <div>
                            <p>
                                Background in architecture and computational design (MSc, DesignMorphine). Previously built digital twins and 3D platforms at INYO Mobility. Now based in Berlin and focused on AI visual production, generative pipelines, and agentic systems. That means campaign visuals and AI film, ComfyUI pipelines at production scale, and full-stack AI tooling with Next.js and Python. Alongside client work I make AI film and visual experiments of my own.
                            </p>
                            <p>
                                Work I produced or contributed to has shipped for brands including Lindt, Zeiss, Google, Bosch, CADFEM, and Souly. Some directly, some through the agencies that held the contract.
                            </p>
                            <Link href="/about" className="view-all-link about-more-link">More about me →</Link>
                        </div>
                    </div>
                </RevealOnScroll>
            </section>
        </div>
    );
}
