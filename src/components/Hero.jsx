import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 18 } }
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Spline 3D scene */}
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* gradient aura overlay to blend with brand */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(147,51,234,0.25),transparent_60%)]" />

        {/* floating orbs */}
        <motion.div
          className="pointer-events-none absolute -top-10 left-10 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-0 right-10 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl"
          animate={{ y: [0, -25, 0], x: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.div
          className="pointer-events-none absolute top-1/3 right-1/4 h-40 w-40 rounded-full bg-orange-400/20 blur-2xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 md:pt-36 md:pb-36">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400 animate-pulse" />
            Trusted by business and government teams
          </motion.div>
          <motion.h1 variants={item} className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Data-driven management and decision intelligence
          </motion.h1>
          <motion.p variants={item} className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
            Integrate, govern, and operationalize your data to drive confident decisions at scale. Strategy, platforms, and execution—built for high‑stakes environments.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-purple-500/20">
              Request a demo
            </a>
            <a href="#solutions" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white px-5 py-3 font-semibold">
              Explore solutions
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
