import Link from 'next/link';
import { SITE_CONFIG } from '../../lib/constants';

export default function Header() {
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

            <div className="header-right">
                <a href={`mailto:${SITE_CONFIG.email}`} className="cta-button cta-button-small">
                    <span className="cta-text">Send me an E-Mail</span>
                </a>
            </div>
        </header>
    );
}
