import { ShieldCheck, Headphones, Building2, LockKeyhole, Sparkles, Phone } from 'lucide-react'

const cards = [
  {
    icon: Headphones,
    title: 'Contact center copilots',
    desc: 'Reduce handle time and improve CSAT with AI that listens, understands, and acts—securely.',
  },
  {
    icon: Building2,
    title: 'Citizen services',
    desc: '24/7 voice assistance for city, state, and federal programs with accessibility at the core.',
  },
  {
    icon: LockKeyhole,
    title: 'Compliance & security',
    desc: 'End-to-end guidance to meet SOC 2, HIPAA, and FedRAMP-aligned controls for voice AI.',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Solutions built for the real world</h2>
          <p className="mt-3 text-white/70">From first strategy workshop to production rollout—our team guides you end‑to‑end.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur transition-transform hover:-translate-y-1">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
              <div className="mt-6 inline-flex items-center text-sm text-white/80">
                <Sparkles size={16} className="mr-2" /> Learn how it works
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
