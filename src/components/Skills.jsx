import { motion } from 'framer-motion'
import {
  SiPython, SiFastapi, SiReact, SiNextdotjs, SiDocker,
  SiLangchain, SiTensorflow,
  SiPostgresql, SiRedis,
} from 'react-icons/si'
import { FaGem, FaRobot, FaMicrosoft } from 'react-icons/fa'

const skills = [
  { name: 'Python', icon: <SiPython />, color: 'text-blue-600' },
  { name: 'FastAPI', icon: <SiFastapi />, color: 'text-emerald-600' },
  { name: 'React', icon: <SiReact />, color: 'text-cyan-500' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-slate-900 dark:text-white' },
  { name: 'Docker', icon: <SiDocker />, color: 'text-sky-500' },
  { name: 'Azure', icon: <FaMicrosoft />, color: 'text-blue-500' },
  { name: 'LangChain', icon: <SiLangchain />, color: 'text-green-600' },
  { name: 'TensorFlow', icon: <SiTensorflow />, color: 'text-orange-500' },
  { name: 'OpenAI', icon: <FaRobot />, color: 'text-emerald-700' },
  { name: 'Gemini', icon: <FaGem />, color: 'text-blue-500' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-indigo-600' },
  { name: 'Redis', icon: <SiRedis />, color: 'text-red-500' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-widest uppercase">Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-slate-900 dark:text-white">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -8, rotate: 2 }}
              className="bg-white dark:bg-slate-800/80 rounded-2xl p-5 text-center card-shadow border border-slate-100 dark:border-slate-700 cursor-default hover:shadow-lg hover:shadow-indigo-500/10 hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className={`text-3xl mb-2 ${skill.color}`}>
                {skill.icon}
              </div>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
