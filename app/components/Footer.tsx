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

        <footer className="w-full bg-black text-white py-12 md:py-20 mt-20">
            <div className="container mx-auto px-4 max-w-[1440px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    {/* Left Column: Taglines */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="text-xl font-bold tracking-tight text-white">
                            JOOST HELFERS
                        </Link>
                        <div className="flex flex-col gap-2 text-gray-400 max-w-sm">
                            <p>{SITE_CONFIG.description}</p>
                            <p>© {new Date().getFullYear()} All Rights Reserved.</p>
                        </div>
                    </div>

                    {/* Right Column: Sitemap */}
                    <div className="flex flex-col gap-4 md:items-start text-left">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Sitemap</span>
                        <nav className="flex flex-col gap-2 text-sm font-medium">
                            <Link href="/#work" className="text-white hover:text-gray-300 transition-colors">Selected Work</Link>
                            <Link href="/#services" className="text-white hover:text-gray-300 transition-colors">Expertise</Link>
                            <Link href="/#about" className="text-white hover:text-gray-300 transition-colors">About</Link>
                            <Link href="/#contact" className="text-white hover:text-gray-300 transition-colors">Contact</Link>
                            <div className="h-2"></div>
                            <Link href="/imprint" className="text-xs text-gray-500 hover:text-white transition-colors">Imprint</Link>
                            <Link href="/privacy" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
                        </nav>
                    </div>
                </div>

                {/* Bottom Row: Dynamic Time & Location */}
                <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-gray-500 uppercase tracking-widest font-medium">
                    <div>
                        Based in Berlin, Germany
                    </div>
                    <div>
                        Local Time: {time}
                    </div>
                </div>
            </div>
        </footer>
    );
}
