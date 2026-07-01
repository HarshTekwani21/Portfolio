import { motion } from 'framer-motion'
import { HiCode, HiColorSwatch, HiLightningBolt } from 'react-icons/hi'

const highlights = [
  { icon: <HiCode size={24} />, title: 'Clean Code', desc: 'Writing maintainable, scalable code with best practices.' },
  { icon: <HiColorSwatch size={24} />, title: 'Modern Design', desc: 'Crafting pixel-perfect UIs with smooth interactions.' },
  { icon: <HiLightningBolt size={24} />, title: 'Performance', desc: 'Optimized builds for lightning-fast load times.' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title gradient-text">About Me</h2>
        <p className="section-subtitle">A brief introduction</p>
      </motion.div>

      <div className="about-grid">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="about-text"
        >
          <p>
            I'm a passionate developer who loves building beautiful, functional web applications.
            With a strong foundation in modern frontend technologies, I turn complex problems
            into simple, elegant solutions.
          </p>
          <p>
            I enjoy working with React, exploring new tools, and constantly pushing the
            boundaries of what's possible on the web.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="about-stats"
        >
          <div className="stat-card glass">
            <span className="stat-number gradient-text">2+</span>
            <span className="stat-label">Years Coding</span>
          </div>
          <div className="stat-card glass">
            <span className="stat-number gradient-text">20+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-card glass">
            <span className="stat-number gradient-text">10+</span>
            <span className="stat-label">Technologies</span>
          </div>
        </motion.div>
      </div>

      <div className="highlights">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="highlight-card glass"
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
          >
            <div className="highlight-icon">{h.icon}</div>
            <h3>{h.title}</h3>
            <p>{h.desc}</p>
          </motion.div>
        ))}
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-bottom: 60px;
          align-items: center;
        }
        .about-text p {
          color: var(--text-secondary);
          margin-bottom: 16px;
          font-size: 1.05rem;
          line-height: 1.8;
        }
        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .stat-card {
          text-align: center;
          padding: 28px 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .stat-number {
          font-size: 2rem;
          font-weight: 800;
        }
        .stat-label {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        .highlights {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .highlight-card {
          padding: 32px 24px;
          text-align: center;
        }
        .highlight-icon {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: rgba(108, 99, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-1);
          margin: 0 auto 16px;
        }
        .highlight-card h3 {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .highlight-card p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-stats { grid-template-columns: repeat(3, 1fr); }
          .highlights { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
