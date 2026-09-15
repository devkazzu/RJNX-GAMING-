import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import YouTubeSection from './sections/YouTubeSection.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'
import Contact from './sections/Contact.jsx'

export default function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-cyan-500 focus:px-4 focus:py-2 focus:font-semibold focus:text-slate-950"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <YouTubeSection />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
