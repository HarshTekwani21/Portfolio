import { motion } from 'framer-motion'
import { HiArrowUpRight } from 'react-icons/hi2'

const certs = [
  { title: 'Certified Developer', issuer: 'Alibaba Cloud', kind: 'achievement' },
  { title: 'Django & React Full Stack', issuer: 'Udemy', kind: 'certification' },
  { title: 'Industry 4.0 & Industrial IoT', issuer: 'NPTEL', kind: 'certification' },
  { title: 'Leadership & Team Effectiveness', issuer: 'NPTEL', kind: 'certification' },
]

const ease = [0.22, 1, 0.36, 1]

export default function Certifications() {
  return (
    <section id="certifications" className="py-12 sm:py-16 scroll-mt-20 bg-[var(--surface)]/50 border-y border-[var(--line)]">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-14"
        >
          <p className="eyebrow mb-5">05 // credentials</p>
          <h2 className="section-title">
            Certifications <span className="glow-text">&amp; awards</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.07, ease }}
              className="tile group p-7 flex items-start justify-between gap-6 bg-[var(--bg)]/60"
            >
              <div>
                <p className="mono text-[10px] tracking-[0.2em] uppercase text-[var(--accent-text)] mb-3">
                  [ {cert.kind} ]
                </p>
                <h3 className="font-display text-lg sm:text-xl font-semibold tracking-tight leading-snug mb-1">
                  {cert.title}
                </h3>
                <p className="mono text-[12px] text-[var(--muted)]">{cert.issuer}</p>
              </div>
              <span className="flex items-center justify-center w-10 h-10 rounded-lg border border-[var(--line)] shrink-0 transition-all duration-300 group-hover:border-[var(--accent)] group-hover:[box-shadow:0_0_16px_var(--glow)] group-hover:text-[var(--accent-text)]">
                <HiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
