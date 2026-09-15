import { useState } from 'react'
import { Info, MapPin, Send, Youtube } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { isEmailConfigured, siteConfig } from '../config.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const emailReady = isEmailConfigured()

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!emailReady) {
      setStatus(
        'The contact email has not been configured yet. Please reach out via YouTube instead — or the site owner can set contactEmail in src/config.js.',
      )
      return
    }

    const subject = encodeURIComponent(`RJNX website message from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )
    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`
    setStatus('Opening your email app with the message pre-filled…')
  }

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[110px]"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            kicker="Contact"
            title={
              <>
                Let's <span className="text-gradient">connect</span>
              </>
            }
            description="Got a question, an idea or just want to say hi? Send a message."
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Info panel */}
          <Reveal className="lg:col-span-2">
            <div className="glass h-full rounded-3xl p-8">
              <h3 className="font-display text-xl font-bold text-white">
                Reach out directly
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Whether it's about content, a project or collaboration — I'm
                always happy to hear from people who share the same interests.
              </p>

              <ul className="mt-8 space-y-5">
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/15">
                    <Youtube className="h-5 w-5 text-red-400" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">YouTube</p>
                    <a
                      href={siteConfig.links.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
                    >
                      @{siteConfig.youtubeHandle}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15">
                    <MapPin className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Location</p>
                    <p className="text-sm text-slate-400">{siteConfig.location}</p>
                  </div>
                </li>
              </ul>

              {!emailReady && (
                <div className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-400/20 bg-amber-500/10 p-4">
                  <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" aria-hidden="true" />
                  <p className="text-xs leading-relaxed text-amber-200/90">
                    Direct email isn't set up yet. The fastest way to reach me
                    right now is through YouTube.
                  </p>
                </div>
              )}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8" noValidate={false}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-cyan-400/60 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-cyan-400/60 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What would you like to say?"
                  className="w-full resize-y rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-cyan-400/60 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-8 py-3.5 font-semibold text-white shadow-xl shadow-cyan-500/25 transition-all hover:scale-[1.02] hover:shadow-cyan-500/40 sm:w-auto"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Send Message
              </button>

              {status && (
                <p role="status" className="mt-4 text-sm text-slate-400">
                  {status}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
