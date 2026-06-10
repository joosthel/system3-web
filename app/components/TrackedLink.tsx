'use client';

import { track } from '@vercel/analytics';
import React from 'react';

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    eventName: string;
    eventParams?: Record<string, string | number | boolean | null>;
}

export default function TrackedLink({ eventName, eventParams, onClick, children, ...props }: TrackedLinkProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        track(eventName, eventParams);
        if (onClick) onClick(e);
    };

    return (
        <a onClick={handleClick} {...props}>
            {children}
        </a>
    );
}
