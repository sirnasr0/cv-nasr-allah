import { motion } from 'framer-motion'
import { about } from '@/data/profile'
import { SectionHeading } from '@/components/ui/SectionHeading'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

export function About() {
  return (
    <section id="about" className="container-page py-28 md:py-36">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionHeading
            eyebrow="À propos"
            title="Ce que je fais, et pourquoi je le fais bien."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 max-w-[280px] overflow-hidden rounded-3xl border border-line shadow-soft md:max-w-none"
          >
            <img
              src="/portrait.jpg"
              alt="Photo de Nasr Allah ABA-HADDOU"
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>
        </div>

        <div className="md:col-span-7">
          <div className="flex flex-col gap-6">
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="text-balance text-lg leading-relaxed text-ink/80 md:text-xl"
              >
                {p}
              </motion.p>
            ))}
          </div>

          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 grid grid-cols-1 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-2"
          >
            {about.highlights.map((h) => (
              <div key={h.label} className="flex flex-col gap-1.5">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-emerald">
                  {h.label}
                </dt>
                <dd className="text-sm text-ink/80">{h.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  )
}
