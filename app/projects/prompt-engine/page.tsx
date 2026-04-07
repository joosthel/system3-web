import ProjectLayout from '../../components/ProjectLayout';

export default function PromptEnginePage() {
    return (
        <ProjectLayout
            title="Prompt Enhancement Engine"
            description="An AI tool that turns a creative brief and reference images into a full set of optimised, consistent prompts."
            date="2025-03-01"
            tags={['Next.js', 'TypeScript', 'OpenRouter', 'Gemini', 'DeepSeek', 'Vercel', 'Prompt Engineering', 'AI Product']}
            heroImage="/assets/imgs/proj_prompt-engine/promptenhancer_screenshot.png"
            projectUrl="https://promptenhancer.joosthelfers.com"
            nextProject={{
                title: "AI Video Production for a Global Brand Campaign",
                url: "/projects/ai-video-campaign"
            }}
        >
            <div className="space-y-12">
                <section>
                    <h2>What It Does</h2>
                    <p>
                        You give it a creative brief and reference images. It gives you back an optimised art direction brief — the kind an experienced art director would write — plus a full set of structured prompts for image generation, image editing, and video creation tools.
                    </p>
                    <p>
                        Prompts are generated with consistency across them, so you can iterate on a visual concept across multiple tools without losing coherence. The goal is to dramatically compress the time between a creative idea and high-quality AI output.
                    </p>
                </section>

                <section>
                    <h2>Who It&apos;s For</h2>
                    <p>
                        AI artists and creative teams who are iterating on generative visual projects. Also useful for anyone who isn&apos;t deeply fluent in prompt writing but needs reliable, high-quality AI outputs.
                    </p>
                </section>

                <section>
                    <h2>Why I Built It</h2>
                    <p>
                        Primarily to speed up my own workflow. Prompt engineering is genuinely one of the highest-leverage skills in AI visual production right now, but it&apos;s also slow and repetitive when done manually across multiple tools. Automating the structured part — brief interpretation, prompt formatting, consistency between shots — frees up attention for the creative decisions that actually matter.
                    </p>
                    <p>
                        It also became a useful proving ground for agentic engineering patterns: streaming responses, multi-model orchestration, structured JSON validation from LLM output, and keeping a UI fast and lean without reaching for a component library.
                    </p>
                </section>

                <section>
                    <h2>Technical Stack</h2>
                    <ul>
                        <li><strong>Framework:</strong> Next.js (App Router, server routes, Turbopack) · React 19 · TypeScript</li>
                        <li><strong>Styling:</strong> Tailwind CSS v4 — all UI hand-rolled, no component library</li>
                        <li><strong>LLM / API:</strong> OpenRouter — raw fetch, no SDK. Primary models: Gemini 2.5 Flash (vision) and DeepSeek v3.2 (briefs/prompts). Fallbacks: Gemma 4 31B and Qwen 3</li>
                        <li><strong>Validation:</strong> Zod — runtime validation of all LLM JSON responses</li>
                        <li><strong>Deployment:</strong> Vercel — serverless, SSE streaming via ReadableStream</li>
                        <li><strong>Notable:</strong> No database, no auth, no state management library. Zero dependencies beyond React. All state is useState/useRef.</li>
                    </ul>
                </section>

            </div>
        </ProjectLayout>
    );
}
