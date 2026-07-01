import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
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
    <div className={`min-h-screen transition-colors duration-300 ${dark ? 'dark bg-slate-900' : 'bg-[#F7F9FC]'}`}>
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <About />
        <Statistics />
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
