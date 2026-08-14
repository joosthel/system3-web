import type { Metadata } from 'next';
import ProjectLayout from '../../components/ProjectLayout';
import { projectMetadata } from '@/lib/metadata';

export const metadata: Metadata = projectMetadata('ai-pipeline-backend');

export default function AIPipelineBackendPage() {
    return (
        <ProjectLayout
            slug="ai-pipeline-backend"
            title="AI Pipeline Backend & Interactive Segmentation Tool"
            description="Custom ComfyUI workflows and a web-based segmentation interface for an AI asset platform."
            date="2024-11-01"
            nextProject={{
                title: "Souly & Boondawg. I got this feeling.",
                url: "/projects/souly-boondawg"
            }}
        >
            <div className="space-y-12">
                <section>
                    <h2>The brief</h2>
                    <p>
                        A platform client had existing ComfyUI workflows for background replacement and product or person swapping in images. The bottleneck was accurate masking. Text prompting alone couldn&apos;t reliably isolate the exact product or region that needed editing, especially for the non-technical users on their platform.
                    </p>
                    <p>
                        They needed a better input mechanism, and wanted to see what was technically possible before committing to a full build.
                    </p>
                </section>

                <section>
                    <h2>My approach</h2>
                    <p>
                        The goal was a prototype where users click or draw on an image to select an object. That selection gets converted into an accurate segmentation mask, which then feeds into the existing ComfyUI backend.
                    </p>
                    <p>
                        I scoped it as an exploration: test the technical approach, validate the UX, and hand over something their engineering team could build on if it proved viable.
                    </p>
                </section>

                <section>
                    <h2>What I built</h2>
                    <ul>
                        <li>A lightweight web interface for selecting objects directly on an image</li>
                        <li>A server-side segmentation pipeline that turns the selection into a clean, accurate mask</li>
                        <li>API interfaces structured so their own engineer can integrate the prototype into the platform</li>
                    </ul>
                    <p>
                        Their end users now select a product by clicking on it instead of describing it in a text prompt. Mask accuracy went up a lot, and the prompt-writing barrier is gone.
                    </p>
                </section>

                <section>
                    <h2>Outcome</h2>
                    <p>
                        The prototype proved the approach and is ready for integration. The masking step fails far less often, and the workflow now works for people who would never write a prompt.
                    </p>
                </section>

                <p className="text-sm text-gray-400 italic mt-12 pt-8 border-t border-gray-200">
                    Visual assets and client details from this project are under NDA.
                </p>
            </div>
        </ProjectLayout>
    );
}
