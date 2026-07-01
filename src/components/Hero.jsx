import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { HiOutlineMail } from 'react-icons/hi'
import {
  SiPython, SiReact, SiFastapi, SiLangchain, SiTensorflow, SiDocker,
} from 'react-icons/si'
import { VscGithub } from 'react-icons/vsc'
import { FaLinkedinIn } from 'react-icons/fa'
import devImg from '../assets/dev-3d.png'
import plantImg from '../assets/plant-3d.png'
import rocketImg from '../assets/rocket-3d.png'

const socials = [
  { icon: <VscGithub className="w-4 h-4" />, label: 'GitHub', href: 'https://github.com/HarshTekwani21' },
  { icon: <FaLinkedinIn className="w-4 h-4" />, label: 'LinkedIn', href: 'https://linkedin.com/in/harshtekwani' },
  { icon: <HiOutlineMail className="w-4 h-4" />, label: 'Email', href: 'mailto:harsht3kwani@gmail.com' },
]

// Floating tech badges around the illustration (matches reference placement)
const floatBadges = [
  { icon: <SiPython />, label: 'Python', color: 'text-blue-500', pos: 'top-2 left-1/2 -translate-x-1/2', delay: 0 },
  { icon: <SiLangchain />, label: 'LangChain', color: 'text-green-600', pos: 'top-1/3 -left-4', delay: 0.6 },
  { icon: <SiReact />, label: 'React', color: 'text-cyan-500', pos: 'top-1/4 -right-4', delay: 0.9 },
  { icon: <SiFastapi />, label: 'FastAPI', color: 'text-emerald-600', pos: 'top-1/2 -right-6', delay: 1.2 },
  { icon: <SiTensorflow />, label: 'TensorFlow', color: 'text-orange-500', pos: 'bottom-24 -left-6', delay: 1.5 },
  { icon: <SiDocker />, label: 'Docker', color: 'text-sky-500', pos: 'bottom-10 right-0', delay: 1.8 },
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
              transition={{ duration: 0.5, delay: 0.9 + (wi * 0.1 + ci * 0.04), ease: [0.2, 0.65, 0.3, 0.9] }}
              className={`inline-block ${gradient ? 'gradient-text-animated' : ''}`}
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
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '16%'])

  // Mouse parallax
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 20 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 20 })
  const charX = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 80, damping: 18 })

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
      <motion.div style={{ y: contentY }} className="relative w-full">
       <div className="max-w-7xl mx-auto grid lg:grid-cols-[46%_54%] gap-10 lg:gap-8 items-center">
        {/* ============ LEFT ============ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
        >
          {/* Label */}
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

          {/* Name */}
          <h1 className="text-6xl sm:text-7xl lg:text-[5.25rem] font-extrabold tracking-tight leading-[0.92] mb-4 text-gray-900 dark:text-white">
            <LetterReveal text="Harsh" />{' '}
            <LetterReveal text="Tekwani" gradient />
          </h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold gradient-text-animated mb-6"
          >
            AI/ML Engineer &amp; Full Stack Developer
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mb-9 leading-relaxed"
          >
            I build intelligent systems, machine learning pipelines, and elegant web
            experiences — turning complex AI problems into scalable, production-ready products.
          </motion.p>

          {/* CTA Buttons */}
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

          {/* Socials */}
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

        {/* ============ RIGHT — Illustration card ============ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.2, 0.65, 0.3, 0.9] }}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="relative hidden lg:block"
          style={{ perspective: 1200 }}
        >
          <motion.div
            style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
            className="relative mx-auto max-w-[520px]"
          >
            {/* Gradient card */}
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 shadow-[0_40px_90px_-30px_rgba(79,70,229,0.6)]">
              {/* Inner glow blobs */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-fuchsia-400/30 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl animate-pulse-glow" />
              </div>
              {/* Subtle grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

              {/* Ground glow */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-56 h-16 bg-black/20 rounded-[100%] blur-2xl" />

              {/* Character */}
              <motion.img
                src={devImg}
                alt="Harsh Tekwani — developer illustration"
                style={{ x: charX, transform: 'translateZ(60px)' }}
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[62%] max-w-[300px] drop-shadow-2xl select-none pointer-events-none"
              />

              {/* Decorative plant */}
              <motion.img
                src={plantImg}
                alt=""
                aria-hidden
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-5 right-6 w-16 select-none pointer-events-none drop-shadow-lg"
              />
              {/* Decorative rocket */}
              <motion.img
                src={rocketImg}
                alt=""
                aria-hidden
                animate={{ y: [6, -6, 6], rotate: [0, 6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-8 left-8 w-14 select-none pointer-events-none drop-shadow-lg"
              />
            </div>

            {/* Floating tech badges */}
            {floatBadges.map((b) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + b.delay * 0.25, type: 'spring', stiffness: 220 }}
                className={`absolute z-20 ${b.pos}`}
                style={{ transform: 'translateZ(90px)' }}
              >
                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 4 + b.delay, repeat: Infinity, ease: 'easeInOut', delay: b.delay }}
                  whileHover={{ scale: 1.12, y: -4 }}
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-full border border-white/70 dark:border-white/10 shadow-lg shadow-indigo-900/10 text-xs font-semibold text-gray-700 dark:text-gray-200 whitespace-nowrap hover:shadow-xl hover:shadow-indigo-500/25 cursor-default transition-all"
                >
                  <span className={`text-base ${b.color}`}>{b.icon}</span>
                  <span>{b.label}</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Mobile character + badges */}
        <div className="lg:hidden">
          <div className="relative mx-auto w-56 h-56 rounded-[2rem] overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 mb-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)]" />
            <img src={devImg} alt="developer illustration" className="absolute bottom-2 left-1/2 -translate-x-1/2 w-40" />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {floatBadges.map((b) => (
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
