import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-10 px-6 sm:px-8 lg:px-12 border-t border-gray-100/80 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} Harsh Tekwani. All rights reserved.
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          Built with React + Framer Motion
        </p>
      </div>
    </motion.footer>
  )
}
