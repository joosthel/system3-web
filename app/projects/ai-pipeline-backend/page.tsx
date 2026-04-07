import ProjectLayout from '../../components/ProjectLayout';

export default function AIPipelineBackendPage() {
    return (
        <ProjectLayout
            title="AI Pipeline Backend & Interactive Segmentation Tool"
            description="Custom ComfyUI workflows + web-based segmentation interface for an AI asset platform."
            date="2024-11-01"
            tags={['ComfyUI', 'Python', 'Computer Vision', 'API Design', 'Prototyping', 'Full Stack']}
            nextProject={{
                title: "Souly & Boondawg - I got this feeling",
                url: "/projects/souly-boondawg"
            }}
        >
            <div className="space-y-12">
                <section>
                    <h2>The Brief</h2>
                    <p>
                        A platform client had existing ComfyUI workflows for background replacement and product/person swapping in images. The bottleneck: accurate masking. Text-based prompting alone couldn&apos;t reliably isolate the exact product or region that needed editing — especially for non-technical end users of their platform.
                    </p>
                    <p>
                        They needed a better input mechanism, and wanted to explore what was technically possible before committing to a full build.
                    </p>
                </section>

                <section>
                    <h2>My Approach</h2>
                    <p>
                        The goal was a prototype that let users click or draw on an image to select an object, with that selection automatically converted to an accurate segmentation mask — which then feeds into the existing ComfyUI backend.
                    </p>
                    <p>
                        I scoped this as an exploration: test the technical approach, validate the UX, and produce something hand-off-ready for their engineering team if it proved viable.
                    </p>
                </section>

                <section>
                    <h2>What Was Built</h2>
                    <ul>
                        <li>A lightweight web interface for object selection directly on an image</li>
                        <li>A server-side segmentation pipeline that converts the selection into a clean, accurate mask</li>
                        <li>API interfaces structured so the prototype can be integrated into their existing platform by their own engineer</li>
                    </ul>
                    <p>
                        The result: their end users can now select a product in an image by clicking on it, rather than describing it in a text prompt — dramatically improving mask accuracy and removing the prompt-writing barrier for less technical users.
                    </p>
                </section>

                <section>
                    <h2>Outcome</h2>
                    <p>
                        The prototype validated the technical approach and is ready for integration. It significantly reduces the failure rate of their masking step and opens the workflow to a broader, less technical user base.
                    </p>
                </section>

                <p className="text-sm text-gray-400 italic mt-12 pt-8 border-t border-gray-200">
                    Visual assets and client details from this project are under NDA.
                </p>
            </div>
        </ProjectLayout>
    );
}
