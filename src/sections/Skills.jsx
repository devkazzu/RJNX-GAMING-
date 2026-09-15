import {
  Calculator,
  Code2,
  Cpu,
  Gamepad2,
  Palette,
  Sparkles,
  Video,
} from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

const SKILLS = [
  {
    icon: Gamepad2,
    title: 'Gaming',
    text: 'Playing, understanding and creating around games.',
    color: 'text-cyan-400',
    glow: 'group-hover:shadow-cyan-500/20',
  },
  {
    icon: Code2,
    title: 'Web Development',
    text: 'Building modern, responsive websites and interfaces.',
    color: 'text-violet-400',
    glow: 'group-hover:shadow-violet-500/20',
  },
  {
    icon: Cpu,
    title: 'Technology',
    text: 'Endlessly curious about how software and hardware work.',
    color: 'text-blue-400',
    glow: 'group-hover:shadow-blue-500/20',
  },
  {
    icon: Calculator,
    title: 'Mathematics',
    text: 'Logic and problem-solving — the foundation of everything I build.',
    color: 'text-emerald-400',
    glow: 'group-hover:shadow-emerald-500/20',
  },
  {
    icon: Video,
    title: 'Video & Content Creation',
    text: 'Recording, editing and publishing content for YouTube.',
    color: 'text-red-400',
    glow: 'group-hover:shadow-red-500/20',
  },
  {
    icon: Palette,
    title: 'UI / Design',
    text: 'Making things not just work, but look and feel great.',
    color: 'text-pink-400',
    glow: 'group-hover:shadow-pink-500/20',
  },
  {
    icon: Sparkles,
    title: 'Creative Projects',
    text: 'Experiments and ideas that don’t fit in a single box.',
    color: 'text-amber-400',
    glow: 'group-hover:shadow-amber-500/20',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[110px]"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            kicker="Skills & Interests"
            title={
              <>
                What drives <span className="text-gradient">me</span>
              </>
            }
            description="The areas I'm learning, practising and growing in every single day."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SKILLS.map((skill, i) => (
            <Reveal key={skill.title} delay={i * 70}>
              <div
                className={`glass group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl ${skill.glow}`}
              >
                <skill.icon
                  className={`mb-4 h-9 w-9 ${skill.color} transition-transform duration-300 group-hover:scale-110`}
                  aria-hidden="true"
                />
                <h3 className="font-display mb-2 text-lg font-semibold text-white">
                  {skill.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">{skill.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
