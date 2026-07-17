import { useLenis } from '@/lib/useLenis'
import { Navbar } from '@/components/layout/Navbar'
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar'
import { CustomCursor } from '@/components/layout/CustomCursor'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/Experience'
import { Certifications } from '@/components/sections/Certifications'
import { Projects } from '@/components/sections/Projects'
import { Timeline } from '@/components/sections/Timeline'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

function App() {
  useLenis()

  return (
    <>
      <div className="grain-overlay" />
      <ScrollProgressBar />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
