import type { Metadata } from 'next';
import ProjectLayout from '../../components/ProjectLayout';
import { projectMetadata } from '@/lib/metadata';

export const metadata: Metadata = projectMetadata('inyo-viz');

export default function InyoVizPage() {
    return (
        <ProjectLayout
            slug="inyo-viz"
            title="INYO Mobility. Various Visualizations."
            description="3D visualisations and digital marketing materials for INYO Mobility's electric vehicle ecosystem."
            date="2023-05-01"
            heroImage="/assets/imgs/proj_INYO-Viz/INYO-Viz_06.webp"
            projectUrl="https://inyo-mobility.com"
            nextProject={{
                title: "DesignMorphine MSc. Project Arcadia.",
                url: "/projects/msc-arcadia"
            }}
        >
            <div className="space-y-20">
                <section>
                    <h2>The project</h2>
                    <p>
                        INYO Mobility is building a new kind of electric vehicle ecosystem for urban transportation. I produced the 3D visualisations and marketing materials that show the vehicles and the design thinking behind them.
                    </p>
                    <div className="mt-8 overflow-hidden">
                        <img src="/assets/imgs/proj_INYO-Viz/INYO-Viz_00.webp" alt="INYO Hero Visualization" className="w-full" />
                        <p className="text-sm text-center text-gray-500 italic mt-2">The hero visual</p>
                    </div>
                </section>

                <section>
                    <h2>What I delivered</h2>

                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div>
                            <h3>3D product visuals</h3>
                            <ul>
                                <li>Detailed 3D models of INYO&apos;s electric vehicles</li>
                                <li>Photorealistic renders for campaigns</li>
                                <li>Interactive 3D for web presentations</li>
                                <li>Technical visualisation for product development</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Marketing materials</h3>
                            <ul>
                                <li>Social media assets</li>
                                <li>Print material for trade shows</li>
                                <li>Presentations for investor meetings</li>
                                <li>One consistent look across all of it</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <img src="/assets/imgs/proj_INYO-Viz/INYO-Viz_01.webp" alt="Product Visualization 1" className="w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Product visual</p>
                        </div>
                        <div>
                            <img src="/assets/imgs/proj_INYO-Viz/INYO-Viz_02.webp" alt="Product Visualization 2" className="w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Technical render</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <img src="/assets/imgs/proj_INYO-Viz/INYO-Viz_03.webp" alt="Marketing Visualization" className="w-full" />
                        <p className="text-sm text-center text-gray-500 italic mt-2">Marketing visual</p>
                    </div>
                </section>


                <section>
                    <h2>Process</h2>
                    <p className="mb-8">
                        I worked directly with INYO&apos;s design team. The job was keeping the technical details accurate while hitting the clean, futuristic look the brand goes for.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div>
                            <img src="/assets/imgs/proj_INYO-Viz/INYO-Viz_04.webp" alt="Design Process 1" className="w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Early exploration</p>
                        </div>
                        <div>
                            <img src="/assets/imgs/proj_INYO-Viz/INYO-Viz_05.webp" alt="Design Process 2" className="w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Refining the style</p>
                        </div>
                        <div>
                            <img src="/assets/imgs/proj_INYO-Viz/INYO-Viz_07.webp" alt="Design Process 3" className="w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Final polish</p>
                        </div>
                    </div>

                    <h3>How it was made</h3>
                    <ul>
                        <li><strong>Modeling</strong>: Vehicle models with accurate proportions and materials</li>
                        <li><strong>Lighting and rendering</strong>: Setups built around the vehicles&apos; design</li>
                        <li><strong>Post</strong>: Images tuned per output format, from social to print</li>
                    </ul>
                </section>

                <section className="project-highlight">
                    <div className="relative z-10">
                        <h2>Results</h2>
                        <p>
                            INYO used the visuals across their marketing channels and in the funding and partnership conversations that followed. They show investors, customers, and media the engineering and design quality behind the ecosystem.
                        </p>
                        <blockquote>
                            &ldquo;The visualisations captured our vision and helped us communicate the potential of our technology to stakeholders.&rdquo;
                            <footer>INYO Mobility Team</footer>
                        </blockquote>
                    </div>
                </section>
            </div>
        </ProjectLayout>
    );
}
