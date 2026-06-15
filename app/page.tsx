"use client";

import {
  ArrowUpRight,
  Code2,
  Database,
  Mail,
  MapPin,
  Menu,
  Phone,
  Server,
  Smartphone,
  Sparkles,
  Volume2,
  VolumeX,
} from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const navItems = ["Home", "About", "Projects", "Experience", "Skills", "Contact"];

const projects = [
  {
    name: "AI Powered Job Portal",
    type: "AI Platform",
    summary:
      "A smart hiring platform with candidate matching, role discovery, dashboards, and scalable API flows for recruiters and applicants.",
    stack: ["React", "Node.js", "Express", "MongoDB", "AI Integration"],
  },
  {
    name: "Car Modification & Garage App",
    type: "Mobile / Full Stack",
    summary:
      "A garage management and car customization experience built for bookings, services, user profiles, and real-world workshop workflows.",
    stack: ["React Native", "Expo", "Node.js", "MongoDB"],
  },
  {
    name: "Expense Tracker + Data Analytics Dashboard",
    type: "Analytics",
    summary:
      "A finance dashboard with expense categorization, visual analytics, trend tracking, and clean reporting for smarter decisions.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Data Analysis"],
  },
  {
    name: "Real-Time Chat App",
    type: "MERN Stack",
    summary:
      "A real-time messaging product with authentication, live conversations, responsive UI, and backend APIs designed for speed.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket APIs"],
  },
  {
    name: "Food Delivery / E-Commerce App",
    type: "Commerce",
    summary:
      "A modern ordering platform with product browsing, cart flows, checkout-ready architecture, and mobile-first interface patterns.",
    stack: ["React", "Redux", "Tailwind CSS", "Node.js"],
  },
  {
    name: "Full Stack Social Media App",
    type: "Social Product",
    summary:
      "A scalable social app with profiles, feeds, interactions, media-friendly UI, and clean full stack application structure.",
    stack: ["Next.js", "MongoDB", "Express", "React"],
  },
];

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["HTML5", "CSS3", "JavaScript ES6+", "TypeScript", "React.js", "Redux", "Next.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "API Integration", "Performance Optimization", "REST Architecture"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["MongoDB", "PostgreSQL", "Data Modeling", "Database Management"],
  },
  {
    title: "Mobile & Tools",
    icon: Smartphone,
    items: ["React Native", "Expo", "Python", "GitHub", "Vercel", "DSA", "Data Science"],
  },
];

const experiences = [
  {
    role: "Digital Marketing",
    company: "Eureka Star Purification Devices Trading LLC",
    period: "2024 - 2025",
    location: "United Arab Emirates / Remote",
    details: [
      "Worked on digital growth, online presence, campaign coordination, and customer-focused communication.",
      "Built a practical understanding of business goals, audience behavior, and conversion-oriented product presentation.",
    ],
  },
  {
    role: "Full Stack Development",
    company: "SkillHub Classes, Chhatrapati Sambhajinagar",
    period: "2025 - 2026",
    location: "Maharashtra, India",
    details: [
      "Focused on modern MERN and Next.js application development with responsive UI, backend APIs, and database workflows.",
      "Built real-world projects across e-commerce, analytics, chat, social platforms, and mobile applications.",
    ],
  },
];

const education = [
  {
    title: "Bachelor of Computer Science",
    org: "Dr. Babasaheb Ambedkar University, Chhatrapati Sambhajinagar",
    year: "2020 - 2024",
  },
  {
    title: "Full Stack Development",
    org: "SkillHub Classes, Chhatrapati Sambhajinagar",
    year: "2025 - 2026",
  },
];

const identityLoop = [
  "Full Stack Developer",
  "MERN Stack",
  "Next.js",
  "React Native",
  "API Builder",
  "Database Design",
  "Clean UI/UX",
  "Data Analysis",
];



const fadeUp: Variants = {
  hidden: { opacity: 0, y: 44, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function useIndiaTime() {
  const [time, setTime] = useState("INDIA TIME");
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hour = Number(
        new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          hour12: false,
        }).format(now),
      );

      setTime(
        new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(now),
      );
      setGreeting(hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening");
    };

    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return { time, greeting };
}

function SectionLabel({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div
      className="section-label"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
    >
      <motion.span variants={fadeUp}>{eyebrow}</motion.span>
      <motion.h2 variants={fadeUp}>{title}</motion.h2>
    </motion.div>
  );
}

function MagneticButton({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "ghost";
}) {
  return (
    <motion.a
      href={href}
      className={`magnetic-button ${variant}`}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}



function ScrollPlayVideo({ src, soundOn }: { src: string; soundOn: boolean }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const wasInViewRef = useRef(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio > 0.2;
        setIsInView(visible);

        if (visible) {
          if (!wasInViewRef.current) {
            video.currentTime = 0;
          }

          wasInViewRef.current = true;
          video.play().catch(() => undefined);
        } else {
          wasInViewRef.current = false;
          video.pause();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: [0, 0.2, 0.5, 0.8] },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = !soundOn;
    video.volume = soundOn ? 0.8 : 0;

    if (isInView) {
      video.play().catch(() => undefined);
    }
  }, [isInView, soundOn]);

  return (
    <video
      ref={videoRef}
      data-scroll-video
      src={src}
      muted={!soundOn}
      loop
      playsInline
      preload="auto"
      onLoadedData={(event) => {
        const video = event.currentTarget;
        video.muted = !soundOn;

        if (isInView) {
          video.play().catch(() => undefined);
        }
      }}
    />
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [soundOn, setSoundOn] = useState(true);
  const [showSoundToggle, setShowSoundToggle] = useState(false);
  const { time, greeting } = useIndiaTime();
  const { scrollYProgress } = useScroll();
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const progressScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
  });
  const heroY = useTransform(heroProgress, [0, 1], [0, 170]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.12]);
  const heroOpacity = useTransform(heroProgress, [0, 0.85], [1, 0.25]);

  useEffect(() => {
    const videos = Array.from(document.querySelectorAll<HTMLVideoElement>("[data-scroll-video]"));
    const visibleVideos = new Set<HTMLVideoElement>();

    if (videos.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;

          if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
            visibleVideos.add(video);
          } else {
            visibleVideos.delete(video);
          }
        });

        setShowSoundToggle(visibleVideos.size > 0);
      },
      { rootMargin: "0px 0px -12% 0px", threshold: [0, 0.2, 0.5, 0.8] },
    );

    videos.forEach((video) => observer.observe(video));

    return () => observer.disconnect();
  }, []);

  const toggleSound = () => {
    const nextSoundState = !soundOn;

    setSoundOn(nextSoundState);
    document.querySelectorAll<HTMLVideoElement>("[data-scroll-video]").forEach((video) => {
      video.muted = !nextSoundState;
      video.volume = nextSoundState ? 0.8 : 0;

      if (nextSoundState) {
        video.play().catch(() => undefined);
      }
    });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-[#f4f4ef]">
      <motion.div className="scroll-progress" style={{ scaleX: progressScale }} />
      <button
        type="button"
        className={`sound-toggle ${soundOn ? "is-on" : ""} ${showSoundToggle || soundOn ? "is-visible" : ""}`}
        onClick={toggleSound}
        aria-pressed={soundOn}
        aria-label={soundOn ? "Turn video sound off" : "Turn video sound on"}
      >
        {soundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
        <span>{soundOn ? "Sound On" : "Tap For Sound"}</span>
      </button>

      <header className="site-header">
        <a href="#home" className="brand-mark" aria-label="Sanket Khule home">
          SK
        </a>
        <nav aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <a href="mailto:sanketkhule5@gmail.com" className="header-cta">
          Email me <ArrowUpRight size={16} />
        </a>
        <button className="mobile-menu" aria-label="Menu">
          <Menu size={20} />
        </button>
      </header>

      <section className="hero-section" id="home" ref={heroRef}>
        <motion.div className="hero-media" style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}>
          <Image
            src="/Sk.png"
            alt="Sanket Khule in a developer workspace"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="hero-vignette" />
        </motion.div>

        <div className="hero-topline">
          <span>Portfolio 2026</span>
          <span>{time}</span>
        </div>

        <motion.div className="hero-content" initial="hidden" animate="visible" variants={stagger}>
          <motion.div className="availability-pill" variants={fadeUp}>
            <span />
            Available for work
          </motion.div>
          <motion.p className="hero-kicker" variants={fadeUp}>
            Full Stack Developer | MERN | React Native
          </motion.p>
          <motion.h1 variants={fadeUp}>
            Sanket
            <span>Khule</span>
          </motion.h1>
          <motion.p className="hero-copy" variants={fadeUp}>
            Building responsive, scalable, and user-friendly web and mobile applications with clean UI/UX,
            robust APIs, and performance-first engineering.
          </motion.p>
          <motion.div className="hero-actions" variants={fadeUp}>
            <MagneticButton href="#projects">
              View Projects <ArrowUpRight size={18} />
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Let&apos;s Talk
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8, ease: "easeOut" }}
        >
          <span>{greeting}</span>
          <strong>Based in Maharashtra</strong>
          <p>Hirapur, Chhatrapati Sambhajinagar</p>
        </motion.div>

        <div className="scroll-cue">
          <span>Scroll</span>
          <i />
        </div>
      </section>

      <section className="marquee-section" aria-label="Developer identity loop">
        <div className="marquee-track">
          {[...identityLoop, ...identityLoop].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      <section className="intro-section" id="about">
        <SectionLabel eyebrow="Who I Am" title="A full stack developer who ships clean, scalable products." />
        <div className="intro-grid">
          <motion.div
            className="intro-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p variants={fadeUp}>
              I am a Full Stack Web Developer with strong hands-on experience in modern frontend and
              backend development, API integration, database management, and performance optimization.
            </motion.p>
            <motion.p variants={fadeUp}>
              My focus is simple: create real-world software that feels polished to use and reliable
              behind the scenes, from responsive interfaces to scalable application architecture.
            </motion.p>
          </motion.div>

          <motion.div
            className="video-frame"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ScrollPlayVideo src="/about_me.mp4" soundOn={soundOn} />
            <div>
              <Sparkles size={18} />
              <span>Modern web and mobile systems</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="stat-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          {[
            ["6+", "Projects Completed"],
            ["2", "Databases"],
            ["2026", "Portfolio Edition"],
            ["3", "Languages"],
          ].map(([value, label]) => (
            <motion.div className="stat-card" key={label} variants={fadeUp}>
              <strong>{value}</strong>
              <span>{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="projects-section" id="projects">
        <SectionLabel eyebrow="Selected Work" title="Projects shaped around useful products and smooth interfaces." />
        <div className="projects-stack">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.name}
              style={{ top: `${92 + index * 14}px` }}
              initial={{ opacity: 0, y: 70, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <div className="project-index">0{index + 1}</div>
              <div className="project-main">
                <span>{project.type}</span>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="tag-row">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-orb" />
            </motion.article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <SectionLabel eyebrow="Experience" title="Business awareness plus full stack execution." />
        <div className="timeline">
          {experiences.map((item, index) => (
            <motion.article
              className="timeline-card"
              key={item.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <div className="timeline-meta">
                <span>0{index + 1}</span>
                <strong>{item.period}</strong>
              </div>
              <div>
                <p>{item.location}</p>
                <h3>{item.company}</h3>
                <h4>{item.role}</h4>
                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="skills-section" id="skills">
        <SectionLabel eyebrow="Skill System" title="A practical stack for full stack and mobile product building." />
        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <motion.article className="skill-card" key={group.title} variants={fadeUp}>
                <div className="skill-heading">
                  <Icon size={22} />
                  <h3>{group.title}</h3>
                </div>
                <div className="tag-row">
                  {group.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      <section className="education-section">
        <SectionLabel eyebrow="Education" title="Computer science foundation with focused full stack training." />
        <div className="education-grid">
          {education.map((item) => (
            <motion.article
              className="education-card"
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.org}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-media">
          <ScrollPlayVideo src="/footer-video.mp4" soundOn={soundOn} />
          <div className="contact-overlay" />
        </div>

        <motion.div
          className="contact-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.span variants={fadeUp}>Available Worldwide</motion.span>
          <motion.h2 variants={fadeUp}>Let&apos;s build something sharp, scalable, and alive.</motion.h2>
          <motion.p variants={fadeUp}>
            Open to freelance and full-time opportunities across web apps, mobile apps, dashboards,
            APIs, and modern product experiences.
          </motion.p>
          <motion.div className="contact-links" variants={fadeUp}>
            <a href="mailto:sanketkhule5@gmail.com">
              <Mail size={18} />
              sanketkhule5@gmail.com
            </a>
            <a href="tel:+917887636352">
              <Phone size={18} />
              +91 7887636352
            </a>
            <a href="#home">
              <MapPin size={18} />
              Hirapur, Chhatrapati Sambhajinagar
            </a>
          </motion.div>
          <motion.div className="social-links" variants={fadeUp}>
            
          </motion.div>
        </motion.div>
      </section>

      <footer className="site-footer">
        <strong>SANKET KHULE</strong>
        <span>Full Stack Developer</span>
        <span>(c) 2026 Sanket Khule. Designed and developed with precision.</span>
      </footer>
    </main>
  );
}
