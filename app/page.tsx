import ProjectsCarousel from './components/ProjectsCarousel';
import { SITE_CONFIG } from '../lib/constants';
import { PROJECTS, SERVICES } from '../lib/data';

import { getAllPosts } from '@/lib/blog';

export default async function Home() {
    const posts = getAllPosts();

    return (
        <div className="home-container">
            {/* Unified Hero Section / About */}
            <section className="hero-section" id="about">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="hero-intro">
                            <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-gray-500">Available for Freelance & Contract</span>
                            <h1 className="hero-title">Creative<br />Technologist</h1>
                            <p className="hero-subtitle">Building technical solutions and engaging visuals with emerging technology</p>
                        </div>

                        <div className="hero-description">
                            <p>Joost Helfers is a Creative Technologist working at the intersection of 3D, AI and emerging technology. His work is driven by a spatial approach, creating high-impact visuals and advanced technical workflows that help brands and designers communicate complex ideas. <br />
                                Combining his architectural and advanced 3D design background with startup experience, he builds innovative solutions that work.</p>
                        </div>

                        <div className="hero-actions">
                            <a href={`mailto:${SITE_CONFIG.email}`} className="cta-button">
                                <span className="cta-text">Let's start a Project 📧</span>
                            </a>
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
                            scale="0.2 0.2 0.2"
                            shadow-intensity="1"
                            src="/assets/3D/Joost_dance.glb"
                            alt="A 3D model of myself waving and greeting you">
                            {/* @ts-expect-error - model-viewer is a custom element */}
                        </model-viewer>
                    </div>
                </div>
            </section>


            {/* Portfolio Projects Section */}
            <section className="portfolio-section" id="work">
                <div className="portfolio-section-inner">
                    <h2>Selected Work</h2>
                    <ProjectsCarousel projects={PROJECTS} />
                </div>
            </section>



            {/* Services Section */}
            <section className="services-section" id="services">
                <div className="services-section-inner">
                    <h2>Expertise</h2>
                    <div className="services-grid">
                        {SERVICES.map((service) => (
                            <div className="service-card" key={service.id}>
                                <div className="service-image">
                                    <img src={service.image} alt={service.title} loading="lazy" />
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
                        ))}

                        <div className="service-card" id="contact">
                            <div className="service-content">
                                <h3>Contact</h3>
                                <p className="mb-4">Just as I feel like I don't fit in a box, sometimes ideas can be really unconventional as well. If you think you have an exciting idea and need someone to fuse design, technology and imagination: Let's find a solution together.</p>
                                <div className="service-cta">
                                    <a href={`mailto:${SITE_CONFIG.email}`} className="cta-button service-cta-button">
                                        <span className="cta-text">Start Collaboration 📧</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="blog-section bg-white" id="blog" style={{ padding: 'var(--space-xl) var(--space-md)' }}>
                <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
                    <div className="flex justify-between items-baseline mb-8">
                        <h2 className="text-2xl font-bold">Blog</h2>
                        <a href="/blog" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                            View all →
                        </a>
                    </div>
                    <div className="space-y-6">
                        {posts.slice(0, 3).map((post) => (
                            <a key={post.slug} href={`/blog/${post.slug}`} className="block group">
                                <article className="flex justify-between items-baseline pb-4">
                                    <h3 className="text-lg font-medium">
                                        {post.title}
                                    </h3>
                                    <time className="text-sm text-gray-500 whitespace-nowrap ml-4">
                                        {new Date(post.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </time>
                                </article>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
