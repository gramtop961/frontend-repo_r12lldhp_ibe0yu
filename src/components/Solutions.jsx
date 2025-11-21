import { Database, LineChart, Layers, ShieldCheck, Workflow, GlobeLock, Sparkles } from 'lucide-react'

const cards = [
  {
    icon: Database,
    title: 'Unified data backbone',
    desc: 'Connect systems, streams, and documents into a governed model with lineage and policy controls.',
  },
  {
    icon: LineChart,
    title: 'Operational analytics',
    desc: 'Realtime dashboards and what-if simulations that drive action— not just reports.',
  },
  {
    icon: Layers,
    title: 'Decision workflows',
    desc: 'Codify playbooks into auditable workflows that orchestrate people, data, and AI.',
  },
  {
    icon: GlobeLock,
    title: 'Secure data sharing',
    desc: 'Safely collaborate across agencies and vendors with row/column-level protections.',
  },
  {
    icon: Workflow,
    title: 'AI-assisted operations',
    desc: 'Use LLMs on your governed data for triage, summarization, and root-cause analysis.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance by design',
    desc: 'FedRAMP-aligned patterns, audit trails, and retention policies built-in.',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Platforms and services to operationalize your data</h2>
          <p className="mt-3 text-white/70">From data integration to decision execution—our team delivers outcomes end‑to‑end.</p>
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
