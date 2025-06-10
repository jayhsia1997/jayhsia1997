import { ReactNode } from "react";
import { BiLogoFirebase, BiLogoJavascript, BiLogoNodejs, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaAws, FaDocker, FaPython, FaReact } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";
import { MdMail, MdPhone } from "react-icons/md";
import { SiDjango, SiFastapi, SiGithubactions, SiPostgresql } from "react-icons/si";

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
    icon: <FaGithub className="h-8 w-8 text-primary-500 hover:text-tertiary-500 dark:hover:text-tertiary-300 duration-300"/>,
  },
  {
    title: "Linkedin",
    value: "https://www.linkedin.com/in/jayhsia1997/",
    itemType: ItemType.Link,
    icon: <FaLinkedin className="h-8 w-8 text-primary-500 hover:text-tertiary-500 dark:hover:text-tertiary-300 duration-300"/>,
  },
  {
    title: "Email",
    value: "mailto:jayhsia1997@gmail.com",
    itemType: ItemType.Email,
    icon: <MdMail className="h-8 w-8 text-primary-500 hover:text-tertiary-500 dark:hover:text-tertiary-300 duration-300"/>,
    copyable: true,
  },
  {
    title: "Phone",
    value: "+1 (416) 564-1450",
    itemType: ItemType.Phone,
    icon: <MdPhone className="h-8 w-8 text-primary-500 hover:text-tertiary-500 dark:hover:text-tertiary-300 duration-300"/>,
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
    icon: <FaPython className="h-8 w-8 text-tertiary-500 dark:text-tertiary-300 duration-300"/>,
  },
  {
    title: "FastAPI",
    description: "descriptions.fastapi",
    icon: <SiFastapi className="h-8 w-8 text-tertiary-500 dark:text-tertiary-300 duration-300"/>,
  },
  {
    title: "Django",
    description: "descriptions.django",
    icon: <SiDjango className="h-8 w-8 text-tertiary-500 dark:text-tertiary-300 duration-300"/>,
  },
  {
    title: "PostgreSQL",
    description: "descriptions.postgreSQL",
    icon: <SiPostgresql className="h-8 w-8 text-tertiary-500 dark:text-tertiary-300 duration-300"/>,
  },
  {
    title: "Redis",
    description: "descriptions.redis",
    icon: <DiRedis className="h-8 w-8 text-tertiary-500 dark:text-tertiary-300 duration-300"/>,
  },
  {
    title: "Message Queues",
    description: "descriptions.messageQueues",
    icon: <LuMessagesSquare className="h-8 w-8 text-tertiary-500 dark:text-tertiary-300 duration-300"/>,
  },
  {
    title: "React",
    description: "descriptions.react",
    icon: <FaReact className="h-8 w-8 text-tertiary-500 dark:text-tertiary-300 duration-300"/>,
  },
  {
    title: "JavaScript",
    description: "descriptions.js",
    icon: <BiLogoJavascript className="h-8 w-8 text-tertiary-500 dark:text-tertiary-300 duration-300"/>,
  },
  {
    title: "TypeScript",
    description: "descriptions.ts",
    icon: <BiLogoTypescript className="h-8 w-8 text-tertiary-500 dark:text-tertiary-300 duration-300"/>,
  },
  {
    title: "Node.js",
    description: "descriptions.nodejs",
    icon: <BiLogoNodejs className="h-8 w-8 text-tertiary-500 dark:text-tertiary-300 duration-300"/>,
  },
  {
    title: "Tailwind CSS",
    description: "descriptions.TailwindCSS",
    icon: <BiLogoTailwindCss className="h-8 w-8 text-tertiary-500 dark:text-tertiary-300 duration-300"/>,
  },
  {
    title: "Docker",
    description: "descriptions.docker",
    icon: <FaDocker className="h-8 w-8 text-tertiary-500 dark:text-tertiary-300 duration-300"/>,
  },
  {
    title: "AWS",
    description: "descriptions.AWS",
    icon: <FaAws className="h-8 w-8 text-tertiary-500 dark:text-tertiary-300 duration-300"/>,
  },
  {
    title: "Firebase",
    description: "descriptions.Firebase",
    icon: <BiLogoFirebase className="h-8 w-8 text-tertiary-500 dark:text-tertiary-300 duration-300"/>,
  },
  {
    title: "CI/CD",
    description: "descriptions.CICD",
    icon: <SiGithubactions className="h-8 w-8 text-tertiary-500 dark:text-tertiary-300 duration-300"/>,
  },
];

export { HeroSocialItems, ItemType, SkillCardItems };
export type { HeroSocialItem, SkillCardItem };
