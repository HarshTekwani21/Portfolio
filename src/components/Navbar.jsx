import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi'
import { HiArrowUpRight } from 'react-icons/hi2'

const links = [
  { label: './about', href: '#about' },
  { label: './work', href: '#work' },
  { label: './experience', href: '#experience' },
  { label: './skills', href: '#skills' },
  { label: './contact', href: '#contact' },
]

export default function Navbar({ light, setLight }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      const ids = links.map(l => l.href.slice(1)).reverse()
      let found = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 180) {
          found = id
          break
        }
      }
      setActive(found)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--bg)]/85 backdrop-blur-xl border-b border-[var(--line)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-x flex items-center justify-between h-[72px]">
        {/* Prompt-style wordmark */}
        <a href="#home" className="mono text-sm font-bold tracking-tight">
          <span className="text-[var(--accent-text)]">~/</span>harsh.tekwani
          <span className="cursor-block !h-[0.9em]" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`mono text-[12px] tracking-wide transition-all ${
                active === l.href.slice(1)
                  ? 'text-[var(--accent-text)] [text-shadow:0_0_12px_var(--glow)]'
                  : 'text-[var(--muted)] hover:text-[var(--text)]'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setLight(!light)}
            className="icon-btn"
            aria-label="Toggle theme"
          >
            {light ? <HiMoon className="w-4 h-4" /> : <HiSun className="w-4 h-4" />}
          </button>

          <a
            href="/cv.pdf"
            target="_blank"
            className="hidden md:inline-flex btn-accent !px-4 !py-2 !text-[11px]"
          >
            resume
            <HiArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden icon-btn"
            aria-label="Menu"
          >
            {open ? <HiX className="w-4 h-4" /> : <HiMenu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-[var(--bg)] border-b border-[var(--line)]"
          >
            <div className="container-x py-4 flex flex-col">
              {links.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3.5 border-b border-[var(--line)] last:border-0 mono text-base"
                >
                  {l.label}
                  <span className="mono text-[10px] text-[var(--muted)]">0{i + 1}</span>
                </a>
              ))}
              <a href="/cv.pdf" target="_blank" className="btn-accent justify-center mt-4">
                resume <HiArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
