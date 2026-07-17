import { motion } from 'framer-motion'
import { projects } from '@/data/profile'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Tag } from '@/components/ui/Tag'
import { useIsMobile } from '@/lib/useIsMobile'

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <article className="flex h-full w-[86vw] shrink-0 snap-start flex-col justify-between rounded-3xl border border-line bg-white/80 p-8 shadow-soft md:w-[560px] md:p-10">
      <div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-emerald">
            Projet {String(index + 1).padStart(2, '0')}
          </span>
          <div className="flex gap-3">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="font-mono text-xs text-sage hover:text-ink"
              >
                Code ↗
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="font-mono text-xs text-sage hover:text-ink"
              >
                Aperçu ↗
              </a>
            )}
          </div>
        </div>

        <h3 className="mt-4 text-balance font-display text-2xl font-medium leading-tight text-ink">
          {project.title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink/75">{project.description}</p>

        <dl className="mt-7 flex flex-col gap-4 border-t border-line pt-6">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-sage">Problème</dt>
            <dd className="mt-1 text-sm text-ink/80">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-sage">Approche</dt>
            <dd className="mt-1 text-sm text-ink/80">{project.approach}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-emerald">Résultat</dt>
            <dd className="mt-1 text-sm font-medium text-ink">{project.result}</dd>
          </div>
        </dl>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </article>
  )
}

export function Projects() {
  const isMobile = useIsMobile(900)

  return (
    <section id="projects" className="relative overflow-hidden py-28 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projets"
          title="Des cas concrets, pas des tutoriels recopiés."
          description="Chaque projet suit la même logique : un problème réel, une approche outillée, un résultat chiffré."
        />
      </div>

      <div
        className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 md:px-10"
        style={{ width: '100%' }}
      >
        {projects.map((project, i) =>
          isMobile ? (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="shrink-0 snap-start"
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ) : (
            <ProjectCard key={project.id} project={project} index={i} />
          ),
        )}
      </div>
    </section>
  )
}
