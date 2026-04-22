import ProjectLayout from '../../components/ProjectLayout';

export default function SoulyBoondawgPage() {
    return (
        <ProjectLayout
            title="Souly & Boondawg. I got this feeling."
            description="A hybrid AI music video that turns greenscreen footage into a finished visual through Stable Diffusion and VFX compositing."
            date="2025-09-10"
            tags={["AI Video Generation", "Video-to-Video", "ComfyUI", "Visual Storytelling"]}
            heroImage="/assets/imgs/proj_Souly-Boondawg-igotthisfeelling/Souly-Boondawg_igotthisfeeling-02.webp"
            projectUrl="https://youtu.be/j66rlYZQVeM?si=XuckWFc-6S6IufQI"
            nextProject={{
                title: "INYO Mobility. Digital Twin Platform.",
                url: "/projects/inyo-digital-twin"
            }}
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-3xl font-bold mb-6 text-white">Project Overview</h2>
                    <p>
                        I contributed to this hybrid production as an AI artist in collaboration with <a href="https://yyyyyyy.studio/" target="_blank" rel="noopener noreferrer">yyyyyyy.studio</a>. The piece blends traditional greenscreen footage with generative AI environments. Using video-to-video models, we moved the artists, Souly and Boondawg, into surreal, digitally constructed worlds and added a distinct layer of visual narrative on top of the performance.
                    </p>
                </section>

                <section>
                    <div className="aspect-video w-full rounded-xl overflow-hidden bg-gray-900 border border-white/10">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/j66rlYZQVeM"
                            title="Souly & Boondawg. I got this feeling."
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify({
                                    "@context": "https://schema.org",
                                    "@type": "VideoObject",
                                    "name": "Souly & Boondawg. I got this feeling.",
                                    "description": "A hybrid AI music video production transforming greenscreen footage into compelling visuals.",
                                    "thumbnailUrl": [
                                        "https://joosthelfers.com/assets/imgs/proj_Souly-Boondawg-igotthisfeelling/Souly-Boondawg_igotthisfeeling-02.webp"
                                    ],
                                    "uploadDate": "2023-11-20T08:00:00+08:00",
                                    "embedUrl": "https://www.youtube.com/embed/j66rlYZQVeM"
                                })
                            }}
                        />
                    </div>
                    <div className="mt-4 text-center">
                        <a href="https://www.youtube.com/watch?v=j66rlYZQVeM" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold border-b border-white hover:text-gray-300 transition-colors">
                            Watch on YouTube ↗
                        </a>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <img src="/assets/imgs/proj_Souly-Boondawg-igotthisfeelling/Souly-Boondawg_igotthisfeeling-02.webp" alt="Scene from the music video" loading="lazy" className="w-full h-auto rounded-xl" />
                    <img src="/assets/imgs/proj_Souly-Boondawg-igotthisfeelling/Souly-Boondawg_igotthisfeeling-03.webp" alt="Scene from the music video" loading="lazy" className="w-full h-auto rounded-xl" />
                    <img src="/assets/imgs/proj_Souly-Boondawg-igotthisfeelling/Souly-Boondawg_igotthisfeeling-04.webp" alt="Scene from the music video" loading="lazy" className="w-full h-auto rounded-xl" />
                    <img src="/assets/imgs/proj_Souly-Boondawg-igotthisfeelling/Souly-Boondawg_igotthisfeeling-05.webp" alt="Scene from the music video" loading="lazy" className="w-full h-auto rounded-xl" />
                    <img src="/assets/imgs/proj_Souly-Boondawg-igotthisfeelling/Souly-Boondawg_igotthisfeeling-06.webp" alt="Scene from the music video" loading="lazy" className="w-full h-auto rounded-xl" />
                    <img src="/assets/imgs/proj_Souly-Boondawg-igotthisfeelling/Souly-Boondawg_igotthisfeeling-07.webp" alt="Scene from the music video" loading="lazy" className="w-full h-auto rounded-xl" />
                    <img src="/assets/imgs/proj_Souly-Boondawg-igotthisfeelling/Souly-Boondawg_igotthisfeeling-08.webp" alt="Scene from the music video" loading="lazy" className="w-full h-auto rounded-xl" />
                </section>
            </div>
        </ProjectLayout>
    );
}
