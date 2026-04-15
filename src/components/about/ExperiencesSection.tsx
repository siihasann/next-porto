"use client";
import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  CheckCircle,
  CheckCircleIcon,
  CheckLineIcon,
  Sparkles,
} from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { fadeInUpItem, staggerContainer } from "@/lib/animation-templates";

// Main Experience Section Component
export function ExperiencesSection() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const reduceMotion = prefersReducedMotion || isMobile;

  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth < 768);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const data = [
    {
      title: "Full-Stack Developer at Crackin'Code Studio",
      paragraphs: [
        "Crackin'Code Studio is a software development agency based in Semarang, specializing in web and mobile applications, serving international clients across various countries.",
      ],
      images: [
        // "https://assets.aceternity.com/templates/startup-1.webp",
        // "https://assets.aceternity.com/templates/startup-2.webp",
        // "https://assets.aceternity.com/templates/startup-3.webp",
        // "https://assets.aceternity.com/templates/startup-4.webp",
      ],
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
      images: [
        // "https://assets.aceternity.com/pro/hero-sections.png",
        // "https://assets.aceternity.com/features-section.png",
        // "https://assets.aceternity.com/pro/bento-grids.png",
        // "https://assets.aceternity.com/cards.png",
      ],
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

  // Enhanced Image Grid with hover effects
  const ImageGrid = ({
    images,
    title,
  }: {
    images: string[];
    title: string;
  }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={`${title}-img-${index}`}
            className="relative overflow-hidden rounded-lg group cursor-pointer"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.5, delay: index * 0.1 }
            }
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={reduceMotion ? undefined : { y: -5 }}
          >
            <img
              src={image}
              alt="template"
              loading="lazy"
              decoding="async"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 transition-transform duration-300 group-hover:scale-110"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
              initial={false}
              animate={{
                opacity: hoveredIndex === index && !reduceMotion ? 1 : 0,
              }}
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    );
  };

  const timelineData = data.map((entry) => ({
    title: entry.title,
    content: (
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.6 }}
        viewport={reduceMotion ? undefined : { once: true }}
      >
        {entry.paragraphs.map((paragraph, index) => (
          <motion.p
            key={`${entry.title}-p-${index}`}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.5, delay: index * 0.1 }
            }
            viewport={reduceMotion ? undefined : { once: true }}
            className="mb-4 text-xs font-normal text-neutral-700 md:text-sm dark:text-neutral-300 leading-relaxed"
          >
            {paragraph}
          </motion.p>
        ))}

        {entry.bullets.length > 0 && (
          <motion.div
            className="mb-8 space-y-2 bg-gradient-to-br from-gray-50 to-transparent dark:from-orange-950/20 dark:to-transparent p-4 rounded-lg border border-gray-100 dark:border-orange-900/30"
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.6 }}
            viewport={reduceMotion ? undefined : { once: true }}
          >
            {entry.bullets.map((item, idx) => (
              <motion.div
                key={`${entry.title}-${item}`}
                initial={reduceMotion ? false : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { duration: 0.4, delay: idx * 0.1 }
                }
                viewport={reduceMotion ? undefined : { once: true }}
                whileHover={reduceMotion ? undefined : { x: 5 }}
                className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 cursor-default"
              >
                <motion.span
                  animate={
                    reduceMotion ? undefined : { rotate: [0, 10, -10, 0] }
                  }
                  transition={{
                    duration: 2,
                    repeat: reduceMotion ? 0 : Infinity,
                    delay: reduceMotion ? 0 : idx * 0.2,
                  }}
                >
                  <CheckCircleIcon className="w-4 h-4" />
                </motion.span>
                {item}
              </motion.div>
            ))}
          </motion.div>
        )}

        {entry.images.length > 0 && (
          <ImageGrid images={entry.images} title={entry.title} />
        )}
      </motion.div>
    ),
  }));

  return (
    <motion.section
      className="relative w-full overflow-clip"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={fadeInUpItem}>
        <Timeline data={timelineData} />
      </motion.div>
    </motion.section>
  );
}
