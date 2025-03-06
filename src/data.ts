import { Project } from "./types";
import {Technology } from "./types";
export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online store with product listings, cart functionality, and checkout process.",
    fullDescription: "A comprehensive e-commerce solution built with React and Node.js. Features include user authentication, product search, filtering, shopping cart, payment processing integration, and order tracking. The platform is fully responsive and offers an intuitive shopping experience.",
    image: "https://github.com/KaikyPires/Portifolio/blob/main/src/docs/Nossa%20Arena.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
    demoLink: "https://example.com/ecommerce",
    githubLink: "https://github.com/yourusername/ecommerce"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity tool for organizing tasks with drag-and-drop interface and team collaboration features.",
    fullDescription: "This task management application helps teams stay organized with features like task creation, assignment, status tracking, and deadline management. Built with a focus on user experience, it includes drag-and-drop functionality, color-coding, and real-time updates.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Redux", "Firebase", "Material UI"],
    demoLink: "https://example.com/taskapp",
    githubLink: "https://github.com/yourusername/taskapp"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A professional portfolio website showcasing skills, projects, and contact information.",
    fullDescription: "My personal portfolio website designed to showcase my work and skills. Built with React and styled with Tailwind CSS, it features smooth animations, responsive design, and an intuitive user interface. The site includes sections for projects, about me, and a contact form.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoLink: "https://yourportfolio.com",
    githubLink: "https://github.com/yourusername/portfolio"
  }
];

export const socialLinks = {
  github: "",
  linkedin: "https://www.linkedin.com/in/kaiky-pires/",
  email: "kaiky.pires@yahoo.com.br"
};
export const technologies: Technology[] = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  }
];
