export type Project = {
    id: number;
    title: string;
    description: string;
    link: string;
};

export const projects: Project[] = [
    {
    id: 1,
    title: "Snippetly",
    description: "A SaaS app for creating, sharing, and using code snippets.",
    link: "https://snippetly-lyart.vercel.app/",
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
    link: "https://freecommerce.com",
    }
]