'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CIRCLE_CATEGORIES } from '@/lib/products'

const TABS = [
  { id:'all',       label:'All' },
  { id:'women',     label:'Women' },
  { id:'men',       label:'Men' },
  { id:'kids',      label:'Kids' },
]

/* Scalloped circle path */
function ScallopPath({ active }: { active: boolean }) {
  const cx = 62, cy = 62, r = 52, bumps = 20
  const pts: string[] = []
  for (let i = 0; i <= bumps * 8; i++) {
    const a = (i / (bumps * 8)) * Math.PI * 2 - Math.PI / 2
    const ph = (i / 8) % 1
    const br = r + Math.sin(ph * Math.PI) * 4.8
    pts.push(`${(cx + br * Math.cos(a)).toFixed(2)},${(cy + br * Math.sin(a)).toFixed(2)}`)
  }
  return (
    <svg width="124" height="124" viewBox="0 0 124 124" className="absolute inset-0 pointer-events-none" style={{ zIndex:2 }}>
      <polyline
        points={pts.join(' ')}
        fill="none"
        stroke={active ? '#CC0000' : '#C98C00'}
        strokeWidth={active ? 2.5 : 1.8}
        opacity={active ? 0.95 : 0.65}
      />
    </svg>
  )
}

export function CircleCategoryBubbles() {
  const [tab, setTab] = useState('all')
  const [hov, setHov] = useState<string|null>(null)

  const list = tab === 'all' ? CIRCLE_CATEGORIES
    : CIRCLE_CATEGORIES.filter(c =>
        tab === 'kids' ? c.gender === 'kids' : c.gender === tab)

  return (
    <section className="py-14 lg:py-20 bg-[#FAF6F0]">
      <div className="max-w-[1440px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-9 px-4">
          <div className="inline-flex items-center gap-3 mb-2.5">
            <LotusIcon />
            <h2 className="font-display text-[#1A0A08] tracking-[0.1em]" style={{ fontSize:'clamp(1.5rem,3vw,2.3rem)', fontWeight:400 }}>
              Shop by Category
            </h2>
            <LotusIcon />
          </div>
          <p className="font-body text-[#6B3B32]/70 text-sm">Tirumala Family Mall — Complete Fashion Destination</p>
          <div className="w-16 h-[2px] mx-auto mt-3" style={{ background:'linear-gradient(90deg,transparent,#C98C00,transparent)' }} />
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-9 px-4 flex-wrap">
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`px-6 py-2 rounded-full font-body text-sm transition-all duration-250 ${
                tab === t.id ? 'bg-[#CC0000] text-white shadow-[0_4px_14px_rgba(204,0,0,0.3)]'
                : 'border border-[#CC0000]/28 text-[#8B3A2A] hover:border-[#CC0000] hover:text-[#CC0000]'
              }`}>{t.label}</button>
          ))}
        </div>

        {/* Circles — edge-to-edge scroll container */}
        <div
          className="flex gap-5 lg:gap-9 overflow-x-auto no-scroll pb-4"
          style={{ paddingLeft: 'max(1rem, calc((100vw - 1440px)/2 + 3rem))', paddingRight: 'max(1rem, calc((100vw - 1440px)/2 + 3rem))' }}
        >
          {list.map(cat => (
            <Link key={cat.id} href={`/${cat.href}`}
              className="flex flex-col items-center gap-3 shrink-0 group"
              onMouseEnter={() => setHov(cat.id)}
              onMouseLeave={() => setHov(null)}
            >
              <div className="relative" style={{ width:124, height:124 }}>
                <ScallopPath active={hov === cat.id} />
                <div className="absolute transition-transform duration-500 group-hover:scale-[1.06]"
                  style={{ inset:8, borderRadius:'50%', overflow:'hidden' }}>
                  <Image src={cat.image} alt={cat.name} fill className="object-cover object-top" sizes="108px" />
                </div>
              </div>
              <span className={`font-body text-[13px] tracking-wide text-center transition-colors duration-200 ${
                hov === cat.id ? 'text-[#CC0000]' : 'text-[#1A0A08]/68'}`}>
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function LotusIcon() {
  return (
    <svg width="22" height="20" viewBox="0 0 24 22" fill="none">
      <ellipse cx="12" cy="17" rx="7" ry="4.5" fill="#CC0000" opacity=".68"/>
      <ellipse cx="5.5" cy="11" rx="5" ry="2.8" fill="#CC0000" opacity=".48" transform="rotate(-30 5.5 11)"/>
      <ellipse cx="18.5" cy="11" rx="5" ry="2.8" fill="#CC0000" opacity=".48" transform="rotate(30 18.5 11)"/>
      <ellipse cx="12" cy="7" rx="3.5" ry="5.5" fill="#CC0000" opacity=".58"/>
      <circle cx="12" cy="16" r="1.5" fill="#C98C00"/>
    </svg>
  )
}
