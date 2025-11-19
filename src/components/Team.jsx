import { motion } from 'framer-motion'
import { MessageCircle, Twitter, Github, Crown, Sparkles } from 'lucide-react'

const team = [
  {
    name: 'Raven',
    role: 'Founder & Lead Dev',
    bio: 'Server architecture, custom scripts, anti-cheat.',
    avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Raven&backgroundType=gradientLinear&radius=50',
    tags: ['Leadership', 'Lua', 'Backend'],
    featured: true,
    links: { twitter: '#', discord: '#', github: '#' },
  },
  {
    name: 'Nova',
    role: 'Community Manager',
    bio: 'Events, staff ops, and player experience.',
    avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Nova&backgroundType=gradientLinear&radius=50',
    tags: ['Events', 'Moderation'],
    links: { twitter: '#', discord: '#', github: '#' },
  },
  {
    name: 'Volt',
    role: 'Gameplay Designer',
    bio: 'Economy balance, progression, and jobs.',
    avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Volt&backgroundType=gradientLinear&radius=50',
    tags: ['Design', 'Systems'],
    links: { twitter: '#', discord: '#', github: '#' },
  },
  {
    name: 'Echo',
    role: 'Front-end Engineer',
    bio: 'UI/UX, HUD, and web portal.',
    avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Echo&backgroundType=gradientLinear&radius=50',
    tags: ['UI', 'React'],
    links: { twitter: '#', discord: '#', github: '#' },
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Team() {
  return (
    <section id="team" className="relative z-10 py-20">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute -bottom-16 right-16 h-60 w-60 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-purple-200 backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" /> Meet the team
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Builders of the Nexus
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-2 max-w-2xl text-slate-300"
          >
            A small, focused crew crafting immersive FiveM experiences with passion and polish.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              variants={item}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 p-5 backdrop-blur-sm ${
                m.featured ? 'bg-gradient-to-b from-purple-500/10 to-white/5' : 'bg-white/5'
              }`}
            >
              {m.featured && (
                <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-yellow-300/20 bg-yellow-300/10 px-2 py-0.5 text-[10px] font-medium text-yellow-300">
                  <Crown className="h-3 w-3" /> Lead
                </div>
              )}

              <div className="relative mb-4">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-indigo-500/0 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-3">
                  <img src={m.avatar} alt={m.name} className="h-12 w-12 rounded-xl ring-1 ring-white/10" />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-semibold text-white">{m.name}</h3>
                    </div>
                    <p className="text-xs text-purple-200/90">{m.role}</p>
                  </div>
                </div>
              </div>

              <p className="mb-4 text-sm text-slate-300/90">{m.bio}</p>

              <div className="mb-4 flex flex-wrap gap-2">
                {m.tags.map(t => (
                  <span key={t} className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-300">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a href={m.links.twitter} className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition-colors hover:bg-white/10" aria-label={`${m.name} Twitter`}>
                  <Twitter className="h-4 w-4" />
                </a>
                <a href={m.links.discord} className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition-colors hover:bg-white/10" aria-label={`${m.name} Discord`}>
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a href={m.links.github} className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition-colors hover:bg-white/10" aria-label={`${m.name} GitHub`}>
                  <Github className="h-4 w-4" />
                </a>
              </div>

              <motion.div
                aria-hidden
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.25, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: i * 0.2 }}
                className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-purple-500/15 blur-3xl"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
