"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SITE_CONFIG } from '../../lib/constants';

export default function Footer() {
    const [time, setTime] = useState('Loading time...');

    useEffect(() => {
        function updateBerlinTime() {
            try {
                const berlinTime = new Date().toLocaleTimeString('en-US', {
                    timeZone: 'Europe/Berlin',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false
                });
                setTime(berlinTime + ' CET');
            } catch (e) {
                setTime('Berlin, Germany');
            }
        }

        updateBerlinTime();
        const interval = setInterval(updateBerlinTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="site-footer">
            <div className="footer-main">
                <div className="footer-column">
                    <div className="footer-logo">
                        <img src="/assets/imgs/JH_Logo-black.png" alt="Logo" />
                        <h2>Joost Helfers</h2>
                    </div>
                    <p className="footer-description">{SITE_CONFIG.description}</p>
                </div>

                <div className="footer-column">
                    <nav className="footer-nav">
                        <ul className="footer-links">
                            <li><Link href="/">HOME</Link></li><br />
                            <li><a href="/assets/pdf/CV-Helfers.pdf" target="_blank">CV</a></li><br />
                            <li><Link href="/privacy/">PRIVACY</Link></li><br />
                            <li><Link href="/imprint/">IMPRINT</Link></li><br />
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="footer-spacer"></div>
            <div className="footer-bottom">
                <div className="footer-bottom-column">
                    <p>Available everywhere, currently in:</p>
                    <p>Berlin, Germany</p>
                    <p id="berlin-time">{time}</p>
                </div>
                <div className="footer-bottom-column">
                    <p><a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a></p>
                    <div className="social-links">
                        <a href={`https://github.com/${SITE_CONFIG.github}`}>GitHub</a>
                        <a href={`https://instagram.com/${SITE_CONFIG.instagram}`}>Instagram</a>
                        <a href={`https://linkedin.com/in/${SITE_CONFIG.linkedin}`}>LinkedIn</a>
                    </div>
                </div>

                <div className="footer-bottom-column">
                    <p>&copy; {new Date().getFullYear()} Joost Helfers</p>
                </div>
            </div>
        </footer>
    );
}
