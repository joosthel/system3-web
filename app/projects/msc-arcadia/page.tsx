import type { Metadata } from 'next';
import ProjectLayout from '../../components/ProjectLayout';
import { projectMetadata } from '@/lib/metadata';

export const metadata: Metadata = projectMetadata('msc-arcadia');

export default function MscArcadiaPage() {
    return (
        <ProjectLayout
            slug="msc-arcadia"
            title="DesignMorphine MSc. Project Arcadia."
            description="My final project for the MSc in Computational and Advanced Design. A deep exploration of parametric architecture."
            date="2022-09-01"
            heroImage="/assets/imgs/proj_MSc-CAD/MSc-CAD_04.webp"
            nextProject={{
                title: "T-Cell AG. Explainer Videos.",
                url: "/projects/t-cell"
            }}
        >
            <div className="space-y-20">
                <section>
                    <h2>Project Overview</h2>
                    <p>
                        Project Arcadia is the culmination of my Master&apos;s degree in Computational and Advanced Design. It explores the intersection of parametric design, environmental responsiveness, and architectural form-finding through computational methods.
                    </p>
                    <div className="mt-8 overflow-hidden">
                        <img src="/assets/imgs/proj_MSc-CAD/MSc-CAD_01.webp" alt="Main project visualization" className="w-full" />
                        <p className="text-sm text-center text-gray-500 italic mt-2">Main project visualization showcasing the parametric structure</p>
                    </div>
                </section>

                <section>
                    <h2>Design Process</h2>
                    <p className="mb-8">
                        The project began with extensive research into responsive architectural systems and how computational tools can be used to create adaptive structures that respond to environmental conditions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <img src="/assets/imgs/proj_MSc-CAD/MSc-CAD_02.webp" alt="Initial research" className="w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Initial research and conceptual framework development</p>
                        </div>
                        <div>
                            <img src="/assets/imgs/proj_MSc-CAD/MSc-CAD_03.webp" alt="Computational methodology" className="w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Computational methodology and parameter exploration</p>
                        </div>
                    </div>

                    <h3>Computational Framework</h3>
                    <p className="mb-6">
                        The design framework was built using Grasshopper and custom Python components, allowing for real-time parameter adjustments and form optimization based on environmental data inputs.
                    </p>
                    <img src="/assets/imgs/proj_MSc-CAD/MSc-CAD_04.webp" alt="Computational Framework" className="w-full" />
                    <p className="text-sm text-center text-gray-500 italic mt-2">Computational design framework and parameter relationships</p>
                </section>

                <section>
                    <h2>Development Phases</h2>
                    <p className="mb-8">
                        The project evolved through multiple iterations, each refining the relationship between form, function, and environmental responsiveness.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div>
                            <img src="/assets/imgs/proj_MSc-CAD/MSc-CAD_05.webp" alt="Development Phase 1" className="w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">First iteration exploring basic parametric relationships</p>
                        </div>
                        <div>
                            <img src="/assets/imgs/proj_MSc-CAD/MSc-CAD_06.webp" alt="Development Phase 2" className="w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Refinement of environmental response mechanisms</p>
                        </div>
                        <div>
                            <img src="/assets/imgs/proj_MSc-CAD/MSc-CAD_07.webp" alt="Development Phase 3" className="w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Advanced optimization and performance testing</p>
                        </div>
                    </div>

                    <div className="aspect-video w-full overflow-hidden mb-4">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/c0c-HG-MEYA"
                            title="Project Development Process"
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
                                    "name": "Project Development Process",
                                    "description": "Development process and iterative design exploration",
                                    "thumbnailUrl": [
                                        "https://joosthelfers.com/assets/imgs/proj_MSc-CAD/MSc-CAD_07.webp"
                                    ],
                                    "uploadDate": "2023-05-01T08:00:00+08:00",
                                    "embedUrl": "https://www.youtube.com/embed/c0c-HG-MEYA"
                                })
                            }}
                        />
                    </div>
                    <p className="text-sm text-center text-gray-500 italic">Development process and iterative design exploration</p>
                </section>

                <section>
                    <h2>Final Design</h2>
                    <p className="mb-8">
                        The final design integrates computational design principles with architectural sensibility. The structure is both formally compelling and environmentally responsive.
                    </p>

                    <div className="mb-12">
                        <img src="/assets/imgs/proj_MSc-CAD/MSc-CAD_08.webp" alt="Final Design" className="w-full" />
                        <p className="text-sm text-center text-gray-500 italic mt-2">Final design render showing the completed parametric structure</p>
                    </div>

                    <h3>Project Video</h3>
                    <div className="aspect-video w-full overflow-hidden mb-4">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/1gLwwzydQ-c"
                            title="DesignMorphine MSc Project"
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
                                    "name": "DesignMorphine MSc Project",
                                    "description": "Final project presentation showcasing the complete design process and outcomes",
                                    "thumbnailUrl": [
                                        "https://joosthelfers.com/assets/imgs/proj_MSc-CAD/MSc-CAD_08.webp"
                                    ],
                                    "uploadDate": "2023-05-01T08:00:00+08:00",
                                    "embedUrl": "https://www.youtube.com/embed/1gLwwzydQ-c"
                                })
                            }}
                        />
                    </div>
                    <p className="text-sm text-center text-gray-500 italic">Final project presentation showcasing the complete design process and outcomes</p>
                </section>

                <section className="project-highlight">
                    <h2>Technical Implementation</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="mb-1">Parametric Modeling</h3>
                            <p className="text-gray-400">Grasshopper for visual programming</p>
                        </div>
                        <div>
                            <h3 className="mb-1">Environmental Analysis</h3>
                            <p className="text-gray-400">Climate data integration for responsive behavior</p>
                        </div>
                        <div>
                            <h3 className="mb-1">Form Optimization</h3>
                            <p className="text-gray-400">Python scripting for performance-based design</p>
                        </div>
                        <div>
                            <h3 className="mb-1">Visualization</h3>
                            <p className="text-gray-400">High-quality rendering pipeline for presentation</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>Key Learnings</h2>
                    <p>
                        This project taught me how to balance computational complexity with design intent. Parametric tools are not only efficient. They are a creative medium for architectural exploration.
                    </p>
                </section>
            </div>
        </ProjectLayout>
    );
}
