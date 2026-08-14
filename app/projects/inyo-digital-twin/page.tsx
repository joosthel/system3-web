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
                    <h2>The project</h2>
                    <p>
                        I built a digital twin platform for INYO Mobility&apos;s electric vehicle development. It pairs interactive 3D models with live data, so the team can test design decisions on screen instead of in the workshop.
                    </p>
                </section>

                <section>
                    <div className="overflow-hidden mb-4">
                        <img src="/assets/imgs/proj_INYO-Digital-Twin/Screenshot_3D-View.webp" alt="Digital Twin 3D View" className="w-full" />
                    </div>
                    <p className="text-sm text-center text-gray-500 italic">The interactive 3D view with live vehicle data</p>
                </section>

                <div className="grid md:grid-cols-2 gap-12">
                    <section>
                        <h2>The problem</h2>
                        <p>
                            INYO needed to prototype vehicle designs without building costly physical models every time. Traditional CAD workflows were slow and gave no live view of performance.
                        </p>
                    </section>

                    <section>
                        <h2>What the platform does</h2>
                        <ul>
                            <li>Interactive 3D models of vehicle components</li>
                            <li>Live simulation of design changes</li>
                            <li>Sensor data from test vehicles feeding the twin</li>
                            <li>Multi-user design sessions</li>
                        </ul>
                    </section>
                </div>

                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div>
                            <img src="/assets/imgs/proj_INYO-Digital-Twin/Screenshot_Data-View-Chart.webp" alt="Data Visualization Charts" className="w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Live performance metrics</p>
                        </div>
                        <div>
                            <img src="/assets/imgs/proj_INYO-Digital-Twin/Screenshot_Data-View-Chart2.webp" alt="Performance Analytics" className="w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">The analytics dashboard</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>Data and analytics</h2>
                    <p className="mb-6">
                        The platform tracks vehicle performance metrics and analyses sensor data in real time, from quick chart views down to the raw tables.
                    </p>
                    <img src="/assets/imgs/proj_INYO-Digital-Twin/Screenshot_Data-View-Table.webp" alt="Data Table View" className="w-full" />
                    <p className="text-sm text-center text-gray-500 italic mt-2">The data table view</p>
                </section>

                <section>
                    <h2>How it&apos;s built</h2>
                    <p className="mb-6">Under the hood:</p>
                    <ul className="mb-8">
                        <li>WebGL-based 3D rendering</li>
                        <li>Real-time data streaming and visualisation</li>
                        <li>Responsive layout that works across devices</li>
                        <li>Modular architecture, so the platform can grow with the product</li>
                    </ul>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <img src="/assets/imgs/proj_INYO-Digital-Twin/Screenshot_Map-View.webp" alt="Geographic Data Visualization" className="w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Map view for vehicle tracking</p>
                        </div>
                        <div>
                            <img src="/assets/imgs/proj_INYO-Digital-Twin/Screenshot_Docker-Structure.webp" alt="System Architecture" className="w-full" />
                            <p className="text-sm text-center text-gray-500 italic mt-2">Deployment structure</p>
                        </div>
                    </div>
                </section>

                <section className="project-highlight">
                    <h2>Results</h2>
                    <p>
                        Engineers cut physical prototype iterations by <strong>60%</strong>. Design rounds got faster without the quality dropping.
                    </p>
                </section>
            </div>
        </ProjectLayout>
    );
}
