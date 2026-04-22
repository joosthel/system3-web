import ProjectLayout from '../../components/ProjectLayout';

export default function AIVideoCampaignPage() {
    return (
        <ProjectLayout
            title="AI Video Production for a Global Brand Campaign"
            description="A generative AI visual pipeline from storyboard to edited campaign video for a major consumer goods brand."
            date="2025-01-15"
            tags={['AI Visuals', 'Generative Video', 'ComfyUI', 'Prompt Engineering', 'Video Editing']}
            nextProject={{
                title: "AI Pipeline Backend & Interactive Segmentation Tool",
                url: "/projects/ai-pipeline-backend"
            }}
        >
            <div className="space-y-12">
                <section>
                    <h2>The Brief</h2>
                    <p>
                        A global brand needed campaign videos showcasing new products, each scene based on a supplied storyboard. The challenge was that AI-generated product visuals at this level need to be accurate enough for real campaign use. Correct packaging, legible text, and consistent product details across shots.
                    </p>
                </section>

                <section>
                    <h2>My Approach</h2>
                    <p>
                        The client supplied high-quality product photography and packaging assets. My job was to turn a storyboard into finished video, with all the accuracy and cinematographic quality that implies.
                    </p>
                    <p>
                        I used Gemini-based image generation to create start frames from the reference assets, then generated video with VEO and Kling. The pipeline required constant iteration. Getting AI models to render small product details like label text, texture, and packaging print consistently and accurately is genuinely hard. Each model has its own failure modes, and developing a feel for how to prompt around them takes time and experience.
                    </p>
                </section>

                <section>
                    <h2>What Was Built</h2>
                    <p>
                        A series of AI-generated campaign videos, plus a 30-second edited piece for the brand&apos;s internal presentation. The entire pipeline, from storyboard reference to final edited output, was handled end to end.
                    </p>
                </section>

                <section>
                    <h2>What Made It Difficult</h2>
                    <p>
                        Product and text consistency. Generative models have a strong tendency to hallucinate or smooth over fine details, which are exactly the details that matter most in branded content. Getting this right required a large number of controlled iterations, careful prompt engineering, and a precise understanding of how each model interprets reference imagery.
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
