import { useRef, useState, type ReactNode, type ButtonHTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

type MagneticButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: 'primary' | 'ghost'
  strength?: number
}

export function MagneticButton({
  children,
  className,
  variant = 'primary',
  strength = 18,
  onClick,
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPos({
      x: (x / rect.width) * strength,
      y: (y / rect.height) * strength,
    })
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.3 }}
      className={cn(
        'group relative inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 font-body text-sm font-medium transition-colors duration-300',
        variant === 'primary'
          ? 'bg-ink text-paper hover:bg-emerald'
          : 'border border-line bg-transparent text-ink hover:border-emerald hover:text-emerald',
        className,
      )}
      {...(rest as any)}
    >
      {children}
    </motion.button>
  )
}
