import { motion } from 'framer-motion'
import { HiLocationMarker, HiBriefcase, HiCalendar, HiMail, HiAcademicCap } from 'react-icons/hi'

const infoCards = [
  { icon: <HiLocationMarker className="w-5 h-5" />, label: 'Location', value: 'India' },
  { icon: <HiCalendar className="w-5 h-5" />, label: 'Experience', value: '2+ Years' },
  { icon: <HiBriefcase className="w-5 h-5" />, label: 'Availability', value: 'Open to Work' },
  { icon: <HiMail className="w-5 h-5" />, label: 'Email', value: 'harsht3kwani@gmail.com' },
  { icon: <HiAcademicCap className="w-5 h-5" />, label: 'Education', value: 'B.Tech CSE' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="section-label">About</p>
          <h2 className="section-title">
            Who <span className="gradient-text">I Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="bg-white/70 dark:bg-slate-800/60 backdrop-blur-sm rounded-3xl p-8 card-shadow border border-gray-100/80 dark:border-slate-700/50 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-5 text-gray-900 dark:text-white">About Me</h3>
            <div className="space-y-5 text-gray-500 dark:text-gray-400 leading-relaxed text-[15px]">
              <p>
                I'm a passionate AI/ML Engineer and Full Stack Developer with expertise in building
                intelligent systems and modern web applications. I specialize in Generative AI,
                machine learning, and creating seamless full-stack experiences.
              </p>
              <p>
                With a strong foundation in both AI and software engineering, I bridge the gap
                between cutting-edge research and production-ready applications. I love turning
                complex problems into elegant, scalable solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {infoCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="bg-white/70 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-5 card-shadow border border-gray-100/80 dark:border-slate-700/50 hover:shadow-lg hover:shadow-indigo-500/5 hover:border-indigo-100 dark:hover:border-indigo-500/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-3">
                  {card.icon}
                </div>
                <p className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">{card.label}</p>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mt-1">{card.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
