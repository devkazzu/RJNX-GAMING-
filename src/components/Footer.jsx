import { Github, Instagram, MapPin, Youtube } from 'lucide-react'
import { siteConfig } from '../config.js'

export default function Footer() {
  const year = new Date().getFullYear()

  const socials = [
    {
      label: 'YouTube',
      href: siteConfig.links.youtube,
      icon: Youtube,
      hover: 'hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400',
    },
    {
      label: 'GitHub',
      href: siteConfig.links.github,
      icon: Github,
      hover: 'hover:border-slate-400/40 hover:bg-white/10 hover:text-white',
    },
    // Instagram appears only when a real URL is configured in src/config.js
    ...(siteConfig.links.instagram
      ? [
          {
            label: 'Instagram',
            href: siteConfig.links.instagram,
            icon: Instagram,
            hover: 'hover:border-pink-500/40 hover:bg-pink-500/10 hover:text-pink-400',
          },
        ]
      : []),
  ]

  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="font-display text-2xl font-bold tracking-wider text-white">
              RJ<span className="text-gradient">NX</span>
            </p>
            <p className="mt-1 text-sm text-slate-400">{siteConfig.ownerName}</p>
            <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-slate-500">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {siteConfig.location}
            </p>
          </div>

          <nav aria-label="Social links">
            <ul className="flex items-center gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all ${social.hover}`}
                  >
                    <social.icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-slate-500">
            © {year} {siteConfig.brandName} — {siteConfig.ownerName}. Built with
            passion from {siteConfig.location}.
          </p>
        </div>
      </div>
    </footer>
  )
}
