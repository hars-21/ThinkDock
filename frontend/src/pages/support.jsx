import "../styles/support.css";
import {
  FaEnvelope,
  FaQuestionCircle,
  FaDiscord,
  FaGithub,
  FaLightbulb,
  FaCog,
  FaUserShield,
} from "react-icons/fa";
import { motion } from "framer-motion";

const quickHelpCards = [
  {
    id: 1,
    icon: FaLightbulb,
    title: "Getting started",
    description: "Pick a tool, drop in your text, and watch ThinkDock handle the busywork.",
    items: ["Choose your AI tool", "Input content or prompts", "Ship results instantly"],
  },
  {
    id: 2,
    icon: FaCog,
    title: "Tips & tricks",
    description: "Craft better prompts and combine features for lightning-fast workflows.",
    items: ["Be specific with keywords", "Experiment with summary lengths", "Chain tools together"],
  },
  {
    id: 3,
    icon: FaUserShield,
    title: "Privacy first",
    description: "Real-time processing with no text stored—your ideas stay yours.",
    items: ["Secure connections", "Zero data retention", "Manual clearing in one click"],
  },
];

const contactOptions = [
  {
    id: 1,
    icon: FaEnvelope,
    title: "Email support",
    description: "Reach us directly for account or product questions.",
    action: "help.lecturax@gmail.com",
    href: "mailto:help.lecturax@gmail.com",
  },
  {
    id: 2,
    icon: FaGithub,
    title: "GitHub issues",
    description: "Request features or report bugs in the open.",
    action: "Open an issue",
    href: "https://github.com/hars-21/ThinkDock",
  },
  {
    id: 3,
    icon: FaDiscord,
    title: "Community chat",
    description: "Swap ideas with other builders and get tips in real time.",
    action: "Join Discord",
    href: "https://discord.com/invite/thinkdock",
  },
];

const heroHighlights = [
  { value: "<24h", label: "Average response" },
  { value: "90+", label: "Countries building" },
  { value: "99.9%", label: "Uptime last 90d" },
];

const faqs = [
  {
    id: 1,
    question: "How do I use the AI Summarizer?",
    answer:
      "Paste your text, choose short, medium, or bullet summaries, and hit generate. You'll get a clean recap instantly.",
  },
  {
    id: 2,
    question: "What is the Idea Generator and how does it work?",
    answer:
      "Enter a topic or theme and ThinkDock delivers 3-5 distinct angles to help kickstart creativity.",
  },
  {
    id: 3,
    question: "How does the Keyword Extractor identify important terms?",
    answer:
      "It scores your text with AI models to surface the most relevant entities, phrases, and topics for faster analysis.",
  },
  {
    id: 4,
    question: "Is ThinkDock free to use?",
    answer:
      "Yes—every tool is free, with no subscription walls. We believe in making AI superpowers accessible to everyone.",
  },
  {
    id: 5,
    question: "Do you store my data or text inputs?",
    answer:
      "No content is stored. Requests are processed in real time, and you can clear your session history anytime.",
  },
  {
    id: 6,
    question: "Can I use ThinkDock for commercial work?",
    answer:
      "Absolutely. Researchers, agencies, and founders use ThinkDock daily for briefs, summaries, and ideation.",
  },
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

const Support = () => {
  return (
    <div className="support-container">
      <div className="grid-overlay" aria-hidden="true"></div>
      <motion.section
        className="support-hero"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <span className="pill">Need a hand?</span>
        <h1 className="support-title">
          <span className="gold arima">ThinkDock</span> Support
        </h1>
        <p className="support-subtitle">
          We're here to keep your AI workflows humming—whether you have a bug to report or need a
          brainstorming partner.
        </p>
        <div className="support-cta">
          <a href="mailto:help.lecturax@gmail.com" className="animated-btn">
            Email us directly
          </a>
          <a
            href="https://discord.com/invite/thinkdock"
            target="_blank"
            rel="noopener noreferrer"
            className="animated-btn"
          >
            Join the community
          </a>
        </div>
        <div className="support-highlight-row">
          {heroHighlights.map((stat) => (
            <div className="support-highlight" key={stat.label}>
              <span className="highlight-value">{stat.value}</span>
              <span className="highlight-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="quick-help-section"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="section-title">Quick help</h2>
        <motion.div
          className="help-cards"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {quickHelpCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.id} className="help-card" variants={scaleIn}>
                <div className="help-icon">
                  <Icon />
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <ul className="help-list">
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      <motion.section
        className="contact-section"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="section-title">Get in touch</h2>
        <p className="support-description">
          Prefer async updates or want to jam live? Pick the channel that fits your workflow.
        </p>
        <motion.div
          className="contact-grid"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {contactOptions.map((option) => {
            const Icon = option.icon;
            return (
              <motion.div key={option.id} className="contact-card" variants={fadeInUp}>
                <div className="contact-icon-wrapper">
                  <Icon className="contact-icon" />
                </div>
                <div className="contact-info">
                  <h3>{option.title}</h3>
                  <p>{option.description}</p>
                  <a
                    href={option.href}
                    target={option.href.startsWith("http") ? "_blank" : undefined}
                    rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="contact-link"
                  >
                    {option.action}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      <motion.section
        className="faq-section"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="section-title">Frequently asked questions</h2>
        <div className="faq-container">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              className="faq-item"
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="faq-icon-wrapper">
                <FaQuestionCircle className="faq-icon" />
              </div>
              <div className="faq-content">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Support;
