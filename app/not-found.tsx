import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="about-page">
            <div className="wrapper">
                <header className="about-page-header">
                    <span className="label">404</span>
                    <h1>Page not found.</h1>
                </header>
                <div className="about-page-content">
                    <p>This page does not exist, or it moved. The homepage has everything that does.</p>
                    <Link href="/" className="btn-secondary">Back to the homepage</Link>
                </div>
            </div>
        </div>
    );
}
