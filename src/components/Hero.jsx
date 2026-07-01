import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { HiOutlineDocumentText } from 'react-icons/hi2'
import {
  SiPython, SiReact, SiFastapi, SiTensorflow, SiDocker, SiLangchain,
} from 'react-icons/si'
import { FaGem, FaRobot, FaMicrosoft } from 'react-icons/fa'
import { VscGithub } from 'react-icons/vsc'
import { FaLinkedinIn } from 'react-icons/fa'

const roles = ['AI/ML Engineer', 'Generative AI Developer', 'Full Stack Developer']

const orbitTechs = [
  { icon: <SiPython />, label: 'Python', angle: 0, color: 'text-blue-600' },
  { icon: <SiReact />, label: 'React', angle: 45, color: 'text-cyan-500' },
  { icon: <SiFastapi />, label: 'FastAPI', angle: 90, color: 'text-emerald-600' },
  { icon: <SiTensorflow />, label: 'TensorFlow', angle: 135, color: 'text-orange-500' },
  { icon: <SiDocker />, label: 'Docker', angle: 180, color: 'text-sky-500' },
  { icon: <SiLangchain />, label: 'LangChain', angle: 225, color: 'text-green-600' },
  { icon: <FaGem />, label: 'Gemini', angle: 270, color: 'text-blue-500' },
  { icon: <FaRobot />, label: 'OpenAI', angle: 315, color: 'text-emerald-600' },
]

const socials = [
  { icon: <VscGithub className="w-4 h-4" />, href: 'https://github.com/HarshTekwani21', label: 'GitHub' },
  { icon: <FaLinkedinIn className="w-4 h-4" />, href: 'https://linkedin.com/in/harshtekwani', label: 'LinkedIn' },
  { icon: <HiOutlineDocumentText className="w-4 h-4" />, href: '/cv.pdf', label: 'Resume' },
]

function LetterReveal({ text, className, gradient }) {
  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {text.split(' ').map((word, wi) => (
        <span key={wi} className="inline-flex mr-[0.25em]">
          {word.split('').map((char, ci) => (
            <motion.span
              key={`${wi}-${ci}`}
              initial={{ opacity: 0, y: 40, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + (wi * 0.1 + ci * 0.04), ease: [0.2, 0.65, 0.3, 0.9] }}
              className={`inline-block ${gradient ? 'gradient-text' : ''}`}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen flex items-center pt-32 pb-16 px-5 overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 pointer-events-none" style={{ transform: `translateY(${bgY})` }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(79,70,229,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_100%_0%,rgba(124,58,237,0.06),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_0%_100%,rgba(59,130,246,0.06),transparent)]" />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-multiply bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBudW1PY3RhdmVzPSIzIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2YpIiBvcGFjaXR5PSIwIi8+PC9zdmc+')] dark:opacity-[0.03] animate-noise" />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-blob-delayed" />
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-blue-200/20 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto grid lg:grid-cols-[45%_55%] gap-8 lg:gap-12 items-center">
        {/* ============ LEFT ============ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50/80 dark:bg-indigo-500/10 rounded-full border border-indigo-100/50 dark:border-indigo-500/20"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse-glow" />
            Hi, I'm Harsh
          </motion.div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-4 text-gray-900 dark:text-white">
            <LetterReveal text="Harsh" />
            <br />
            <LetterReveal text="Tekwani" gradient />
          </h1>

          {/* Roles */}
          <div className="space-y-0.5 mb-6">
            {roles.map((role, i) => (
              <motion.p
                key={role}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.12, duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
                className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text"
              >
                {role}
              </motion.p>
            ))}
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-lg mb-10 leading-relaxed"
          >
            Building intelligent systems and modern web experiences. Passionate about
            AI, machine learning, and crafting beautiful full-stack applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.5 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a href="#projects" className="btn-primary group">
              <span>Explore Projects</span>
              <HiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="/cv.pdf" target="_blank" className="btn-secondary">
              <HiOutlineDocumentText className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center gap-6"
          >
            <span className="text-xs font-medium text-gray-400 dark:text-gray-500 tracking-widest uppercase">Find me</span>
            <div className="h-px w-8 bg-gray-200 dark:bg-slate-700" />
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="text-gray-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ============ RIGHT ============ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="relative flex items-center justify-center hidden lg:flex"
        >
          {/* Illustration glass card */}
          <div className="relative w-[380px] h-[380px] xl:w-[440px] xl:h-[440px] rounded-3xl bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 shadow-xl shadow-indigo-500/5 flex items-center justify-center overflow-hidden">
            {/* Animated bg inside card */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 via-purple-50/40 to-blue-50/60 dark:from-indigo-900/20 dark:via-purple-900/10 dark:to-blue-900/20" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-300/15 dark:bg-indigo-500/10 rounded-full blur-2xl animate-blob" />
              <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-purple-300/15 dark:bg-purple-500/10 rounded-full blur-2xl animate-blob-delayed" />
              <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-blue-200/15 dark:bg-blue-500/5 rounded-full blur-2xl animate-pulse-glow" />
            </div>

            {/* Developer emoji */}
            <motion.span
              className="relative text-8xl xl:text-9xl select-none"
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              👨‍💻
            </motion.span>

            {/* Floating dots */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-indigo-400/30 dark:bg-indigo-400/20"
                animate={{
                  x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                  y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: Math.random() * 2,
                }}
                style={{ left: `${20 + Math.random() * 60}%`, top: `${20 + Math.random() * 60}%` }}
              />
            ))}
          </div>

          {/* Orbiting tech badges */}
          {orbitTechs.map((tech, i) => {
            const rad = (tech.angle * Math.PI) / 180
            const radius = 220 + (i % 2 === 0 ? 10 : -10)
            const x = Math.cos(rad) * radius
            const y = Math.sin(rad) * radius
            const duration = 12 + (i % 3) * 3

            return (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 + i * 0.08, type: 'spring', stiffness: 200 }}
                className="absolute"
                style={{
                  left: 'calc(50% - 20px)',
                  top: 'calc(50% - 20px)',
                }}
              >
                <motion.div
                  animate={{
                    x: [x, x + 8, x - 8, x],
                    y: [y, y - 6, y + 6, y],
                  }}
                  transition={{
                    duration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.3,
                  }}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, y: -4 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full border border-gray-100 dark:border-slate-700 shadow-md text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap hover:shadow-lg hover:shadow-indigo-500/10 hover:border-indigo-200 dark:hover:border-indigo-500/30 cursor-default transition-shadow"
                  >
                    <span className={`text-sm ${tech.color}`}>{tech.icon}</span>
                    <span>{tech.label}</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Mobile tech badges */}
        <div className="lg:hidden flex flex-wrap gap-2 justify-center mt-4">
          {orbitTechs.map((tech) => (
            <span
              key={tech.label}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white/90 dark:bg-slate-800/90 rounded-full border border-gray-100 dark:border-slate-700 text-gray-600 dark:text-gray-300 shadow-sm"
            >
              <span className={`text-sm ${tech.color}`}>{tech.icon}</span>
              {tech.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
