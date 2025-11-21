import { Shield, CheckCircle2, FileText, Building2 } from 'lucide-react'

export default function Trust() {
  return (
    <section id="government" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Built for security-first teams</h2>
            <p className="mt-3 text-white/70">Our approach aligns to strict governance while enabling speed and measurable outcomes.</p>

            <ul className="mt-6 space-y-3 text-white/80">
              {[
                'SOC 2-aligned processes and documentation',
                'Data classification, PII minimization, and retention policies',
                'Lineage, access controls, and audit logs across the stack',
                'Zero-trust networking and least-privilege design patterns',
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
                  <Building2 size={18} /> Government & Enterprise Ready
                </div>
                <div className="mt-4 text-white/80">
                  We partner with legal, security, and procurement to ensure compliance without slowing delivery.
                </div>
                <div className="mt-4 flex items-center gap-4 text-white/70 text-sm">
                  <div className="inline-flex items-center gap-2"><FileText size={16}/> ATO support</div>
                  <div className="inline-flex items-center gap-2"><Shield size={16}/> FedRAMP-aligned</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
