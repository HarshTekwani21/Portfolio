import { motion } from 'framer-motion'
import { HiArrowUpRight } from 'react-icons/hi2'

const experiences = [
  {
    role: 'AI/ML Engineer',
    company: 'Tagbin Pvt Ltd',
    location: 'Gurugram',
    period: '2025.11 — present',
    desc: 'Delivering AI business solutions for public & private sectors. Building agentic and Text-to-SQL systems and improving the efficiency of OCR engines.',
    current: true,
  },
  {
    role: 'Software Engineer',
    company: 'Augmented Transformation Pvt Ltd',
    location: 'Remote',
    period: '2025.06 — 2025.10',
    desc: 'Built RPA business solutions using Blue Prism across multiple projects and integrated Python with Blue Prism to extend automation.',
  },
  {
    role: 'Network Engineer Trainee',
    company: 'Orbit Techsol India Pvt Ltd',
    location: 'Delhi',
    period: '2025.01 — 2025.05',
    desc: 'Gained hands-on experience with routing and switching across enterprise networking setups.',
  },
  {
    role: 'AI/ML Apprentice',
    company: 'Sequantix Pvt Ltd',
    location: 'Remote',
    period: '2024.06 — 2024.09',
    desc: 'Worked on AI solutions across multiple projects — built an OCR engine and an agentic pipeline.',
  },
]

const ease = [0.22, 1, 0.36, 1]

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 scroll-mt-20 bg-[var(--surface)]/50 border-y border-[var(--line)]">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="flex flex-wrap items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="eyebrow mb-5">03 // career_log</p>
            <h2 className="section-title">
              Where I&rsquo;ve <span className="glow-text">worked</span>
            </h2>
          </div>
          <a
            href="/cv.pdf"
            target="_blank"
            className="mono text-[11px] tracking-[0.18em] uppercase text-[var(--muted)] hover:text-[var(--accent-text)] transition-colors link-underline"
          >
            cat resume.pdf ↗
          </a>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8">
          {/* Track */}
          <div className="absolute left-[5px] sm:left-[7px] top-2 bottom-2 w-px bg-[var(--line)]" />
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: 'easeOut' }}
            className="absolute left-[5px] sm:left-[7px] top-2 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent-2)] to-transparent [box-shadow:0_0_10px_var(--glow)]"
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="relative pb-12 last:pb-0"
            >
              {/* Node */}
              <span
                className={`absolute -left-6 sm:-left-8 top-1.5 w-2.5 h-2.5 rounded-full z-10 ${
                  exp.current
                    ? 'bg-[var(--accent-2)] [box-shadow:0_0_12px_var(--glow-2)] animate-pulse-glow'
                    : 'bg-[var(--surface-2)] border border-[var(--line-strong)]'
                }`}
                style={{ transform: 'translateX(1px)' }}
              />

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-1.5">
                <span className="mono text-[11px] tracking-[0.16em] uppercase text-[var(--accent-text)]">
                  [{exp.period}]
                </span>
                {exp.current && (
                  <span className="mono text-[10px] tracking-[0.14em] uppercase text-[var(--accent-2)] border border-[var(--glow-2)] rounded px-2 py-0.5">
                    active
                  </span>
                )}
                <span className="mono text-[10px] tracking-[0.14em] uppercase text-[var(--muted)]">
                  @ {exp.location}
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight mb-0.5">
                {exp.role}
              </h3>
              <p className="mono text-[12px] text-[var(--muted)] mb-2.5">{exp.company}</p>
              <p className="text-sm text-[var(--muted)] leading-relaxed max-w-xl">{exp.desc}</p>
            </motion.div>
          ))}
        </div>

        <a href="/cv.pdf" target="_blank" className="btn-outline mt-14">
          download_cv
          <HiArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
