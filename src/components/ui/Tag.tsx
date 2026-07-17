import { cn } from '@/lib/cn'

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-line bg-white/60 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-sage',
        className,
      )}
    >
      {children}
    </span>
  )
}
