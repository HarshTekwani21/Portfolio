import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { HiArrowRight, HiOutlineMail } from 'react-icons/hi'
import {
  SiPython, SiReact, SiFastapi, SiDocker, SiLangchain, SiTensorflow,
} from 'react-icons/si'
import { FaGem, FaRobot, FaMicrosoft } from 'react-icons/fa'
import { VscGithub } from 'react-icons/vsc'
import { FaLinkedinIn } from 'react-icons/fa'
import devImg from '../assets/dev.webp'

const socials = [
  { icon: <VscGithub className="w-4 h-4" />, label: 'GitHub', href: 'https://github.com/HarshTekwani21' },
  { icon: <FaLinkedinIn className="w-4 h-4" />, label: 'LinkedIn', href: 'https://linkedin.com/in/harshtekwani' },
  { icon: <HiOutlineMail className="w-4 h-4" />, label: 'Email', href: 'mailto:harsht3kwani@gmail.com' },
]

// Tech badges floating around the illustration (angle in degrees, radius as % of card)
const badges = [
  { icon: <SiPython />, label: 'Python', color: 'text-blue-500', x: '46%', y: '-4%' },
  { icon: <FaGem />, label: 'Gemini', color: 'text-blue-500', x: '4%', y: '10%' },
  { icon: <SiLangchain />, label: 'LangChain', color: 'text-green-600', x: '-6%', y: '40%' },
  { icon: <SiReact />, label: 'React', color: 'text-cyan-500', x: '90%', y: '16%' },
  { icon: <SiFastapi />, label: 'FastAPI', color: 'text-emerald-600', x: '96%', y: '46%' },
  { icon: <SiTensorflow />, label: 'TensorFlow', color: 'text-orange-500', x: '-2%', y: '72%' },
  { icon: <SiDocker />, label: 'Docker', color: 'text-sky-500', x: '86%', y: '80%' },
  { icon: <FaMicrosoft />, label: 'Azure', color: 'text-blue-600', x: '40%', y: '96%' },
  { icon: <FaRobot />, label: 'OpenAI', color: 'text-emerald-600', x: '8%', y: '92%' },
]

function LetterReveal({ text, gradient }) {
  return (
    <span className="inline-flex">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.5, delay: 0.9 + i * 0.045, ease: [0.2, 0.65, 0.3, 0.9] }}
          className={`inline-block ${gradient ? 'gradient-text-animated' : ''}`}
        >
          {char === ' ' ? ' ' : char}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])

  // Mouse parallax
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 120, damping: 20 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 120, damping: 20 })
  const cx = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 80, damping: 18 })
  const cy = useSpring(useTransform(my, [-0.5, 0.5], [-10, 10]), { stiffness: 80, damping: 18 })

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-28 pb-16 px-6 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(14)].map((_, i) => {
          const left = (i * 67) % 100
          const top = (i * 41) % 100
          const size = 3 + (i % 4) * 2
          const dur = 7 + (i % 5) * 2
          return (
            <motion.span
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-indigo-400/40 to-purple-400/40"
              style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
              animate={{ y: [0, -30, 0], opacity: [0.2, 0.7, 0.2] }}
              transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
            />
          )
        })}
      </div>

      <motion.div style={{ y: contentY }} className="relative w-full">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[46%_54%] gap-12 lg:gap-8 items-center">
          {/* ============ LEFT ============ */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.18em] uppercase text-indigo-600 dark:text-indigo-300 bg-white/60 dark:bg-indigo-500/10 backdrop-blur-md rounded-full border border-indigo-100/70 dark:border-indigo-500/20 shadow-sm"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-indigo-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full w-2 h-2 bg-indigo-500" />
              </span>
              Hi, I'm
            </motion.div>

            <h1 className="text-6xl sm:text-7xl lg:text-[5.25rem] font-extrabold tracking-tight leading-[0.92] mb-4 text-gray-900 dark:text-white">
              <LetterReveal text="Harsh" />
              <br />
              <LetterReveal text="Tekwani" gradient />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-2xl sm:text-3xl font-bold gradient-text-animated mb-6"
            >
              AI/ML Engineer &amp; GenAI Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mb-9 leading-relaxed"
            >
              I build LLM-powered systems, agentic pipelines, and Text-to-SQL solutions
              across GenAI, RAG, and OCR — delivering production-ready AI for public and
              private sector clients.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-9"
            >
              <a href="#projects" className="btn-primary group">
                <span className="relative z-10">Explore My Work</span>
                <HiArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="btn-secondary group">
                <HiOutlineMail className="w-4 h-4" />
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap items-center gap-3"
            >
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  whileHover={{ y: -3 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-black/5 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10 transition-all"
                >
                  {s.icon}
                  {s.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ============ RIGHT — illustration ============ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.2, 0.65, 0.3, 0.9] }}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className="relative hidden lg:block"
            style={{ perspective: 1400 }}
          >
            {/* Purple aura behind card */}
            <div className="absolute -inset-6 bg-gradient-to-br from-indigo-400/30 via-purple-400/25 to-blue-400/30 blur-3xl rounded-[3rem] animate-pulse-glow" />

            <motion.div
              style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
              className="relative mx-auto max-w-[540px]"
            >
              {/* Gradient card */}
              <div className="relative aspect-[5/5] rounded-[2.25rem] overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-600 shadow-[0_40px_90px_-28px_rgba(79,70,229,0.65)] ring-1 ring-white/20">
                {/* Inner light blobs */}
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-fuchsia-400/30 rounded-full blur-3xl" />
                {/* spotlight behind character */}
                <div className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 w-[75%] h-[75%] bg-[radial-gradient(circle,rgba(255,255,255,0.4),transparent_65%)]" />
                {/* subtle grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />

                {/* ground shadow */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-3/5 h-10 bg-black/25 rounded-[100%] blur-2xl" />

                {/* Character */}
                <motion.img
                  src={devImg}
                  alt="Harsh Tekwani — developer illustration"
                  style={{ x: cx, y: cy, transform: 'translateZ(50px)' }}
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[86%] max-w-[440px] drop-shadow-2xl select-none pointer-events-none"
                />
              </div>

              {/* Floating tech badges */}
              {badges.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 + i * 0.09, type: 'spring', stiffness: 220 }}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: b.x, top: b.y, transform: 'translateZ(95px)' }}
                >
                  <motion.div
                    animate={{ y: [-7, 7, -7] }}
                    transition={{ duration: 4 + (i % 4), repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                    whileHover={{ scale: 1.12 }}
                    className="flex items-center gap-1.5 px-3.5 py-2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-full border border-white/70 dark:border-white/10 shadow-lg shadow-indigo-900/15 text-xs font-semibold text-gray-700 dark:text-gray-200 whitespace-nowrap hover:shadow-xl hover:shadow-indigo-500/30 cursor-default transition-all"
                  >
                    <span className={`text-base ${b.color}`}>{b.icon}</span>
                    <span>{b.label}</span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Mobile illustration + badges */}
          <div className="lg:hidden">
            <div className="relative mx-auto max-w-[320px] aspect-square rounded-[2rem] overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-600 shadow-xl shadow-indigo-500/30 mb-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(255,255,255,0.35),transparent_65%)]" />
              <img src={devImg} alt="developer illustration" className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[88%]" />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {badges.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-full border border-black/5 dark:border-white/10 text-gray-600 dark:text-gray-300 shadow-sm"
                >
                  <span className={`text-sm ${b.color}`}>{b.icon}</span>
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
