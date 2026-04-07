export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    url: string;
    date?: string;
    tags?: string[];
    badge?: string;
}

export const PROJECTS: Project[] = [
    {
        id: 'prompt-engine',
        title: 'Prompt Enhancement Engine',
        description: 'A live AI tool that turns a creative brief and reference images into a full set of optimised, consistent prompts.',
        image: '/assets/imgs/proj_prompt-engine/promptenhancer_screenshot.png',
        url: '/projects/prompt-engine',
        date: '2025-03-01',
        tags: ['Next.js', 'TypeScript', 'OpenRouter', 'Vercel', 'AI Product'],
        badge: 'Live Project'
    },
    {
        id: 'ai-video-campaign',
        title: 'AI Video Production for a Global Brand Campaign',
        description: 'From storyboard to edited campaign video — generative AI visual pipeline.',
        image: '/assets/imgs/proj_ai-video-campaign/cover.webp',
        url: '/projects/ai-video-campaign',
        date: '2025-01-15',
        tags: ['AI Visuals', 'Generative Video', 'ComfyUI', 'Prompt Engineering'],
        badge: 'NDA — Process Only'
    },
    {
        id: 'ai-pipeline-backend',
        title: 'AI Pipeline Backend & Interactive Segmentation Tool',
        description: 'Custom ComfyUI workflows + web-based segmentation interface for an AI asset platform.',
        image: '/assets/imgs/proj_ai-pipeline-backend/cover.webp',
        url: '/projects/ai-pipeline-backend',
        date: '2024-11-01',
        tags: ['ComfyUI', 'Python', 'Computer Vision', 'API Design'],
        badge: 'NDA — Process Only'
    },
    {
        id: 'souly-boondawg',
        title: 'Souly & Boondawg - I got this feeling',
        description: 'A hybrid AI music video production transforming greenscreen footage into compelling visuals.',
        image: '/assets/imgs/proj_Souly-Boondawg-igotthisfeelling/Souly-Boondawg_igotthisfeeling-02.webp',
        url: '/projects/souly-boondawg',
        date: '2023-11-20',
        tags: ['AI Video', 'Music Video', 'Stable Diffusion', 'VFX']
    },
    {
        id: 'inyo-digital-twin',
        title: 'INYO Mobility - Digital Twin Platform',
        description: 'Interactive 3D visualization solutions for vehicle design optimization | Full Stack development',
        image: '/assets/imgs/proj_INYO-Digital-Twin/Screenshot_3D-View.webp',
        url: '/projects/inyo-digital-twin',
        date: '2023-09-01',
        tags: ['Digital Twin', 'React', 'Three.js', 'Web App']
    },
    {
        id: 'msc-arcadia',
        title: 'DesignMorphine MSc - Project Arcadia',
        description: "Final Project for my M. Sc. in Computational and Advanced Design exploring parametric architecture.",
        image: '/assets/imgs/proj_MSc-CAD/MSc-CAD_04.webp',
        url: '/projects/msc-arcadia',
        date: '2022-09-01',
        tags: ['Computational Design', 'Architecture', 'Houdini', 'Research']
    }
];

export interface ActiveProject {
    id: string;
    title: string;
    description: string;
    status: 'Live' | 'In Progress' | 'Exploring';
    url?: string;
}

export const ACTIVE_PROJECTS: ActiveProject[] = [
    {
        id: 'prompt-engine',
        title: 'Prompt Enhancement Engine',
        description: 'An AI tool that turns a creative brief and reference images into a full set of optimised, consistent prompts.',
        status: 'Live',
        url: 'https://promptenhancer.joosthelfers.com'
    }
];

export const SERVICES = [
    {
        id: 'ai-visuals',
        title: 'AI Visual Production',
        description: 'Campaign-grade AI visuals and video. I work with generative models to produce imagery that meets the accuracy and quality demands of real brand work — product consistency, text fidelity, and art direction across shots.',
        image: '/assets/imgs/services/service_cgi.webp',
        tags: ['Generative AI', 'ComfyUI', 'Prompt Engineering', 'Video Production', 'Campaign Visuals', 'Brand Imagery']
    },
    {
        id: 'automation',
        title: 'AI Automation & Custom Pipelines',
        description: 'I build custom, scalable pipelines that automate or enhance design and content creation, enabling productive outcomes and faster turnaround times. These workflows enable rapid iteration, customization and push the boundaries on what\'s possible with technology.',
        image: '/assets/imgs/services/service_truck.webp',
        tags: ['ComfyUI', 'Generative Workflows', 'AI Integration', 'Python', 'Custom LoRAs', 'Cloud Integration', 'R&D', 'Agentic Workflows', 'AI Strategy']
    },
    {
        id: 'digital-platforms',
        title: 'Real-Time & Digital Twin Platforms',
        description: 'I design functional environments, where data and space converge. From digital twins to interactive configurators, these platforms transform complex systems into intuitive experiences for engineering, sales and storytelling. Built with React, Three.js, and modern web technologies.',
        image: '/assets/imgs/services/service_digital-twin.webp',
        tags: ['Digital Twin Development', 'React / Next.js', 'Three.js', 'Unreal Engine', 'Data Integration', 'Platform Development']
    }
];
