"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SITE_CONFIG } from '../../lib/constants';
import TrackedLink from './TrackedLink';

export default function Footer() {
    const [time, setTime] = useState('');

    useEffect(() => {
        function updateBerlinTime() {
            try {
                const berlinTime = new Date().toLocaleTimeString('en-US', {
                    timeZone: 'Europe/Berlin',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                });
                setTime(`${berlinTime} CET`);
            } catch {
                setTime('Berlin, Germany');
            }
        }

        updateBerlinTime();
        const interval = setInterval(updateBerlinTime, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-top">
                    <div>
                        <Link href="/" className="footer-brand-name">Joost Helfers</Link>
                        <p className="footer-brand-desc">{SITE_CONFIG.description}</p>
                    </div>

                    <div className="footer-nav-groups">
                        <nav className="footer-nav">
                            <span className="footer-nav-heading">Navigate</span>
                            <Link href="/#work">Work</Link>
                            <Link href="/#services">Expertise</Link>
                            <Link href="/#about">About</Link>
                            <Link href="/blog">Writing</Link>
                        </nav>

                        <nav className="footer-nav">
                            <span className="footer-nav-heading">Connect</span>
                            <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                            <TrackedLink
                                href="/assets/pdf/CV-Helfers.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                eventName="download_cv"
                            >
                                CV (PDF)
                            </TrackedLink>
                        </nav>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-legal">
                        <span>&copy; {new Date().getFullYear()}</span>
                        <Link href="/imprint">Imprint</Link>
                        <Link href="/privacy">Privacy</Link>
                    </div>
                    <div className="footer-location">
                        Berlin {time && `· ${time}`}
                    </div>
                </div>
            </div>
        </footer>
    );
}
