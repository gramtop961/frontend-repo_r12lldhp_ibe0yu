import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Solutions from './components/Solutions'
import Trust from './components/Trust'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* background gradient grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(99,102,241,0.25),rgba(17,24,39,0.8))]" />

      <div className="relative">
        <Navbar />
        <Hero />
        <Logos />
        <Solutions />
        <Trust />
        <CTA />

        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70">
            <p>© {new Date().getFullYear()} AuraAI. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Security</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
