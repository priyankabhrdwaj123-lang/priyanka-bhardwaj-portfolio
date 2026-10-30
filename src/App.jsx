import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CustomCursor from './components/CustomCursor'
import ThemeToggle from './components/ThemeToggle'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

function App() {
  return (
    <main className="min-h-screen bg-[#080817] overflow-hidden">

      <Loader />
      <ScrollProgress />

      <CustomCursor />
      <Navbar />
      <ThemeToggle />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      <Footer />
      <ScrollToTop />

    </main>
  )
}

export default App