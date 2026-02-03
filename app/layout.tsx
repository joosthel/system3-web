import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { SITE_CONFIG } from '../lib/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: '#ffffff',
};

import JsonLd from './components/JsonLd';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
                <link rel="icon" type="image/png" href="/assets/favicon/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/assets/favicon/favicon.svg" />
                <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
                <meta name="apple-mobile-web-app-title" content="JH" />
                <link rel="manifest" href="/assets/favicon/site.webmanifest" />
            </head>
            <body className={inter.className}>
                <JsonLd />
                <Header />
                <main className="page-content">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
