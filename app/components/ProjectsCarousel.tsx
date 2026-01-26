"use client";

import { useRef } from 'react';
import Link from 'next/link';

interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    url: string;
}

export default function ProjectsCarousel({ projects }: { projects: Project[] }) {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const { current } = carouselRef;
            const scrollAmount = current.clientWidth * 0.8; // Scroll 80% of view width

            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="carousel-container-outer">
            <div className="carousel-container" ref={carouselRef}>
                {projects.map((post) => (
                    <Link key={post.id} href={post.url} className="portfolio-card">
                        <div className="portfolio-image-wrapper">
                            {post.image && (
                                <img src={post.image} alt={post.title} loading="lazy" />
                            )}
                        </div>
                        <div className="portfolio-card-content">
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                            <span className="view-project">VIEW PROJECT →</span>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="carousel-controls">
                <button
                    className="carousel-prev"
                    aria-label="Previous projects"
                    onClick={() => scroll('left')}
                >
                    ‹
                </button>
                <button
                    className="carousel-next"
                    aria-label="Next projects"
                    onClick={() => scroll('right')}
                >
                    ›
                </button>
            </div>
        </div>
    );
}
