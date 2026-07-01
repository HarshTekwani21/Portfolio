import { motion } from 'framer-motion'
import { HiArrowDown, HiDocumentText } from 'react-icons/hi'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-orbe orbe-1" />
        <div className="hero-orbe orbe-2" />
        <div className="hero-orbe orbe-3" />
      </div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="hero-badge">Frontend Developer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="hero-title"
        >
          Hi, I'm <span className="gradient-text">Harsh</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="hero-desc"
        >
          I craft modern, performant web experiences with clean code & creative design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="hero-actions"
        >
          <a href="#projects" className="btn btn-primary">
            View Projects <HiArrowDown />
          </a>
          <a href="/cv.pdf" target="_blank" className="btn btn-outline">
            <HiDocumentText /> Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="scroll-indicator"
        >
          <span>Scroll</span>
          <div className="scroll-line" />
        </motion.div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 120px 5% 80px;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .hero-orbe {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
        }
        .orbe-1 {
          width: 500px; height: 500px;
          background: var(--accent-1);
          top: -100px; left: -100px;
          animation: float 8s ease-in-out infinite;
        }
        .orbe-2 {
          width: 400px; height: 400px;
          background: var(--accent-2);
          bottom: -100px; right: -100px;
          animation: float 10s ease-in-out infinite reverse;
        }
        .orbe-3 {
          width: 300px; height: 300px;
          background: var(--accent-3);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          animation: pulse-glow 6s ease-in-out infinite;
        }
        .hero-content {
          position: relative;
          text-align: center;
          max-width: 720px;
        }
        .hero-badge {
          display: inline-block;
          padding: 6px 18px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          background: rgba(108, 99, 255, 0.12);
          color: var(--accent-1);
          border: 1px solid rgba(108, 99, 255, 0.2);
          margin-bottom: 24px;
        }
        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 20px;
        }
        .hero-desc {
          font-size: 1.15rem;
          color: var(--text-secondary);
          max-width: 520px;
          margin: 0 auto 36px;
          line-height: 1.7;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .scroll-indicator {
          position: absolute;
          bottom: -60px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: var(--text-muted);
          font-size: 0.75rem;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, var(--accent-1), transparent);
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
