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
      const ids = links.map(l => l.href.slice(1)).reverse()
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 160) {
          setActive(id); break
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
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4"
    >
      <motion.div
        animate={{
          paddingLeft: scrolled ? '12px' : '20px',
          paddingRight: scrolled ? '12px' : '20px',
          height: scrolled ? '54px' : '66px',
          width: scrolled ? '90%' : '100%',
        }}
        transition={{ duration: 0.35, ease: [0.2, 0.65, 0.3, 0.9] }}
        className={`flex items-center justify-between max-w-5xl mx-4 rounded-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/40 dark:border-slate-700/40 transition-shadow duration-300 ${
          scrolled
            ? 'shadow-[0_8px_30px_-8px_rgba(17,24,39,0.15)]'
            : 'shadow-[0_4px_20px_-8px_rgba(17,24,39,0.08)]'
        }`}
        style={{ borderRadius: '9999px' }}
      >
        <a href="#home" className="text-lg font-extrabold tracking-tight gradient-text shrink-0 px-2">
          Harsh<span className="text-gray-900 dark:text-white">.</span>
        </a>

        <div className="hidden md:flex items-center gap-0.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative px-3 py-1.5 text-sm font-medium transition-colors ${
                active === l.href.slice(1)
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {l.label}
              {active === l.href.slice(1) && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <a
            href="/cv.pdf"
            target="_blank"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-md shadow-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/40 transition-all hover:-translate-y-0.5"
          >
            <HiOutlineDocumentText className="w-3.5 h-3.5" />
            Resume
          </a>

          <button
            onClick={() => setDark(!dark)}
            className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? <HiSun className="w-4 h-4" /> : <HiMoon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-8 h-8 flex items-center justify-center rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
          >
            {open ? <HiX className="w-4 h-4" /> : <HiMenu className="w-4 h-4" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            className="absolute top-full left-4 right-4 mt-2 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-xl overflow-hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block px-5 py-3 text-sm font-medium transition-colors ${
                  active === l.href.slice(1)
                    ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700'
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="/cv.pdf"
              target="_blank"
              className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-indigo-600 dark:text-indigo-400 border-t border-gray-100 dark:border-slate-700"
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
