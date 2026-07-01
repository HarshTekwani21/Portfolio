import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="navbar-inner">
        <a href="#home" className="logo">
          <span className="logo-text gradient-text">&lt;Portfolio /&gt;</span>
        </a>

        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="mobile-link"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 16px 5%;
          transition: var(--transition);
        }
        .navbar.scrolled {
          background: rgba(10, 10, 15, 0.85);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--glass-border);
          padding: 10px 5%;
        }
        .navbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo-text {
          font-size: 1.3rem;
          font-weight: 800;
        }
        .nav-links {
          display: flex;
          gap: 32px;
        }
        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: var(--transition);
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--gradient-1);
          transition: var(--transition);
          border-radius: 1px;
        }
        .nav-link:hover {
          color: var(--text-primary);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 4px;
        }
        .mobile-menu {
          max-width: 1200px;
          margin: 12px auto 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius);
          padding: 16px;
        }
        .mobile-link {
          padding: 10px 16px;
          border-radius: var(--radius-sm);
          font-weight: 500;
          color: var(--text-secondary);
          transition: var(--transition);
        }
        .mobile-link:hover {
          background: rgba(108, 99, 255, 0.1);
          color: var(--text-primary);
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .menu-btn { display: block; }
        }
      `}</style>
    </motion.nav>
  )
}
