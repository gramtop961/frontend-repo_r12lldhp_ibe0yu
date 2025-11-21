import { useState } from 'react'
import { Menu, X, Shield, Bot } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Business', href: '#business' },
    { label: 'Government', href: '#government' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400 text-white shadow-lg shadow-purple-500/30">
            <Bot size={20} />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-white font-semibold text-lg">AuraAI</span>
            <span className="text-xs text-white/60">Voice Agent Platform</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-white/80 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#get-started" className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors">
            <Shield size={16} />
            Get Started
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg bg-white/10 text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-3 rounded-xl bg-slate-900/80 backdrop-blur border border-white/10 p-4 space-y-3">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="block text-white/90 hover:text-white">
              {item.label}
            </a>
          ))}
          <a href="#get-started" className="block text-center rounded-lg bg-white/10 hover:bg-white/20 text-white px-4 py-2">
            Get Started
          </a>
        </div>
      )}
    </header>
  )
}
