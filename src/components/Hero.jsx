import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Spline 3D scene */}
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* gradient aura overlay to blend with brand */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(147,51,234,0.25),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 md:pt-36 md:pb-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400 animate-pulse" />
            Trusted by business and government teams
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white">
            AI voice agent guidance for business and government
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
            Launch secure, compliant AI voice experiences in days—not months. Strategy, design, and deployment support built for high‑stakes environments.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-purple-500/20">
              Book a demo
            </a>
            <a href="#solutions" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white px-5 py-3 font-semibold">
              Explore solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
