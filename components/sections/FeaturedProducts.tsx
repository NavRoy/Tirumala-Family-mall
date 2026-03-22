'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

/* ── Data ───────────────────────────────────────────── */
const CATEGORIES = [
  {
    title: 'Anarkali Suit Set',
    sub: 'Silk · Embroidered · Festive',
    tag: 'Bestseller',
    img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=900&q=90',
    href: '/women/anarkali',
  },
  {
    title: 'Classic Kurtas',
    sub: 'Cotton · Printed · Everyday',
    tag: 'Classic',
    img: 'https://images.unsplash.com/photo-1573227895226-66e7a51a7ed2?w=700&q=90',
    href: '/kurtis',
  },
  {
    title: 'Dresses',
    sub: 'Anarkali · Naira Cut · Western',
    tag: 'New Drop',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=90',
    href: '/frocks',
  },
  {
    title: 'Co-ord Set',
    sub: 'Solid · Ethnic · Everyday',
    tag: 'Trending',
    img: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=700&q=90',
    href: '/sets/coord',
  },
  {
    title: 'Bottomwear',
    sub: 'Leggings · Palazzos · Pants',
    tag: '80+ Styles',
    img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=90',
    href: '/women/leggings',
  },
  {
    title: 'Straight Suit Set',
    sub: 'Embroidered · Bridal · Ethnic',
    tag: 'Festive',
    img: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=700&q=90',
    href: '/sets/3-piece',
  },
]

const STRIP = [
  {
    title: 'Lehenga',
    sub: 'Bridal · Festive',
    img: 'https://images.unsplash.com/photo-1519657027126-95d71e921d16?w=400&q=85',
    href: '/women/lehenga',
  },
  {
    title: 'Night Wear',
    sub: 'Nighties · Sets',
    img: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&q=85',
    href: '/women/nightwear',
  },
  {
    title: '3 Piece Sets',
    sub: 'Festive · Ethnic',
    img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=85',
    href: '/sets/3-piece',
  },
  {
    title: 'Sarees',
    sub: 'Silk · Banarasi · Cotton',
    img: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4dd7?w=400&q=85',
    href: '/sarees',
  },
]

/* ── Corner ornament ────────────────────────────────── */
function Corners({
  size = 22,
  color = 'rgba(201,168,76,0.8)',
  offset = 11,
  weight = 1.2,
}: {
  size?: number
  color?: string
  offset?: number
  weight?: number
}) {
  const base: React.CSSProperties = {
    position: 'absolute',
    width: size,
    height: size,
    pointerEvents: 'none',
    zIndex: 10,
  }
  const b = `${weight}px solid ${color}`
  const dot: React.CSSProperties = {
    position: 'absolute',
    width: 3.5,
    height: 3.5,
    background: color,
    borderRadius: '50%',
  }
  return (
    <>
      <span style={{ ...base, top: offset, left: offset, borderTop: b, borderLeft: b }}>
        <span style={{ ...dot, top: -2, left: -2 }} />
      </span>
      <span style={{ ...base, top: offset, right: offset, borderTop: b, borderRight: b }}>
        <span style={{ ...dot, top: -2, right: -2 }} />
      </span>
      <span style={{ ...base, bottom: offset, left: offset, borderBottom: b, borderLeft: b }}>
        <span style={{ ...dot, bottom: -2, left: -2 }} />
      </span>
      <span style={{ ...base, bottom: offset, right: offset, borderBottom: b, borderRight: b }}>
        <span style={{ ...dot, bottom: -2, right: -2 }} />
      </span>
    </>
  )
}

/* ── Section ────────────────────────────────────────── */
export function FeaturedCategories() {
  return (
<section
  style={{
    background: 'linear-gradient(to bottom, #FAF6F0, #F5EFE6)',
    padding: '80px 0 100px',
    position: 'relative'
  }}
>

  <style>{`
  @media (max-width: 768px) {

    /* GRID FIX */
    .fc-grid {
      grid-template-columns: repeat(2, 1fr) !important;
      grid-template-rows: auto !important;
      gap: 10px !important;
    }

    /* CARD HEIGHT */
    .fc-card {
      height: 240px !important;
    }

    /* TEXT FIX */
    .fc-card h3 {
      font-size: 1.1rem !important;
    }

    .fc-card p {
      font-size: 9px !important;
    }

    /* STRIP → SCROLL */
    .fc-strip-container {
      display: flex !important;
      overflow-x: auto;
      gap: 10px;
      padding-bottom: 5px;
    }

    .fc-strip {
      min-width: 140px;
      height: 160px !important;
    }

  }
`}</style>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .fc-card { position:relative; overflow:hidden; display:block; text-decoration:none; }
      .fc-img {
  transition: transform 1.2s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.6s;
}
.fc-card:hover .fc-img {
  transform: scale(1.08);
  filter: brightness(1.05) contrast(1.05);
}

        .fc-card::after {
          content:''; position:absolute; inset:0; pointer-events:none; z-index:8;
          border: 1px solid rgba(201,168,76,0); border-radius: inherit;
          transition: border-color 0.4s;
        }
        .fc-card:hover::after { border-color: rgba(201,168,76,0.6); }

        .fc-arrow {
          position:absolute; bottom:18px; right:16px; z-index:12;
          width:30px; height:30px; border-radius:50%;
          border: 0.75px solid rgba(201,168,76,0.5);
          display:flex; align-items:center; justify-content:center;
          opacity:0; transform:translateY(5px);
          transition: opacity 0.3s, transform 0.3s;
        }
        .fc-card:hover .fc-arrow { opacity:1; transform:translateY(0); }

        .fc-strip { position:relative; overflow:hidden; display:block; text-decoration:none; }
        .fc-simg  { transition: transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94); width:100%; height:100%; object-fit:cover; display:block; }
        .fc-strip:hover .fc-simg { transform: scale(1.09); }

        .fc-badge-bar { display:block; width:22px; height:1.5px; background:#C9A84C; margin-top:5px; margin-bottom:9px; }

        .fc-view-all { transition: color 0.25s, border-color 0.25s; }
        .fc-view-all:hover { color:#CC0000 !important; border-color: rgba(204,0,0,0.5) !important; }

        @keyframes fcUp {
          from { opacity:0; transform:translateY(14px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fc-up { animation: fcUp 0.5s ease both; }
      `}</style>

    <div style={{ maxWidth: 1380, margin: '0 auto', padding: '0 28px', position:'relative', zIndex:1 }}>

        {/* ── HEADER ─────────────────────────────────── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 40,
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10,
                letterSpacing: '0.38em',
                textTransform: 'uppercase',
                color: '#CC0000',
                margin: '0 0 10px',
                fontWeight: 500,
              }}
            >
              Women's Collection
            </p>

            <h2
  style={{
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 500,
    fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
    color: '#1A0A08',
    lineHeight: 1.08,
    margin: '0 0 18px',
    letterSpacing: '-0.02em',
    textShadow: '0 2px 8px rgba(0,0,0,0.04)'
  }}
>
              Dressed for{' '}
              <em style={{ fontStyle: 'italic', color: '#1A0A08' }}>Every Moment</em>
            </h2>

            {/* decorative rule — red + gold dot */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 28, height: 1.5, background: '#CC0000' }} />
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#C9A84C' }} />
              <div style={{ width: 16, height: 1, background: 'rgba(201,168,76,0.35)' }} />
            </div>
          </div>

          <Link
            href="/women"
            className="fc-view-all"
style={{
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 10,
  letterSpacing: '0.28em',
  textTransform: 'uppercase',
  color: '#1A0A08',
  textDecoration: 'none',
  borderBottom: '1px solid rgba(201,168,76,0.4)',
  paddingBottom: 4,
  fontWeight: 500,
  transition: 'all .3s ease'
}}
          >
            Shop All
            <ArrowUpRight size={12} />
          </Link>
        </div>

        {/* ── 3 × 2 GRID ─────────────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
            gridTemplateRows: 'repeat(2, 292px)',
            gap: 10,
          }}
        >
          {CATEGORIES.map((cat, i) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="fc-card fc-up"
style={{
  animationDelay: `${i * 0.07}s`,
  borderRadius: 10,
  border: '1px solid rgba(201,168,76,0.15)',
  boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
  backdropFilter: 'blur(4px)',
}}
            >
              {/* photo */}
              <div style={{ position: 'absolute', inset: 0 }}>
                <Image
                  src={cat.img}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="fc-img"
                  alt={cat.title}
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* gradient — bottom heavy, tasteful */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                 background:
'linear-gradient(to top, rgba(8,2,1,0.95) 0%, rgba(8,2,1,0.4) 45%, transparent 75%)',
                  zIndex: 3,
                }}
              />

              {/* corners */}
              <Corners size={22} color="rgba(201,168,76,0.8)" offset={11} weight={1.2} />

              {/* text */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '0 16px 18px',
                  zIndex: 6,
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 8.5,
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: '#C9A84C',
                    fontWeight: 500,
                  }}
                >
                  {cat.tag}
                </span>
                <span className="fc-badge-bar" />

                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 400,
                    fontSize: '1.42rem',
                    color: '#FAF6F0',
                    letterSpacing: '0.01em',
                    lineHeight: 1.18,
                    margin: '0 0 5px',
                  }}
                >
                  {cat.title}
                </h3>

                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(250,246,240,0.4)',
                    margin: 0,
                    fontWeight: 300,
                  }}
                >
                  {cat.sub}
                </p>
              </div>

              {/* arrow */}
              <div className="fc-arrow">
                <ArrowUpRight size={12} color="#C9A84C" />
              </div>
            </Link>
          ))}
        </div>

        {/* ── BOTTOM STRIP ───────────────────────────── */}
<div className="fc-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)' }}>
          {STRIP.map((item, i) => (
            <Link
              key={item.title}
              href={item.href}
              className="fc-strip fc-up"
              style={{
                height: 194,
                borderRadius: 5,
                border: '0.75px solid rgba(26,10,8,0.06)',
                animationDelay: `${0.42 + i * 0.07}s`,
              }}
            >
              <div style={{ position: 'absolute', inset: 0 }}>
                <Image
                  src={item.img}
                  fill
                  sizes="25vw"
                  className="fc-simg"
                  alt={item.title}
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(8,2,1,0.88) 0%, transparent 62%)',
                  zIndex: 2,
                }}
              />

              <Corners size={14} color="rgba(201,168,76,0.65)" offset={8} weight={1} />

              <div
                style={{
                  position: 'absolute',
                  bottom: 13,
                  left: 13,
                  zIndex: 4,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 400,
                    fontSize: '1rem',
                    color: '#FAF6F0',
                    margin: '0 0 3px',
                    letterSpacing: '0.02em',
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 9,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'rgba(201,168,76,0.8)',
                    margin: 0,
                    fontWeight: 300,
                  }}
                >
                  {item.sub}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* ── BOTTOM ORNAMENT ────────────────────────── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            marginTop: 48,
          }}
        >
          <div style={{ width: 40, height: 0.75, background: 'rgba(26,10,8,0.1)' }} />
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#C9A84C', opacity: 0.55 }} />
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 9,
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: 'rgba(26,10,8,0.28)',
              margin: 0,
              fontWeight: 400,
            }}
          >
            Tirumala Family Mall
          </p>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#C9A84C', opacity: 0.55 }} />
          <div style={{ width: 40, height: 0.75, background: 'rgba(26,10,8,0.1)' }} />
        </div>

      </div>
    </section>
  )
}