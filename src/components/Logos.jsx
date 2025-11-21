import { motion } from 'framer-motion'

export default function Logos() {
  const clients = [
    'GovTech', 'NATO', 'CivicLabs', 'Acme Health', 'Nova Bank', 'Strato Energy'
  ]

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <p className="text-center text-sm uppercase tracking-widest text-white/60 mb-6">Trusted by data-driven organizations</p>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-80"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } }
          }}
        >
          {clients.map((name) => (
            <motion.div
              key={name}
              className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 py-4 text-white/80"
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            >
              <span className="text-sm">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
