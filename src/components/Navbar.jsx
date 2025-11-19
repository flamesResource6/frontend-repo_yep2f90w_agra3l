import { useState } from 'react'
import { Menu, X, Gamepad2, Home, Info, Server, Rocket } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', icon: Home, href: '#home' },
    { label: 'About', icon: Info, href: '#about' },
    { label: 'Servers', icon: Server, href: '#servers' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#home" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-[0_0_30px_rgba(168,85,247,0.45)]">
                <Gamepad2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-white">FiveM Nexus</span>
            </a>

            <nav className="hidden items-center gap-2 md:flex">
              {navItems.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-slate-200 transition-colors hover:bg-white/5"
                >
                  <Icon className="h-4 w-4 text-purple-300 transition-transform group-hover:scale-110" />
                  {label}
                </a>
              ))}
              <a
                href="#join"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(99,102,241,.8)] transition-transform hover:scale-[1.02] active:scale-[0.99]"
              >
                <Rocket className="h-4 w-4" /> Join Now
              </a>
            </nav>

            <button
              onClick={() => setOpen(v => !v)}
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="border-t border-white/10 p-4 md:hidden">
              <div className="grid gap-2">
                {navItems.map(({ label, icon: Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-3 rounded-xl px-3 py-2 text-slate-200 hover:bg-white/5"
                  >
                    <Icon className="h-4 w-4 text-purple-300" /> {label}
                  </a>
                ))}
                <a
                  href="#join"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 px-4 py-2 text-sm font-medium text-white"
                >
                  <Rocket className="h-4 w-4" /> Join Now
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
