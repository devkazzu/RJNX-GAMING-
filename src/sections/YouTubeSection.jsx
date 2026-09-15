import { Clapperboard, ExternalLink, Gamepad2, PartyPopper, Play, Youtube } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { siteConfig } from '../config.js'

const CONTENT_TYPES = [
  {
    icon: Play,
    title: 'Gaming Shorts',
    text: 'Fast, punchy short-form gaming moments made for quick entertainment.',
    accent: 'text-red-400',
  },
  {
    icon: Gamepad2,
    title: 'Gaming Content',
    text: 'Gameplay, highlights and everything happening in the games I love.',
    accent: 'text-cyan-400',
  },
  {
    icon: PartyPopper,
    title: 'Entertainment',
    text: 'Fun, energy and personality — content made to make you stay.',
    accent: 'text-violet-400',
  },
  {
    icon: Clapperboard,
    title: 'Creative Videos',
    text: 'Experiments and creative edits that push what I can make.',
    accent: 'text-pink-400',
  },
]

export default function YouTubeSection() {
  return (
    <section id="youtube" className="relative py-20 md:py-28">
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 h-80 w-80 rounded-full bg-red-500/10 blur-[110px]"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            kicker="YouTube"
            title={
              <>
                <span className="text-gradient">{siteConfig.youtubeHandle}</span> on
                YouTube
              </>
            }
            description="My home base as a creator — where gaming, entertainment and creativity come together."
          />
        </Reveal>

        {/* Channel banner card */}
        <Reveal>
          <div className="glass relative mb-12 overflow-hidden rounded-3xl p-8 md:p-12">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-violet-500/10"
            />
            <div className="relative flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
              <div className="animate-float flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-red-500 to-red-700 shadow-2xl shadow-red-500/30 md:h-28 md:w-28">
                <Youtube className="h-12 w-12 text-white md:h-14 md:w-14" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
                  @{siteConfig.youtubeHandle}
                </h3>
                <p className="mt-2 max-w-xl leading-relaxed text-slate-400">
                  Gaming shorts, gameplay and creative videos from{' '}
                  {siteConfig.ownerName}. New content as the journey grows —
                  come be part of it from the start.
                </p>
              </div>
              <a
                href={siteConfig.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-red-600 px-7 py-3.5 font-semibold text-white shadow-xl shadow-red-600/30 transition-all hover:scale-105 hover:bg-red-500"
              >
                <Youtube className="h-5 w-5" aria-hidden="true" />
                Watch on YouTube
                <ExternalLink className="h-4 w-4 opacity-70" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Content focus grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CONTENT_TYPES.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <div className="glass group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                <item.icon
                  className={`mb-4 h-8 w-8 ${item.accent} transition-transform duration-300 group-hover:scale-110`}
                  aria-hidden="true"
                />
                <h3 className="font-display mb-2 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
