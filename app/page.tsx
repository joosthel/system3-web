import ProjectsCarousel from './components/ProjectsCarousel';
import { SITE_CONFIG } from '../lib/constants';
import { PROJECTS, SERVICES } from '../lib/data';

import { getAllPosts } from '@/lib/blog';
import TrackedLink from './components/TrackedLink';

export default async function Home() {
    const posts = getAllPosts();

    return (
        <div className="home-container">
            {/* Unified Hero Section / About */}
            <section className="hero-section" id="about">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="hero-intro">
                            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-[#555]">Creative Technologist</span>
                            <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: '900', letterSpacing: '-0.05em', lineHeight: '1', marginBottom: '1.5rem' }}>
                                Engineering AI Workflows <br />& High-End Visuals
                            </h1>
                        </div>

                        <div className="hero-description" style={{ maxWidth: '600px', fontSize: '1.2rem', marginBottom: '2.5rem', color: '#444' }}>
                            <p>I bridge the gap between creative vision and emerging technology. Whether creating high-impact AI visuals for campaigns or engineering scalable backend automation pipelines, I bring a robust, structured approach to complex projects.</p>
                        </div>

                        <div className="hero-actions">
                            <TrackedLink
                                href={`mailto:${SITE_CONFIG.email}`}
                                className="cta-button"
                                style={{ background: '#0a0a0a', color: '#fff', border: '1px solid #0a0a0a', padding: '1rem 2rem', letterSpacing: '0.05em' }}
                                eventName="contact_click"
                                eventParams={{ location: 'hero' }}
                            >
                                <span className="cta-text">Send me a message 📧</span>
                            </TrackedLink>
                        </div>
                    </div>

                    {/* Hero 3D Model */}
                    <div className="hero-model" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                            src="/assets/3D/Joost_Waving_AI.glb"
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
                                    <TrackedLink
                                        href={`mailto:${SITE_CONFIG.email}`}
                                        className="cta-button service-cta-button"
                                        eventName="contact_click"
                                        eventParams={{ location: 'services' }}
                                    >
                                        <span className="cta-text">Start Collaboration 📧</span>
                                    </TrackedLink>
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
