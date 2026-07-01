import { motion } from 'framer-motion'
import { HiExternalLink } from 'react-icons/hi'
import { SiGoogle, SiTensorflow } from 'react-icons/si'
import { FaMicrosoft, FaRobot } from 'react-icons/fa'

const certs = [
  {
    title: 'Google Cloud Generative AI',
    issuer: 'Google Cloud',
    date: '2025',
    icon: <SiGoogle className="w-8 h-8 text-blue-500" />,
    link: '#',
  },
  {
    title: 'Azure AI Engineer Associate',
    issuer: 'Microsoft',
    date: '2024',
    icon: <FaMicrosoft className="w-8 h-8 text-blue-600" />,
    link: '#',
  },
  {
    title: 'TensorFlow Developer Certificate',
    issuer: 'TensorFlow / Google',
    date: '2024',
    icon: <SiTensorflow className="w-8 h-8 text-orange-500" />,
    link: '#',
  },
  {
    title: 'OpenAI API Fundamentals',
    issuer: 'OpenAI / DeepLearning.AI',
    date: '2025',
    icon: <FaRobot className="w-8 h-8 text-emerald-600" />,
    link: '#',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="section-label">Credentials</p>
          <h2 className="section-title">
            <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-white/70 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 card-shadow border border-gray-100/80 dark:border-slate-700/50 hover:shadow-lg hover:shadow-indigo-500/5 hover:border-indigo-100 dark:hover:border-indigo-500/20 transition-all duration-300"
            >
              <div className="mb-4">{cert.icon}</div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug mb-1">{cert.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{cert.issuer}</p>
              <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-4">{cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors group"
              >
                View Credential
                <HiExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
