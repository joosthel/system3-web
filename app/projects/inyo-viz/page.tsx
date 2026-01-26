import ProjectLayout from '../../components/ProjectLayout';

export default function InyoVizPage() {
    return (
        <ProjectLayout
            title="INYO Mobility - Various Visualizations"
            description="3D visualizations and digital marketing materials for INYO Mobility's electric vehicle ecosystem"
            date="2023-05-01"
            tags={["3D Visualization", "Product Rendering", "Marketing Design", "Motion Graphics"]}
            heroImage="/assets/imgs/proj_INYO-Viz/INYO-Viz_06.webp"
            projectUrl="https://inyo-mobility.com"
            nextProject={{
                title: "DesignMorphine MSc - Project Arcadia",
                url: "/projects/msc-arcadia"
            }}
        >
            <div className="space-y-20">
                <section>
                    <h2 className="text-3xl font-bold mb-6 text-white">Project Overview</h2>
                    <p>
                        INYO Mobility is revolutionizing urban transportation with their innovative electric vehicle ecosystem. I created a comprehensive set of 3D visualizations and marketing materials to showcase their cutting-edge technology and design philosophy.
                    </p>
                    <div className="mt-8 rounded-xl overflow-hidden">
                        <img src="/assets/imgs/proj_INYO-Viz/INYO-Viz_00.webp" alt="INYO Hero Visualization" className="w-full" />
                        <p className="text-sm text-center text-gray-500 italic mt-2">Key hero visualization showcasing INYO's electric vehicle design</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6 text-white">Key Deliverables</h2>

                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-white">3D Product Visualizations</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-300">
                                <li>High-fidelity 3D models of INYO's electric vehicles</li>
                                <li>Photorealistic renderings for marketing campaigns</li>
                                <li>Interactive 3D experiences for web presentations</li>
                                <li>Technical visualization for product development</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-white">Marketing Materials</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-300">
                                <li>Digital assets for social media campaigns</li>
                                <li>Print materials for trade shows and exhibitions</li>
                                <li>Interactive presentations for investor meetings</li>
                                <li>Brand-consistent visual identity across all materials</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <img src="/assets/imgs/proj_INYO-Viz/INYO-Viz_01.webp" alt="Product Visualization 1" className="rounded-xl w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Detailed product visualization highlighting vehicle design</p>
                        </div>
                        <div>
                            <img src="/assets/imgs/proj_INYO-Viz/INYO-Viz_02.webp" alt="Product Visualization 2" className="rounded-xl w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Technical rendering showcasing engineering precision</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <img src="/assets/imgs/proj_INYO-Viz/INYO-Viz_03.webp" alt="Marketing Visualization" className="rounded-xl w-full" />
                        <p className="text-sm text-center text-gray-500 italic mt-2">Marketing visualization emphasizing the sleek design and innovation</p>
                    </div>
                </section>


                <section>
                    <h2 className="text-2xl font-bold mb-6 text-white">Process & Approach</h2>
                    <p className="mb-8">
                        The project began with understanding INYO's vision for sustainable urban mobility. I worked closely with their design team to ensure accuracy in technical details while maintaining the sleek, futuristic aesthetic that defines their brand.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div>
                            <img src="/assets/imgs/proj_INYO-Viz/INYO-Viz_04.webp" alt="Design Process 1" className="rounded-xl w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Initial design exploration and concept development</p>
                        </div>
                        <div>
                            <img src="/assets/imgs/proj_INYO-Viz/INYO-Viz_05.webp" alt="Design Process 2" className="rounded-xl w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Refinement of visual style and technical accuracy</p>
                        </div>
                        <div>
                            <img src="/assets/imgs/proj_INYO-Viz/INYO-Viz_07.webp" alt="Design Process 3" className="rounded-xl w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Final visualization polish and presentation preparation</p>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-white">Technical Implementation</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong className="text-white">3D Modeling</strong>: Created detailed vehicle models with accurate proportions and materials</li>
                        <li><strong className="text-white">Lighting & Rendering</strong>: Developed lighting setups that emphasize the vehicles' premium design</li>
                        <li><strong className="text-white">Post-Processing</strong>: Fine-tuned images for maximum impact across different media formats</li>
                    </ul>
                </section>

                <section className="bg-white/5 p-8 rounded-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold mb-4 text-white">Results</h2>
                        <p className="text-lg text-gray-300 mb-6">
                            The visualizations have been used across INYO's marketing channels, helping them secure funding and partnerships. The materials effectively communicate the innovation and quality of their electric vehicle ecosystem to investors, customers, and media.
                        </p>
                        <blockquote className="border-l-4 border-white pl-6 italic text-xl font-light">
                            "The visualizations perfectly captured our vision and helped us communicate the potential of our technology to stakeholders."
                            <footer className="text-sm not-italic mt-2 text-gray-400">- INYO Mobility Team</footer>
                        </blockquote>
                    </div>
                </section>
            </div>
        </ProjectLayout>
    );
}
