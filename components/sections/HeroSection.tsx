'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const SLIDES = [
  {
    id: 2,
    img: '/banners/wome-banner1.png',
    mobileImg: '/banners/women-mobile.png',
    href: '/women',
    pos: 'center center'
  },
  {
    id: 3,
    img: '/banners/kids-banner.png',
    mobileImg: '/banners/kids-mobile.png',
    href: '/kids',
    pos: 'center center'
  },
]


export function HeroSection() {
  const [cur, setCur]     = useState(0)
  const [prev, setPrev]   = useState<number | null>(null)
  const [anim, setAnim]   = useState(false)

  const go = useCallback((idx: number) => {
    if (anim || idx === cur) return
    setPrev(cur); setAnim(true)
    setCur(idx)
    setTimeout(() => { setPrev(null); setAnim(false) }, 750)
  }, [anim, cur])

  const next = useCallback(() => go((cur + 1) % SLIDES.length), [cur, go])
  const back = useCallback(() => go((cur - 1 + SLIDES.length) % SLIDES.length), [cur, go])

  useEffect(() => {
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [next])

  return (
   <section
  className="
    relative overflow-hidden bg-[#1A0A08]
    h-[65vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh]
    min-h-[260px]
  "

>

      {/* Images */}
      {SLIDES.map((s, i) => (
        <Link
          key={s.id} href={s.href}
          className="absolute inset-0"
          tabIndex={i === cur ? 0 : -1}
          aria-label={`View ${s.href.replace('/','')} collection`}
        >
          <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === cur ? 1 : 0, zIndex: i === cur ? 1 : 0 }}
          >
<picture>
  {/* Mobile image */}
  <source media="(max-width: 768px)" srcSet={s.mobileImg} />

  {/* Desktop image */}
  <img
    src={s.img}
    alt=""
    className="w-full h-full object-cover md:object-cover"
    style={{ objectPosition: s.pos }}
  />
</picture>
          </div>
        </Link>
      ))}

     
      {/* Dot indicators */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => go(i)}
            className="rounded-full transition-all duration-400"
            style={{ width: i === cur ? 28 : 7, height: 7, background: i === cur ? '#CC0000' : 'rgba(255,255,255,0.32)' }}
            aria-label={`Slide ${i+1}`}
          />
        ))}
      </div>

      

      {/* Slide counter */}
      <div className="absolute bottom-7 right-8 z-20 hidden lg:flex items-center gap-2">
        <span className="font-display text-[#CC0000] text-sm">{String(cur+1).padStart(2,'0')}</span>
        <span className="h-px w-6 bg-white/25" />
        <span className="font-display text-white/32 text-sm">{String(SLIDES.length).padStart(2,'0')}</span>
      </div>
    </section>
  )
}
