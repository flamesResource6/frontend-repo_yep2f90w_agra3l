import { motion } from 'framer-motion'
import { Shield, Zap, Users, Cpu } from 'lucide-react'

const items = [
  { icon: Shield, title: 'Anti-cheat & Security', desc: 'Protected environment with advanced moderation and server-side checks.' },
  { icon: Zap, title: 'Optimized Scripts', desc: 'Custom built resources focused on performance and smooth gameplay.' },
  { icon: Users, title: 'Active Community', desc: 'Welcoming players, regular meetups, and cross-platform chat.' },
  { icon: Cpu, title: 'Dedicated Hardware', desc: 'Low latency and high tickrate hosted on premium infrastructure.' },
]

export default function Features() {
  return (
    <section id="about" className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Why play with us
          </motion.h2>
          <p className="mx-auto mt-2 max-w-2xl text-slate-300">
            Built for roleplay, performance, and long-term progression.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((Item, idx) => {
            const Icon = Item.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/80 to-indigo-600/80 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1 text-lg font-semibold text-white">{Item.title}</h3>
                <p className="text-sm text-slate-300/90">{Item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
