export default function CTA() {
  return (
    <section id="get-started" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-orange-400/10 p-10 text-center backdrop-blur">
          <h3 className="text-2xl md:text-3xl font-semibold text-white">Ready to launch your AI voice initiative?</h3>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">Book a 30‑minute session with our specialists to map the path from idea to production with security and compliance at every step.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:hello@auraai.example" className="rounded-lg bg-white text-slate-900 px-5 py-3 font-semibold">Contact sales</a>
            <a href="#pricing" className="rounded-lg bg-white/10 hover:bg-white/20 text-white px-5 py-3 font-semibold">See pricing</a>
          </div>
        </div>
      </div>
    </section>
  )
}
