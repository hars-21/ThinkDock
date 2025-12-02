import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaLightbulb,
  FaSearch,
  FaGlobe,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/about.css";
import avatar from "/assets/avatar-github.jpeg";

const featureHighlights = [
  {
    icon: FaCode,
    title: "AI Summarizer",
    description:
      "Turn research papers, lectures, or meeting notes into crisp, share-ready recaps tailored to your audience.",
  },
  {
    icon: FaLightbulb,
    title: "Idea Generator",
    description:
      "Feed it a topic and receive fresh, multi-angle inspiration for content, products, or creative projects.",
  },
  {
    icon: FaSearch,
    title: "Keyword Extractor",
    description:
      "Highlight the most important themes in seconds to power SEO strategies, briefs, or research summaries.",
  },
];

const heroStats = [
  { value: "3", label: "Purpose-built copilots" },
  { value: "100%", label: "Free & open" },
  { value: "24/7", label: "Available anywhere" },
];

const milestones = [
  {
    badge: "2023",
    title: "From weekend project to platform",
    copy: "ThinkDock started as a lightweight AI playground—today it powers thousands of workflows.",
  },
  {
    badge: "2024",
    title: "Community-driven evolution",
    copy: "Every release folds in user feedback, shipping UX refinements and brand-new AI capabilities monthly.",
  },
  {
    badge: "Now",
    title: "Focused on flow",
    copy: "We obsess over fast UI, calm animations, and privacy-first tooling so you can stay in deep work mode.",
  },
];

const developerStats = [
  { value: "4+", label: "Projects" },
  { value: "100%", label: "Open Source" },
  { value: "2+", label: "Years shipping" },
];

const socialLinks = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/hars-21" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/harshil-sync" },
  { icon: FaGlobe, label: "Website", href: "https://harshilgupta.xyz" },
  { icon: FaEnvelope, label: "Email", href: "mailto:ace.harshil.1@gmail.com" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const About = () => {
  return (
    <div className="about-container">
      <div className="grid-overlay" aria-hidden="true"></div>
      <motion.section className="about-hero" variants={fadeInUp} initial="hidden" animate="visible">
        <span className="pill">Our story</span>
        <h1 className="about-title">
          About <span className="gold arima">ThinkDock</span>
        </h1>
        <p className="about-subtitle">
          Your quick-access AI desk for summarizing research, sparking new ideas, and highlighting
          what matters—so teams can move from inspiration to action in seconds.
        </p>
        <div className="about-hero-actions">
          <Link to="/dashboard" className="animated-btn" aria-label="Open the ThinkDock dashboard">
            Launch dashboard
          </Link>
          <Link to="/support" className="animated-btn" aria-label="Visit support page">
            Visit support
          </Link>
        </div>
        <div className="about-stat-grid">
          {heroStats.map((stat) => (
            <div className="about-stat-card" key={stat.label}>
              <span className="about-stat-value">{stat.value}</span>
              <span className="about-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="about-section"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="section-title">What is ThinkDock?</h2>
        <p className="about-description">
          ThinkDock is a calm, focused workspace built on top of AI copilots. It combines the speed
          of large models with thoughtful UX so researchers, students, founders, and content teams
          can keep their flow. Every tool shares the same goal: remove busywork, keep you in
          control, and respect your privacy.
        </p>
        <motion.div
          className="features-grid"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          {featureHighlights.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} className="feature-highlight" variants={scaleIn}>
                <div className="feature-highlight-icon">
                  <Icon />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      <motion.section
        className="mission-section"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="mission-copy">
          <span className="pill">Mission</span>
          <h2>Designed for deep focus</h2>
          <p>
            ThinkDock trims away clutter—animations are subtle, typography is intentional, and every
            control is tuned for keyboard-first speed. That means fewer distractions and more space
            for thinking.
          </p>
          <motion.ul
            className="milestone-list"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {milestones.map((milestone) => (
              <motion.li key={milestone.title} className="milestone-item" variants={fadeInUp}>
                <span className="milestone-badge">{milestone.badge}</span>
                <div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.copy}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.section>

      <motion.section
        className="developer-card"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className="pill">Developer</span>
        <div className="developer-header">
          <img src={avatar} alt="Harshil Gupta" className="developer-image" />
          <div className="developer-info">
            <h2 className="developer-name">Harshil Gupta</h2>
            <p className="developer-role">Full Stack Developer &amp; AI Enthusiast</p>
          </div>
        </div>
        <p className="developer-description">
          I build tactile AI experiences that stay fast, transparent, and accessible. ThinkDock is
          my way of bottling that philosophy into a single, dependable workspace for anyone chasing
          ideas.
        </p>
        <div className="developer-stats">
          {developerStats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <span className="stat-number">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="social-links">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={social.label}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
};

export default About;
