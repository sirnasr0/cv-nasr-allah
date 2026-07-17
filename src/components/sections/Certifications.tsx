import { motion } from 'framer-motion'
import { certifications } from '@/data/profile'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlowCard } from '@/components/ui/GlowCard'

export function Certifications() {
  return (
    <section id="certifications" className="bg-paper-dim/60 py-28 md:py-36">
      <div className="container-page">
        <SectionHeading
          eyebrow="Distinctions"
          title="Des compétences validées, pas seulement déclarées."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlowCard className="h-full">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald/10 text-emerald">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 2l2.6 5.4 5.9.7-4.3 4.1 1 5.9L12 15.9 6.8 18.1l1-5.9L3.5 8.1l5.9-.7L12 2z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 font-display text-base font-medium leading-snug text-ink">
                      {cert.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-sage">{cert.issuer}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                    <span className="font-mono text-xs text-sage">{cert.date}</span>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor-hover
                        className="font-mono text-xs text-emerald underline-offset-4 hover:underline"
                      >
                        Vérifier ↗
                      </a>
                    )}
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
