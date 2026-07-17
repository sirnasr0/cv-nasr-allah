import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { identity, stats } from '@/data/profile'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { RevealText } from '@/components/ui/RevealText'
import { scrollToId } from '@/lib/useLenis'
import { useIsMobile, useReducedMotion } from '@/lib/useIsMobile'

// Three.js + fiber ne sont chargés que si nécessaire (desktop, motion autorisée)
const HeroScene = lazy(() =>
  import('@/components/three/HeroScene').then((m) => ({ default: m.HeroScene })),
)

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [roleIndex, setRoleIndex] = useState(0)
  const isMobile = useIsMobile(768)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % identity.roleVariants.length)
    }, 2600)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      {!isMobile && !reducedMotion && (
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      )}

      <div ref={contentRef} className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-3.5 py-1.5"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sage">
            {identity.availability}
          </span>
        </motion.div>

        <h1 className="font-display text-hero font-medium text-ink">
          <RevealText text={`${identity.firstName}`} delay={0.05} className="text-balance" />
          <RevealText text={`${identity.lastName}`} delay={0.15} className="text-balance" />
        </h1>

        <div className="mt-3 flex h-[1.6em] items-center overflow-hidden font-display text-display-md text-emerald md:mt-4">
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono"
            >
              {identity.roleVariants[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-lg text-balance text-base leading-relaxed text-sage md:text-lg"
        >
          {identity.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton onClick={() => scrollToId('projects')} data-cursor-hover>
            Voir mes projets
            <span aria-hidden>→</span>
          </MagneticButton>
          <MagneticButton
            variant="ghost"
            onClick={() => scrollToId('contact')}
            data-cursor-hover
          >
            Me contacter
          </MagneticButton>
          <a
            href={identity.resumeUrl}
            download
            data-cursor-hover
            className="group relative inline-flex items-center gap-2.5 rounded-full border border-line bg-transparent px-6 py-3.5 font-body text-sm font-medium text-ink transition-colors duration-300 hover:border-emerald hover:text-emerald"
          >
            Télécharger mon CV
            <span aria-hidden>↓</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-2xl font-semibold text-ink">{s.value}</div>
              <div className="mt-1 font-mono text-[11px] uppercase leading-snug tracking-wider text-sage">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
