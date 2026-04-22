"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";

type ExperienceEntry = {
  title: string;
  paragraphs: string[];
  images: string[];
  bullets: string[];
};

const experiencesData: ExperienceEntry[] = [
  {
    title: "Full-Stack Developer at Crackin'Code Studio",
    paragraphs: [
      "Crackin'Code Studio is a software development agency based in Semarang, specializing in web and mobile applications, serving international clients across various countries.",
    ],
    images: [],
    bullets: [
      "Developed and maintained end-to-end web applications for multiple international clients.",
      "Collaborated with Project Managers and cross-functional teams to gather technical requirements and provide daily progress updates.",
      "Managed multiple projects simultaneously using structured workflows and Agile methodologies.",
      "Full-Stack: Next.js, Nuxt.js, Laravel (including Filament & Inertia.js), Frontend: React.js (Vite), Vue.js, Backend: Node.js, Express.js, NestJS, PHP (Laravel), Database: PostgreSQL, MySQL, Supabase (with Prisma ORM), Styling: Tailwind CSS, Bootstrap, CSS, Version Control: Git (GitHub, GitLab)Proficient in implementing Git Flow for professional team-based development.",
      "Experienced in VPS server management, including deployment and configuration across platforms such as DigitalOcean (Droplets, App Platform), Akamai, Alibaba Cloud, AWS EC2 and Heroku.",
      "Skilled in domain and DNS management using Cloudflare, as well as configuring NGINX and PM2 for production environments.",
      "Utilized modern development tools to enhance productivity, including AI-assisted coding tools such as Codex and Cursor for faster development and prototyping",
    ],
  },
  {
    title: "Fullstack Engineer Intern at PT DOT Indonesia",
    paragraphs: [
      "PT DOT Indonesia is a professional digital solutions company that leverages Agile methodologies to support enterprises and startups through high-quality software development services.",
    ],
    images: [],
    bullets: [
      "Contributed as a Fullstack Engineer in the development of the Reserv-App, utilizing Laravel (Filament, Livewire), MySQL, and Docker for efficient development environment management.",
      "Handled daily development tasks including bug fixing, feature implementation, and system optimization to ensure stable application performance.",
      "Actively participated in daily stand-up meetings to report progress, address blockers, and align on daily development goals with the team.",
      "Collaborated closely with developers and Quality Assurance (QA) teams to troubleshoot issues, ensuring high-quality deliverables aligned with user requirements.",
      "Contributed to resolving technical challenges through collaborative problem-solving and innovative approaches, improving overall development efficiency",
    ],
  },
  {
    title: "Back-end Developer Team",
    paragraphs: [
      "Barong (barongsolo.com) is an innovative application for buying and selling recycled waste online, which makes it easier for collectors (tukan rongsok) to operate in collecting rubbish and making it easier for people to sell junk goods. Which It includes real-time chat features, tracking maps, push notifications, and automatic calculations to facilitate the transaction process both sides.",
    ],
    images: [],
    bullets: [
      "Discussions with the team designed detailed Use Cases, ERDs and Class Diagrams to support overall system requirements comprehensively.",
      "Together the team designed the application structure and workflow using TypeScript with the Nuxt.Js framework, Vue.Js ensured a scalable and maintainable system on the Barong App project.",
      "Developing CMS - Barong for Barong Application data management, with Nuxt.Js, Vue.Js, TypeScript.",
      "Designed and implemented an efficient database schema using Prisma ORM with TypeScript.",
      "Integrating PostgreeSQL-enabled Supabase for database, storage and authentication on the Barong project.",
      "Developing reliable and secure RESTful API on Nuxt.Js server side using TypeScript to facilitate smooth interaction frontend on Barong Application and CMS-Barong project.",
      "Perform maintenance and optimization of existing code to improve performance quality and efficiency system.",
    ],
  },
  {
    title:
      "MSIB Red Hat Certified System Administrator - IBM AI & Cybersecurity",
    paragraphs: [
      "Infinite Learning, a division of PT Kinema Systrans multimedia (a subsidiary of Infinite Studios), is focused on development vocational training courses relevant to Infinite Studios' activities and the increasing demand for skilled talent in the ecosystem Nongsa Digital Park.",
    ],
    images: [],
    bullets: [
      "Discussions with the team designed detailed Use Cases, ERDs and Class Diagrams to support overall system requirements comprehensively.",
      "Together the team designed the application structure and workflow using TypeScript with the Nuxt.Js framework, Vue.Js ensured a scalable and maintainable system on the Barong App project.",
      "Developing CMS - Barong for Barong Application data management, with Nuxt.Js, Vue.Js, TypeScript.",
      "Designed and implemented an efficient database schema using Prisma ORM with TypeScript.",
      "Integrating PostgreeSQL-enabled Supabase for database, storage and authentication on the Barong project.",
      "Developing reliable and secure RESTful API on Nuxt.Js server side using TypeScript to facilitate smooth interaction frontend on Barong Application and CMS-Barong project.",
      "Perform maintenance and optimization of existing code to improve performance quality and efficiency system.",
    ],
  },
];

const entryReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: [0.22, 0.61, 0.36, 1],
    },
  },
};

function ExperienceImageGrid({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((image, index) => (
        <div
          key={`${title}-img-${index}`}
          className="group relative overflow-hidden rounded-2xl bg-neutral-950/5"
        >
          <img
            src={image}
            alt={`${title} preview ${index + 1}`}
            loading="lazy"
            decoding="async"
            className="h-24 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] md:h-44 lg:h-60"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      ))}
    </div>
  );
}

export function ExperiencesSection() {
  const prefersReducedMotion = useReducedMotion();

  const timelineData = experiencesData.map((entry) => ({
    title: entry.title,
    content: (
      <motion.article
        variants={entryReveal}
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.24 }}
        className="space-y-5 will-change-transform"
      >
        {entry.paragraphs.map((paragraph, index) => (
          <p
            key={`${entry.title}-p-${index}`}
            className="text-sm leading-7 text-neutral-700 md:text-[0.96rem] dark:text-neutral-300"
          >
            {paragraph}
          </p>
        ))}

        {entry.bullets.length > 0 && (
          <div className="rounded-2xl border border-neutral-200/80 bg-white/85 p-5 shadow-[0_20px_45px_-38px_rgba(15,23,42,0.35)] dark:border-orange-900/30 dark:bg-orange-950/10">
            <ul className="space-y-3">
              {entry.bullets.map((item) => (
                <li
                  key={`${entry.title}-${item}`}
                  className="flex items-start gap-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#577e53]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {entry.images.length > 0 && (
          <ExperienceImageGrid images={entry.images} title={entry.title} />
        )}
      </motion.article>
    ),
  }));

  return (
    <section className="relative mt-20 w-full overflow-clip">
      <Timeline data={timelineData} />
    </section>
  );
}
