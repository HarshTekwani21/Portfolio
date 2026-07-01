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
    <section id="projects" className="py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white/70 dark:bg-slate-800/60 backdrop-blur-sm rounded-3xl overflow-hidden card-shadow border border-gray-100/80 dark:border-slate-700/50 hover:shadow-xl hover:shadow-indigo-500/8 hover:border-indigo-100 dark:hover:border-indigo-500/20 transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-90 group-hover:scale-105 transition-transform duration-700`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {p.featured && (
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 text-[11px] font-bold text-white bg-white/20 backdrop-blur-md rounded-full border border-white/10">
                    Featured
                  </span>
                )}
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  <a href={p.github} target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all hover:scale-110">
                    <VscGithub className="w-4 h-4" />
                  </a>
                  <a href={p.demo} target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all hover:scale-110">
                    <HiExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2.5">{p.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5 line-clamp-2">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-[11px] font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50/80 dark:bg-indigo-500/10 rounded-md">
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
