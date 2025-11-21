import { Shield, CheckCircle2 } from 'lucide-react'

export default function Trust() {
  return (
    <section id="government" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Built for security-first teams</h2>
            <p className="mt-3 text-white/70">Our guidance aligns with leading frameworks and keeps your stakeholders safe.</p>

            <ul className="mt-6 space-y-3 text-white/80">
              {[
                'SOC 2-aligned processes and documentation',
                'HIPAA-aware design patterns for PHI',
                'PII minimization and data retention playbooks',
                'Network isolation and zero-trust recommendations',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 text-green-400" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="absolute -top-5 -left-5 h-28 w-28 rounded-full bg-purple-500/20 blur-2xl" />
              <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-white">
                  <Shield size={18} /> Government & Enterprise Ready
                </div>
                <div className="mt-4 text-white/80">
                  We partner with your security, legal, and procurement teams so you can move fast without breaking policy.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
