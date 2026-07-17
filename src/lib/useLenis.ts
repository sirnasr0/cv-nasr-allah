import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Initialise un smooth-scroll Lenis et le synchronise avec GSAP ScrollTrigger,
 * afin que toutes les animations pilotées par le scroll restent parfaitement
 * calées sur la position réelle du viewport (pas de décalage / de lag).
 *
 * La boucle d'animation utilise requestAnimationFrame directement (et non
 * gsap.ticker) afin d'être proprement annulée au démontage : en React
 * StrictMode (dev), les effets sont montés/démontés/remontés une fois pour
 * détecter les fuites, et gsap.ticker.add() ne se retirait jamais, ce qui
 * pouvait faire tourner deux boucles Lenis en parallèle et casser
 * l'animation du scroll (sauts au lieu d'un défilement fluide).
 */
export function useLenis() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      return
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    })

    lenis.on('scroll', ScrollTrigger.update)

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Expose pour permettre un scroll programmatique (nav, boutons "En savoir plus")
    ;(window as any).__lenis = lenis

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      ;(window as any).__lenis = undefined
    }
  }, [])
}

export function scrollToId(id: string) {
  const target = document.getElementById(id)
  if (!target) return

  const lenis = (window as any).__lenis
  if (lenis) {
    lenis.scrollTo(target, { offset: -72, duration: 1.2 })
    return
  }

  // Filet de sécurité : anime le scroll vertical à la main, sans dépendre
  // de Lenis ni du support navigateur de scrollIntoView({behavior:'smooth'}).
  // Garantit que le clic sur un onglet de la navbar défile toujours
  // jusqu'à la bonne section.
  const startY = window.scrollY
  const targetY = target.getBoundingClientRect().top + startY - 72
  const distance = targetY - startY
  const duration = 900
  let startTime: number | null = null

  function step(timestamp: number) {
    if (startTime === null) startTime = timestamp
    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    window.scrollTo(0, startY + distance * eased)
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}
