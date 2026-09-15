import { useEffect, useState } from 'react'
import { Menu, X, Youtube } from 'lucide-react'
import { siteConfig } from '../config.js'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#youtube', label: 'YouTube' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu with the Escape key
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'glass shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:h-[4.5rem]"
      >
        <a
          href="#home"
          className="font-display text-2xl font-bold tracking-wider text-white"
          aria-label={`${siteConfig.brandName} — back to top`}
        >
          RJ<span className="text-gradient">NX</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-cyan-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="ml-3">
            <a
              href={siteConfig.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:scale-105"
            >
              <Youtube className="h-4 w-4" aria-hidden="true" />
              YouTube
            </a>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="rounded-lg p-2 text-slate-200 transition-colors hover:bg-white/10 md:hidden"
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out md:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="space-y-1 border-t border-white/5 px-4 pt-3 pb-5">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-cyan-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={siteConfig.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white"
            >
              <Youtube className="h-4 w-4" aria-hidden="true" />
              Visit YouTube
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
