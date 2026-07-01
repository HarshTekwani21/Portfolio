import { motion } from 'framer-motion'
import { HiMail } from 'react-icons/hi'
import { VscGithub } from 'react-icons/vsc'
import { FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineDocumentText } from 'react-icons/hi2'

const links = [
  { icon: <HiMail className="w-4 h-4" />, label: 'Email', href: 'mailto:harsht3kwani@gmail.com' },
  { icon: <FaLinkedinIn className="w-4 h-4" />, label: 'LinkedIn', href: 'https://linkedin.com/in/harshtekwani' },
  { icon: <VscGithub className="w-4 h-4" />, label: 'GitHub', href: 'https://github.com/HarshTekwani21' },
  { icon: <HiOutlineDocumentText className="w-4 h-4" />, label: 'Resume', href: '/cv.pdf' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="section-label">Contact</p>
          <h2 className="section-title">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 p-10 sm:p-14 text-center"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Have a project in mind?
            </h3>
            <p className="text-indigo-200/80 mb-10 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-white/15 backdrop-blur-sm text-white rounded-full hover:bg-white/25 transition-all hover:-translate-y-0.5 border border-white/10 hover:border-white/20"
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
