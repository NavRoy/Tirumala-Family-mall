'use client'

/**
 * TIRUMALA FAMILY MALL — Premium Header
 *
 * Layout: Suta.in style
 * - Slim announcement bar (dark red)
 * - Single-row: Logo LEFT · Nav CENTER · Icons RIGHT
 * - Underline mega-dropdown (no box)
 * - Fonts: Cormorant Garamond (logo) + DM Sans (nav)
 * - Colors: Cream #FAF6F0 bg, Ink #1A0A08 text, Red #CC0000 accents
 * - Mobile: Hamburger → full-screen elegant drawer
 */

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import {
  Search, Heart, ShoppingBag, User,
  Menu, X, ChevronDown, Phone, Instagram,
} from 'lucide-react'
import { useCartStore, useWishlistStore } from '@/store'

/* ─── Nav data ─────────────────────────────────────────────────────────── */
const NAV = [
  {
    label: 'Women', href: '/women',
    items: [
      { head: 'Ethnic Wear', links: [['Sarees', '/sarees'], ['Kurtis & Kurtas', '/kurtis'], ['Anarkali Sets', '/women/anarkali'], ['Dress Materials', '/dress-materials'], ['Lehenga', '/women/lehenga'], ['Half Sarees', '/women/half-sarees'], ['3 Piece Sets', '/sets/3-piece'], ['2 Piece Sets', '/sets/2-piece']] },
      { head: 'Western', links: [['Long Frocks', '/frocks'], ['Tops & Middies', '/tops'], ['Jean Pants', '/women/jeans'], ['Coord Sets', '/sets/coord'], ['Hoodies', '/women/hoodies'], ['Western Tops', '/tops'], ['Jean Coats', '/women/coats']] },
      { head: 'Night & Inner', links: [['Nighties', '/women/nightwear'], ['Full Night Dresses', '/women/nightwear'], ['Leggings', '/women/leggings'], ['Plazo Pants', '/women/plazo'], ['Inner Wear', '/women/innerwear'], ['Blouses', '/women/blouses'], ['Hip Belts', '/women/accessories']] },
    ],
  },
  {
    label: 'Men', href: '/men',
    items: [
      { head: 'Shirts & T-Shirts', links: [['Full Hand Shirts', '/men/shirts'], ['Half Hand Shirts', '/men/shirts'], ['Full Hand T-Shirts', '/men/t-shirts'], ['Half Hand T-Shirts', '/men/t-shirts'], ['Sports T-Shirts', '/men/t-shirts'], ['Collar & Round Neck', '/men/t-shirts']] },
      { head: 'Bottoms', links: [['Slim Fit Jeans', '/men/jeans'], ['Ankle Fit Jeans', '/men/jeans'], ['Cotton Trousers', '/men/trousers'], ['Linen Trousers', '/men/trousers'], ['Tracks & Shorts', '/men/tracks'], ['Boxers', '/men/shorts']] },
      { head: 'Ethnic & Formal', links: [['Kurtha Shirts', '/men/kurtas'], ['Sherwani', '/men/sherwani'], ['Modi Coats', '/men/modi-coats'], ['Blazers', '/men/blazers'], ['Ramraj Collection', '/men/ramraj'], ['Minister White', '/men/ramraj'], ['Inner Wear', '/men/innerwear']] },
    ],
  },
  {
    label: 'Kids Boys', href: '/kids/boys',
    items: [
      { head: 'Ethnic', links: [['Kurta Sets', '/kids/boys/kurta-sets'], ['Sherwani', '/kids/boys/sherwani'], ['Dhoti Sets', '/kids/boys/dhoti-sets']] },
      { head: 'Casual', links: [['T-Shirts', '/kids/boys/t-shirts'], ['Shorts & Pants', '/kids/boys/bottoms'], ['Sets', '/kids/boys/sets']] },
    ],
  },
  {
    label: 'Kids Girls', href: '/kids/girls',
    items: [
      { head: 'Ethnic', links: [['Lehenga Sets', '/kids/girls/lehenga'], ['Kurta Sets', '/kids/girls/kurta-sets'], ['Frocks', '/kids/girls/frocks']] },
      { head: 'Casual', links: [['Dresses', '/kids/girls/dresses'], ['Tops & Skirts', '/kids/girls/tops'], ['Co-ord Sets', '/kids/girls/sets']] },
    ],
  },
  { label: 'Insta Live', href: '/insta-live', accent: true },
  { label: 'Sale',       href: '/sale',       sale: true },
  { label: 'Contact',    href: '/contact' },
]

/* ─── Header Component ─────────────────────────────────────────────────── */
export function Header() {
  const pathname  = usePathname()
  const router    = useRouter()
  const [scrolled,   setScrolled]   = useState(false)
  const [activeMega, setActiveMega] = useState<string | null>(null)
  const [srchOpen,   setSrchOpen]   = useState(false)
  const [q,          setQ]          = useState('')
  const [mob,        setMob]        = useState(false)
  const [mobExp,     setMobExp]     = useState<string | null>(null)
  const inputRef  = useRef<HTMLInputElement>(null)
  const leaveRef  = useRef<ReturnType<typeof setTimeout> | null>(null)

  const cartN      = useCartStore(s => s.totalItems())
  const wishN      = useWishlistStore(s => s.items.length)
  const openCart   = useCartStore(s => s.openCart)
  const openWish   = useWishlistStore(s => s.openWishlist)

  /* scroll shadow */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 4)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  /* auto-focus search */
  useEffect(() => {
    if (srchOpen) setTimeout(() => inputRef.current?.focus(), 60)
  }, [srchOpen])

  /* close on route change */
  useEffect(() => { setMob(false); setActiveMega(null) }, [pathname])

  /* mega hover helpers */
  const enterMega = (l: string) => {
    if (leaveRef.current) clearTimeout(leaveRef.current)
    setActiveMega(l)
  }
  const leaveMega = () => { leaveRef.current = setTimeout(() => setActiveMega(null), 160) }
  const stayMega  = () => { if (leaveRef.current) clearTimeout(leaveRef.current) }

  /* search submit */
  const doSearch = useCallback((e?: React.FormEvent) => {
    e?.preventDefault()
    const t = q.trim()
    if (!t) return
    router.push(`/search?q=${encodeURIComponent(t)}`)
    setSrchOpen(false)
    setQ('')
  }, [q, router])

  const megaItems = NAV.find(n => n.label === activeMega)?.items

  /* ── render ── */
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          ANNOUNCEMENT BAR — dark red like suta's black bar
      ══════════════════════════════════════════════════════════════ */}
      <div className="fixed top-0 inset-x-0 z-50 h-8 bg-[#1A0A08] overflow-hidden flex items-center select-none">
        {/* scrolling text */}
        <div className="flex-1 overflow-hidden flex">
          <div style={{ display: 'flex', animation: 'marqueeL 34s linear infinite', willChange: 'transform', flexShrink: 0 }}>
            {['✦  Free Shipping Above ₹999', '🪷  New Arrivals Every Week', '✦  Easy 7-Day Returns', '🪷  Cash on Delivery Available', '✦  Authentic Indian Fashion', '🪷  100+ Categories — Women · Men · Kids', '✦  WhatsApp: 9966248223', '🪷  Insta Live — @tirumalafamilymall777',
              '✦  Free Shipping Above ₹999', '🪷  New Arrivals Every Week', '✦  Easy 7-Day Returns', '🪷  Cash on Delivery Available', '✦  Authentic Indian Fashion', '🪷  100+ Categories — Women · Men · Kids', '✦  WhatsApp: 9966248223', '🪷  Insta Live — @tirumalafamilymall777',
            ].map((m, i) => (
              <span key={i} style={{ fontFamily: 'var(--font-body,DM Sans,sans-serif)', fontSize: '0.67rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.52)', padding: '0 28px', whiteSpace: 'nowrap', flexShrink: 0 }}>
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          MAIN HEADER — suta single-row style
          [Logo left] ····· [Nav center] ····· [Icons right]
          Cream background, elegant, minimal
      ══════════════════════════════════════════════════════════════ */}
<header
  className={`fixed inset-x-0 top-8 z-[60] transition-all duration-500`}
  style={{
    background: scrolled 
      ? 'rgba(250,246,240,0.85)' 
      : 'rgba(250,246,240,0.95)',
    backdropFilter: 'blur(20px) saturate(140%)',
    boxShadow: scrolled 
      ? '0 6px 30px rgba(26,10,8,0.08)' 
      : '0 2px 10px rgba(26,10,8,0.05)'
  }}
>
        {/* thin red line top — suta's subtle top accent */}
        <div className="h-[2.5px] w-full" style={{ background: 'linear-gradient(90deg, #CC0000 0%, #CC0000 60%, #C98C00 100%)' }} />

       <div className="max-w-[1440px] mx-auto px-3 lg:px-10 h-[64px] flex items-center justify-between gap-2">



          {/* ── LEFT: Logo ── */}
          <div className="flex items-center flex-1 min-w-0">

            {/* Mobile hamburger — left of logo on mobile */}
<button
  onClick={() => setMob(!mob)}
className="
lg:hidden relative w-9 h-9 flex items-center justify-center
ml-2
rounded-full
bg-white/60 backdrop-blur-xl
shadow-[0_4px_14px_rgba(0,0,0,0.08)]
border border-white/40
transition-all duration-300
hover:shadow-[0_6px_18px_rgba(0,0,0,0.12)]
hover:scale-[1.04]
active:scale-95
"
>
  <div className="grid grid-cols-3 gap-[2.5px]">
    {[...Array(9)].map((_, i) => (
      <span
        key={i}
        className={`
          w-[4px] h-[4px] rounded-full transition-all duration-300
          ${mob ? 'bg-[#CC0000]' : 'bg-[#1A0A08]/60'}
        `}
      />
    ))}
  </div>
</button>

            {/* Logo — shield + brand name */}
           <Link
  href="/"
  className="
flex items-center gap-2.5 group shrink-0 
absolute left-[45%] -translate-x-1/2 
lg:left-auto lg:translate-x-0 lg:static
"
  aria-label="Tirumala Family Mall"
>
              {/* T shield SVG */}
<Image
  src="/logo1.png"
  alt="Tirumala Family Mall"
  width={120}
  height={40}
  className="h-[38px] w-auto object-contain drop-shadow-[0_2px_6px_rgba(204,0,0,0.25)]"
/>

              {/* Brand name — suta-style: serif, light weight */}
              <div className="leading-none">
                {/* MOBILE LOGO (STACKED) */}
<div className="flex flex-col leading-tight lg:hidden">

  <span
    className="text-[#1A0A08]"
    style={{
      fontFamily: 'Cormorant Garamond, serif',
      fontSize: '1.15rem',
      fontWeight: 800,
      letterSpacing: '0.05em',
    }}
  >
    Tirumala
  </span>

  <span
    className="text-[#CC0000]"
    style={{
      fontFamily: 'Cormorant Garamond, serif',
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.1em',
      opacity: 0.9,
    }}
  >
    Family Mall
  </span>

</div>

{/* DESKTOP LOGO (INLINE PREMIUM) */}
<div className="hidden lg:flex items-baseline gap-2">

  {/* MAIN BRAND */}
  <span
    className="text-[#1A0A08]"
    style={{
      fontFamily: 'Cormorant Garamond, serif',
      fontSize: '1.5rem',
      fontWeight: 800,
      letterSpacing: '0.06em',
      textShadow: '0 1px 2px rgba(0,0,0,0.08)',
    }}
  >
    Tirumala
  </span>

  {/* SUB BRAND */}
  <span
    className="text-[#CC0000]"
    style={{
      fontFamily: 'Cormorant Garamond, serif',
      fontSize: '1rem',
      fontWeight: 600,
      letterSpacing: '0.08em',
      fontStyle: 'italic',
      opacity: 0.9,
    }}
  >
    Family Mall
  </span>

</div>
                {/* Tagline — hidden on small screens */}
                <p
                  className="hidden lg:block text-[#C98C00] mt-[3px]"
                  style={{
                    fontFamily:    'var(--font-body, DM Sans, sans-serif)',
                    fontSize:      '0.46rem',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    fontWeight:    400,
                  }}
                >
                  Tekkali · Srikakulam
                </p>
              </div>
            </Link>
          </div>

          {/* ── CENTER: Navigation — suta style ── */}
          <nav className="hidden lg:flex items-center justify-center flex-1 h-full">
            {NAV.map(link => (
              <div
                key={link.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => link.items ? enterMega(link.label) : undefined}
                onMouseLeave={link.items ? leaveMega : undefined}
              >
                <Link
                  href={link.href}
className={`
relative flex items-center gap-[3px] px-4 h-full
transition-all duration-300 whitespace-nowrap group
${link.sale ? 'text-[#CC0000]'
  : link.accent ? 'text-[#C98C00]'
  : pathname.startsWith(link.href) && link.href.length > 1
    ? 'text-[#1A0A08]'
    : 'text-[#1A0A08]/85 hover:text-[#1A0A08]'
}
`}
                 style={{
  fontFamily: 'var(--font-body, DM Sans, sans-serif)',
  fontSize: '0.85rem',
  fontWeight: 500,
  letterSpacing: '0.12em',
  textShadow: '0 1px 1px rgba(0,0,0,0.05)', // 🔥 add this line
}}
                >
                  {/* suta-style: thin red bottom border on active */}
                  {pathname.startsWith(link.href) && link.href.length > 1 && (
                   <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#CC0000] transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
                  )}
                  {link.label}
                  {link.items && (
                    <ChevronDown
                      size={11}
                      className={`opacity-40 transition-transform duration-200 ${activeMega === link.label ? 'rotate-180 opacity-70' : ''}`}
                    />
                  )}
                </Link>
              </div>
            ))}
          </nav>

          {/* ── RIGHT: Icons — suta style ── */}
          <div className="flex items-center gap-1 shrink-0">

            {/* Search */}
            <button
              onClick={() => setSrchOpen(true)} 
              className=" hidden lg:block p-2.5 rounded-full
bg-white/60 backdrop-blur-md
border border-[#1A0A08]/10
shadow-[0_2px_8px_rgba(0,0,0,0.05)]
hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)]
hover:bg-white
transition-all duration-300 transition-colors group"
              aria-label="Search"
            >
              <Search size={17} className="text-[#1A0A08]/62 group-hover:text-[#CC0000] transition-colors" />
            </button>

            {/* Account */}
            <Link
              href="/account"
              className=" hidden lg:block p-2.5 rounded-full
bg-white/60 backdrop-blur-md
border border-[#1A0A08]/10
shadow-[0_2px_8px_rgba(0,0,0,0.05)]
hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)]
hover:bg-white
transition-all duration-300 transition-colors group"
              aria-label="Account"
            >
              <User size={19} className="text-[#1A0A08]/62 group-hover:text-[#CC0000] transition-colors" />
            </Link>

            {/* Wishlist */}
            <button
              onClick={openWish}
              className="relative p-2.5 rounded-full
bg-white/60 backdrop-blur-md
border border-[#1A0A08]/10
shadow-[0_2px_8px_rgba(0,0,0,0.05)]
hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)]
hover:bg-white
transition-all duration-300 transition-colors group"
              aria-label="Wishlist"
            >
              <Heart size={19} className="text-[#1A0A08]/62 group-hover:text-[#CC0000] transition-colors" />
              {wishN > 0 && (
                <span className="absolute top-1.5 right-1.5 w-[15px] h-[15px] bg-[#CC0000] text-white text-[8px] font-body font-600 rounded-full flex items-center justify-center leading-none">
                  {wishN > 9 ? '9+' : wishN}
                </span>
              )}
            </button>

            {/* Cart / Bag */}
<button
  onClick={openCart}
className="
px-4 py-2 rounded-full
bg-[#CC0000]
text-white
text-[13px] font-medium
tracking-[0.05em]
shadow-[0_8px_20px_rgba(204,0,0,0.25)]
hover:shadow-[0_10px_25px_rgba(204,0,0,0.35)]
transition-all duration-300
"
>
  <ShoppingBag size={15} />

  <span className="hidden sm:block ml-1 text-[12px]">
    Bag
  </span>

  {cartN > 0 && (
    <span className="absolute -top-1 -right-1 w-[16px] h-[16px] bg-[#C98C00] text-black text-[9px] rounded-full flex items-center justify-center">
      {cartN}
    </span>
  )}
</button>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            MEGA DROPDOWN — suta style: no box, full-width underline panel
        ══════════════════════════════════════════════════════════════ */}
        {activeMega && megaItems && (
          <div
            className="absolute inset-x-0 top-full z-50"
            onMouseEnter={stayMega}
            onMouseLeave={leaveMega}
            style={{ animation: 'slideDown .22s ease both' }}
          >
            {/* top border — thin red line */}
            <div className="h-[1.5px]" style={{ background: 'linear-gradient(90deg, transparent, #CC0000 20%, #C98C00 80%, transparent)' }} />

            <div
  className="bg-[#FAF6F0] border-b border-[#1A0A08]/10"
  style={{ boxShadow: '0 12px 40px rgba(26,10,8,0.12)' }}
>
              <div
                className="max-w-[1440px] mx-auto px-10 py-9 grid gap-10"
                style={{ gridTemplateColumns: `repeat(${megaItems.length}, minmax(0,1fr))` }}
              >
                {megaItems.map(col => (
                  <div key={col.head}>
                    {/* Column heading — suta uses thin uppercase label */}
                    <p
                      className="mb-4 pb-2.5"
                      style={{
                        fontFamily:    'var(--font-body, DM Sans, sans-serif)',
                        fontSize:      '0.62rem',
                        fontWeight:    500,
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        color:         '#CC0000',
                        borderBottom:  '1px solid rgba(204,0,0,0.12)',
                      }}
                    >
                      {col.head}
                    </p>
                    <ul className="space-y-2.5">
                      {col.links.map(([lbl, href]) => (
                        <li key={lbl}>
                          <Link
                            href={href}
                            className="group/link flex items-center gap-0 hover:gap-1.5 transition-all duration-150"
                            style={{
                              fontFamily:    'var(--font-body, DM Sans, sans-serif)',
                              fontSize:      '0.825rem',
                              color:         'rgba(26,10,8,0.58)',
                              fontWeight:    400,
                              letterSpacing: '0.01em',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.color = '#CC0000')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(26,10,8,0.58)')}
                          >
                            <span className="w-0 group-hover/link:w-2.5 overflow-hidden transition-all duration-150 text-[#CC0000] text-xs">›</span>
                            {lbl}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* MOBILE SEARCH BAR */}
<div className="shadow-sm lg:hidden mt-[125px] px-3 py-2 bg-[#FAF6F0] border-b">
  <form onSubmit={doSearch}>
    <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md
border border-[#1A0A08]/10
shadow-sm rounded-full">
      <Search size={16} />
      <input
        type="text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search products..."
        className="flex-1 outline-none text-sm"
      />
    </div>
  </form>
</div>

{/* SUB CATEGORY BAR — ALL DEVICES */}
<div className="
fixed left-0 right-0 z-30
bg-white/70 backdrop-blur-xl
border-y border-[#1A0A08]/10
top-[92px]
">

  {/* DESKTOP */}
  <div className="hidden lg:grid max-w-[1440px] mx-auto grid-cols-3 text-center">
    <Link href="/sarees" className="
group py-3 text-[0.75rem]
tracking-[0.18em] font-medium
text-[#1A0A08]/70
hover:text-[#CC0000]
transition-all duration-300
relative
">
      SAREE
    </Link>

    <Link href="/blouse" className="
group py-3 text-[0.75rem]
tracking-[0.18em] font-medium
text-[#1A0A08]/70
hover:text-[#CC0000]
transition-all duration-300
relative
">
      BLOUSE
    </Link>

    <Link href="/women" className="
group py-3 text-[0.75rem]
tracking-[0.18em] font-medium
text-[#1A0A08]/70
hover:text-[#CC0000]
transition-all duration-300
relative
">
      WOMEN
    </Link>
  </div>

  {/* MOBILE — SAME STYLE BUT FLEX */}
  <div className="lg:hidden flex text-center">
    <Link href="/sarees" className="flex-1 py-3 text-xs font-medium border-r">
      SAREE
    </Link>

    <Link href="/blouse" className="flex-1 py-3 text-xs font-medium border-r">
      BLOUSE
    </Link>

    <Link href="/women" className="flex-1 py-3 text-xs font-medium">
      WOMEN
    </Link>
  </div>

</div>

      {/* Spacer so page content starts below fixed header */}
<div className="h-[1px] lg:h-[110px]" />

      {/* ══════════════════════════════════════════════════════════════
          SEARCH OVERLAY — suta style: minimal, centered
      ══════════════════════════════════════════════════════════════ */}
      {srchOpen && (
        <div
          className="fixed inset-0 z-[90] flex flex-col items-center pt-[15vh] px-4"
          style={{ background: 'rgba(250,246,240,0.97)', backdropFilter: 'blur(20px)', animation: 'fadeIn .2s ease both' }}
          onClick={e => e.target === e.currentTarget && setSrchOpen(false)}
        >
          {/* Close button top right */}
          <button
            onClick={() => setSrchOpen(false)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full hover:bg-[#CC0000]/10 flex items-center justify-center transition-colors"
            aria-label="Close search"
          >
            <X size={22} className="text-[#1A0A08]/50" />
          </button>

          <div className="w-full max-w-[580px]">
            {/* Heading — suta style */}
            <p
              className="text-center mb-7"
style={{
  fontFamily: 'var(--font-body, DM Sans, sans-serif)',
  fontSize: '0.85rem',
  fontWeight: 500,
  letterSpacing: '0.12em',
}}
            >
              What are you looking for?
            </p>

            {/* Search input — clean underline style like suta */}
            <form onSubmit={doSearch}>
              <div
                className="flex items-center gap-3 pb-3"
                style={{ borderBottom: '1.5px solid rgba(26,10,8,0.18)' }}
              >
                <Search size={20} className="text-[#1A0A08]/35 shrink-0" />
                <input
                  ref={inputRef}
                  type="search"
                  value={q}
                  onChange={e => setQ(e.target.value)}
                  placeholder="Search sarees, kurtas, nighties, jeans…"
                  className="flex-1 bg-transparent outline-none text-[#1A0A08] placeholder:text-[#1A0A08]/30"
                  style={{
                    fontFamily:    'var(--font-body, DM Sans, sans-serif)',
                    fontSize:      '1.05rem',
                    fontWeight:    400,
                    letterSpacing: '0.01em',
                  }}
                />
                {q && (
                  <button type="button" onClick={() => setQ('')}>
                    <X size={16} className="text-[#1A0A08]/30 hover:text-[#1A0A08] transition-colors" />
                  </button>
                )}
              </div>
            </form>

            {/* Popular searches — suta style */}
            <div className="mt-6">
              <p
                className="mb-3"
                style={{
                  fontFamily:    'var(--font-body)',
                  fontSize:      '0.65rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color:         'rgba(26,10,8,0.35)',
                  fontWeight:    500,
                }}
              >
                Popular Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {['Sarees', 'Kurtis', 'Nighties', 'Leggings', "Men's Shirts", 'Sherwani', 'Kids Frocks', 'Jeans', 'Blazers', 'Palazzo', 'Anarkali'].map(s => (
                  <button
                    key={s}
                    onClick={() => { setQ(s); setTimeout(doSearch, 60) }}
                    className="px-4 py-1.5 rounded-full transition-all duration-200"
                    style={{
                      fontFamily:  'var(--font-body)',
                      fontSize:    '0.78rem',
                      background:  q === s ? '#CC0000' : 'rgba(26,10,8,0.06)',
                      color:       q === s ? 'white'   : 'rgba(26,10,8,0.65)',
                      border:      q === s ? '1px solid #CC0000' : '1px solid transparent',
                      fontWeight:  400,
                    }}
                    onMouseEnter={e => { if (q !== s) { (e.currentTarget as HTMLElement).style.background = 'rgba(204,0,0,0.08)'; (e.currentTarget as HTMLElement).style.color = '#CC0000' } }}
                    onMouseLeave={e => { if (q !== s) { (e.currentTarget as HTMLElement).style.background = 'rgba(26,10,8,0.06)'; (e.currentTarget as HTMLElement).style.color = 'rgba(26,10,8,0.65)' } }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════
          MOBILE DRAWER — suta style: elegant, cream bg, full height
      ══════════════════════════════════════════════════════════════ */}
      {mob && (
        <div className="fixed inset-0 z-[90] flex lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(26,10,8,0.45)', backdropFilter: 'blur(4px)' }}
            onClick={() => setMob(false)}
          />

          {/* Drawer panel */}
          <div
            className="relative h-full overflow-y-auto flex flex-col"
            style={{
              width: 300,
              background: '#FAF6F0',
              boxShadow: '4px 0 40px rgba(26,10,8,0.18)',
              animation: 'slideRight .28s ease both',
            }}
          >
            {/* Drawer header */}
            <div
              className="shrink-0 flex items-center justify-between px-5 py-4"
              style={{ borderBottom: '1px solid rgba(26,10,8,0.07)' }}
            >
              <Link href="/" onClick={() => setMob(false)} className="flex items-center gap-2.5">
<img
  src="/logo1.png"
  alt="Tirumala Family Mall"
  className="h-[34px] sm:h-[38px] w-auto"
/>
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 500, color: '#1A0A08', lineHeight: 1 }}>Tirumala</p>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 400, fontStyle: 'italic', color: '#CC0000', lineHeight: 1, marginTop: 2 }}>Family Mall</p>
                </div>
              </Link>
              <button
                onClick={() => setMob(false)}
                className="w-9 h-9 rounded-full hover:bg-[#CC0000]/10 flex items-center justify-center transition-colors"
              >
                <X size={18} className="text-[#1A0A08]/55" />
              </button>
            </div>

            {/* Mobile search */}
            <div className="shrink-0 px-5 py-3.5" style={{ borderBottom: '1px solid rgba(26,10,8,0.07)' }}>
              <form onSubmit={e => { doSearch(e); setMob(false) }}>
                <div
                  className="flex items-center gap-2.5 pb-2"
                  style={{ borderBottom: '1px solid rgba(26,10,8,0.14)' }}
                >
                  <Search size={15} className="text-[#1A0A08]/35 shrink-0" />
                  <input
                    type="search"
                    value={q}
                    onChange={e => setQ(e.target.value)}
                    placeholder="Search products…"
                    className="flex-1 bg-transparent outline-none placeholder:text-[#1A0A08]/30 text-[#1A0A08]"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                  />
                  {q && <button type="button" onClick={() => setQ('')}><X size={13} className="text-[#1A0A08]/30" /></button>}
                </div>
              </form>
            </div>

            {/* Nav items */}
            <nav className="flex-1 py-2 overflow-y-auto no-scroll">
              <div className="px-5 py-3 border-b border-[#1A0A08]/5">
  <Link
    href="/account"
    onClick={() => setMob(false)}
    className="flex items-center gap-3 group"
  >
    <div className="
      w-9 h-9 rounded-full
      bg-white shadow-sm
      flex items-center justify-center
      group-hover:bg-[#CC0000]/10
      transition
    ">
      <User size={16} className="text-[#1A0A08]/70 group-hover:text-[#CC0000]" />
    </div>

    <div>
      <p className="text-[0.85rem] font-medium text-[#1A0A08]">
        My Account
      </p>
      <p className="text-[0.7rem] text-[#1A0A08]/50">
        Login / Register
      </p>
    </div>
  </Link>
</div>
<div className="px-5 py-3 border-b border-[#1A0A08]/5 flex gap-6 text-sm">
  <button onClick={openWish} className="flex items-center gap-2">
    <Heart size={16} /> Wishlist
  </button>

  <Link href="/orders" onClick={() => setMob(false)} className="flex items-center gap-2">
    📦 Orders
  </Link>
</div>
              {NAV.map(link => (
                <div key={link.label}>
                  {link.items ? (
                    <>
                      <button
                        onClick={() => setMobExp(mobExp === link.label ? null : link.label)}
                        className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-[#CC0000]/5 transition-colors"
                        style={{ borderBottom: '1px solid rgba(26,10,8,0.05)' }}
                      >
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500, color: 'rgba(26,10,8,0.8)', letterSpacing: '0.03em' }}>
                          {link.label}
                        </span>
                        <ChevronDown
                          size={14}
                          className="transition-transform duration-200"
                          style={{ color: 'rgba(26,10,8,0.3)', transform: mobExp === link.label ? 'rotate(180deg)' : 'none' }}
                        />
                      </button>

                      {mobExp === link.label && (
                        <div className="bg-[#F0E8DC]/60 px-5 py-4 space-y-5" style={{ borderBottom: '1px solid rgba(26,10,8,0.05)' }}>
                          {link.items.map(col => (
                            <div key={col.head}>
                              <p className="mb-2" style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#CC0000', fontWeight: 500 }}>
                                {col.head}
                              </p>
                              <div className="space-y-2">
                                {col.links.map(([lbl, href]) => (
                                  <Link
                                    key={lbl} href={href}
                                    onClick={() => setMob(false)}
                                    className="block hover:text-[#CC0000] transition-colors"
                                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.825rem', color: 'rgba(26,10,8,0.58)', fontWeight: 400 }}
                                  >
                                    {lbl}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMob(false)}
                      className="block px-5 py-3.5 hover:bg-[#CC0000]/5 transition-colors"
                      style={{
                        fontFamily:    'var(--font-body)',
                        fontSize:      '0.875rem',
                        fontWeight:    500,
                        letterSpacing: '0.03em',
                        color:         link.sale ? '#CC0000' : link.accent ? '#C98C00' : 'rgba(26,10,8,0.78)',
                        borderBottom:  '1px solid rgba(26,10,8,0.05)',
                      }}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Drawer footer */}
            <div className="shrink-0 px-5 py-5 space-y-3.5" style={{ borderTop: '1px solid rgba(26,10,8,0.08)' }}>
              <a
                href="https://wa.me/919966248223"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#25D366] transition-colors"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(26,10,8,0.52)' }}
              >
                <Phone size={14} /> +91 99662 48223 (WhatsApp)
              </a>
              <a
                href="https://www.instagram.com/tirumalafamilymall777/"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#CC0000] transition-colors"
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(26,10,8,0.52)' }}
              >
                <Instagram size={14} /> @tirumalafamilymall777
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Inline keyframes for drawer slide animation */}
      <style>{`
        @keyframes slideRight {
          from { transform: translateX(-100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes marqueeL {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </>
  )
}
