import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import { SERVICES } from '@/lib/data';
import { breadcrumbSchema, faqPageSchema, serviceSchema, toJsonLd } from '@/lib/schema';
import { pageMetadata } from '@/lib/metadata';
import TrackedLink from '../components/TrackedLink';

export const metadata: Metadata = pageMetadata(
    'Local Generative AI Pipelines & Custom AI Solutions',
    'How Joost Helfers builds self-hosted generative AI pipelines in ComfyUI and Python, custom AI solutions, and campaign-grade AI visuals. Local-first infrastructure for brands, agencies, and product teams.',
    '/pipelines'
);

const PIPELINE_FAQS = [
    {
        question: 'What is a local generative AI pipeline?',
        answer:
            'A local generative AI pipeline is a production workflow that runs generative models on hardware you control: your own workstation, an on-premise server, or dedicated rented GPUs, instead of a hosted API. Inputs are controlled, settings are versioned, and every step from raw input to delivered asset is repeatable. For brand and agency work this means confidential assets never leave your network, costs stay flat regardless of volume, and validated workflows keep producing consistent output over time.',
    },
    {
        question: 'What hardware does a local generative AI pipeline need?',
        answer:
            'Less than most people expect to start. A single workstation with a modern 24 GB GPU runs image pipelines for a small team; larger teams add a shared server or rented dedicated GPUs. Hardware gets scoped against actual throughput needs before anyone buys anything.',
    },
    {
        question: 'Is ComfyUI production-ready?',
        answer:
            'With engineering around it, yes. Out of the box ComfyUI is a node editor; production readiness comes from what surrounds it: versioned workflows, controlled inputs, automated quality checks, custom nodes where the stock ones fall short, and documentation your team can follow without outside help.',
    },
    {
        question: 'Do you also build local LLM systems?',
        answer:
            'Yes. Self-hosted language models cover internal assistants, document extraction, classification, and agent workloads. They run on the same principle as everything else: open tooling serving models from your own hardware, connected to your data without it leaving the premises.',
    },
    {
        question: 'Can you train custom models or LoRAs for our brand?',
        answer:
            'Yes. Where base models drift from brand requirements, trained LoRAs close the gap: product consistency, style locks, character consistency across shots. Training happens locally too, so reference material stays in-house.',
    },
    {
        question: 'When is a cloud API the better choice?',
        answer:
            'When you need frontier capability that only exists as a hosted model, when volume is too low to justify hardware, or when burst demand exceeds what local infrastructure can absorb. Local infrastructure is the default here, with honest callouts where hosted models earn their place.',
    },
    {
        question: 'What does an engagement look like?',
        answer:
            'A short scoping phase to map your production requirements and existing tooling, then a build phase with working pipelines early instead of a big reveal at the end, then handover: documented workflows, training for your team, and tooling they can operate themselves.',
    },
    {
        question: 'Do you work with clients outside Berlin?',
        answer:
            'Yes, worldwide. Most work runs remote; on-site visits happen wherever the project is, with travel costs covered by the client. Pipelines are handed over as systems your team runs, so distance matters less after handover anyway.',
    },
];

const COMPARISON_ROWS: Array<{ aspect: string; local: string; hosted: string }> = [
    {
        aspect: 'Confidential assets',
        local: 'Never leave your network',
        hosted: 'Sent to a third party per request',
    },
    {
        aspect: 'Cost model',
        local: 'Flat: hardware plus electricity',
        hosted: 'Metered per image or token',
    },
    {
        aspect: 'Reproducibility',
        local: 'Pinned models keep output stable',
        hosted: 'Models can change under you mid-project',
    },
    {
        aspect: 'Setup effort',
        local: 'Higher upfront: hardware and workflow engineering',
        hosted: 'Minutes to first API call',
    },
    {
        aspect: 'Peak scaling',
        local: 'Bounded by your hardware',
        hosted: 'Elastic by default',
    },
];

export default function PipelinesPage() {
    return (
        <div className="pipelines-page">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        toJsonLd(
                            breadcrumbSchema([
                                { name: 'Home', path: '/' },
                                { name: 'Local Generative AI Pipelines', path: '/pipelines' },
                            ]),
                            ...SERVICES.map((service) => serviceSchema(service)),
                            faqPageSchema(PIPELINE_FAQS),
                        ),
                    ),
                }}
            />
            <div className="wrapper">
                <header className="pipelines-header">
                    <span className="label">Expertise</span>
                    <h1>Local generative AI pipelines.</h1>
                    <p className="pipelines-standfirst">
                        Production systems for AI models, running on hardware you
                        control. Built for brands, agencies, and product teams whose
                        output has to repeat, scale, and pass review.
                    </p>
                </header>

                <div className="pipelines-content">
                    {/* Definition block: quotable by answer engines */}
                    <section className="definition-block">
                        <h2>What is a local generative AI pipeline?</h2>
                        <p>
                            A local generative AI pipeline runs AI models on hardware you
                            control instead of a hosted API. Inputs are controlled, settings are
                            versioned, and every step from raw input to delivered asset repeats
                            reliably. Assets under NDA never leave your network. Costs stay flat
                            no matter how much you generate. And a system you validated last
                            quarter still behaves the same this quarter.
                        </p>
                        <p>
                            The range is wider than most people expect. Generative image
                            and video pipelines in ComfyUI. Self-hosted language models
                            for drafting, extraction, classification, and internal
                            assistants. Agents running on local hardware around the clock.
                            Different models, one engineering standard: controlled inputs,
                            versioned settings, repeatable output.
                        </p>
                    </section>

                    <h2>Local versus hosted APIs</h2>
                    <div className="comparison-table-wrap">
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th scope="col">Aspect</th>
                                    <th scope="col">Local / self-hosted</th>
                                    <th scope="col">Hosted API</th>
                                </tr>
                            </thead>
                            <tbody>
                                {COMPARISON_ROWS.map((row) => (
                                    <tr key={row.aspect}>
                                        <th scope="row">{row.aspect}</th>
                                        <td>{row.local}</td>
                                        <td>{row.hosted}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="comparison-note">
                        Both columns have their place. The default here is local-first,
                        because the production constraints that come up most are
                        confidentiality, cost predictability, and reproducibility. That
                        is where local wins all three.
                    </p>

                    <h2>How projects run</h2>
                    <ol className="manifesto-list">
                        <li>
                            <strong>Scope against throughput.</strong> Hardware and architecture
                            follow your actual production volume, not benchmarks. Small teams
                            often run fine on one good GPU.
                        </li>
                        <li>
                            <strong>Engineer the system.</strong> Generation graphs become
                            versioned, documented workflows with controlled inputs; LLM setups
                            get pinned models and evaluated prompts. Custom nodes and trained
                            LoRAs close the gap between base models and brand requirements.
                        </li>
                        <li>
                            <strong>Build the interface.</strong> The people using the pipeline
                            are designers and editors, not engineers. Interfaces are web apps
                            that make the pipeline usable without reading its source.
                        </li>
                        <li>
                            <strong>Hand it over.</strong> Documented workflows, team training,
                            and tools your operators run themselves. A system that only works
                            with outside help is not finished.
                        </li>
                    </ol>

                    <h2>Capabilities</h2>
                    <div className="pipeline-services">
                        {SERVICES.map((service, i) => (
                            <section className="pipeline-service" id={service.id} key={service.id}>
                                <span className="capability-row-number">{String(i + 1).padStart(2, '0')}</span>
                                <div>
                                    <h3>{service.title}</h3>
                                    {service.longDescription?.map((paragraph) => (
                                        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    <h2>Questions</h2>
                    <div className="faq-list faq-list-page">
                        {PIPELINE_FAQS.map((faq) => (
                            <details className="faq-item" key={faq.question}>
                                <summary className="faq-question">{faq.question}</summary>
                                <p className="faq-answer">{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>

                <div className="pipelines-actions">
                    <TrackedLink
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="btn-primary"
                        eventName="contact_click"
                        eventParams={{ location: 'pipelines_page' }}
                    >
                        Get in touch
                    </TrackedLink>
                    <Link href="/#work" className="btn-secondary">
                        See selected work
                    </Link>
                </div>
            </div>
        </div>
    );
}
