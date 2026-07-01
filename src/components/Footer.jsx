import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 px-5 border-t border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} Harsh Tekwani. All rights reserved.
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500">
          Built with React + Framer Motion
        </p>
      </div>
    </motion.footer>
  )
}
