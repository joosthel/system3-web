import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import { PACKAGES } from '@/lib/data';
import { breadcrumbSchema, packageOfferSchema, toJsonLd } from '@/lib/schema';
import { pageMetadata } from '@/lib/metadata';
import TrackedLink from '../components/TrackedLink';

export const metadata: Metadata = pageMetadata(
    'Packages: Book Local AI Audit, Pilot Pipeline, or Production Build',
    'Four fixed-scope engagements with transparent starting prices: Readiness Audit from €2,500, Pilot Pipeline from €6,000, Production Build from €15,000, Agent-Ready Sprint from €3,500. Local generative AI pipelines and systems, built in Berlin, delivered remote.',
    '/packages'
);

const formatPrice = (value: number) =>
    `€${value.toLocaleString('en-US')}`;

const INCLUDED = [
    'Fixed price quoted before work starts',
    'Documentation your team can follow without help',
    'On-site in Berlin, remote across Europe and worldwide',
    'Assets stay on your hardware for everything local',
];

export default function PackagesPage() {
    return (
        <div className="packages-page">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        toJsonLd(
                            breadcrumbSchema([
                                { name: 'Home', path: '/' },
                                { name: 'Packages', path: '/packages' },
                            ]),
                            ...PACKAGES.map((pkg) => packageOfferSchema(pkg)),
                        ),
                    ),
                }}
            />
            <div className="wrapper">
                <header className="packages-header">
                    <span className="label">Packages</span>
                    <h1>Four ways to start.</h1>
                    <p className="packages-standfirst">
                        Fixed scope, fixed price, no discovery-call maze. Pick the drawer
                        that fits, write two sentences about your situation, and you get
                        a concrete quote and a start date.
                    </p>
                </header>

                <div className="package-grid">
                    {PACKAGES.map((pkg, i) => (
                        <section className="package-card" id={pkg.id} key={pkg.id}>
                            <span className="capability-row-number">{String(i + 1).padStart(2, '0')}</span>
                            <h2 className="package-name">{pkg.name}</h2>
                            <p className="package-tagline">{pkg.tagline}</p>
                            <p className="package-terms">
                                <span className="package-price">from {formatPrice(pkg.priceFrom)}</span>
                                <span className="package-duration">{pkg.duration}</span>
                            </p>
                            <p className="package-description">{pkg.description}</p>
                            <ul className="package-deliverables">
                                {pkg.deliverables.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <p className="package-bestfor">
                                <span className="label">Best for</span> {pkg.bestFor}
                            </p>
                            <TrackedLink
                                href={`mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(`Package inquiry: ${pkg.name}`)}`}
                                className="btn-secondary btn-sm package-cta"
                                eventName="package_inquiry"
                                eventParams={{ package: pkg.id }}
                            >
                                Ask about {pkg.name}
                            </TrackedLink>
                        </section>
                    ))}
                </div>

                <section className="packages-included">
                    <h2>Every package includes</h2>
                    <ul className="packages-included-list">
                        {INCLUDED.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <p className="comparison-note">
                        Prices are entry points. Final quotes depend on scope, and larger
                        builds get scoped after an audit or pilot so nobody commits blind.
                    </p>
                </section>

                <div className="pipelines-actions">
                    <TrackedLink
                        href={`mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent('Package inquiry')}`}
                        className="btn-primary"
                        eventName="contact_click"
                        eventParams={{ location: 'packages_page' }}
                    >
                        Get in touch
                    </TrackedLink>
                </div>
            </div>
        </div>
    );
}
