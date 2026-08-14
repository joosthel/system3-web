import type { Metadata } from 'next';
import ProjectLayout from '../../components/ProjectLayout';
import VideoJsonLd from '../../components/VideoJsonLd';
import { projectMetadata } from '@/lib/metadata';

export const metadata: Metadata = projectMetadata('t-cell');

export default function TCellPage() {
    return (
        <ProjectLayout
            slug="t-cell"
            title="T-Cell AG. Explainer Videos."
            description="A series of videos for T-Cell AG explaining their hydrogen fuel cell technology and the impact it can have on the energy transition."
            date="2023-05-01"
            heroImage="/assets/imgs/proj_T-Cell/T-Cell_Hero.webp"
            nextProject={{
                title: "Prompt Enhancement Engine",
                url: "/projects/prompt-engine"
            }}
        >
            <div className="space-y-20">
                <VideoJsonLd
                    name="T-Cell AG. Hydrogen Fuel Cell Technology Presentation (English)"
                    description="Presentation video explaining T-Cell's hydrogen fuel cell technology and its applications."
                    uploadDate="2023-05-01"
                    thumbnailUrl="/assets/imgs/proj_T-Cell/T-Cell_Hero.webp"
                    contentUrl="/assets/vids/T-Cell_Vorstellungsvideo_ENG_1440p.mp4"
                />
                <VideoJsonLd
                    name="T-Cell AG. Hydrogen Technology (German Mobile)"
                    description="German version cut for mobile, covering the key benefits and applications of T-Cell hydrogen technology."
                    uploadDate="2023-05-01"
                    thumbnailUrl="/assets/imgs/proj_T-Cell/T-Cell_Hero.webp"
                    contentUrl="/assets/vids/T-Cell_Mobil_DEU.mp4"
                />
                <section>
                    <h2>The project</h2>
                    <p>
                        I produced a series of explainer videos for T-Cell AG about hydrogen fuel cell technology and its role in the energy transition. The job: make complex science understandable for a broad audience without getting the technical details wrong.
                    </p>
                </section>

                <div className="grid grid-cols-1 gap-12">
                    <section>
                        <h2>English presentation video</h2>
                        <div className="w-full overflow-hidden mb-2">
                            <video controls className="w-full h-auto" poster="/assets/imgs/proj_T-Cell/T-Cell_Hero.webp">
                                <source src="/assets/vids/T-Cell_Vorstellungsvideo_ENG_1440p.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <p className="text-sm text-center text-gray-500 italic">The English presentation video</p>
                    </section>

                    <section>
                        <h2>German mobile version</h2>
                        <div className="w-full max-w-sm mx-auto overflow-hidden mb-2">
                            <video controls className="w-full h-auto bg-black" poster="/assets/imgs/proj_T-Cell/T-Cell_Hero.webp">
                                <source src="/assets/vids/T-Cell_Mobil_DEU.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <p className="text-sm text-center text-gray-500 italic">The German version, cut for mobile</p>
                    </section>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <section>
                        <h2>The goals</h2>
                        <ul>
                            <li>Translate complex hydrogen technology into concepts anyone can follow</li>
                            <li>Serve English and German audiences with dedicated versions</li>
                            <li>Work on mobile as well as in a boardroom presentation</li>
                            <li>Stay scientifically accurate while doing all of the above</li>
                        </ul>
                    </section>

                    <section>
                        <h2>What the videos cover</h2>
                        <p className="mb-4">Scientific visualisation plus a clear narrative, explaining:</p>
                        <ul>
                            <li>How hydrogen fuel cells work</li>
                            <li>The environmental benefits of hydrogen technology</li>
                            <li>Practical applications in the energy transition</li>
                            <li>T-Cell AG&apos;s role in all of it</li>
                        </ul>
                    </section>
                </div>

                <section className="project-highlight">
                    <h2>Impact</h2>
                    <p>
                        The videos are how T-Cell explains their technology to investors, partners, and the public. Complex tech, made legible.
                    </p>
                </section>
            </div>
        </ProjectLayout>
    );
}
