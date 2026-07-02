import { motion } from 'framer-motion'
import { HiArrowUpRight, HiOutlineDocumentText } from 'react-icons/hi2'
import { VscGithub } from 'react-icons/vsc'
import { FaLinkedinIn } from 'react-icons/fa'

const links = [
  { icon: <FaLinkedinIn className="w-4 h-4" />, label: 'LinkedIn', href: 'https://linkedin.com/in/harshtekwani' },
  { icon: <VscGithub className="w-4 h-4" />, label: 'GitHub', href: 'https://github.com/HarshTekwani21' },
  { icon: <HiOutlineDocumentText className="w-4 h-4" />, label: 'Resume', href: '/cv.pdf' },
]

const ease = [0.22, 1, 0.36, 1]

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 scroll-mt-20">
      <div className="container-x">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="eyebrow mb-8"
        >
          06 // contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="display-hero text-[clamp(2.5rem,8vw,6.5rem)] mb-8"
        >
          Let&rsquo;s build
          <br />
          <span className="glow-text">together_</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="mono text-[13px] text-[var(--muted)] leading-relaxed max-w-md mb-12"
        >
          <span className="text-[var(--accent-text)]">$</span> echo &quot;have a project or an
          idea in mind? drop me a line&quot;
        </motion.p>

        {/* Giant email link */}
        <motion.a
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          href="mailto:harsht3kwani@gmail.com"
          className="group inline-flex flex-wrap items-center gap-4 mono text-[clamp(1.1rem,3.5vw,2.25rem)] font-bold tracking-tight link-underline mb-14"
        >
          harsht3kwani@gmail.com
          <span className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[var(--accent)] text-[var(--accent-ink)] [box-shadow:0_0_24px_var(--glow)] transition-transform duration-300 group-hover:rotate-45">
            <HiArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap gap-3"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="btn-outline !py-2.5 !px-5 !text-[11px]"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
