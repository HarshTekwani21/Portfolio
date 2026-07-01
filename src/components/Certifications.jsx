import { motion } from 'framer-motion'
import { HiExternalLink } from 'react-icons/hi'
import {
  SiGoogle, SiTensorflow,
} from 'react-icons/si'
import { FaMicrosoft, FaRobot } from 'react-icons/fa'

const certs = [
  {
    title: 'Google Cloud Generative AI',
    issuer: 'Google Cloud',
    date: '2025',
    icon: <SiGoogle className="text-blue-500" />,
    link: '#',
  },
  {
    title: 'Azure AI Engineer Associate',
    issuer: 'Microsoft',
    date: '2024',
    icon: <FaMicrosoft className="text-blue-600" />,
    link: '#',
  },
  {
    title: 'TensorFlow Developer Certificate',
    issuer: 'TensorFlow / Google',
    date: '2024',
    icon: <SiTensorflow className="text-orange-500" />,
    link: '#',
  },
  {
    title: 'OpenAI API Fundamentals',
    issuer: 'OpenAI / DeepLearning.AI',
    date: '2025',
    icon: <FaRobot className="text-emerald-700" />,
    link: '#',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-widest uppercase">Credentials</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-slate-900 dark:text-white">
            <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 card-shadow border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">{cert.icon}</div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug mb-1">{cert.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{cert.issuer}</p>
              <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-4">{cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
              >
                View Credential <HiExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
