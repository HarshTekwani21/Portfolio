import { HiArrowUp } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="section-rule">
      <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="mono text-[11px] tracking-[0.14em] text-[var(--muted)]">
          <span className="text-[var(--accent-text)]">©</span> {new Date().getFullYear()} harsh.tekwani
          <span className="mx-2 text-[var(--line-strong)]">|</span>
          all_rights_reserved
        </p>
        <p className="mono text-[11px] tracking-[0.14em] text-[var(--muted)]">
          built_with: react + vite <span className="text-[var(--accent-2)]">●</span> sys.online
        </p>
        <a href="#home" className="icon-btn" aria-label="Back to top">
          <HiArrowUp className="w-4 h-4" />
        </a>
      </div>
    </footer>
  )
}
