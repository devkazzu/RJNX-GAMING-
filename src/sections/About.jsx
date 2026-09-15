import { GraduationCap, MapPin, Sparkles, Youtube } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { siteConfig } from '../config.js'

const FACTS = [
  {
    icon: GraduationCap,
    title: 'Class 12 Student',
    text: 'Balancing studies with a growing passion for building and creating.',
  },
  {
    icon: MapPin,
    title: 'Assam, India',
    text: 'Proudly creating from the Northeast — proof that where you start doesn’t limit where you go.',
  },
  {
    icon: Sparkles,
    title: 'Curious Builder',
    text: 'Drawn to technology, gaming, mathematics and all kinds of creative work.',
  },
  {
    icon: Youtube,
    title: 'Content Creator',
    text: `The person behind ${siteConfig.youtubeHandle} — sharing gaming and creative content.`,
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[100px]"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            kicker="About"
            title={
              <>
                The person behind <span className="text-gradient">RJNX</span>
              </>
            }
          />
        </Reveal>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-slate-400 md:text-lg">
              <p>
                I'm <span className="font-semibold text-white">Raju Mahato</span>, a
                Class 12 student from Assam, India. RJNX is my personal brand —
                the name I put on everything I make, from gaming videos to code.
              </p>
              <p>
                I'm interested in{' '}
                <span className="text-cyan-300">technology</span>,{' '}
                <span className="text-violet-300">gaming</span>,{' '}
                <span className="text-cyan-300">mathematics</span> and creative
                work of every kind. As the creator behind{' '}
                <a
                  href={siteConfig.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white underline decoration-cyan-400/50 underline-offset-4 transition-colors hover:text-cyan-300"
                >
                  {siteConfig.youtubeHandle}
                </a>
                , I spend my time turning ideas into videos, projects and
                experiments.
              </p>
              <p>
                I'm at the beginning of this journey — and that's exactly what
                makes it exciting. Every video uploaded, every line of code
                written and every problem solved is one step forward.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {FACTS.map((fact, i) => (
              <Reveal key={fact.title} delay={i * 90}>
                <div className="glass group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
                  <fact.icon
                    className="mb-4 h-8 w-8 text-cyan-400 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <h3 className="font-display mb-2 text-lg font-semibold text-white">
                    {fact.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">{fact.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
