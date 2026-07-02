import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineMail } from 'react-icons/hi'
import { HiArrowUpRight, HiArrowDown } from 'react-icons/hi2'
import { VscGithub } from 'react-icons/vsc'
import { FaLinkedinIn } from 'react-icons/fa'

const socials = [
  { icon: <VscGithub className="w-4 h-4" />, label: 'GitHub', href: 'https://github.com/HarshTekwani21' },
  { icon: <FaLinkedinIn className="w-4 h-4" />, label: 'LinkedIn', href: 'https://linkedin.com/in/harshtekwani' },
  { icon: <HiOutlineMail className="w-4 h-4" />, label: 'Email', href: 'mailto:harsht3kwani@gmail.com' },
]

const ease = [0.22, 1, 0.36, 1]

/* Sequentially typed terminal lines */
const script = [
  { prompt: true, text: 'whoami' },
  { prompt: false, text: 'Harsh Tekwani — AI/ML Engineer' },
  { prompt: true, text: 'cat focus.txt' },
  { prompt: false, text: 'Agentic Systems · LLM Finetuning · RAG · Text-to-SQL' },
  { prompt: true, text: 'ls ./deployed' },
  { prompt: false, text: 'image_moderation  voice_rag  ocr_service  multi_agents', ok: true },
]

function useTypewriter(lines, startDelay = 1200, speed = 34) {
  const [progress, setProgress] = useState({ line: 0, char: 0 })

  useEffect(() => {
    let line = 0
    let char = 0
    let timer
    const tick = () => {
      if (line >= lines.length) return
      const current = lines[line].text
      if (char < current.length) {
        char += 1
      } else {
        line += 1
        char = 0
      }
      setProgress({ line, char })
      if (line < lines.length) {
        // brief pause between lines, faster typing for output lines
        const delay = char === 0 ? 380 : lines[line].prompt ? speed * 2 : speed
        timer = setTimeout(tick, delay)
      }
    }
    timer = setTimeout(tick, startDelay)
    return () => clearTimeout(timer)
  }, [lines, startDelay, speed])

  return progress
}

function Terminal() {
  const { line, char } = useTypewriter(script)

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="mono text-[10px] tracking-[0.14em] text-[var(--muted)] ml-2">
          harsh@portfolio: ~
        </span>
      </div>
      <div className="p-5 sm:p-6 mono text-[13px] sm:text-sm leading-loose min-h-[220px]">
        {script.slice(0, line + 1).map((l, i) => {
          const isTyping = i === line
          const text = isTyping ? l.text.slice(0, char) : l.text
          if (i === line && char === 0 && line >= script.length) return null
          return (
            <div key={i} className={l.prompt ? 'text-[var(--text)]' : l.ok ? 'text-[var(--accent-2)]' : 'text-[var(--muted)]'}>
              {l.prompt && <span className="text-[var(--accent-text)]">&gt;&nbsp;</span>}
              {text}
              {isTyping && line < script.length && <span className="cursor-block" />}
            </div>
          )
        })}
        {line >= script.length && (
          <div>
            <span className="text-[var(--accent-text)]">&gt;&nbsp;</span>
            <span className="cursor-block" />
          </div>
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-28 pb-14">
      <div className="container-x w-full">
        {/* Status row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-10"
        >
          <span className="inline-flex items-center gap-2.5 mono text-[11px] tracking-[0.18em] uppercase text-[var(--muted)] border border-[var(--line)] rounded-md px-3.5 py-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-2)] animate-blink [box-shadow:0_0_10px_var(--glow-2)]" />
            role: ai/ml_engineer @ tagbin
          </span>
          <span className="hidden sm:block mono text-[11px] tracking-[0.18em] uppercase text-[var(--muted)]">
            loc: gurugram.in // 28.45°N 77.02°E
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-14 items-center">
          {/* Left: name + intro */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease }}
              className="display-hero text-[clamp(3rem,8.5vw,6.5rem)] mb-6"
            >
              Harsh
              <br />
              Tekwani<span className="glow-text">_</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease }}
              className="font-display text-xl sm:text-2xl font-medium tracking-tight mb-5"
            >
              AI/ML Engineer <span className="text-[var(--accent-text)]">//</span> Agentic Systems &amp; Finetuning
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease }}
              className="text-[15px] text-[var(--muted)] leading-relaxed max-w-lg mb-9"
            >
              I build agentic systems, LLM-powered pipelines, and Text-to-SQL solutions —
              spanning finetuning, RAG, and OCR — delivering production-ready AI for
              public and private sector clients.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease }}
              className="flex flex-wrap items-center gap-3.5"
            >
              <a href="#work" className="btn-accent">
                view_work
                <HiArrowUpRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn-outline">
                init_contact
              </a>
              <div className="flex items-center gap-2 ml-1">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    aria-label={s.label}
                    className="icon-btn"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: terminal */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.55, ease }}
            className="hud-corners"
          >
            <Terminal />
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex items-center gap-3 mt-16 mono text-[10px] tracking-[0.22em] uppercase text-[var(--muted)]"
        >
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <HiArrowDown className="w-3.5 h-3.5" />
          </motion.span>
          scroll_to_explore
        </motion.div>
      </div>
    </section>
  )
}
