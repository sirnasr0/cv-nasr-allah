import { motion } from 'framer-motion'
import { skillCategories, skillColors } from '@/data/profile'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlowCard } from '@/components/ui/GlowCard'

export function Skills() {
  return (
    <section id="skills" className="bg-paper-dim/60 py-28 md:py-36">
      <div className="container-page">
        <SectionHeading
          eyebrow="Compétences"
          title="La boîte à outils d'un profil data."
          description="De la requête SQL au dashboard livré — les outils que je maîtrise, classés par usage réel plutôt que par ordre alphabétique."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: ci * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlowCard>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg font-medium text-ink">{category.label}</h3>
                  <span className="font-mono text-[11px] text-sage">
                    0{ci + 1}/0{skillCategories.length}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-sage">{category.description}</p>

                <div className="mt-7 flex flex-col gap-5">
                  {category.skills.map((skill, si) => {
                    const color = skillColors[skill.name] ?? '#1F6F54'
                    return (
                      <div key={skill.name}>
                        <div className="mb-2 flex items-center justify-between">
                          <span className="font-body text-sm font-medium text-ink">{skill.name}</span>
                          <span className="font-mono text-xs" style={{ color }}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-[3px] w-full overflow-hidden rounded-full bg-line">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: 0.15 + si * 0.08,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: color }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
