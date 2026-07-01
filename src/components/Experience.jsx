import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

const experiences = [
  {
    role: 'AI/ML Engineer',
    company: 'Tagbin Pvt Ltd, Gurugram',
    period: 'Nov 2025 — Present',
    desc: 'Delivering AI business solutions for public & private sectors. Building agentic and Text-to-SQL systems and improving the efficiency of OCR engines.',
    current: true,
  },
  {
    role: 'Software Engineer',
    company: 'Augmented Transformation Pvt Ltd',
    period: 'Jun 2025 — Oct 2025',
    desc: 'Built RPA business solutions using Blue Prism across multiple projects and integrated Python with Blue Prism to extend automation.',
  },
  {
    role: 'Network Engineer Trainee',
    company: 'Orbit Techsol India Pvt Ltd',
    period: 'Jan 2025 — May 2025',
    desc: 'Gained hands-on experience with routing and switching across enterprise networking setups.',
  },
  {
    role: 'AI/ML Apprentice',
    company: 'Sequantix Pvt Ltd',
    period: 'Jun 2024 — Sep 2024',
    desc: 'Worked on AI solutions across multiple projects — built an OCR engine and an agentic pipeline.',
  },
]

export default function Experience() {
  return (
    <div id="experience" className="scroll-mt-28">
      <div className="flex items-end justify-between mb-6">
        <div>
          <p className="section-label">Career</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 tracking-tight text-gray-900 dark:text-white">
            Experience <span className="gradient-text">Timeline</span>
          </h2>
        </div>
      </div>

      <div className="glass-card p-6 sm:p-7">
        <div className="relative pl-6">
          {/* Track */}
          <div className="absolute left-[5px] top-1 bottom-1 w-px bg-gray-200/80 dark:bg-slate-700/60" />
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            className="absolute left-[5px] top-1 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent"
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative pb-8 last:pb-0"
            >
              {/* Node */}
              <span className={`absolute -left-[23px] top-1 w-3 h-3 rounded-full border-2 border-white dark:border-slate-800 z-10 ${exp.current ? 'bg-indigo-500 shadow-[0_0_0_4px_rgba(79,70,229,0.15)]' : 'bg-gray-300 dark:bg-slate-600'}`} />

              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 tracking-wide">{exp.period}</span>
                {exp.current && (
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    Current
                  </span>
                )}
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mt-1">{exp.role}</h3>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">{exp.company}</p>
              <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}
        </div>

        <a
          href="/cv.pdf"
          target="_blank"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:gap-2.5 transition-all"
        >
          View Full Experience <HiArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
