import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // Dark cyber theme is the default; 'light' is the opt-in ice theme
  const [light, setLight] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'light'
    }
    return false
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('light', light)
    root.classList.toggle('dark', !light)
    localStorage.setItem('theme', light ? 'light' : 'dark')
  }, [light])

  return (
    <div className="crt relative min-h-screen bg-[var(--bg)] text-[var(--text)]">
      {/* Fixed ambient background: blueprint grid + neon glows + scanline */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute -top-40 left-1/4 w-[36rem] h-[36rem] rounded-full blur-[140px] opacity-25 bg-[var(--accent)]" />
        <div className="absolute bottom-0 -right-40 w-[30rem] h-[30rem] rounded-full blur-[140px] opacity-15 bg-[var(--accent-2)]" />
      </div>
      <div className="scanline" />

      <Navbar light={light} setLight={setLight} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
