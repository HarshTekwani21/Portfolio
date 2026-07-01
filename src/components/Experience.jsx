import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Generative AI Intern',
    company: 'Tech Company',
    period: 'Jan 2025 - Present',
    desc: 'Developing LLM-powered applications, RAG pipelines, and AI agents. Working with LangChain, vector databases, and large-scale model deployment.',
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Startup Name',
    period: 'Jun 2024 - Dec 2024',
    desc: 'Built full-stack web applications with React and FastAPI. Designed REST APIs, implemented authentication, and optimized database queries.',
  },
  {
    role: 'AI/ML Intern',
    company: 'AI Lab',
    period: 'Jan 2024 - May 2024',
    desc: 'Worked on computer vision projects, model training pipelines, and data preprocessing. Gained hands-on experience with TensorFlow and PyTorch.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="section-label">Career</p>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-200/80 dark:bg-slate-700/50 md:-translate-x-px" />

          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute left-6 md:left-1/2 top-0 w-px bg-gradient-to-b from-indigo-500/60 via-purple-500/60 to-indigo-500/60 md:-translate-x-px"
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-0 mb-8 md:mb-10 last:mb-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="absolute left-6 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-500 dark:bg-indigo-400 border-2 border-white dark:border-slate-900 z-10 shadow-sm shadow-indigo-500/30" />

              <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                <div className="bg-white/70 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 card-shadow border border-gray-100/80 dark:border-slate-700/50 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300">
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider">{exp.period}</span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1.5">{exp.role}</h3>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2.5">{exp.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
