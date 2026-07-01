import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi'
import { HiOutlineDocumentText } from 'react-icons/hi2'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      const sections = links.map(l => l.href.slice(1))
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 150) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#home" className="text-xl font-extrabold tracking-tight gradient-text">
          Harsh.
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative px-3 py-2 text-sm font-medium rounded-xl transition-colors ${
                active === l.href.slice(1)
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {l.label}
              {active === l.href.slice(1) && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl -z-10"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/cv.pdf"
            target="_blank"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:shadow-lg hover:shadow-indigo-500/25 transition-all hover:-translate-y-0.5"
          >
            <HiOutlineDocumentText className="w-4 h-4" />
            Resume
          </a>

          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 flex items-center justify-center rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {open ? <HiX className="w-5 h-5" /> : <HiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="md:hidden mx-4 mb-4 rounded-2xl bg-white dark:bg-slate-800 border border-black/5 dark:border-white/5 shadow-lg overflow-hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block px-5 py-3 text-sm font-medium transition-colors ${
                  active === l.href.slice(1)
                    ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="/cv.pdf"
              target="_blank"
              className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-indigo-600 dark:text-indigo-400 border-t border-black/5 dark:border-white/5"
            >
              <HiOutlineDocumentText className="w-4 h-4" />
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
