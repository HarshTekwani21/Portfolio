import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: 20, suffix: '+', label: 'Projects' },
  { value: 2, suffix: '+', label: 'Years Experience' },
  { value: 15, suffix: '+', label: 'AI Technologies' },
  { value: 10, suffix: '+', label: 'Happy Clients' },
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
          const start = 0
          const startTime = performance.now()
          const step = (now) => {
            const elapsed = (now - startTime) / 1000
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(start + (end - start) * eased))
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
    <section className="py-16 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white dark:bg-slate-800/80 rounded-3xl p-6 text-center card-shadow border border-slate-100 dark:border-slate-700"
            >
              <div className="text-3xl sm:text-4xl font-extrabold gradient-text mb-1">
                <Counter end={stat.value} duration={2 + i * 0.2} />
                {stat.suffix}
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
