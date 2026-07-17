import { useLayoutEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { timeline, type TimelineItem } from '@/data/profile'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/lib/cn'

gsap.registerPlugin(ScrollTrigger)

const typeLabel: Record<TimelineItem['type'], string> = {
  formation: 'Formation',
  experience: 'Expérience',
  certification: 'Certification',
}

export function Timeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: 'top',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            end: 'bottom 75%',
            scrub: 0.6,
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="timeline" ref={sectionRef} className="container-page py-28 md:py-36">
      <SectionHeading
        eyebrow="Parcours"
        title="Comment j'en suis arrivé·e là."
        description="Formation, expériences et certifications, dans l'ordre où elles se sont construites."
      />

      <div className="relative mt-16 pl-8 md:pl-12">
        <div className="absolute left-[3px] top-0 h-full w-px bg-line md:left-[7px]" />
        <div
          ref={lineRef}
          className="absolute left-[3px] top-0 h-full w-px bg-emerald md:left-[7px]"
        />

        <div className="flex flex-col gap-14">
          {timeline.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <span
                className={cn(
                  'absolute -left-8 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full ring-4 ring-paper md:-left-12',
                  item.type === 'experience' && 'bg-emerald',
                  item.type === 'certification' && 'bg-signal',
                  item.type === 'formation' && 'bg-sage',
                )}
              />

              <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-5">
                <span className="w-24 shrink-0 font-mono text-xs uppercase tracking-wider text-emerald">
                  {item.date}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="font-display text-lg font-medium text-ink">{item.title}</h3>
                    <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-sage">
                      {typeLabel[item.type]}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-sage">{item.subtitle}</p>
                  <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-ink/75">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
