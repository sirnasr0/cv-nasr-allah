import { useRef, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

type GlowCardProps = {
  children: ReactNode
  className?: string
}

/**
 * Carte avec un léger halo qui suit le curseur (spotlight radial via
 * variables CSS mises à jour au mousemove). Effet discret, jamais criard.
 */
export function GlowCard({ children, className }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-line bg-white/70 p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift',
        className,
      )}
      style={{ ['--mx' as any]: '50%', ['--my' as any]: '0%' }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(340px circle at var(--mx) var(--my), rgba(31,111,84,0.10), transparent 65%)',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
