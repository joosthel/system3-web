import ProjectsCarousel from './components/ProjectsCarousel';
import { SITE_CONFIG } from '../lib/constants';

// Placeholder data - ideally this comes from a CMS or markdown files
const PROJECTS = [
    // ... (keep projects array as is, just need the import top)
    {
        id: 'souly-boondawg',
        title: 'Souly & Boondawg - I got this feeling',
        description: 'A hybrid AI music video production transforming greenscreen footage into compelling visuals.',
        image: '/assets/imgs/proj_Souly-Boondawg-igotthisfeelling/Souly-Boondawg_igotthisfeeling-02.webp',
        url: '/projects/souly-boondawg'
    },
    {
        id: 'inyo-digital-twin',
        title: 'INYO Mobility - Digital Twin Platform',
        description: 'Interactive 3D visualization solutions for vehicle design optimization | Full Stack development',
        image: '/assets/imgs/proj_INYO-Digital-Twin/Screenshot_3D-View.webp',
        url: '/projects/inyo-digital-twin'
    },
    {
        id: 'inyo-viz',
        title: 'INYO Mobility - Various Visualizations',
        description: "3D visualizations and digital marketing materials for INYO Mobility's electric vehicle ecosystem",
        image: '/assets/imgs/proj_INYO-Viz/INYO-Viz_06.webp',
        url: '/projects/inyo-viz'
    },
    {
        id: 'msc-arcadia',
        title: 'DesignMorphine MSc - Project Arcadia',
        description: "Final Project for my M. Sc. in Computational and Advanced Design exploring parametric architecture.",
        image: '/assets/imgs/proj_MSc-CAD/MSc-CAD_04.webp',
        url: '/projects/msc-arcadia'
    },
    {
        id: 't-cell',
        title: 'T-Cell AG - Explainer Videos',
        description: "Series of videos for the T-Cell AG, explaining the hydrogen-fuel-cell technology.",
        image: '/assets/imgs/proj_T-Cell/T-Cell_Hero.webp',
        url: '/projects/t-cell'
    }
];

export default function Home() {
    return (
        <div className="home-container">
            {/* Unified Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="hero-intro">
                            <h1 className="hero-title">Creative Technologist</h1>
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
            <section className="portfolio-section">
                <div className="portfolio-section-inner">
                    <h2>Past projects (WIP)</h2>
                    <ProjectsCarousel projects={PROJECTS} />
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section">
                <div className="services-section-inner">
                    <h2>Services</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-image">
                                <img src="/assets/imgs/services/service_cgi.webp" alt="High-Impact Brand & Media Assets" loading="lazy" />
                            </div>
                            <div className="service-content">
                                <h3>High-Impact Brand & Media Assets</h3>
                                <p>I create cinematic, high-fidelity visuals that translate abstract ideas and complex topics into clear, engaging imagery. With roots in architecture and 3D design, my imagery balances precision, clarity and emotions.</p>
                                <div className="service-tags">
                                    <span className="tag">3D Visualization</span>
                                    <span className="tag">Renderings</span>
                                    <span className="tag">Motion Graphics</span>
                                    <span className="tag">Blender</span>
                                    <span className="tag">Houdini</span>
                                    <span className="tag">Product Animation</span>
                                    <span className="tag">Brand Imagery</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-card">
                            <div className="service-image">
                                <img src="/assets/imgs/services/service_truck.webp" alt="Custom Automation Pipelines" loading="lazy" />
                            </div>
                            <div className="service-content">
                                <h3>Custom Automation Pipelines</h3>
                                <p>I build custom, scalable pipelines that automate or enhance design and content creation, enabling productive outcomes and faster turnaround times. These workflows enable rapid iteration, customization and push the boundaries on what's possible with technology.</p>
                                <div className="service-tags">
                                    <span className="tag">ComfyUI</span>
                                    <span className="tag">Generative Workflows</span>
                                    <span className="tag">AI Integration</span>
                                    <span className="tag">Python</span>
                                    <span className="tag">Custom LoRAs</span>
                                    <span className="tag">Cloud Integration</span>
                                    <span className="tag">R&D</span>
                                    <span className="tag">Agentic Workflows</span>
                                    <span className="tag">AI Strategy</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-card">
                            <div className="service-image">
                                <img src="/assets/imgs/services/service_digital-twin.webp" alt="Real-Time & Digital Twin Platforms" loading="lazy" />
                            </div>
                            <div className="service-content">
                                <h3>Real-Time & Digital Twin Platforms</h3>
                                <p>I design functional environments, where data and space converge. From digital twins to interactive configurators, these platforms transform complex systems into intuitive experiences for engineering, sales and storytelling.</p>
                                <div className="service-tags">
                                    <span className="tag">Digital Twin Development</span>
                                    <span className="tag">Unreal Engine</span>
                                    <span className="tag">Three.js</span>
                                    <span className="tag">React / Next.js</span>
                                    <span className="tag">Data Integration</span>
                                    <span className="tag">Plattform Development</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-card">
                            <div className="service-content">
                                <h3>The Bespoke Way</h3>
                                <p>Just as I feel like I don't fit in a box, sometimes ideas can be really unconventional as well. If you think you have an exciting idea and need someone to fuse design, technology and imagination: Let's find a solution together.</p>
                                <div className="service-cta">
                                    <a href={`mailto:${SITE_CONFIG.email}`} className="cta-button service-cta-button">
                                        <span className="cta-text">Let's Connect 📧</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
