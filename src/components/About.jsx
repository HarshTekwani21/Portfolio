import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: 2, suffix: '+', label: 'years_experience' },
  { value: 10, suffix: '+', label: 'ai_projects_shipped' },
  { value: 15, suffix: '+', label: 'technologies' },
  { value: 4, suffix: '', label: 'companies' },
]

const ease = [0.22, 1, 0.36, 1]

function Counter({ end, duration = 1.8 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const counted = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true
          const startTime = performance.now()
          const step = (now) => {
            const elapsed = (now - startTime) / 1000
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(end * eased))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{count}</span>
}

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 scroll-mt-20">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-12"
        >
          <p className="eyebrow mb-5">01 // about</p>
          <h2 className="section-title max-w-3xl">
            Engineering <span className="glow-text">intelligence</span> into
            production software
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-4">
          {/* Bio panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease }}
            className="tile hud-corners lg:col-span-3 p-8 sm:p-10 flex flex-col justify-between gap-10"
          >
            <p className="text-lg sm:text-xl leading-relaxed text-[var(--muted)] max-w-2xl">
              <span className="text-[var(--text)]">AI/ML Engineer with hands-on experience</span> building
              LLM-powered systems, agentic pipelines, and Text-to-SQL solutions across GenAI,
              RAG, and OCR. An MCA graduate shipping production AI at Tagbin
              for public and private sector clients.
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              <div>
                <p className="mono text-[10px] tracking-[0.2em] uppercase text-[var(--accent-text)] mb-1.5">$ current_role</p>
                <p className="font-display font-medium">AI/ML Engineer @ Tagbin</p>
              </div>
              <div>
                <p className="mono text-[10px] tracking-[0.2em] uppercase text-[var(--accent-text)] mb-1.5">$ focus</p>
                <p className="font-display font-medium">GenAI · Agents · RAG</p>
              </div>
              <div>
                <p className="mono text-[10px] tracking-[0.2em] uppercase text-[var(--accent-text)] mb-1.5">$ education</p>
                <p className="font-display font-medium">MCA</p>
              </div>
            </div>
          </motion.div>

          {/* Stat panels */}
          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.07, ease }}
              className="tile p-7"
            >
              <p className="mono text-4xl sm:text-5xl font-bold tracking-tight leading-none mb-3">
                <Counter end={stat.value} duration={1.6 + i * 0.2} />
                <span className="glow-text">{stat.suffix}</span>
              </p>
              <p className="mono text-[10px] tracking-[0.18em] uppercase text-[var(--muted)]">{stat.label}</p>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
