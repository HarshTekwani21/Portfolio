import { motion } from 'framer-motion'
import { HiMail, HiLocationMarker } from 'react-icons/hi'
import { SiGithub, SiX } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title gradient-text">Get in Touch</h2>
        <p className="section-subtitle">Let's build something great together</p>
      </motion.div>

      <div className="contact-grid">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="contact-info"
        >
          <div className="contact-item">
            <div className="contact-icon"><HiMail size={20} /></div>
            <div>
              <h4>Email</h4>
              <a href="mailto:harsh@example.com">harsh@example.com</a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><HiLocationMarker size={20} /></div>
            <div>
              <h4>Location</h4>
              <span>Your City, Country</span>
            </div>
          </div>
          <div className="contact-socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="social-link">
              <SiGithub size={22} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="social-link">
              <FaLinkedinIn size={22} />
            </a>
            <a href="https://x.com/" target="_blank" rel="noreferrer" className="social-link">
              <SiX size={22} />
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="contact-form glass"
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="text" placeholder="Your Name" className="form-input" required />
          <input type="email" placeholder="Your Email" className="form-input" required />
          <textarea placeholder="Your Message" className="form-input form-textarea" rows={5} required />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </motion.form>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 60px;
          align-items: start;
        }
        .contact-item {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
          align-items: flex-start;
        }
        .contact-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(108, 99, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-1);
          flex-shrink: 0;
        }
        .contact-item h4 {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
          margin-bottom: 4px;
        }
        .contact-item a,
        .contact-item span {
          font-size: 1rem;
          color: var(--text-primary);
          font-weight: 500;
        }
        .contact-item a:hover {
          color: var(--accent-1);
        }
        .contact-socials {
          display: flex;
          gap: 12px;
          margin-top: 8px;
        }
        .social-link {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: var(--transition);
        }
        .social-link:hover {
          background: rgba(108, 99, 255, 0.12);
          color: var(--accent-1);
          border-color: rgba(108, 99, 255, 0.3);
          transform: translateY(-2px);
        }
        .contact-form {
          padding: 36px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .form-input {
          width: 100%;
          padding: 14px 18px;
          border-radius: var(--radius-sm);
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
          font-size: 0.95rem;
          font-family: inherit;
          transition: var(--transition);
          outline: none;
        }
        .form-input:focus {
          border-color: var(--accent-1);
          box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.1);
        }
        .form-input::placeholder {
          color: var(--text-muted);
        }
        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }
        .contact-form .btn {
          align-self: flex-start;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  )
}
