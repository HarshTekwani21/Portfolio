import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Statistics from './components/Statistics'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark'
    }
    return false
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <div className={`relative min-h-screen transition-colors duration-300 ${dark ? 'dark bg-slate-900' : 'bg-[#F8FAFC]'}`}>
      {/* ===== Shared ambient page background (connects all sections) ===== */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Soft mesh radial highlights */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(79,70,229,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_45%_at_100%_10%,rgba(124,58,237,0.07),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_45%_at_0%_40%,rgba(59,130,246,0.06),transparent_55%)]" />
        {/* Dotted grid */}
        <div className="absolute inset-0 opacity-[0.5] dark:opacity-[0.35] bg-[radial-gradient(rgba(17,24,39,0.06)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_85%)]" />
        {/* Large blurred gradient blobs */}
        <div className="absolute -top-32 -left-40 w-[32rem] h-[32rem] bg-indigo-300/25 dark:bg-indigo-500/10 rounded-full blur-[110px] animate-blob" />
        <div className="absolute top-1/3 -right-40 w-[34rem] h-[34rem] bg-purple-300/22 dark:bg-purple-500/10 rounded-full blur-[120px] animate-blob-delayed" />
        <div className="absolute bottom-0 left-1/4 w-[28rem] h-[28rem] bg-blue-200/20 dark:bg-blue-500/8 rounded-full blur-[110px] animate-pulse-glow" />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] mix-blend-multiply dark:mix-blend-screen bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBudW1PY3RhdmVzPSIzIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2YpIi8+PC9zdmc+')] animate-noise" />
      </div>

      <Navbar dark={dark} setDark={setDark} />
      <main className="relative">
        <Hero />
        <Statistics />

        {/* Featured Projects + Experience Timeline (side by side) */}
        <section className="py-16 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-10 items-start">
            <Projects />
            <Experience />
          </div>
        </section>

        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
