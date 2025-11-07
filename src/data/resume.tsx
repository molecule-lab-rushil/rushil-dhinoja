import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rushil Dhinoja",
  initials: "RD",
  url: "https://rushildhinoja.me",
  location: "Bengaluru, KA",
  locationLink: "https://www.google.com/maps/place/bengalur",
  description:
    "Frontend Engineer. Passionate about building great products and helping others grow.",
  summary:
    "Frontend Engineer passionate about crafting exceptional user experiences through React and Next.js. I've built scalable micro frontend architectures, optimized performance for real-time systems, and architected company-wide component libraries. Currently building at [Transak Labs](/#work), where I focus on creating seamless integrations and improving developer experience. Previously, I've worked on everything from real-time chat systems to unified HRMS platforms, always with a focus on performance, scalability, and user engagement. When I'm not coding, you'll find me in the gym, experimenting in the kitchen, or diving into a good book.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "mailto:dhinoja.rushil17@gmail.com",
    tel: "+91-7016613715",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/molecule-lab-rushil",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rushil-dhinoja-4b6a83187/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/rushildhinoja17",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:dhinoja.rushil17@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Transak Labs",
      href: "https://transak.com/",
      badges: [],
      location: "Bengaluru, KA",
      title: "Software Engineer 2",
      logoUrl: "/transak.jpeg",
      start: "March 2024",
      end: "Present",
      description:
        "Integrated delegated authentication using One-Time Tokens (OTT) to reduce login friction and enhance security. Implemented dark mode theme with optimized CSS variables for better user experience. Established testing framework with Vitest and Playwright to improve coverage and reduce defects. Architected company-wide React component library with Storybook documentation and automated testing to accelerate UI development.",
    },
    {
      company: "Onsurity",
      badges: [],
      href: "https://www.onsurity.com/",
      location: "Bengaluru, KA",
      title: "Software Engineer",
      logoUrl: "/onsurity.jpeg",
      start: "October 2023",
      end: "March 2024",
      description:
        "Engineered unified HRMS integration platform allowing partners to switch systems with minimal disruption, significantly reducing implementation time. Led critical migration of Virtual Private Accounts from Paytm to alternative banking partners, maintaining service continuity after regulatory changes.",
    },
    {
      company: "Jio Platforms Limited",
      href: "https://www.jio.com/",
      badges: [],
      location: "Bengaluru, KA",
      title: "Software Development Engineer",
      logoUrl: "/jioplatforms.jpeg",
      start: "November 2022",
      end: "October 2023",
      description:
        "Led development of the Onboarding Module, improving UI/UX to accelerate retailer onboarding with a scalable frontend architecture. Optimized React performance by reducing unnecessary re-renders and improving image handling, achieving high Lighthouse scores. Used DevTools Profiler for analysis and implemented efficient rendering strategies.",
    },
    {
      company: "Byju's",
      href: "https://byjus.com/",
      badges: [],
      location: "Bengaluru, KA",
      title: "Software Engineer",
      logoUrl: "/byjus.jpeg",
      start: "October 2021",
      end: "November 2022",
      description:
        "Migrated in-class chat system to micro front-end architecture with AWS AppSync and GraphQL, reducing message latency and supporting higher concurrent user engagement. Optimized front-end performance to handle high-volume messages per classroom session, improving message delivery efficiency. Engineered PDF generation system to create visually appealing monthly student reports from complex JSON data using Handlebars.js, Puppeteer, and Node.js.",
    },
  ],
  education: [
    {
      school: "GujaratGujarat Technological University",
      href: "https://www.gtu.ac.in/",
      degree: "Bachelors of Engineering, Computer Science",
      logoUrl: "/gtu.jpeg",
      start: "2019",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Molecule UI",
      href: "https://moleculeui.design",
      dates: "Jul 2025 - Present",
      active: true,
      description:
        "A modern React component library focused on intuitive interactions and seamless user experiences.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
        "Molecule UI",
        "Open Source",
      ],
      links: [
        {
          type: "Website",
          href: "https://moleculeui.design",
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: "Source",
          href: "https://github.com/molecule-lab/molecule-ui",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "",
      video: "/molecule-ui.mov",
    },
    {
      title: "Veronica AI",
      href: "https://tryveronica.com",
      dates: "April 2025 - Present",
      active: true,
      description:
        "Veronica is your silent operator — translating your intent into action, managing your world while you move forward. From inboxes to calendars, she keeps the chaos in check.",
      technologies: [
        "Next.js",
        "ExpressJS",
        "React Flow",
        "Typescript",
        "PostgreSQL",
        "Drizzle",
        "TailwindCSS",
        "Dodo Payments",
        "Shadcn UI",
        "Molecule UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://tryveronica.com",
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: "",
      video: "/veronica-ai.mov",
    },
    {
      title: "Aura.vote",
      href: "https://aura.vote",
      dates: "May 2025 - Jun 2025",
      active: true,
      description:
        "A multi-tenant voting app that helps SaaS companies collect feedback from their users and visualize it in a dashboard. Features an embeddable widget that can be integrated anywhere.",
      technologies: [
        "Next.js",
        "ExpressJS",
        "Typescript",
        "PostgreSQL",
        "Drizzle",
        "TailwindCSS",
        "Shadcn UI",
        "Molecule UI",
        "Paddle",
        "Multi Tenant",
      ],
      links: [
        {
          type: "Website",
          href: "https://aura.vote",
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: "",
      video: "/aura.mov",
    },
    {
      title: "Otter",
      href: "",
      dates: "Sep 2025 - Present",
      active: true,
      description:
        "An open-source RAG system that can be hosted on your own cloud, exposing endpoints to create and query RAG knowledge. Bring your own database and maintain full control over your data and infrastructure.",
      technologies: [
        "Fastify",
        "Typescript",
        "PostgreSQL",
        "NeonDB",
        "RAG",
        "Open Source",
        "tRPC",
        "Better Auth",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/molecule-lab/otter",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "/otter.png",
      video: "",
    },
  ],
} as const;
