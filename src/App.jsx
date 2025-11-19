import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Servers from './components/Servers'
import Team from './components/Team'

function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0b0f]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_0%,rgba(139,92,246,0.12),transparent_70%),radial-gradient(800px_500px_at_90%_10%,rgba(99,102,241,0.12),transparent_60%)]" />

      <Navbar />
      <Hero />
      <Features />
      <Servers />
      <Team />

      <footer className="relative z-10 border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-slate-400 md:flex-row">
            <p className="text-sm">© {new Date().getFullYear()} FiveM Nexus. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#rules" className="hover:text-slate-200">Rules</a>
              <a href="#discord" className="hover:text-slate-200">Discord</a>
              <a href="#support" className="hover:text-slate-200">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
