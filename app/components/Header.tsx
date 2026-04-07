"use client";

import Link from 'next/link';
import { useState } from 'react';
import { SITE_CONFIG } from '../../lib/constants';
import TrackedLink from './TrackedLink';

const NAV_LINKS = [
    { href: '/#work', label: 'Work' },
    { href: '/#about', label: 'About' },
    { href: '/#services', label: 'Expertise' },
    { href: '/blog', label: 'Writing' },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="site-header">
            <div className="header-left">
                <Link href="/" className="header-logo" title={SITE_CONFIG.title}>
                    <img src="/assets/imgs/JH_Logo-black.png" alt={`${SITE_CONFIG.title} Logo`} />
                </Link>
                <Link href="/" className="header-logo-text">
                    <div className="site-title">Joost Helfers</div>
                </Link>
            </div>

            <nav className="header-nav">
                {NAV_LINKS.map((link) => (
                    <Link key={link.href} href={link.href} className="header-nav-link">
                        {link.label}
                    </Link>
                ))}
            </nav>

            <div className="header-right">
                <TrackedLink
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="cta-button-small"
                    eventName="contact_click"
                    eventParams={{ location: 'header' }}
                >
                    Get in touch
                </TrackedLink>

                <button
                    className="mobile-menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <span className={`hamburger ${menuOpen ? 'open' : ''}`} />
                </button>
            </div>

            {menuOpen && (
                <nav className="mobile-nav">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="mobile-nav-link"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <TrackedLink
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="mobile-nav-link mobile-nav-cta"
                        eventName="contact_click"
                        eventParams={{ location: 'mobile_nav' }}
                        onClick={() => setMenuOpen(false)}
                    >
                        Get in touch
                    </TrackedLink>
                </nav>
            )}
        </header>
    );
}
