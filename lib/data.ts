export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    url: string;
    date?: string;
    tags?: string[];
}

export const PROJECTS: Project[] = [
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
        id: 'inyo-viz',
        title: 'INYO Mobility - Various Visualizations',
        description: "3D visualizations and digital marketing materials for INYO Mobility's electric vehicle ecosystem",
        image: '/assets/imgs/proj_INYO-Viz/INYO-Viz_06.webp',
        url: '/projects/inyo-viz',
        date: '2023-06-15',
        tags: ['3D Visualization', 'Product Rendering', 'Blender', 'Marketing']
    },
    {
        id: 'msc-arcadia',
        title: 'DesignMorphine MSc - Project Arcadia',
        description: "Final Project for my M. Sc. in Computational and Advanced Design exploring parametric architecture.",
        image: '/assets/imgs/proj_MSc-CAD/MSc-CAD_04.webp',
        url: '/projects/msc-arcadia',
        date: '2022-09-01',
        tags: ['Computational Design', 'Architecture', 'Houdini', 'Research']
    },
    {
        id: 't-cell',
        title: 'T-Cell AG - Explainer Videos',
        description: "Series of videos for the T-Cell AG, explaining the hydrogen-fuel-cell technology.",
        image: '/assets/imgs/proj_T-Cell/T-Cell_Hero.webp',
        url: '/projects/t-cell',
        date: '2023-05-01',
        tags: ['Video Production', 'Motion Graphics', 'Scientific Visualization']
    }
];

export const SERVICES = [
    {
        id: 'brand-assets',
        title: 'High-Impact Brand & Media Assets',
        description: 'I create cinematic, high-fidelity visuals that translate abstract ideas and complex topics into clear, engaging imagery. With roots in architecture and 3D design, my imagery balances precision, clarity and emotions.',
        image: '/assets/imgs/services/service_cgi.webp',
        tags: ['3D Visualization', 'Renderings', 'Motion Graphics', 'Blender', 'Houdini', 'Product Animation', 'Brand Imagery']
    },
    {
        id: 'automation',
        title: 'Custom Automation Pipelines',
        description: 'I build custom, scalable pipelines that automate or enhance design and content creation, enabling productive outcomes and faster turnaround times. These workflows enable rapid iteration, customization and push the boundaries on what\'s possible with technology.',
        image: '/assets/imgs/services/service_truck.webp',
        tags: ['ComfyUI', 'Generative Workflows', 'AI Integration', 'Python', 'Custom LoRAs', 'Cloud Integration', 'R&D', 'Agentic Workflows', 'AI Strategy']
    },
    {
        id: 'digital-platforms',
        title: 'Real-Time & Digital Twin Platforms',
        description: 'I design functional environments, where data and space converge. From digital twins to interactive configurators, these platforms transform complex systems into intuitive experiences for engineering, sales and storytelling.',
        image: '/assets/imgs/services/service_digital-twin.webp',
        tags: ['Digital Twin Development', 'Unreal Engine', 'Three.js', 'React / Next.js', 'Data Integration', 'Plattform Development']
    }
];
