import {
  Aws,
  Azure,
  Django,
  Docker,
  Fastapi,
  Firebase,
  Git,
  Github,
  Githubactions,
  Javascript,
  Linux,
  Nodejs,
  Postgresql,
  Python,
  React,
  Redis,
  Tailwindcss,
  Typescript,
  Vite,
} from "@/assets/icons";
import { ReactNode } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { MdMail, MdPhone } from "react-icons/md";

interface HeaderItem {
  title: string;
  translationKey: string;
  href: string;
  target?: string;
  icon?: ReactNode;
}

const HeaderItems: HeaderItem[] = [
  {
    title: "Home",
    translationKey: "nav.header.home",
    href: "/",
  },
  {
    title: "Resume",
    translationKey: "nav.header.resume",
    href: "/resume",
  },
  {
    title: "Projects",
    translationKey: "nav.header.projects",
    href: "/projects",
  },
  // {
  //   title: "Blog",
  //   translationKey: "nav.header.blog",
  //   href: "https://notes.jayhsia.com",
  //   target: "_blank",
  //   icon: <MdOutlineOpenInNew/>
  // }
];

enum ItemType {
  Link = "link",
  Email = "email",
  Phone = "phone",
  Text = "text",
}

interface HeroSocialItem {
  title: string;
  value: string;
  itemType: ItemType;
  icon: ReactNode;
  copyable?: boolean;
}

const HeroSocialItems: HeroSocialItem[] = [
  {
    title: "GitHub",
    value: "https://github.com/jayhsia1997",
    itemType: ItemType.Link,
    icon: <FaGithub className="h-8 w-8 text-primary-500 hover:text-tertiary-500 dark:hover:text-tertiary-300 duration-300" />,
  },
  {
    title: "Linkedin",
    value: "https://www.linkedin.com/in/jayhsia1997/",
    itemType: ItemType.Link,
    icon: <FaLinkedin className="h-8 w-8 text-primary-500 hover:text-tertiary-500 dark:hover:text-tertiary-300 duration-300" />,
  },
  {
    title: "Email",
    value: "mailto:jayhsia1997@gmail.com",
    itemType: ItemType.Email,
    icon: <MdMail className="h-8 w-8 text-primary-500 hover:text-tertiary-500 dark:hover:text-tertiary-300 duration-300" />,
    copyable: true,
  },
  {
    title: "Phone",
    value: "+1 (416) 564-1450",
    itemType: ItemType.Phone,
    icon: <MdPhone className="h-8 w-8 text-primary-500 hover:text-tertiary-500 dark:hover:text-tertiary-300 duration-300" />,
    copyable: true,
  },
];

interface SkillCardItem {
  title: string;
  description: string;
  icon: ReactNode;
}

const SkillCardItems: SkillCardItem[] = [
  {
    title: "Python",
    description: "descriptions.python",
    icon: <Python className="h-8 w-8" />,
  },
  {
    title: "FastAPI",
    description: "descriptions.fastapi",
    icon: <Fastapi className="h-8 w-8" />,
  },
  {
    title: "Django",
    description: "descriptions.django",
    icon: <Django className="h-8 w-8" />,
  },
  {
    title: "PostgreSQL",
    description: "descriptions.postgreSQL",
    icon: <Postgresql className="h-8 w-8" />,
  },
  {
    title: "Redis",
    description: "descriptions.redis",
    icon: <Redis className="h-8 w-8" />,
  },
  {
    title: "Message Queues",
    description: "descriptions.messageQueues",
    icon: <LuMessagesSquare className="h-8 w-8 text-tertiary-500 dark:text-tertiary-300 duration-300" />,
  },
  {
    title: "React",
    description: "descriptions.react",
    icon: <React className="h-8 w-8" />,
  },
  {
    title: "JavaScript",
    description: "descriptions.js",
    icon: <Javascript className="h-8 w-8" />,
  },
  {
    title: "TypeScript",
    description: "descriptions.ts",
    icon: <Typescript className="h-8 w-8" />,
  },
  {
    title: "Node.js",
    description: "descriptions.nodejs",
    icon: <Nodejs className="h-8 w-8" />,
  },
  {
    title: "Tailwind CSS",
    description: "descriptions.TailwindCSS",
    icon: <Tailwindcss className="h-8 w-8" />,
  },
  {
    title: "Docker",
    description: "descriptions.docker",
    icon: <Docker className="h-8 w-8" />,
  },
  {
    title: "AWS",
    description: "descriptions.AWS",
    icon: <Aws className="h-8 w-8" />,
  },
  {
    title: "Firebase",
    description: "descriptions.Firebase",
    icon: <Firebase className="h-8 w-8" />,
  },
  {
    title: "CI/CD",
    description: "descriptions.CICD",
    icon: <Githubactions className="h-8 w-8" />,
  },
  {
    title: "Vite",
    description: "descriptions.vite",
    icon: <Vite className="h-8 w-8" />,
  },
  {
    title: "Linux",
    description: "descriptions.linux",
    icon: <Linux className="h-8 w-8" />,
  },
  {
    title: "Git",
    description: "descriptions.git",
    icon: <Git className="h-8 w-8" />,
  },
  {
    title: "GitHub",
    description: "descriptions.github",
    icon: <Github className="h-8 w-8" />,
  },
  {
    title: "Azure",
    description: "descriptions.azure",
    icon: <Azure className="h-8 w-8" />,
  },
];

interface ProjectCardItem {
  title: string;
  summary: string;
  images?: string[];
  tags?: string[];
}

const ProjectCardItems: ProjectCardItem[] = [
  {
    title: "Personal Website",
    summary: "summaries.personalWebsite",
    images: ["/images/PersonalWebsite/1.png"],
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  },
  {
    title: "TheHope Conference APP",
    summary: "summaries.theHopeConferenceApp",
    images: ["/images/TheHopeConference/1.png", "/images/TheHopeConference/2.png", "/images/TheHopeConference/3.png"],
    tags: ["FastAPI", "Python", "PostgreSQL", "Redis", "AWS S3", "Docker", "CI/CD", "Firebase"],
  },
  {
    title: "TheHope Conference Admin Portal",
    summary: "summaries.theHopeConferenceAdminPortal",
    images: ["/images/TheHopeConference/4.png", "/images/TheHopeConference/5.png", "/images/TheHopeConference/6.png"],
    tags: ["FastAPI", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Redis", "AWS S3", "Docker", "CI/CD", "Firebase"],
  },
];

interface ProjectItem {
  title: string;
  content: string;
  images?: string[];
  tags?: string[];
}

const ProjectItems: ProjectItem[] = [
  {
    title: "Personal Website",
    content: "items.personalWebsite.content",
    images: ["/images/PersonalWebsite/1.png"],
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  },
  {
    title: "TheHope Conference APP",
    content: "items.theHopeConferenceApp.content",
    images: ["/images/TheHopeConference/1.png", "/images/TheHopeConference/2.png", "/images/TheHopeConference/3.png"],
    tags: ["FastAPI", "Python", "PostgreSQL", "Redis", "AWS S3", "Docker", "CI/CD", "Firebase"],
  },
  {
    title: "TheHope Conference Admin Portal",
    content: "items.theHopeConferenceAdminPortal.content",
    images: ["/images/TheHopeConference/4.png", "/images/TheHopeConference/5.png", "/images/TheHopeConference/6.png"],
    tags: ["FastAPI", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Redis", "AWS S3", "Docker", "CI/CD", "Firebase"],
  },
];

export { HeaderItems, HeroSocialItems, ItemType, ProjectCardItems, ProjectItems, SkillCardItems };
export type { HeaderItem, HeroSocialItem, ProjectCardItem, ProjectItem, SkillCardItem };
