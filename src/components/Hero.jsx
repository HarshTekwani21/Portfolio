import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { HiOutlineDocumentText } from 'react-icons/hi2'
import {
  SiPython, SiReact, SiFastapi, SiTensorflow, SiDocker,
  SiLangchain,
} from 'react-icons/si'
import { FaGem, FaRobot, FaMicrosoft } from 'react-icons/fa'

const techCards = [
  { icon: <SiPython />, label: 'Python', x: 5, y: 10, delay: 0 },
  { icon: <SiReact />, label: 'React', x: 75, y: 5, delay: 0.5 },
  { icon: <SiFastapi />, label: 'FastAPI', x: 82, y: 40, delay: 1 },
  { icon: <SiTensorflow />, label: 'TensorFlow', x: 10, y: 50, delay: 1.5 },
  { icon: <SiLangchain />, label: 'LangChain', x: 3, y: 75, delay: 2 },
  { icon: <SiDocker />, label: 'Docker', x: 70, y: 75, delay: 2.5 },
  { icon: <FaGem />, label: 'Gemini', x: 50, y: 85, delay: 3 },
  { icon: <FaMicrosoft />, label: 'Azure', x: 88, y: 62, delay: 3.5 },
  { icon: <FaRobot />, label: 'OpenAI', x: 20, y: 2, delay: 4 },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/HarshTekwani21' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/harshtekwani' },
  { label: 'Email', href: 'mailto:harsht3kwani@gmail.com' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 px-5 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-200/40 dark:bg-indigo-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-200/40 dark:bg-purple-500/10 rounded-full blur-3xl animate-blob-delayed" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100/30 dark:bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 rounded-full"
          >
            Hi 👋 I'm Harsh
          </motion.span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-3 text-slate-900 dark:text-white">
            Harsh Tekwani
          </h1>

          <div className="space-y-1 mb-6">
            {['AI/ML Engineer', 'Generative AI Developer', 'Full Stack Developer'].map((role, i) => (
              <motion.p
                key={role}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.15 }}
                className="text-xl sm:text-2xl font-bold gradient-text"
              >
                {role}
              </motion.p>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-lg mb-8 leading-relaxed"
          >
            Building intelligent systems and modern web experiences. Passionate about
            AI, machine learning, and crafting beautiful full-stack applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all"
            >
              Explore Projects
              <HiArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-white dark:hover:bg-slate-700 hover:-translate-y-0.5 transition-all shadow-sm"
            >
              <HiOutlineDocumentText className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center gap-6"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right - Floating Tech Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative h-[400px] sm:h-[500px] hidden lg:block"
        >
          {/* Developer workspace placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-56 h-56 rounded-3xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 border border-indigo-200/50 dark:border-indigo-500/20 flex items-center justify-center shadow-xl">
              <span className="text-7xl">👨‍💻</span>
            </div>
          </div>

          {techCards.map((card) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 + card.delay * 0.15, type: 'spring', stiffness: 200 }}
              className="absolute flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300"
              style={{ left: `${card.x}%`, top: `${card.y}%` }}
              whileHover={{ scale: 1.1, y: -4 }}
            >
              <motion.span
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3 + card.delay, repeat: Infinity, ease: 'easeInOut' }}
                className="flex"
              >
                <span className="text-indigo-500 dark:text-indigo-400 text-lg">{card.icon}</span>
              </motion.span>
              <span>{card.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile tech bar */}
        <div className="lg:hidden flex flex-wrap gap-2 justify-center mt-4">
          {techCards.map((card) => (
            <span
              key={card.label}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 shadow-sm"
            >
              <span className="text-indigo-500">{card.icon}</span>
              {card.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
