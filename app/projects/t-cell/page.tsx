import ProjectLayout from '../../components/ProjectLayout';
import VideoJsonLd from '../../components/VideoJsonLd';

export default function TCellPage() {
    return (
        <ProjectLayout
            title="T-Cell AG - Explainer Videos"
            description="Series of videos for the T-Cell AG, explaining the hydrogen-fuel-cell technology and the impact it can have for the energy transition."
            date="2023-05-01"
            tags={["Video Production", "Motion Graphics", "Scientific Visualization", "Hydrogen Technology"]}
            heroImage="/assets/imgs/proj_T-Cell/T-Cell_Hero.webp"
            nextProject={{
                title: "Souly & Boondawg - I got this feeling",
                url: "/projects/souly-boondawg"
            }}
        >
            <div className="space-y-20">
                <VideoJsonLd
                    name="T-Cell AG - Hydrogen Fuel Cell Technology Presentation (English)"
                    description="Comprehensive presentation video explaining T-Cell's hydrogen fuel cell technology and its applications."
                    uploadDate="2023-05-01"
                    thumbnailUrl="/assets/imgs/proj_T-Cell/T-Cell_Hero.webp"
                    contentUrl="/assets/vids/T-Cell_Vorstellungsvideo_ENG_1440p.mp4"
                />
                <VideoJsonLd
                    name="T-Cell AG - Hydrogen Technology (German Mobile)"
                    description="Mobile-optimized German version focusing on key benefits and applications of T-Cell hydrogen technology."
                    uploadDate="2023-05-01"
                    thumbnailUrl="/assets/imgs/proj_T-Cell/T-Cell_Hero.webp"
                    contentUrl="/assets/vids/T-Cell_Mobil_DEU.mp4"
                />
                <section>
                    <h2 className="text-3xl font-bold mb-6 text-white">Project Overview</h2>
                    <p>
                        Created a series of explainer videos for T-Cell AG to communicate the potential of hydrogen fuel cell technology for the energy transition. The videos focus on making complex scientific concepts accessible to a broad audience while maintaining technical accuracy.
                    </p>
                </section>

                <div className="grid grid-cols-1 gap-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">English Presentation Video</h2>
                        <div className="w-full rounded-xl overflow-hidden bg-gray-900 border border-white/10 mb-2">
                            <video controls className="w-full h-auto" poster="/assets/imgs/proj_T-Cell/T-Cell_Hero.webp">
                                <source src="/assets/vids/T-Cell_Vorstellungsvideo_ENG_1440p.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <p className="text-sm text-center text-gray-500 italic">Comprehensive presentation video explaining T-Cell's hydrogen fuel cell technology and its applications</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">German Mobile Version</h2>
                        <div className="w-full max-w-sm mx-auto rounded-xl overflow-hidden bg-gray-900 border border-white/10 mb-2">
                            <video controls className="w-full h-auto bg-black" poster="/assets/imgs/proj_T-Cell/T-Cell_Hero.webp">
                                <source src="/assets/vids/T-Cell_Mobil_DEU.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <p className="text-sm text-center text-gray-500 italic">Mobile-optimized German version focusing on key benefits and applications</p>
                    </section>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-white">Project Goals</h2>
                        <ul className="list-disc list-inside space-y-4 text-gray-300">
                            <li><strong className="text-white">Educational Focus</strong>: Translate complex hydrogen technology into understandable concepts</li>
                            <li><strong className="text-white">Multi-Language Approach</strong>: Serve both English and German-speaking audiences</li>
                            <li><strong className="text-white">Mobile Optimization</strong>: Ensure accessibility across different devices and platforms</li>
                            <li><strong className="text-white">Scientific Accuracy</strong>: Maintain technical precision while improving accessibility</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-white">Technical Approach</h2>
                        <p className="mb-4">The videos combine scientific visualization with clear narrative structure to explain:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>How hydrogen fuel cells work</li>
                            <li>Environmental benefits of hydrogen technology</li>
                            <li>Practical applications in the energy transition</li>
                            <li>T-Cell AG's role in advancing this technology</li>
                        </ul>
                    </section>
                </div>

                <section className="bg-white/5 p-8 rounded-2xl">
                    <h2 className="text-2xl font-bold mb-4 text-white">Impact</h2>
                    <p className="text-xl font-light leading-relaxed">
                        These explainer videos help T-Cell AG communicate their vision for hydrogen's role in sustainable energy, making complex technology accessible to stakeholders, investors, and the general public interested in clean energy solutions.
                    </p>
                </section>
            </div>
        </ProjectLayout>
    );
}
