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
                    hour12: false
                });
                setTime(berlinTime + ' CET');
            } catch {
                setTime('Berlin, Germany');
            }
        }

        updateBerlinTime();
        const interval = setInterval(updateBerlinTime, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer style={{
            background: '#1a1a1a',
            color: 'rgba(250,250,248,0.5)',
            padding: '4rem 2.5rem 2rem',
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                {/* Top: Name + Nav */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '3rem',
                    marginBottom: '4rem',
                }}>
                    <div>
                        <Link href="/" style={{
                            fontFamily: "'Doto'",
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            color: '#fafaf8',
                            letterSpacing: '-0.01em',
                        }}>
                            Joost Helfers
                        </Link>
                        <p style={{
                            marginTop: '0.75rem',
                            fontSize: '0.8125rem',
                            lineHeight: 1.6,
                            maxWidth: '360px',
                            color: 'rgba(250,250,248,0.5)',
                        }}>
                            {SITE_CONFIG.description}
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '3rem' }}>
                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <span style={{
                                fontFamily: "'Doto'",
                                fontSize: '0.625rem',
                                letterSpacing: '0.06em',
                                textTransform: 'uppercase',
                                color: 'rgba(250,250,248,0.5)',
                                marginBottom: '0.25rem',
                            }}>Navigate</span>
                            <Link href="/#work" style={{ fontSize: '0.8125rem', color: 'rgba(250,250,248,0.5)', transition: 'color 0.15s ease' }}>Work</Link>
                            <Link href="/#services" style={{ fontSize: '0.8125rem', color: 'rgba(250,250,248,0.5)', transition: 'color 0.15s ease' }}>Expertise</Link>
                            <Link href="/#about" style={{ fontSize: '0.8125rem', color: 'rgba(250,250,248,0.5)', transition: 'color 0.15s ease' }}>About</Link>
                            <Link href="/blog" style={{ fontSize: '0.8125rem', color: 'rgba(250,250,248,0.5)', transition: 'color 0.15s ease' }}>Writing</Link>
                        </nav>

                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <span style={{
                                fontFamily: "'Doto'",
                                fontSize: '0.625rem',
                                letterSpacing: '0.06em',
                                textTransform: 'uppercase',
                                color: 'rgba(250,250,248,0.5)',
                                marginBottom: '0.25rem',
                            }}>Connect</span>
                            <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8125rem', color: 'rgba(250,250,248,0.5)', transition: 'color 0.15s ease' }}>LinkedIn</a>
                            <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8125rem', color: 'rgba(250,250,248,0.5)', transition: 'color 0.15s ease' }}>GitHub</a>
                            <TrackedLink
                                href="/assets/pdf/CV-Helfers.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ fontSize: '0.8125rem', color: 'rgba(250,250,248,0.5)', transition: 'color 0.15s ease' }}
                                eventName="download_cv"
                            >
                                CV (PDF)
                            </TrackedLink>
                        </nav>
                    </div>
                </div>

                {/* Bottom: Legal + Location */}
                <div style={{
                    borderTop: '1px solid rgba(250,250,248,0.08)',
                    paddingTop: '1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                }}>
                    <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.6875rem', color: 'rgba(250,250,248,0.5)' }}>
                        <span>&copy; {new Date().getFullYear()}</span>
                        <Link href="/imprint" style={{ color: 'rgba(250,250,248,0.5)', fontSize: '0.6875rem' }}>Imprint</Link>
                        <Link href="/privacy" style={{ color: 'rgba(250,250,248,0.5)', fontSize: '0.6875rem' }}>Privacy</Link>
                    </div>
                    <div style={{
                        fontFamily: "'Doto'",
                        fontSize: '0.625rem',
                        letterSpacing: '0.04em',
                        color: 'rgba(250,250,248,0.5)',
                        textTransform: 'uppercase',
                    }}>
                        Berlin {time && `· ${time}`}
                    </div>
                </div>
            </div>
        </footer>
    );
}
