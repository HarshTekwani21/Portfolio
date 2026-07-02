import { motion } from 'framer-motion'
import { HiArrowUpRight } from 'react-icons/hi2'
import { VscGithub } from 'react-icons/vsc'

const projects = [
  {
    id: 'img-moderation',
    title: 'AI Image Moderation Pipeline',
    desc: 'High-throughput image moderation platform using FastAPI and async worker queues, with multi-layer content moderation via Google Vision API and Gemini.',
    tags: ['FastAPI', 'Google Vision', 'Gemini', 'Async Queues'],
    github: 'https://github.com/HarshTekwani21',
    year: '2025',
  },
  {
    id: 'agentic-chatbots',
    title: 'Conversational & Agentic Chatbots',
    desc: 'Natural, context-aware conversations powered by LLMs and long-term memory, with speech-to-text and text-to-speech for hands-free interaction.',
    tags: ['LLMs', 'Memory', 'STT / TTS', 'LangChain'],
    github: 'https://github.com/HarshTekwani21',
    year: '2025',
  },
  {
    id: 'life-assistant',
    title: 'AI Life Assistant',
    desc: 'Context-aware agent leveraging contextual memory and task prioritization, delivering personalized recommendations through LLM reasoning pipelines.',
    tags: ['LLM Reasoning', 'Context Memory', 'Agents'],
    github: 'https://github.com/HarshTekwani21',
    year: '2024',
  },
]

const ease = [0.22, 1, 0.36, 1]

export default function Projects() {
  return (
    <section id="work" className="py-24 sm:py-32 scroll-mt-20">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="flex flex-wrap items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="eyebrow mb-5">02 // selected_work</p>
            <h2 className="section-title">
              Featured <span className="glow-text">projects</span>
            </h2>
          </div>
          <a
            href="https://github.com/HarshTekwani21"
            target="_blank"
            rel="noreferrer"
            className="mono text-[11px] tracking-[0.18em] uppercase text-[var(--muted)] hover:text-[var(--accent-text)] transition-colors link-underline"
          >
            git clone --all ↗
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.a
              key={p.id}
              href={p.github}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="tile group flex flex-col overflow-hidden hover:!border-[var(--accent)] hover:-translate-y-1.5"
            >
              {/* Module header bar */}
              <div className="terminal-bar !bg-transparent">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse-glow" />
                <span className="mono text-[10px] tracking-[0.12em] text-[var(--muted)]">
                  module_0{i + 1} / {p.id}.sys
                </span>
                <span className="ml-auto mono text-[10px] text-[var(--muted)]">{p.year}</span>
              </div>

              <div className="p-6 flex flex-col grow">
                <h3 className="font-display text-lg sm:text-xl font-semibold tracking-tight leading-snug mb-3 group-hover:text-[var(--accent-text)] transition-colors">
                  {p.title}
                </h3>
                <p className="text-[13.5px] text-[var(--muted)] leading-relaxed mb-5 grow">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="mono text-[10px] tracking-[0.08em] uppercase px-2.5 py-1 rounded border border-[var(--line)] text-[var(--muted)] group-hover:border-[var(--line-strong)] transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mono text-[11px] tracking-[0.14em] uppercase text-[var(--accent-text)] inline-flex items-center gap-1.5">
                  <VscGithub className="w-3.5 h-3.5" />
                  open_source
                  <HiArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
