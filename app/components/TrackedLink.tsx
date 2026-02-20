'use client';

import { sendGAEvent } from '@next/third-parties/google';
import React from 'react';

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    eventName: string;
    eventParams?: Record<string, any>;
}

export default function TrackedLink({ eventName, eventParams, onClick, children, ...props }: TrackedLinkProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        sendGAEvent({ event: eventName, ...eventParams });
        if (onClick) onClick(e);
    };

    return (
        <a onClick={handleClick} {...props}>
            {children}
        </a>
    );
}
