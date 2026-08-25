import Link from 'next/link';
import Script from 'next/script';
import ProjectIndex from './components/ProjectIndex';
import RevealOnScroll from './components/RevealOnScroll';
import { SITE_CONFIG } from '../lib/constants';
import { PROJECTS, SERVICES } from '../lib/data';
import { faqPageSchema, toJsonLd } from '../lib/schema';

import { getAllPosts } from '@/lib/blog';
import TrackedLink from './components/TrackedLink';

const HOME_FAQS = [
    {
        question: 'What is a local generative AI pipeline?',
        answer:
            'A system that runs AI models on hardware you control instead of a hosted API. Assets stay in-house, there is no per-request meter running, and a workflow you validated keeps producing the same output months later. That covers generative image and video pipelines as well as self-hosted language models for drafting, extraction, and agents.',
    },
    {
        question: 'Why run generative AI locally instead of through a cloud API?',
        answer:
            'Three practical reasons: confidential assets never leave your network, costs stay flat no matter how much you generate, and model behavior does not change under you mid-project. For NDA-heavy brand work this is often the difference between usable and not.',
    },
    {
        question: 'Are local LLM systems part of the offer?',
        answer:
            'Yes. Self-hosted language models cover internal assistants, document extraction, classification, and agent workloads, served from your own hardware so data never leaves the premises. The setup behind this very portfolio runs locally every day.',
    },
    {
        question: 'What about custom tools around the pipelines?',
        answer:
            'Half the work, usually. Purpose-built tools are where pipelines become usable: web apps, internal tooling, and interfaces that connect AI models to how a team actually works. Recent examples include a live prompt enhancement engine and browser-based segmentation tooling.',
    },
    {
        question: 'Can AI visuals hold up under real brand requirements?',
        answer:
            'When they are produced through controlled pipelines, yes. Product consistency across shots, correct text in frame, and art direction that survives client review come from workflow engineering, not one-off prompting. Work has shipped for brands including Lindt, Zeiss, Google, Bosch, CADFEM, and Souly.',
    },
    {
        question: 'Is the work Berlin-based or remote?',
        answer:
            'Remote anywhere in the world. Home base is Berlin, Germany; on-site visits happen wherever the project is, with travel covered by the client.',
    },
];

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
                                Local technology<br />for generative AI.
                            </h1>
                        </div>

                        <div className="hero-description">
                            <p>For teams that need generative AI working in production, not just in demos: self-hosted pipelines, local LLM systems, and custom tools that keep running after handover. All of it on your own hardware, under real deadlines.</p>
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
                            <Link href="/packages" className="btn-secondary hero-secondary-link">
                                See packages
                            </Link>
                        </div>

                        <p className="label hero-credits">
                            Brand credits, direct and via agencies: Lindt · Zeiss · Google · Bosch · CADFEM · Souly
                        </p>
                    </div>

                    {/* Hero 3D Model — model-viewer loads only on this page, after idle */}
                    <Script
                        type="module"
                        src="https://unpkg.com/@google/model-viewer@4.1.0/dist/model-viewer.min.js"
                        strategy="lazyOnload"
                    />
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
                        <ProjectIndex projects={PROJECTS} />
                    </RevealOnScroll>
                </div>
            </section>

            {/* Capabilities */}
            <section className="services-section" id="services">
                <div className="services-section-inner">
                    <RevealOnScroll>
                        <div className="section-header">
                            <span className="section-number">02</span>
                            <div className="writing-header-row">
                                <h2>Capabilities</h2>
                                <Link href="/pipelines" className="view-all-link">In detail</Link>
                            </div>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll delay={100}>
                        <div className="capability-index">
                            {SERVICES.map((service, i) => (
                                <Link
                                    key={service.id}
                                    href={`/pipelines#${service.id}`}
                                    className="capability-row"
                                >
                                    <span className="capability-row-number">{String(i + 1).padStart(2, '0')}</span>
                                    <div className="capability-row-body">
                                        <h3 className="capability-row-title">{service.title}</h3>
                                        <p className="capability-row-desc">{service.description}</p>
                                        <div className="capability-row-tags">
                                            {service.tags?.slice(0, 4).map((tag) => (
                                                <span className="tag" key={tag}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <span className="capability-row-arrow" aria-hidden="true">→</span>
                                </Link>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* FAQ — answer-engine friendly */}
            <section className="faq-section" id="faq">
                <div className="faq-inner">
                    <RevealOnScroll>
                        <div className="section-header">
                            <span className="section-number">03</span>
                            <h2>Questions</h2>
                        </div>
                    </RevealOnScroll>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(toJsonLd(faqPageSchema(HOME_FAQS))) }}
                    />
                    <RevealOnScroll delay={80}>
                        <div className="faq-list">
                            {HOME_FAQS.map((faq) => (
                                <details className="faq-item" key={faq.question}>
                                    <summary className="faq-question">{faq.question}</summary>
                                    <p className="faq-answer">{faq.answer}</p>
                                </details>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
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

            {/* About — minimal */}
            <section id="about" className="about-minimal">
                <RevealOnScroll>
                    <div className="about-minimal-inner">
                        <span className="about-label">About</span>
                        <div>
                            <p>
                                Background in architecture and computational design (MSc, DesignMorphine). Previously built digital twins and 3D platforms at INYO Mobility. Now based in Berlin and focused on local generative AI technology: self-hosted pipelines, custom-built AI solutions, and AI visual production. In practice that means ComfyUI pipelines that run on client hardware, local LLM systems, full-stack tooling with Next.js and Python, and campaign-grade AI visuals and film. Alongside client work there is a steady output of independent AI film and visual experiments.
                            </p>
                            <p>
                                Work produced and contributed to has shipped for brands including Lindt, Zeiss, Google, Bosch, CADFEM, and Souly. Some directly, some through the agencies that held the contract.
                            </p>
                            <Link href="/about" className="view-all-link about-more-link">More about me →</Link>
                        </div>
                    </div>
                </RevealOnScroll>
            </section>

            {/* Contact — light panel bookend, last stop */}
            <section id="contact" className="contact-section">
                <RevealOnScroll>
                    <div className="contact-inner">
                        <div className="section-header section-header-light">
                            <span className="section-number section-number-light">05</span>
                        </div>
                        <h2>Let&apos;s build yours.</h2>
                        <p>
                            Generative AI that runs on your own terms starts with a conversation about the project.
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
                            and there&apos;s a mailbox just for you: <Link href="/agents">/agents</Link>.
                        </p>
                    </div>
                </RevealOnScroll>
            </section>
        </div>
    );
}
