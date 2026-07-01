import { motion } from 'framer-motion'
import {
  SiPython, SiFastapi, SiReact, SiNextdotjs, SiDocker,
  SiLangchain, SiTensorflow, SiPostgresql, SiRedis,
} from 'react-icons/si'
import { FaGem, FaRobot, FaMicrosoft } from 'react-icons/fa'

const skills = [
  { name: 'Python', icon: <SiPython />, color: 'text-blue-600' },
  { name: 'FastAPI', icon: <SiFastapi />, color: 'text-emerald-600' },
  { name: 'React', icon: <SiReact />, color: 'text-cyan-500' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-gray-900 dark:text-white' },
  { name: 'Docker', icon: <SiDocker />, color: 'text-sky-500' },
  { name: 'Azure', icon: <FaMicrosoft />, color: 'text-blue-500' },
  { name: 'LangChain', icon: <SiLangchain />, color: 'text-green-600' },
  { name: 'TensorFlow', icon: <SiTensorflow />, color: 'text-orange-500' },
  { name: 'OpenAI', icon: <FaRobot />, color: 'text-emerald-600' },
  { name: 'Gemini', icon: <FaGem />, color: 'text-blue-500' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-indigo-600' },
  { name: 'Redis', icon: <SiRedis />, color: 'text-red-500' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 sm:px-8 lg:px-12 scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="section-label">Expertise</p>
          <h2 className="section-title">
            Tech Stack &amp; <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              whileHover={{ y: -8, rotate: 2 }}
              className="group bg-white/70 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 text-center card-shadow border border-gray-100/80 dark:border-slate-700/50 cursor-default hover:shadow-lg hover:shadow-indigo-500/10 hover:border-indigo-200/50 dark:hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className={`text-3xl mb-3 ${skill.color} transition-transform duration-300 group-hover:scale-110`}>
                {skill.icon}
              </div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
