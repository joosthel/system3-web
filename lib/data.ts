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
        tags: ['Next.js', 'TypeScript', 'OpenRouter', 'Gemini', 'DeepSeek', 'Vercel', 'Prompt Engineering', 'AI Product'],
        badge: 'Live Project'
    },
    {
        id: 'ai-video-campaign',
        title: 'AI Video Production for a Global Brand Campaign',
        description: 'A generative AI visual pipeline from storyboard to edited campaign video.',
        image: '/assets/imgs/proj_ai-video-campaign/cover.webp',
        url: '/projects/ai-video-campaign',
        date: '2025-01-15',
        tags: ['AI Visuals', 'Generative Video', 'ComfyUI', 'Prompt Engineering', 'Video Editing'],
        badge: 'NDA. Process only.'
    },
    {
        id: 'ai-pipeline-backend',
        title: 'AI Pipeline Backend & Interactive Segmentation Tool',
        description: 'Custom ComfyUI workflows and a web-based segmentation interface for an AI asset platform.',
        image: '/assets/imgs/proj_ai-pipeline-backend/cover.webp',
        url: '/projects/ai-pipeline-backend',
        date: '2024-11-01',
        tags: ['ComfyUI', 'Python', 'Computer Vision', 'API Design', 'Prototyping', 'Full Stack'],
        badge: 'NDA. Process only.'
    },
    {
        id: 'souly-boondawg',
        title: 'Souly & Boondawg. I got this feeling.',
        description: 'A hybrid AI music video that turns greenscreen footage into a finished visual through Stable Diffusion and VFX compositing.',
        image: '/assets/imgs/proj_Souly-Boondawg-igotthisfeelling/Souly-Boondawg_igotthisfeeling-02.webp',
        url: '/projects/souly-boondawg',
        date: '2023-11-20',
        tags: ['AI Video Generation', 'Video-to-Video', 'ComfyUI', 'Visual Storytelling']
    },
    {
        id: 'inyo-digital-twin',
        title: 'INYO Mobility. Digital Twin Platform.',
        description: 'An interactive 3D platform for vehicle design optimisation, built full-stack with React and Three.js.',
        image: '/assets/imgs/proj_INYO-Digital-Twin/Screenshot_3D-View.webp',
        url: '/projects/inyo-digital-twin',
        date: '2023-09-01',
        tags: ['Digital Twin', '3D Visualization', 'Real-time Rendering', 'Data Integration', 'Full Stack Development']
    },
    {
        id: 't-cell',
        title: 'T-Cell AG. Explainer Videos.',
        description: 'A series of videos for T-Cell AG explaining their hydrogen fuel cell technology and the impact it can have on the energy transition.',
        image: '/assets/imgs/proj_T-Cell/T-Cell_Hero.webp',
        url: '/projects/t-cell',
        date: '2023-05-01',
        tags: ['Video Production', 'Motion Graphics', 'Scientific Visualization', 'Hydrogen Technology']
    },
    {
        id: 'inyo-viz',
        title: 'INYO Mobility. Various Visualizations.',
        description: '3D visualisations and digital marketing materials for INYO Mobility\'s electric vehicle ecosystem.',
        image: '/assets/imgs/proj_INYO-Viz/INYO-Viz_06.webp',
        url: '/projects/inyo-viz',
        date: '2023-05-01',
        tags: ['3D Visualization', 'Product Rendering', 'Marketing Design', 'Motion Graphics']
    },
    {
        id: 'msc-arcadia',
        title: 'DesignMorphine MSc. Project Arcadia.',
        description: 'My final project for the MSc in Computational and Advanced Design. A deep exploration of parametric architecture.',
        image: '/assets/imgs/proj_MSc-CAD/MSc-CAD_04.webp',
        url: '/projects/msc-arcadia',
        date: '2022-09-01',
        tags: ['Grasshopper', 'Rhino', 'Python', 'Computational Design', 'Parametric Architecture']
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
        title: 'AI Visual Production & AI Film',
        description: 'Campaign-grade AI visuals, video, and film. I work with generative models to produce imagery that meets the accuracy and quality demands of real brand work. Product consistency across shots, readable text in-frame, and coherent art direction from the first hero image to the final edit.',
        image: '/assets/imgs/services/service_cgi.webp',
        tags: ['Generative AI', 'AI Film', 'ComfyUI', 'Prompt Engineering', 'Video Production', 'Campaign Visuals', 'Brand Imagery']
    },
    {
        id: 'automation',
        title: 'Generative Pipelines & Creative Infrastructure',
        description: 'Custom, scalable pipelines that automate the repetitive parts of design and content production. The result is faster turnaround, reliable outputs, and a clear path from an idea to a shippable asset. Built with ComfyUI, Python, and cloud infrastructure that teams can actually run.',
        image: '/assets/imgs/services/service_truck.webp',
        tags: ['ComfyUI', 'Generative Workflows', 'AI Integration', 'Python', 'Custom LoRAs', 'Cloud Integration', 'R&D', 'AI Strategy']
    },
    {
        id: 'agentic-presence',
        title: 'Agentic Systems & GEO',
        description: 'I make brands and portfolios readable for AI agents: llms.txt, structured data, machine-readable feeds, and MCP servers that let assistants query your content directly. More and more buying decisions start with a question to ChatGPT, Claude, or Perplexity instead of a search box; this is how you show up in the answer. Everything I offer here runs in production on this site first.',
        image: '/assets/imgs/lab/genai_screens.webp',
        tags: ['GEO', 'llms.txt', 'MCP Servers', 'Agentic Workflows', 'Structured Data', 'JSON-LD', 'Agent Discovery', 'Next.js']
    },
    {
        id: 'digital-platforms',
        title: 'Interactive Platforms & Creative Tools',
        description: 'Functional environments where data and space meet. Digital twins, interactive configurators, and internal creative tools that make complex systems legible for engineering, sales, and storytelling. Built with React and the modern web stack.',
        image: '/assets/imgs/services/service_digital-twin.webp',
        tags: ['Digital Twin Development', 'Interactive Configurators', 'React / Next.js', 'Real-Time 3D', 'Unreal Engine', 'Data Integration', 'Platform Development']
    }
];
