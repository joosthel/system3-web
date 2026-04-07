import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { SITE_CONFIG } from '../lib/constants';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-body',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_CONFIG.url),
    title: {
        default: SITE_CONFIG.title,
        template: `%s | ${SITE_CONFIG.author}`,
    },
    description: SITE_CONFIG.description,
    openGraph: {
        title: SITE_CONFIG.title,
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.url,
        siteName: SITE_CONFIG.title,
        locale: 'en_US',
        type: 'website',
    },
    alternates: {
        canonical: '/',
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: '#fafaf8',
};

import JsonLd from './components/JsonLd';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.variable}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Doto:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
                <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
                <link rel="icon" type="image/png" href="/assets/favicon/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/assets/favicon/favicon.svg" />
                <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
                <meta name="apple-mobile-web-app-title" content="JH" />
                <link rel="manifest" href="/assets/favicon/site.webmanifest" />
            </head>
            <body>
                <GoogleAnalytics gaId="G-FV9Q5RL89T" />
                <JsonLd />
                <Header />
                <main className="page-content">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
