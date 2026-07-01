import { motion } from 'framer-motion'
import { HiArrowRight, HiExternalLink } from 'react-icons/hi'
import { VscGithub } from 'react-icons/vsc'

const projects = [
  {
    title: 'Ladakh AI Chatbot',
    desc: 'RAG-powered conversational assistant with vector search, memory and multi-lingual support.',
    tags: ['LangChain', 'FastAPI', 'React'],
    github: 'https://github.com/HarshTekwani21',
    demo: '#',
    gradient: 'from-blue-500 via-indigo-500 to-violet-600',
  },
  {
    title: 'DOW Automation',
    desc: 'Document workflow engine that automates extraction, classification and routing at scale.',
    tags: ['Python', 'OpenAI', 'PostgreSQL'],
    github: 'https://github.com/HarshTekwani21',
    demo: '#',
    gradient: 'from-fuchsia-500 via-purple-500 to-indigo-600',
  },
  {
    title: 'Multi-Agent Platform',
    desc: 'Orchestrates autonomous AI agents with tool-use, planning and shared long-term memory.',
    tags: ['LangGraph', 'Redis', 'Docker'],
    github: 'https://github.com/HarshTekwani21',
    demo: '#',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
  },
  {
    title: 'DPR Analytics',
    desc: 'Real-time analytics dashboard with predictive models and interactive data visualisations.',
    tags: ['TensorFlow', 'Next.js', 'Azure'],
    github: 'https://github.com/HarshTekwani21',
    demo: '#',
    gradient: 'from-orange-500 via-rose-500 to-pink-600',
  },
]

/* Faux browser screenshot */
function Screenshot({ gradient }) {
  return (
    <div className="relative h-32 overflow-hidden rounded-t-2xl bg-slate-900">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90 transition-transform duration-700 group-hover:scale-110`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.25),transparent_50%)]" />
      {/* window chrome */}
      <div className="relative flex items-center gap-1.5 px-3 py-2">
        <span className="w-2 h-2 rounded-full bg-white/50" />
        <span className="w-2 h-2 rounded-full bg-white/50" />
        <span className="w-2 h-2 rounded-full bg-white/50" />
      </div>
      {/* mock ui */}
      <div className="relative mx-3 mt-1 rounded-lg bg-white/15 backdrop-blur-sm p-2.5 space-y-1.5 border border-white/20">
        <div className="h-1.5 w-2/3 rounded-full bg-white/70" />
        <div className="h-1.5 w-1/2 rounded-full bg-white/40" />
        <div className="flex gap-1.5 pt-1">
          <div className="h-6 flex-1 rounded bg-white/25" />
          <div className="h-6 flex-1 rounded bg-white/25" />
          <div className="h-6 flex-1 rounded bg-white/25" />
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <div id="projects" className="scroll-mt-28">
      {/* Panel header */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <p className="section-label">Portfolio</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 tracking-tight text-gray-900 dark:text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>
        <a
          href="https://github.com/HarshTekwani21"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:gap-2.5 transition-all"
        >
          View All <HiArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group rounded-2xl overflow-hidden bg-white/70 dark:bg-slate-800/60 backdrop-blur-sm border border-gray-100/80 dark:border-slate-700/50 card-shadow hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-100 dark:hover:border-indigo-500/20 transition-all duration-500"
          >
            <div className="relative">
              <Screenshot gradient={p.gradient} />
              <div className="absolute top-2 right-2 flex gap-1.5">
                <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="w-7 h-7 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all hover:scale-110">
                  <VscGithub className="w-3.5 h-3.5" />
                </a>
                <a href={p.demo} target="_blank" rel="noreferrer" aria-label="Live demo" className="w-7 h-7 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all hover:scale-110">
                  <HiExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">{p.title}</h3>
              <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed mb-3.5 line-clamp-2">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50/80 dark:bg-indigo-500/10 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
