import { motion } from 'framer-motion'
import {
  SiReact, SiJavascript, SiHtml5,   SiCss, SiTailwindcss,
  SiNodedotjs, SiGit, SiFigma, SiTypescript, SiNextdotjs,
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90, icon: <SiReact /> },
      { name: 'JavaScript', level: 85, icon: <SiJavascript /> },
      { name: 'TypeScript', level: 75, icon: <SiTypescript /> },
      { name: 'HTML', level: 95, icon: <SiHtml5 /> },
      { name: 'CSS', level: 90, icon: <SiCss /> },
      { name: 'Tailwind', level: 85, icon: <SiTailwindcss /> },
    ],
  },
  {
    title: 'Other',
    skills: [
      { name: 'Node.js', level: 70, icon: <SiNodedotjs /> },
      { name: 'Next.js', level: 72, icon: <SiNextdotjs /> },
      { name: 'Git', level: 80, icon: <SiGit /> },
      { name: 'Figma', level: 65, icon: <SiFigma /> },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title gradient-text">Skills</h2>
        <p className="section-subtitle">Technologies I work with</p>
      </motion.div>

      <div className="skills-grid">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: ci * 0.2 }}
            className="skill-category glass"
          >
            <h3 className="skill-cat-title">{cat.title}</h3>
            <div className="skill-list">
              {cat.skills.map((s, si) => (
                <div key={s.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-icon">{s.icon}</span>
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-level">{s.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + si * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        .skill-category {
          padding: 32px;
        }
        .skill-cat-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 24px;
          color: var(--accent-1);
        }
        .skill-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .skill-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }
        .skill-icon {
          font-size: 1.2rem;
          color: var(--accent-1);
          display: flex;
        }
        .skill-name {
          flex: 1;
          font-size: 0.9rem;
          font-weight: 500;
        }
        .skill-level {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
        }
        .skill-bar {
          width: 100%;
          height: 6px;
          background: rgba(255,255,255,0.05);
          border-radius: 3px;
          overflow: hidden;
        }
        .skill-fill {
          height: 100%;
          border-radius: 3px;
          background: var(--gradient-1);
        }
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
