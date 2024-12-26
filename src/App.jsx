import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animasyonlu Gradient Arka Plan */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-animated from-primary via-dark to-secondary opacity-90 animate-gradient-xy" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Contact />
    </div>
  )
}

export default App
