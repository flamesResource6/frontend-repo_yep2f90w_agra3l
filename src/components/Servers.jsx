import { motion } from 'framer-motion'
import { MapPin, Clock, Wifi, Star } from 'lucide-react'

const servers = [
  {
    name: 'Nexus RP — Main',
    desc: 'Serious roleplay • Whitelisted jobs • Player economy',
    players: '142/180',
    ping: '28ms',
    region: 'US East',
    rating: 4.8,
  },
  {
    name: 'Nexus RP — Drift',
    desc: 'Arcade drift physics • Custom tracks • Seasonal ladder',
    players: '78/120',
    ping: '41ms',
    region: 'EU Central',
    rating: 4.6,
  },
  {
    name: 'Nexus RP — Sandbox',
    desc: 'Chill gameplay • Build, spawn, experiment with friends',
    players: '65/100',
    ping: '55ms',
    region: 'US West',
    rating: 4.5,
  },
]

export default function Servers() {
  return (
    <section id="servers" className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Featured servers</h2>
            <p className="mt-2 text-slate-300">Discover curated experiences with active players.</p>
          </div>
          <a href="#join" className="hidden rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 px-4 py-2 text-sm font-medium text-white md:inline-flex">Join Now</a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servers.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">{s.name}</h3>
                  <p className="text-sm text-slate-300/90">{s.desc}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/30 px-3 py-1 text-xs text-slate-300">{s.players}</div>
              </div>

              <div className="flex items-center gap-4 text-sm text-slate-300/90">
                <div className="inline-flex items-center gap-1"><Wifi className="h-4 w-4 text-green-400" /> {s.ping}</div>
                <div className="inline-flex items-center gap-1"><MapPin className="h-4 w-4 text-purple-300" /> {s.region}</div>
                <div className="ml-auto inline-flex items-center gap-1 text-yellow-300"><Star className="h-4 w-4 fill-yellow-300" /> {s.rating}</div>
              </div>

              <div className="pointer-events-none absolute -bottom-24 right-0 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl transition-all duration-300 group-hover:-bottom-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
