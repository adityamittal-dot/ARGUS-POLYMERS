import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Quality from './components/Quality'
import Partners from './components/Partners'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (saved === 'dark' || (!saved && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main className="pt-20">
        <Hero />
        <Services />
        <About />
        <Quality />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
