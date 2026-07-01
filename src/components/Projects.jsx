import { motion } from 'framer-motion'
import { HiExternalLink, HiCode } from 'react-icons/hi'

const projects = [
  {
    title: 'Project One',
    desc: 'A modern web application built with React and Node.js, featuring real-time updates and a sleek interface.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    live: '#',
    code: '#',
  },
  {
    title: 'Project Two',
    desc: 'An e-commerce platform with a custom CMS, payment integration, and responsive design.',
    tags: ['Next.js', 'Stripe', 'Tailwind', 'Prisma'],
    live: '#',
    code: '#',
  },
  {
    title: 'Project Three',
    desc: 'A dashboard application with interactive charts, data visualization, and dark mode support.',
    tags: ['React', 'D3.js', 'TypeScript', 'Firebase'],
    live: '#',
    code: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title gradient-text">Projects</h2>
        <p className="section-subtitle">Things I've built</p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="project-card glass"
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="project-top">
              <div className="project-number">0{i + 1}</div>
              <div className="project-links">
                <a href={p.code} target="_blank" rel="noreferrer" title="Source Code">
                  <HiCode size={20} />
                </a>
                <a href={p.live} target="_blank" rel="noreferrer" title="Live Demo">
                  <HiExternalLink size={20} />
                </a>
              </div>
            </div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span key={t} className="project-tag">{t}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .project-card {
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          cursor: default;
        }
        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }
        .project-number {
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-muted);
          line-height: 1;
        }
        .project-links {
          display: flex;
          gap: 12px;
        }
        .project-links a {
          color: var(--text-muted);
          transition: var(--transition);
          display: flex;
        }
        .project-links a:hover {
          color: var(--accent-1);
        }
        .project-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .project-desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.7;
          margin-bottom: 20px;
          flex: 1;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .project-tag {
          padding: 4px 12px;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 500;
          background: rgba(108, 99, 255, 0.1);
          color: var(--accent-1);
          border: 1px solid rgba(108, 99, 255, 0.15);
        }
        @media (max-width: 1024px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
