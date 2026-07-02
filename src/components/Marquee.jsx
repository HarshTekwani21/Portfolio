const items = [
  'Generative AI', 'RAG Pipelines', 'Text-to-SQL', 'Agentic Systems',
  'LLM Engineering', 'OCR', 'Computer Vision', 'FastAPI', 'LangChain',
]

export default function Marquee() {
  const row = (ariaHidden) => (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="mono text-sm sm:text-base font-medium uppercase tracking-[0.14em] px-6 whitespace-nowrap text-[var(--muted)]">
            {item}
          </span>
          <span className="text-[var(--accent-text)] mono text-sm">//</span>
        </span>
      ))}
    </div>
  )

  return (
    <div className="section-rule border-b border-[var(--line)] py-4 overflow-hidden select-none bg-[var(--surface)]/40">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
