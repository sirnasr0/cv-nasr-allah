import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

type RevealTextProps = {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  className?: string
  delay?: number
  stagger?: number
  once?: boolean
}

/**
 * Révèle un texte mot par mot avec un léger décalage vertical + fondu.
 * Chaque mot est masqué par un conteneur overflow-hidden pour un effet
 * de "rideau" propre, plutôt qu'un simple fade.
 */
export function RevealText({
  text,
  as = 'p',
  className,
  delay = 0,
  stagger = 0.035,
  once = true,
}: RevealTextProps) {
  const words = text.split(' ')
  const Tag = motion[as as 'p']

  return (
    <Tag className={cn('flex flex-wrap', className)}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden pb-[0.15em] pr-[0.28em] inline-block">
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: '110%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once, amount: 0.9 }}
            transition={{
              duration: 0.9,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
