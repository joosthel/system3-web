import type { Metadata } from 'next';
import ProjectLayout from '../../components/ProjectLayout';
import { projectMetadata } from '@/lib/metadata';

export const metadata: Metadata = projectMetadata('inyo-digital-twin');

export default function InyoDigitalTwinPage() {
    return (
        <ProjectLayout
            slug="inyo-digital-twin"
            title="INYO Mobility. Digital Twin Platform."
            description="An interactive 3D platform for vehicle design optimisation, built full-stack with React and Three.js."
            date="2023-09-01"
            heroImage="/assets/imgs/proj_INYO-Digital-Twin/Screenshot_3D-View.webp"
            projectUrl="https://inyo-mobility.com"
            nextProject={{
                title: "INYO Mobility. Various Visualizations.",
                url: "/projects/inyo-viz"
            }}
        >
            <div className="space-y-20">
                <section>
                    <h2>Project Overview</h2>
                    <p>
                        I built a digital twin platform for INYO Mobility&apos;s electric vehicle development process. The platform combines real-time data visualisation with interactive 3D models to optimise vehicle design and performance.
                    </p>
                </section>

                <section>
                    <div className="overflow-hidden mb-4">
                        <img src="/assets/imgs/proj_INYO-Digital-Twin/Screenshot_3D-View.webp" alt="Digital Twin 3D View" className="w-full" />
                    </div>
                    <p className="text-sm text-center text-gray-500 italic">Interactive 3D view of the digital twin platform showing real-time vehicle data</p>
                </section>

                <div className="grid md:grid-cols-2 gap-12">
                    <section>
                        <h2>Challenge</h2>
                        <p>
                            INYO Mobility needed a way to visualise and prototype vehicle designs without building costly physical models. Traditional CAD workflows were slow and did not provide real-time performance insights.
                        </p>
                    </section>

                    <section>
                        <h2>Solution</h2>
                        <ul>
                            <li><strong>Real-time 3D Visualization</strong>: Interactive vehicle component models</li>
                            <li><strong>Performance Simulation</strong>: Live testing of design modifications</li>
                            <li><strong>Data Integration</strong>: Sensor data from test vehicles</li>
                            <li><strong>Collaborative Tools</strong>: Multi-user design sessions</li>
                        </ul>
                    </section>
                </div>

                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div>
                            <img src="/assets/imgs/proj_INYO-Digital-Twin/Screenshot_Data-View-Chart.webp" alt="Data Visualization Charts" className="w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Real-time data visualization showing vehicle performance metrics</p>
                        </div>
                        <div>
                            <img src="/assets/imgs/proj_INYO-Digital-Twin/Screenshot_Data-View-Chart2.webp" alt="Performance Analytics" className="w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Advanced analytics dashboard for performance monitoring</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>Data Management & Analytics</h2>
                    <p className="mb-6">
                        The platform includes comprehensive data management tools for tracking vehicle performance metrics and analyzing sensor data in real-time.
                    </p>
                    <img src="/assets/imgs/proj_INYO-Digital-Twin/Screenshot_Data-View-Table.webp" alt="Data Table View" className="w-full" />
                    <p className="text-sm text-center text-gray-500 italic mt-2">Comprehensive data table interface for detailed performance analysis</p>
                </section>

                <section>
                    <h2>Technical Implementation</h2>
                    <p className="mb-6">The platform leverages modern web technologies:</p>
                    <ul className="mb-8">
                        <li>WebGL-based 3D rendering for high performance</li>
                        <li>Real-time data streaming and visualization</li>
                        <li>Responsive design for cross-platform compatibility</li>
                        <li>Modular architecture for future scalability</li>
                    </ul>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <img src="/assets/imgs/proj_INYO-Digital-Twin/Screenshot_Map-View.webp" alt="Geographic Data Visualization" className="w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Geographic mapping interface for location-based vehicle tracking</p>
                        </div>
                        <div>
                            <img src="/assets/imgs/proj_INYO-Digital-Twin/Screenshot_Docker-Structure.webp" alt="System Architecture" className="w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Technical system architecture and deployment structure</p>
                        </div>
                    </div>
                </section>

                <section className="project-highlight">
                    <h2>Results</h2>
                    <p>
                        Engineers reduced physical prototype iterations by <strong>60%</strong>. The design process moved significantly faster while design quality and innovation held steady.
                    </p>
                </section>
            </div>
        </ProjectLayout>
    );
}
