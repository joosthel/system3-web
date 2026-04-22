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
                            <span className="label hero-label">Creative technologist. Berlin.</span>
                            <h1 className="hero-title">
                                I build AI systems<br />that actually ship.
                            </h1>
                        </div>

                        <div className="hero-description">
                            <p>I help agencies, studios, and product teams move from interesting AI experiments to production work. Campaign visuals that hold up under a brand name. Pipelines that hold up under real deadlines. Platforms other people can use without me in the room.</p>
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
                                <a href="/blog" className="view-all-link">View all</a>
                            </div>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll delay={80}>
                        <div>
                            {posts.slice(0, 3).map((post) => (
                                <a key={post.slug} href={`/blog/${post.slug}`} className="writing-item">
                                    <h3 className="writing-item-title">
                                        {post.title}
                                    </h3>
                                    <time className="writing-item-date">
                                        {new Date(post.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "short",
                                        })}
                                    </time>
                                </a>
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
                        <p>
                            Background in architecture and computational design (MSc, DesignMorphine). Previously built digital twins and 3D platforms at INYO Mobility. Now focused on AI visual production and technical AI solutions. That means generative pipelines in ComfyUI, prompt engineering at production scale, and full-stack AI tooling with Next.js, Python, and Three.js. Based in Berlin.
                        </p>
                    </div>
                </RevealOnScroll>
            </section>
        </div>
    );
}
