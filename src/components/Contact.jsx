import { motion } from 'framer-motion'
import { HiMail } from 'react-icons/hi'
import { VscGithub } from 'react-icons/vsc'
import { FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineDocumentText } from 'react-icons/hi2'

const links = [
  { icon: <HiMail className="w-5 h-5" />, label: 'Email', href: 'mailto:harsht3kwani@gmail.com' },
  { icon: <FaLinkedinIn className="w-5 h-5" />, label: 'LinkedIn', href: 'https://linkedin.com/in/harshtekwani' },
  { icon: <VscGithub className="w-5 h-5" />, label: 'GitHub', href: 'https://github.com/HarshTekwani21' },
  { icon: <HiOutlineDocumentText className="w-5 h-5" />, label: 'Resume', href: '/cv.pdf' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-widest uppercase">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-slate-900 dark:text-white">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 p-8 sm:p-12 text-center"
        >
          {/* Decorative blobs */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Have a project in mind?
            </h3>
            <p className="text-indigo-200 mb-8 max-w-md mx-auto text-sm sm:text-base">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-white/15 backdrop-blur-sm text-white rounded-full hover:bg-white/25 transition-all hover:-translate-y-0.5 border border-white/10"
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
