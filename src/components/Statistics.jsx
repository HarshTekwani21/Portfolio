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
          const startTime = performance.now()
          const step = (now) => {
            const elapsed = (now - startTime) / 1000
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(0 + (end - 0) * eased))
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
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white/70 dark:bg-slate-800/60 backdrop-blur-sm rounded-3xl p-8 text-center card-shadow border border-gray-100/80 dark:border-slate-700/50 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl font-extrabold gradient-text mb-2 leading-none">
                <Counter end={stat.value} duration={2 + i * 0.2} />
                {stat.suffix}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
