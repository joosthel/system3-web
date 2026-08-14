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
                    <h2>The project</h2>
                    <p>
                        Project Arcadia is my final project for the MSc in Computational and Advanced Design. It explores parametric architecture that responds to its environment, with the form found through computational methods rather than drawn by hand.
                    </p>
                    <div className="mt-8 overflow-hidden">
                        <img src="/assets/imgs/proj_MSc-CAD/MSc-CAD_01.webp" alt="Main project visualization" className="w-full" />
                        <p className="text-sm text-center text-gray-500 italic mt-2">The parametric structure</p>
                    </div>
                </section>

                <section>
                    <h2>Process</h2>
                    <p className="mb-8">
                        It started with research into responsive architectural systems: structures that adapt to the conditions around them, and the computational tools that make that possible.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <img src="/assets/imgs/proj_MSc-CAD/MSc-CAD_02.webp" alt="Initial research" className="w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Early research and concept work</p>
                        </div>
                        <div>
                            <img src="/assets/imgs/proj_MSc-CAD/MSc-CAD_03.webp" alt="Computational methodology" className="w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Exploring the parameter space</p>
                        </div>
                    </div>

                    <h3>The framework</h3>
                    <p className="mb-6">
                        I built the framework in Grasshopper with custom Python components. Parameters adjust in real time, and the form optimises itself against environmental data.
                    </p>
                    <img src="/assets/imgs/proj_MSc-CAD/MSc-CAD_04.webp" alt="Computational Framework" className="w-full" />
                    <p className="text-sm text-center text-gray-500 italic mt-2">The framework and its parameter relationships</p>
                </section>

                <section>
                    <h2>Iterations</h2>
                    <p className="mb-8">
                        The design went through several rounds, each one refining how form and environmental response relate to each other.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div>
                            <img src="/assets/imgs/proj_MSc-CAD/MSc-CAD_05.webp" alt="Development Phase 1" className="w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">First iteration, basic parametric relationships</p>
                        </div>
                        <div>
                            <img src="/assets/imgs/proj_MSc-CAD/MSc-CAD_06.webp" alt="Development Phase 2" className="w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Refining the environmental response</p>
                        </div>
                        <div>
                            <img src="/assets/imgs/proj_MSc-CAD/MSc-CAD_07.webp" alt="Development Phase 3" className="w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Optimisation and performance testing</p>
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
                    <h2>The final design</h2>
                    <p className="mb-8">
                        The final structure holds up as architecture, not just as a computational exercise. And it stays responsive to the environment it sits in.
                    </p>

                    <div className="mb-12">
                        <img src="/assets/imgs/proj_MSc-CAD/MSc-CAD_08.webp" alt="Final Design" className="w-full" />
                        <p className="text-sm text-center text-gray-500 italic mt-2">Render of the final structure</p>
                    </div>

                    <h3>Project video</h3>
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
                                    "description": "The final project presentation, covering the full design process",
                                    "thumbnailUrl": [
                                        "https://joosthelfers.com/assets/imgs/proj_MSc-CAD/MSc-CAD_08.webp"
                                    ],
                                    "uploadDate": "2023-05-01T08:00:00+08:00",
                                    "embedUrl": "https://www.youtube.com/embed/1gLwwzydQ-c"
                                })
                            }}
                        />
                    </div>
                    <p className="text-sm text-center text-gray-500 italic">The final project presentation, covering the full design process</p>
                </section>

                <section className="project-highlight">
                    <h2>The toolset</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="mb-1">Parametric modeling</h3>
                            <p className="text-gray-400">Grasshopper for visual programming</p>
                        </div>
                        <div>
                            <h3 className="mb-1">Environmental analysis</h3>
                            <p className="text-gray-400">Climate data feeding the responsive behaviour</p>
                        </div>
                        <div>
                            <h3 className="mb-1">Form optimisation</h3>
                            <p className="text-gray-400">Python scripting for performance-based design</p>
                        </div>
                        <div>
                            <h3 className="mb-1">Visualisation</h3>
                            <p className="text-gray-400">Rendering pipeline for the final presentation</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>What it taught me</h2>
                    <p>
                        How to balance computational complexity with design intent. And that parametric tools aren&apos;t just efficient, they&apos;re a creative medium in their own right.
                    </p>
                </section>
            </div>
        </ProjectLayout>
    );
}
