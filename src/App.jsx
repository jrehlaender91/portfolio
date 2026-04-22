import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Work from './components/Work.jsx'
import Experience from './components/Experience.jsx'
import Writing from './components/Writing.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ThemeExplorer from './components/ThemeExplorer.jsx'

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <Writing />
        <Contact />
      </main>
      <Footer />
      <ThemeExplorer />
    </>
  )
}
