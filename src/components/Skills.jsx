import { motion } from 'framer-motion'
import {
  SiPython, SiLangchain, SiFastapi, SiHuggingface, SiReact, SiNodedotjs,
  SiJavascript, SiDjango, SiFlask, SiOpencv, SiPandas, SiScikitlearn,
  SiDocker, SiTensorflow,
} from 'react-icons/si'
import { FaGem, FaDatabase, FaMicrosoft } from 'react-icons/fa'

const groups = [
  {
    cmd: '$ ls ./ai_genai',
    skills: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'LangChain', icon: <SiLangchain /> },
      { name: 'HuggingFace', icon: <SiHuggingface /> },
      { name: 'Gemini', icon: <FaGem /> },
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'Scikit-Learn', icon: <SiScikitlearn /> },
      { name: 'OpenCV', icon: <SiOpencv /> },
    ],
  },
  {
    cmd: '$ ls ./backend_data',
    skills: [
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'Django', icon: <SiDjango /> },
      { name: 'Flask', icon: <SiFlask /> },
      { name: 'SQL', icon: <FaDatabase /> },
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'NumPy', icon: <FaDatabase /> },
    ],
  },
  {
    cmd: '$ ls ./web_cloud',
    skills: [
      { name: 'React', icon: <SiReact /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Azure', icon: <FaMicrosoft /> },
    ],
  },
]

const ease = [0.22, 1, 0.36, 1]

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 scroll-mt-20">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-14"
        >
          <p className="eyebrow mb-5">04 // tech_stack</p>
          <h2 className="section-title">
            Tools of the <span className="glow-text">trade</span>
          </h2>
        </motion.div>

        <div className="space-y-10">
          {groups.map((group, gi) => (
            <motion.div
              key={group.cmd}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: gi * 0.1, ease }}
              className="grid sm:grid-cols-[220px_1fr] gap-4 sm:gap-8 items-start section-rule pt-8"
            >
              <p className="mono text-[12px] tracking-[0.08em] text-[var(--accent-text)] pt-2.5">
                {group.cmd}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-[var(--line)] bg-[var(--surface)]/60 mono text-[13px] hover:border-[var(--accent)] hover:text-[var(--accent-text)] hover:[box-shadow:0_0_16px_var(--glow)] hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                  >
                    <span className="text-base">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
