'use client'

import Image from 'next/image'
import Link from 'next/link'

const PANELS = [
  {
    label: 'Everyday Essentials',
    sub: 'Clean, comfortable picks for workdays and weekends.',
    href: '/women',
    img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=85',
  },
  {
    label: 'Dress Up Edit',
    sub: 'Polished styles for outings and occasions.',
    href: '/men',
    img: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=900&q=85',
  },
  {
    label: 'Festive Picks',
    sub: 'Celebrate in style with standout ethnic wear.',
    href: '/women/lehenga',
    img: 'https://images.unsplash.com/photo-1536766768598-e09213fdcf22?w=900&q=90',
  },
]

export function ShopByCategoryGrid() {
  return (
    <section className="bg-[#FDFBF7] py-10 lg:py-0">

      {/* MOBILE → horizontal scroll (premium) */}
      <div className="flex gap-4 px-4 overflow-x-auto no-scroll lg:hidden">
        {PANELS.map((p, i) => (
          <Link
            key={i}
            href={p.href}
            className="relative min-w-[75%] h-[380px] rounded-[22px] overflow-hidden"
          >
            <Image src={p.img} alt={p.label} fill className="object-cover" />

            {/* soft overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* content */}
            <div className="absolute bottom-0 p-5">
              <h3 className="text-white text-lg font-medium tracking-wide mb-1">
                {p.label}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {p.sub}
              </p>

              {/* subtle link instead of button */}
              <span className="inline-block mt-3 text-[#C6A75E] text-xs tracking-[0.2em]">
                EXPLORE →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden lg:grid grid-cols-3">
        {PANELS.map((p, i) => (
          <Link
            key={i}
            href={p.href}
            className="group relative overflow-hidden h-[520px]"
          >
            <Image
              src={p.img}
              alt={p.label}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* cinematic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* divider line */}
            {i < PANELS.length - 1 && (
              <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/10" />
            )}

            {/* content */}
            <div className="absolute bottom-0 p-10 max-w-sm">
              <h3 className="text-white font-light mb-3 leading-tight"
                style={{ fontSize: '2rem' }}>
                {p.label}
              </h3>

              <p className="text-white/60 text-sm mb-5 leading-relaxed">
                {p.sub}
              </p>

              {/* premium link style */}
              <span className="text-[#C6A75E] text-sm tracking-[0.25em] relative inline-block">
                EXPLORE
                <span className="block h-[1px] bg-[#C6A75E] mt-1 w-6 group-hover:w-12 transition-all"></span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}