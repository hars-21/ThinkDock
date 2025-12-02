import "../styles/home.css";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { testimonials } from "../data/testimonials";
import summary from "/assets/summary.png";
import idea from "/assets/idea.png";
import keyword from "/assets/keyword.png";

const heroStats = [
  { value: "120K+", label: "Ideas sparked" },
  { value: "35%", label: "Faster workflows" },
  { value: "24/7", label: "AI copilots online" },
];

const Feature = ({ title, description, icon, direction = "same", image, badge }) => (
  <article className={`feature-item ${direction}`}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.4 }}
      className="feature-about"
    >
      {badge ? <span className="feature-badge">{badge}</span> : null}
      <div className="feature-icon" aria-hidden="true">
        {icon}
      </div>
      <div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-desc">{description}</p>
      </div>
      <Link to="/dashboard" className="feature-cta" aria-label={`Try the ${title} tool`}>
        Launch tool <FaArrowRightLong />
      </Link>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: direction === "reverse" ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.1 }}
      viewport={{ once: true, amount: 0.4 }}
      className="feature-visual"
    >
      <div className="feature-demo">
        <div className="demo-placeholder">
          {image ? (
            <img src={image} alt={`${title} preview`} className="demo-image" />
          ) : (
            <span>Interactive Demo</span>
          )}
        </div>
      </div>
    </motion.div>
  </article>
);

const TestimonialCard = ({ testimonial }) => (
  <div className="testimonial-card">
    <div className="testimonial-content">
      <div className="testimonial-header">
        <div className="testimonial-avatar">{testimonial.avatar}</div>
        <div className="testimonial-info">
          <div className="testimonial-name">{testimonial.name}</div>
          <div className="testimonial-role">{testimonial.role}</div>
        </div>
      </div>
      <p className="testimonial-text">"{testimonial.testimonial}"</p>
    </div>
  </div>
);

const Home = () => {
  const marqueeTestimonials = [...testimonials, ...testimonials];

  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-bg" aria-hidden="true"></div>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="hero-noise" aria-hidden="true"></div>
        <div className="hero-container">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-pill"
          >
            Instant workspace for your ideas
          </motion.span>
          <motion.h1
            id="hero-heading"
            className="hero-head arima"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            ThinkDock
          </motion.h1>
          <motion.p
            className="hero-subhead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Your quick-access AI desk — summarize, create, and explore in seconds with tools tuned
            for creators, researchers, and product teams.
          </motion.p>
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Link to="/dashboard" className="animated-btn" aria-label="Get Started">
              Get Started <FaArrowRightLong />
            </Link>
            <a href="#features" className="animated-btn" aria-label="See ThinkDock tools">
              View tools
            </a>
          </motion.div>
          <motion.div
            className="hero-stats"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.15, delayChildren: 0.6 },
              },
            }}
          >
            {heroStats.map((stat) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              >
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="features" className="features" aria-labelledby="features-heading">
        <div className="features-head" id="features-heading">
          <span className="gold arima">Discover</span> ThinkDock's AI Tools
          <p className="features-subhead">
            Three powerful copilots designed for instant productivity
          </p>
        </div>
        <div className="feature-container">
          <Feature
            title="AI Summarizer"
            badge="Most loved"
            description="Paste any text and get instant summaries in your preferred format. Choose short, medium, or bullet-point breakdowns tailored to your audience."
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10,9 9,9 8,9" />
              </svg>
            }
            direction="same"
            image={summary}
          />
          <Feature
            title="Idea Generator"
            badge="Fresh drops"
            description="Stuck on a topic? Enter any subject and gather 3-5 unique, creative angles instantly. Perfect for brainstorming, product discovery, and content prompts."
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M9 21h6" />
                <path d="M12 17v4" />
                <circle cx="12" cy="9" r="7" />
              </svg>
            }
            direction="reverse"
            image={idea}
          />
          <Feature
            title="Keyword Extractor"
            description="Extract the most important keywords from any text instantly. Spot key terms, topics, and concepts for SEO, research, or content strategy."
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                <line x1="7" y1="7" x2="7.01" y2="7" />
              </svg>
            }
            direction="same"
            image={keyword}
          />
        </div>
      </section>

      <section className="testimonials" aria-labelledby="testimonial-heading">
        <div className="testimonial-intro">
          <p className="testimonial-caption">Community love</p>
          <h2 className="testimonial-title" id="testimonial-heading">
            Don't just take <span className="gold arima">our word</span> for it
          </h2>
          <p className="testimonial-subtitle">
            Thousands of builders rely on ThinkDock to accelerate research, content, and product
            decisions every single day.
          </p>
        </div>
        <div className="scroll-wrapper" aria-label="Customer testimonials carousel">
          <motion.div
            className="testimonial-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="carousel-track primary">
              {marqueeTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="carousel-track secondary">
              {marqueeTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.id}-secondary-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
