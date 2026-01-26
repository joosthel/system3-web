import ProjectLayout from '../../components/ProjectLayout';

export default function MscArcadiaPage() {
    return (
        <ProjectLayout
            title="DesignMorphine MSc - Project Arcadia"
            description="Final Project for my M. Sc. in Computational and Advanced Design"
            date="2023-05-01"
            tags={["Grasshopper", "Rhino", "Python", "Computational Design", "Parametric Architecture"]}
            heroImage="/assets/imgs/proj_MSc-CAD/MSc-CAD_04.webp"
            nextProject={{
                title: "T-Cell AG - Explainer Videos",
                url: "/projects/t-cell"
            }}
        >
            <div className="space-y-20">
                <section>
                    <h2 className="text-3xl font-bold mb-6 text-white">Project Overview</h2>
                    <p>
                        Project Arcadia represents the culmination of my Master's degree in Computational and Advanced Design. This project explores the intersection of parametric design, environmental responsiveness, and architectural form-finding through computational methods.
                    </p>
                    <div className="mt-8 rounded-xl overflow-hidden">
                        <img src="/assets/imgs/proj_MSc-CAD/MSc-CAD_01.webp" alt="Main project visualization" className="w-full" />
                        <p className="text-sm text-center text-gray-500 italic mt-2">Main project visualization showcasing the parametric structure</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6 text-white">Design Process</h2>
                    <p className="mb-8">
                        The project began with extensive research into responsive architectural systems and how computational tools can be used to create adaptive structures that respond to environmental conditions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <img src="/assets/imgs/proj_MSc-CAD/MSc-CAD_02.webp" alt="Initial research" className="rounded-xl w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Initial research and conceptual framework development</p>
                        </div>
                        <div>
                            <img src="/assets/imgs/proj_MSc-CAD/MSc-CAD_03.webp" alt="Computational methodology" className="rounded-xl w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Computational methodology and parameter exploration</p>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-white">Computational Framework</h3>
                    <p className="mb-6">
                        The design framework was built using Grasshopper and custom Python components, allowing for real-time parameter adjustments and form optimization based on environmental data inputs.
                    </p>
                    <img src="/assets/imgs/proj_MSc-CAD/MSc-CAD_04.webp" alt="Computational Framework" className="rounded-xl w-full" />
                    <p className="text-sm text-center text-gray-500 italic mt-2">Computational design framework and parameter relationships</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6 text-white">Development Phases</h2>
                    <p className="mb-8">
                        The project evolved through multiple iterations, each refining the relationship between form, function, and environmental responsiveness.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div>
                            <img src="/assets/imgs/proj_MSc-CAD/MSc-CAD_05.webp" alt="Development Phase 1" className="rounded-xl w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">First iteration exploring basic parametric relationships</p>
                        </div>
                        <div>
                            <img src="/assets/imgs/proj_MSc-CAD/MSc-CAD_06.webp" alt="Development Phase 2" className="rounded-xl w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Refinement of environmental response mechanisms</p>
                        </div>
                        <div>
                            <img src="/assets/imgs/proj_MSc-CAD/MSc-CAD_07.webp" alt="Development Phase 3" className="rounded-xl w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Advanced optimization and performance testing</p>
                        </div>
                    </div>

                    <div className="aspect-video w-full rounded-xl overflow-hidden bg-gray-900 border border-white/10 mb-4">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/c0c-HG-MEYA"
                            title="Project Development Process"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <p className="text-sm text-center text-gray-500 italic">Development process and iterative design exploration</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6 text-white">Final Design</h2>
                    <p className="mb-8">
                        The final design demonstrates a successful integration of computational design principles with architectural sensibility, creating a structure that is both formally compelling and environmentally responsive.
                    </p>

                    <div className="mb-12">
                        <img src="/assets/imgs/proj_MSc-CAD/MSc-CAD_08.webp" alt="Final Design" className="rounded-xl w-full" />
                        <p className="text-sm text-center text-gray-500 italic mt-2">Final design render showing the completed parametric structure</p>
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-white">Project Video</h3>
                    <div className="aspect-video w-full rounded-xl overflow-hidden bg-gray-900 border border-white/10 mb-4">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/1gLwwzydQ-c"
                            title="DesignMorphine MSc Project"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <p className="text-sm text-center text-gray-500 italic">Final project presentation showcasing the complete design process and outcomes</p>
                </section>

                <section className="bg-white/5 p-8 rounded-2xl">
                    <h2 className="text-2xl font-bold mb-4 text-white">Technical Implementation</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-bold text-white mb-1">Parametric Modeling</h4>
                            <p className="text-gray-400">Grasshopper for visual programming</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-1">Environmental Analysis</h4>
                            <p className="text-gray-400">Climate data integration for responsive behavior</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-1">Form Optimization</h4>
                            <p className="text-gray-400">Python scripting for performance-based design</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-1">Visualization</h4>
                            <p className="text-gray-400">High-quality rendering pipeline for presentation</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-white">Key Learnings</h2>
                    <p className="text-lg text-gray-300">
                        This project taught me the importance of balancing computational complexity with design intent, and how parametric tools can be used not just for efficiency, but as a creative medium for architectural exploration.
                    </p>
                </section>
            </div>
        </ProjectLayout>
    );
}
