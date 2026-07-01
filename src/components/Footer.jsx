import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="footer"
    >
      <div className="footer-inner">
        <p>&copy; {new Date().getFullYear()} Harsh. Built with React & Framer Motion</p>
      </div>

      <style>{`
        .footer {
          border-top: 1px solid var(--glass-border);
          padding: 32px 5%;
          margin-top: 40px;
        }
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          color: var(--text-muted);
          font-size: 0.85rem;
        }
      `}</style>
    </motion.footer>
  )
}
