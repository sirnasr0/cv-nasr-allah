import { useState } from 'react'
import { motion } from 'framer-motion'
import { identity } from '@/data/profile'
import { RevealText } from '@/components/ui/RevealText'
import { MagneticButton } from '@/components/ui/MagneticButton'

const channels = [
  { label: 'Email', value: (i: typeof identity) => i.email, href: (i: typeof identity) => `mailto:${i.email}` },
  { label: 'Téléphone', value: (i: typeof identity) => i.phone, href: (i: typeof identity) => `tel:${i.phone.replace(/\s/g, '')}` },
  { label: 'Mobilité', value: () => 'Nationale / internationale', href: () => undefined },
  { label: 'Permis', value: () => 'Permis B', href: () => undefined },
]

export function Contact() {
  const [copied, setCopied] = useState(false)

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(identity.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // silencieux : le lien mailto reste disponible en secours
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-28 md:py-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(600px circle at 15% 20%, rgba(143,247,192,0.12), transparent 60%), radial-gradient(500px circle at 85% 80%, rgba(31,111,84,0.25), transparent 60%)',
        }}
      />

      <div className="container-page relative z-10">
        <span className="eyebrow mb-4 block text-signal">Contact</span>

        <RevealText
          as="h2"
          text="Parlons de votre prochaine alternance data."
          className="max-w-3xl text-balance font-display text-display-lg font-medium text-paper"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-balance text-base leading-relaxed text-paper/65"
        >
          {identity.availability} · {identity.location}. Réponse rapide garantie — je suis
          disponible pour un échange, un test technique, ou simplement pour répondre à vos
          questions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            onClick={handleCopyEmail}
            data-cursor-hover
            className="!bg-signal !text-ink hover:!bg-paper"
          >
            {copied ? 'Email copié ✓' : "Copier mon email"}
          </MagneticButton>
          <a
            href={`mailto:${identity.email}`}
            data-cursor-hover
            className="font-mono text-sm text-paper/70 underline-offset-4 hover:text-paper hover:underline"
          >
            ou écrivez à {identity.email}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 grid grid-cols-1 gap-8 border-t border-paper/15 pt-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href(identity)}
              rel="noreferrer"
              data-cursor-hover
              className="group flex flex-col gap-2"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-paper/45">
                {c.label}
              </span>
              <span className="flex items-center gap-1.5 text-sm font-medium text-paper/85 transition-colors group-hover:text-signal">
                {c.value(identity)}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
