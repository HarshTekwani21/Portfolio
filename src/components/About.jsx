import { motion } from 'framer-motion'
import { HiLocationMarker, HiBriefcase, HiCalendar, HiMail, HiAcademicCap } from 'react-icons/hi'

const infoCards = [
  { icon: <HiLocationMarker />, label: 'Location', value: 'India' },
  { icon: <HiCalendar />, label: 'Experience', value: '2+ Years' },
  { icon: <HiBriefcase />, label: 'Availability', value: 'Open to Work' },
  { icon: <HiMail />, label: 'Email', value: 'harsht3kwani@gmail.com' },
  { icon: <HiAcademicCap />, label: 'Education', value: 'B.Tech CSE' },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-widest uppercase">About</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-slate-900 dark:text-white">
            Who <span className="gradient-text">I Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left - About Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-800/80 rounded-3xl p-8 card-shadow border border-slate-100 dark:border-slate-700"
          >
            <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">About Me</h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
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

          {/* Right - Info Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {infoCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white dark:bg-slate-800/80 rounded-2xl p-5 card-shadow border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-3">
                  {card.icon}
                </div>
                <p className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">{card.label}</p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{card.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
