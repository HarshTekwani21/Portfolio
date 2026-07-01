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
    <section id="experience" className="py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-widest uppercase">Career</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-slate-900 dark:text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 md:-translate-x-px" />

          {/* Animated line overlay */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute left-6 md:left-1/2 top-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 md:-translate-x-px"
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-0 mb-8 md:mb-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-500 dark:bg-indigo-400 border-2 border-white dark:border-slate-900 z-10" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 card-shadow border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">{exp.period}</span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">{exp.role}</h3>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">{exp.company}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
