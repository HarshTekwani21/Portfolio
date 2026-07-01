import { motion } from 'framer-motion'
import {
  SiPython, SiLangchain, SiFastapi, SiHuggingface, SiReact, SiNodedotjs,
  SiJavascript, SiDjango, SiFlask, SiOpencv, SiPandas, SiScikitlearn,
} from 'react-icons/si'
import { FaGem, FaDatabase } from 'react-icons/fa'

const skills = [
  { name: 'Python', icon: <SiPython />, color: 'text-blue-600' },
  { name: 'LangChain', icon: <SiLangchain />, color: 'text-green-600' },
  { name: 'HuggingFace', icon: <SiHuggingface />, color: 'text-yellow-500' },
  { name: 'Gemini', icon: <FaGem />, color: 'text-blue-500' },
  { name: 'FastAPI', icon: <SiFastapi />, color: 'text-emerald-600' },
  { name: 'React', icon: <SiReact />, color: 'text-cyan-500' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-green-600' },
  { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-500' },
  { name: 'Django', icon: <SiDjango />, color: 'text-emerald-700' },
  { name: 'Flask', icon: <SiFlask />, color: 'text-gray-800 dark:text-gray-200' },
  { name: 'OpenCV', icon: <SiOpencv />, color: 'text-blue-500' },
  { name: 'Pandas', icon: <SiPandas />, color: 'text-indigo-600' },
  { name: 'NumPy', icon: <FaDatabase />, color: 'text-sky-600' },
  { name: 'Scikit-Learn', icon: <SiScikitlearn />, color: 'text-orange-500' },
  { name: 'SQL', icon: <FaDatabase />, color: 'text-rose-500' },
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.35, delay: (i % 5) * 0.05 }}
              whileHover={{ y: -8 }}
              className="group glass-card p-6 text-center cursor-default"
            >
              <div className={`text-4xl mb-3 flex justify-center ${skill.color} transition-transform duration-300 group-hover:scale-110`}>
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
