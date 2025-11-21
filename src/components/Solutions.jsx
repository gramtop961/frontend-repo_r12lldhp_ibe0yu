import { Database, LineChart, Layers, ShieldCheck, Workflow, GlobeLock, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

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
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Platforms and services to operationalize your data</h2>
          <p className="mt-3 text-white/70">From data integration to decision execution—our team delivers outcomes end‑to‑end.</p>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          {cards.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur"
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -6, boxShadow: '0 10px 30px rgba(99,102,241,0.15)' }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              onMouseMove={(e) => {
                const target = e.currentTarget;
                const rect = target.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                target.style.setProperty('--x', `${x}px`);
                target.style.setProperty('--y', `${y}px`);
              }}
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
              <motion.div className="mt-6 inline-flex items-center text-sm text-white/80" whileHover={{ x: 2 }}>
                <Sparkles size={16} className="mr-2" /> Learn how it works
              </motion.div>
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(147,51,234,0.08), transparent 40%)' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
