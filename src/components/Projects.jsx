import { motion } from 'framer-motion'
import { HiExternalLink } from 'react-icons/hi'
import { VscGithub } from 'react-icons/vsc'

const projects = [
  {
    title: 'AI Chat Platform',
    desc: 'Real-time conversational AI platform powered by LLMs with vector search, memory, and multi-modal support.',
    tags: ['Python', 'FastAPI', 'LangChain', 'React', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/HarshTekwani21',
    demo: '#',
    featured: true,
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'ML Pipeline Orchestrator',
    desc: 'Automated ML pipeline system with distributed training, model registry, and A/B testing infrastructure.',
    tags: ['Python', 'TensorFlow', 'Docker', 'Azure', 'FastAPI'],
    github: 'https://github.com/HarshTekwani21',
    demo: '#',
    featured: true,
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    title: 'DevOps Dashboard',
    desc: 'Comprehensive monitoring dashboard for CI/CD pipelines, container health, and infrastructure metrics.',
    tags: ['React', 'TypeScript', 'Docker', 'Node.js', 'Redis'],
    github: 'https://github.com/HarshTekwani21',
    demo: '#',
    featured: false,
    gradient: 'from-emerald-500 to-teal-600',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-widest uppercase">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-slate-900 dark:text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-slate-800/80 rounded-3xl overflow-hidden card-shadow border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
            >
              {/* Preview */}
              <div className="relative h-44 overflow-hidden bg-gradient-to-br p-6 flex items-end">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-90`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {p.featured && (
                  <span className="relative z-10 px-3 py-1 text-[11px] font-bold text-white bg-white/20 backdrop-blur-sm rounded-full">
                    Featured
                  </span>
                )}
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-colors"
                  >
                    <VscGithub className="w-4 h-4" />
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-colors"
                  >
                    <HiExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{p.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
