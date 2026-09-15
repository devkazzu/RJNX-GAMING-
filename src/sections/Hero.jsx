import { ArrowRight, Gamepad2, Youtube } from 'lucide-react'
import ParticleField from '../components/ParticleField.jsx'
import { siteConfig } from '../config.js'

export default function Hero() {
  return (
    <section
      id="home"
      className="grid-bg relative flex min-h-svh items-center overflow-hidden"
    >
      {/* Ambient glow orbs */}
      <div
        aria-hidden="true"
        className="animate-glow-pulse absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="animate-glow-pulse absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-violet-500/15 blur-[120px] [animation-delay:1.5s]"
      />
      <ParticleField />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-28 text-center sm:px-6">
        <div className="animate-fade-up">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-cyan-300 sm:text-sm">
            <Gamepad2 className="h-4 w-4" aria-hidden="true" />
            Creator behind {siteConfig.youtubeHandle}
          </span>
        </div>

        <h1 className="font-display animate-fade-up mt-8 text-6xl font-bold tracking-tight text-white [animation-delay:100ms] sm:text-7xl md:text-8xl lg:text-9xl">
          RJ<span className="text-gradient">NX</span>
        </h1>

        <p className="font-display animate-fade-up mt-4 text-base font-medium tracking-[0.25em] text-slate-300 uppercase [animation-delay:200ms] sm:text-lg md:text-xl">
          Gaming <span className="text-cyan-400">•</span> Creativity{' '}
          <span className="text-violet-400">•</span> Technology
        </p>

        <p className="animate-fade-up mx-auto mt-8 max-w-xl text-base leading-relaxed text-slate-400 [animation-delay:300ms] sm:text-lg">
          Hi, I'm Raju — a Class 12 student from Assam building my journey
          through gaming, creativity and technology.
        </p>

        <div className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 [animation-delay:400ms] sm:flex-row">
          <a
            href="#projects"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-8 py-3.5 font-semibold text-white shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 hover:shadow-cyan-500/40 sm:w-auto"
          >
            Explore My Work
            <ArrowRight
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
          <a
            href={siteConfig.links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 font-semibold text-white transition-all hover:scale-105 hover:border-red-500/40 hover:bg-red-500/10 sm:w-auto"
          >
            <Youtube className="h-5 w-5 text-red-500" aria-hidden="true" />
            Visit YouTube
          </a>
        </div>
      </div>

      {/* Bottom fade into the next section */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-void to-transparent"
      />
    </section>
  )
}
