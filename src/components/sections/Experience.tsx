import { motion } from 'framer-motion'
import { experiences } from '@/data/profile'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Tag } from '@/components/ui/Tag'
import { GlowCard } from '@/components/ui/GlowCard'

export function Experience() {
  return (
    <section id="experience" className="container-page py-28 md:py-36">
      <SectionHeading
        eyebrow="Formation"
        title="Une base solide, construite pour l'alternance."
        description="Un parcours d'ingénieur exigeant, pensé pour être mis en pratique dès les premières semaines en entreprise."
      />

      <div className="mt-16 flex flex-col gap-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlowCard>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                <div className="md:col-span-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald">
                    {exp.period}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-medium text-ink">{exp.role}</h3>
                  <p className="mt-1 text-sm text-sage">
                    {exp.company} — {exp.location}
                  </p>
                </div>

                <div className="md:col-span-8">
                  <p className="text-[15px] leading-relaxed text-ink/80">{exp.description}</p>
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {exp.achievements.map((a, ai) => (
                      <li key={ai} className="flex items-start gap-3 text-[15px] text-ink/80">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald" />
                        {a}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
