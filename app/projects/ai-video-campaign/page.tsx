import type { Metadata } from 'next';
import ProjectLayout from '../../components/ProjectLayout';
import { projectMetadata } from '@/lib/metadata';

export const metadata: Metadata = projectMetadata('ai-video-campaign');

export default function AIVideoCampaignPage() {
    return (
        <ProjectLayout
            slug="ai-video-campaign"
            title="AI Video Production for a Global Brand Campaign"
            description="A generative AI visual pipeline from storyboard to edited campaign video."
            date="2025-01-15"
            nextProject={{
                title: "AI Pipeline Backend & Interactive Segmentation Tool",
                url: "/projects/ai-pipeline-backend"
            }}
        >
            <div className="space-y-12">
                <section>
                    <h2>The brief</h2>
                    <p>
                        A global brand needed campaign videos for new products, each scene based on a supplied storyboard. The catch: AI-generated product visuals at this level have to be accurate enough for real campaign use. Correct packaging, legible text, consistent product details across shots.
                    </p>
                </section>

                <section>
                    <h2>My approach</h2>
                    <p>
                        The client supplied product photography and packaging assets. My job was to turn the storyboard into finished video, with all the accuracy and cinematographic quality that implies.
                    </p>
                    <p>
                        I used Gemini-based image generation to create start frames from the reference assets, then generated video with VEO and Kling. The pipeline took constant iteration. Getting AI models to render small product details like label text, texture, and packaging print correctly is hard. Each model has its own failure modes, and prompting around them is a feel you only build through repetition.
                    </p>
                </section>

                <section>
                    <h2>The result</h2>
                    <p>
                        A series of AI-generated campaign videos, plus a 30-second edited piece for the brand&apos;s internal presentation. I handled the whole pipeline, from storyboard reference to final edit.
                    </p>
                </section>

                <section>
                    <h2>What made it hard</h2>
                    <p>
                        Product and text consistency. Generative models like to hallucinate or smooth over fine details, and those are exactly the details that matter most in branded content. Getting it right took a lot of controlled iterations and a precise sense of how each model reads reference imagery.
                    </p>
                </section>

                <section>
                    <h2>Outcome</h2>
                    <p>
                        Delivered on brief, on time, to campaign quality.
                    </p>
                </section>

                <p className="text-sm text-gray-400 italic mt-12 pt-8 border-t border-gray-200">
                    Visual assets from this project are under NDA and cannot be shown publicly.
                </p>
            </div>
        </ProjectLayout>
    );
}
