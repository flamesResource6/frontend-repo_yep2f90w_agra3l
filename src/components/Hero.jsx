import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0b0f]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Y7DK6OtMHusdC345/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b0f]/40 to-[#0a0b0f]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pb-24 pt-40 md:pt-48">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-purple-200 backdrop-blur"
        >
          LIVE • FiveM Roleplay Network
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_0_24px_rgba(168,85,247,0.35)] md:text-6xl"
        >
          Neon-infused GTA V FiveM experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg"
        >
          Step into a futuristic city with custom scripts, dedicated economy, and immersive roleplay.
          Smooth performance, tight community, and weekly events.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#join"
            className="pointer-events-auto inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(99,102,241,.9)] transition-transform hover:scale-[1.02] active:scale-[0.99]"
          >
            Join Server
          </a>
          <a
            href="#servers"
            className="pointer-events-auto inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 backdrop-blur transition-colors hover:bg-white/10"
          >
            Browse Servers
          </a>
        </motion.div>
      </div>
    </section>
  )
}
