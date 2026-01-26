import ProjectLayout from '../../components/ProjectLayout';

export default function InyoDigitalTwinPage() {
    return (
        <ProjectLayout
            title="INYO Mobility - Digital Twin Platform"
            description="Interactive 3D visualization solutions for vehicle design optimization | Full Stack development"
            date="2025-05-04"
            tags={["Digital Twin", "3D Visualization", "Real-time Rendering", "Data Integration", "Full Stack Development"]}
            heroImage="/assets/imgs/proj_INYO-Digital-Twin/Screenshot_3D-View.webp"
            projectUrl="https://inyo-mobility.com"
            nextProject={{
                title: "INYO Mobility - Various Visualizations",
                url: "/projects/inyo-viz"
            }}
        >
            <div className="space-y-20">
                <section>
                    <h2 className="text-3xl font-bold mb-6 text-white">Project Overview</h2>
                    <p>
                        Developed a comprehensive digital twin platform for INYO Mobility's electric vehicle development process. The platform combines real-time data visualization with interactive 3D models to optimize vehicle design and performance.
                    </p>
                </section>

                <section>
                    <div className="rounded-xl overflow-hidden mb-4">
                        <img src="/assets/imgs/proj_INYO-Digital-Twin/Screenshot_3D-View.webp" alt="Digital Twin 3D View" className="w-full" />
                    </div>
                    <p className="text-sm text-center text-gray-500 italic">Interactive 3D view of the digital twin platform showing real-time vehicle data</p>
                </section>

                <div className="grid md:grid-cols-2 gap-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">Challenge</h2>
                        <p>
                            INYO Mobility needed a way to visualize and prototype vehicle designs without creating costly physical models. Traditional CAD workflows were slow and didn't provide real-time performance insights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">Solution</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li><strong className="text-white">Real-time 3D Visualization</strong>: Interactive vehicle component models</li>
                            <li><strong className="text-white">Performance Simulation</strong>: Live testing of design modifications</li>
                            <li><strong className="text-white">Data Integration</strong>: Sensor data from test vehicles</li>
                            <li><strong className="text-white">Collaborative Tools</strong>: Multi-user design sessions</li>
                        </ul>
                    </section>
                </div>

                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div>
                            <img src="/assets/imgs/proj_INYO-Digital-Twin/Screenshot_Data-View-Chart.webp" alt="Data Visualization Charts" className="rounded-xl w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Real-time data visualization showing vehicle performance metrics</p>
                        </div>
                        <div>
                            <img src="/assets/imgs/proj_INYO-Digital-Twin/Screenshot_Data-View-Chart2.webp" alt="Performance Analytics" className="rounded-xl w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Advanced analytics dashboard for performance monitoring</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-white">Data Management & Analytics</h2>
                    <p className="mb-6">
                        The platform includes comprehensive data management tools for tracking vehicle performance metrics and analyzing sensor data in real-time.
                    </p>
                    <img src="/assets/imgs/proj_INYO-Digital-Twin/Screenshot_Data-View-Table.webp" alt="Data Table View" className="rounded-xl w-full" />
                    <p className="text-sm text-center text-gray-500 italic mt-2">Comprehensive data table interface for detailed performance analysis</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-white">Technical Implementation</h2>
                    <p className="mb-6">The platform leverages modern web technologies:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 mb-8">
                        <li>WebGL-based 3D rendering for high performance</li>
                        <li>Real-time data streaming and visualization</li>
                        <li>Responsive design for cross-platform compatibility</li>
                        <li>Modular architecture for future scalability</li>
                    </ul>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <img src="/assets/imgs/proj_INYO-Digital-Twin/Screenshot_Map-View.webp" alt="Geographic Data Visualization" className="rounded-xl w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Geographic mapping interface for location-based vehicle tracking</p>
                        </div>
                        <div>
                            <img src="/assets/imgs/proj_INYO-Digital-Twin/Screenshot_Docker-Structure.webp" alt="System Architecture" className="rounded-xl w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Technical system architecture and deployment structure</p>
                        </div>
                    </div>
                </section>

                <section className="bg-white/5 p-8 rounded-2xl">
                    <h2 className="text-2xl font-bold mb-4 text-white">Results</h2>
                    <p className="text-xl font-light leading-relaxed">
                        Engineers reduced physical prototype iterations by <strong className="text-white">60%</strong>, accelerating the design process significantly while maintaining design quality and innovation standards.
                    </p>
                </section>
            </div>
        </ProjectLayout>
    );
}
