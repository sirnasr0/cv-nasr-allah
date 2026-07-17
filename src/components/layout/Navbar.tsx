import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navigation, identity } from '@/data/profile'
import { scrollToId } from '@/lib/useLenis'
import { cn } from '@/lib/cn'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navigation
      .map((n) => document.getElementById(n.id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  function handleNavClick(id: string) {
    setMenuOpen(false)
    scrollToId(id)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'py-3' : 'py-6',
      )}
    >
      <div className="container-page">
        <div
          className={cn(
            'flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500',
            scrolled
              ? 'border border-line bg-paper/80 shadow-soft backdrop-blur-md'
              : 'border border-transparent bg-transparent',
          )}
        >
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight text-ink"
            data-cursor-hover
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink font-mono text-[11px] text-paper">
              {identity.firstName[0]}
              {identity.lastName[0]}
            </span>
            <span className="hidden sm:inline">
              {identity.firstName} {identity.lastName}
            </span>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                data-cursor-hover
                className={cn(
                  'relative rounded-full px-3.5 py-2 font-body text-[13px] font-medium transition-colors duration-300',
                  activeId === item.id ? 'text-ink' : 'text-sage hover:text-ink',
                )}
              >
                {activeId === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-paper-dim"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </nav>

          <button
            onClick={() => handleNavClick('contact')}
            data-cursor-hover
            className="hidden rounded-full bg-ink px-4 py-2 font-body text-[13px] font-medium text-paper transition-colors duration-300 hover:bg-emerald md:inline-flex"
          >
            Me contacter
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line md:hidden"
            aria-label="Menu"
          >
            <div className="flex flex-col gap-[5px]">
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
                className="h-[1.5px] w-4 bg-ink"
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1 }}
                className="h-[1.5px] w-4 bg-ink"
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
                className="h-[1.5px] w-4 bg-ink"
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden md:hidden"
          >
            <div className="container-page mt-3">
              <div className="flex flex-col gap-1 rounded-2xl border border-line bg-paper/95 p-3 shadow-lift backdrop-blur-md">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={cn(
                      'rounded-xl px-4 py-3 text-left font-body text-sm font-medium',
                      activeId === item.id ? 'bg-paper-dim text-ink' : 'text-sage',
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
