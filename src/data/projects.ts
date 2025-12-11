export type Project = {
    id: number;
    title: string;
    description: string;
    technologies?: string[];
    link: string;
    video?: string;
    screenshots?: string[];
};

export const projects: Project[] = [
    {
    id: 1,
    title: "Snippetly",
    description: "A SaaS app for creating, sharing, and using code snippets.",
    link: "https://snippetly-lyart.vercel.app/",
    technologies: ["React", "TypeScript", "Tailwind", "Node.js", "Express", "MongoDB"],
    },
    {
    id: 2,
    title: "Free-Commerce",
    description: "A community platform to give away items and swap goods.",
    link: "https://freecommerce.com",
    },
    {id: 3,
    title: "Muir Plumbing",
    description: "A local plumbing business.",
    video: "src/assets/Muir Plumbing - Professional Plumbing Services _ Emergency Repairs.mp4",
    link: "https://freecommerce.com",
    screenshots: ["src/assets/images/muir-home.webp", "src/assets/images/muir-about.webp", "src/assets/images/muir-services.webp"],
    technologies: ["React", "Tailwind", "Framer Motion"],
    },
    
    
]