import { FolderKanban, Github, Lightbulb, MonitorPlay } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

const PROJECTS = [
  {
    icon: FolderKanban,
    title: 'Mio File Manager',
    status: 'Active Project',
    statusClass: 'bg-cyan-500/15 text-cyan-300 border-cyan-400/30',
    description:
      'A file manager project — my hands-on playground for learning how real software is designed, structured and built.',
    tags: ['Open Source', 'File Management'],
    github: 'https://github.com/devkazzu/Mio-File-Manager',
    gradient: 'from-cyan-500/20 to-blue-600/10',
  },
  {
    icon: MonitorPlay,
    title: 'RJNX Website',
    status: 'Active Project',
    statusClass: 'bg-violet-500/15 text-violet-300 border-violet-400/30',
    description:
      'This website — a dark, glassmorphic creator portfolio built with React, Vite and Tailwind CSS as the home of the RJNX brand.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    github: null,
    gradient: 'from-violet-500/20 to-purple-600/10',
  },
  {
    icon: Lightbulb,
    title: 'Future Experiments',
    status: 'Placeholder — Idea Stage',
    statusClass: 'bg-slate-500/15 text-slate-300 border-slate-400/30',
    description:
      'A placeholder for what comes next: tools, creative coding experiments and content ideas currently taking shape. Nothing shipped here yet — watch this space.',
    tags: ['Coming Soon'],
    github: null,
    gradient: 'from-pink-500/15 to-orange-500/10',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            kicker="Projects"
            title={
              <>
                Things I'm <span className="text-gradient">building</span>
              </>
            }
            description="Learning by building. These are the projects I'm working on right now — real, in progress and growing."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <article className="glass group relative flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/10">
                <div
                  aria-hidden="true"
                  className={`h-28 bg-gradient-to-br ${project.gradient} relative`}
                >
                  <div className="absolute -bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 shadow-lg">
                    <project.icon className="h-7 w-7 text-cyan-400" aria-hidden="true" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 pt-10">
                  <span
                    className={`mb-3 inline-block w-fit rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wide uppercase ${project.statusClass}`}
                  >
                    {project.status}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:border-cyan-400/40 hover:bg-cyan-500/10"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                      View on GitHub
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
