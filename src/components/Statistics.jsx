import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { HiSparkles } from 'react-icons/hi'

const stats = [
  { value: 2, suffix: '+', label: 'Years Experience' },
  { value: 10, suffix: '+', label: 'AI Projects' },
  { value: 15, suffix: '+', label: 'Technologies' },
  { value: 4, suffix: '', label: 'Companies' },
]

function Counter({ end, duration = 2 }) {
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

export default function Statistics() {
  return (
    <section id="about" className="py-10 px-6 sm:px-8 lg:px-12 -mt-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
        className="max-w-7xl mx-auto glass-card p-6 sm:p-8 grid lg:grid-cols-[1.6fr_repeat(4,1fr)] gap-6 lg:gap-4 items-center"
      >
        {/* About Me lead */}
        <div className="lg:pr-6 lg:border-r border-black/5 dark:border-white/10">
          <div className="inline-flex items-center gap-2 mb-3 text-indigo-600 dark:text-indigo-400">
            <HiSparkles className="w-4 h-4" />
            <span className="text-xs font-bold tracking-[0.18em] uppercase">About Me</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            AI/ML Engineer with hands-on experience building LLM-powered systems,
            agentic pipelines, and Text-to-SQL solutions across GenAI, RAG, and OCR.
            Currently pursuing an MCA while shipping production AI at Tagbin.
          </p>
        </div>

        {/* Stats */}
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
            className="text-center"
          >
            <div className="text-4xl sm:text-5xl font-extrabold gradient-text-animated leading-none mb-1.5">
              <Counter end={stat.value} duration={2 + i * 0.2} />
              {stat.suffix}
            </div>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
