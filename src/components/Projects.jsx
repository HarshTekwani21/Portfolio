import { motion } from 'framer-motion'
import { HiArrowUpRight } from 'react-icons/hi2'
import { VscGithub } from 'react-icons/vsc'

const projects = [
  {
    id: 'image-moderation',
    title: 'AI Image Moderation Pipeline',
    desc: 'Production-oriented moderation system with FastAPI, async worker queues, Google Vision + Gemini checks, FAISS duplicate detection, a deterministic rule engine, and a human review workflow.',
    tags: ['FastAPI', 'Gemini', 'Google Vision', 'FAISS'],
    github: 'https://github.com/HarshTekwani21/Image_Moderation',
  },
  {
    id: 'agentic-chatbots',
    title: 'Conversational & Agentic Chatbots',
    desc: 'Natural, context-aware conversations using LLMs and memory for human-like interactions — with speech-to-text and text-to-speech for hands-free communication.',
    tags: ['LLMs', 'Memory', 'STT / TTS', 'Agents'],
    github: 'https://github.com/HarshTekwani21',
  },
  {
    id: 'ai-life-assistant',
    title: 'AI Life Assistant',
    desc: 'Context-aware agent utilizing contextual memory and task prioritization, delivering personalized recommendations through LLM reasoning pipelines.',
    tags: ['LLM Reasoning', 'Context Memory', 'Agents'],
    github: 'https://github.com/HarshTekwani21',
  },
  {
    id: 'taskbotix',
    title: 'TaskBotIX — Multi-Agent System',
    desc: 'Create and manage document-grounded AI agents with Groq and Ollama — multi-user authentication, per-user agent workspaces, and a FastAPI backend.',
    tags: ['AI Agents', 'FastAPI', 'Ollama', 'LangChain'],
    github: 'https://github.com/HarshTekwani21/TaskBotIX',
  },
  {
    id: 'ocr-service',
    title: 'OCR Microservice',
    desc: 'High-performance OCR service extracting text from images and PDFs with multi-language support — a clean REST API with structured JSON output, Docker-ready.',
    tags: ['OCR', 'FastAPI', 'PDF', 'Docker'],
    github: 'https://github.com/HarshTekwani21/Ocr_Service',
  },
  {
    id: 'diffusor-imageart',
    title: 'Diffusor ImageArt Generation',
    desc: 'Text-to-image studio powered by FLUX 9B and Google Nano Banana via Hugging Face Diffusers — prompt-to-artwork generation and intelligent image editing on CUDA.',
    tags: ['Diffusion', 'FLUX', 'PyTorch', 'HuggingFace'],
    github: 'https://github.com/HarshTekwani21/Diffusor_ImageArt_Genration',
  },
]

const ease = [0.22, 1, 0.36, 1]

export default function Projects() {
  return (
    <section id="work" className="py-12 sm:py-16 scroll-mt-20">
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
                  {p.github.replace(/\/$/, '').split('/').length > 4 ? 'open_source' : 'view_github'}
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
