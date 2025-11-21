import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="get-started" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-orange-400/10 p-10 text-center backdrop-blur overflow-hidden"
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            animate={{
              background: [
                'radial-gradient(600px circle at 20% 20%, rgba(99,102,241,0.10), transparent 40%)',
                'radial-gradient(600px circle at 80% 30%, rgba(147,51,234,0.10), transparent 40%)',
                'radial-gradient(600px circle at 50% 80%, rgba(249,115,22,0.10), transparent 40%)',
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <h3 className="relative text-2xl md:text-3xl font-semibold text-white">Ready to operationalize decisions with your data?</h3>
          <p className="relative mt-3 text-white/80 max-w-2xl mx-auto">Book a 30‑minute session to map your use cases, integration approach, and governance model with our solution architects.</p>
          <div className="relative mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:hello@auradata.example" className="rounded-lg bg-white text-slate-900 px-5 py-3 font-semibold">Contact sales</a>
            <a href="#pricing" className="rounded-lg bg-white/10 hover:bg-white/20 text-white px-5 py-3 font-semibold">See pricing</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
