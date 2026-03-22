'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'
import { getProductsByGender } from '@/lib/products'

export function KidsSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' })
  }

  const products = [
    ...getProductsByGender('kids-boys').slice(0,2),
    ...getProductsByGender('kids-girls').slice(0,3),
  ]

  return (
    <section style={{ background: '#F5EDE0', padding: '80px 0' }}>

      <style>{`
        /* MOBILE */
        @media (max-width: 768px) {
          .kids-layout {
            flex-direction: column;
          }

          .kids-products {
            display: flex !important;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
          }

          .kids-card {
            min-width: 85%;
            scroll-snap-align: center;
          }

          .kids-nav {
            display: none;
          }
        }

        /* DESKTOP */
        @media (min-width: 769px) {
          .kids-products {
            display: grid !important;
            grid-template-columns: repeat(5, 1fr);
          }
        }

        .kids-products::-webkit-scrollbar {
          display: none;
        }

        .mobile-kids-title {
  display: none;
}

@media (max-width: 768px) {
  .mobile-kids-title {
    display: block !important;
  }

  /* ❌ hide right side title */
  .kids-layout > div:last-child {
    display: none !important;
  }
}
      `}</style>

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 20px' }}>
{/* ✅ MOBILE TITLE TOP */}
<div className="mobile-kids-title" style={{ display: 'none', marginBottom: 20 }}>

  <div style={{
    background: '#E8D8C3',
    borderRadius: 14,
    padding: '40px 20px'
  }}>
    <h2 style={{
      fontFamily: 'Cormorant Garamond',
      fontSize: '2rem',
      color: '#1A0A08',
      textAlign: 'center'
    }}>
      Kids <br />
      <span style={{ color: '#C9A84C' }}>Collection</span>
    </h2>

    <p style={{
      marginTop: 12,
      fontSize: 10,
      letterSpacing: '0.35em',
      color: '#7A6A55',
      textAlign: 'center'
    }}>
      FOR LITTLE ONES
    </p>
  </div>

</div>
        <div className="kids-layout" style={{ display: 'flex', gap: 20 }}>

          {/* 🔥 PRODUCTS FIRST (LEFT SIDE) */}
          <div style={{ flex: 1 }}>

            {/* NAV */}
            <div className="kids-nav" style={{
              display: 'flex',
              justifyContent: 'flex-end', // 👈 LEFT SIDE NAV
              gap: 10,
              marginBottom: 12
            }}>
              <button onClick={() => scroll('left')}><ChevronLeft /></button>
              <button onClick={() => scroll('right')}><ChevronRight /></button>
            </div>

            {/* PRODUCTS */}
            <div ref={scrollRef} className="kids-products" style={{ gap: 18 }}>

              {products.map((product: any) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug ?? product.id}`}
                  className="kids-card"
                  style={{
                    background: '#D6C2A8',
                    padding: 10,
                    borderRadius: 10
                  }}
                >

                  <div style={{
                    border: '2px solid rgba(255,255,255,0.7)',
                    padding: 5,
                    borderRadius: 8
                  }}>

                    <div style={{ position: 'relative', height: 300 }}>

                      <Image
                        src={product?.image || product?.images?.[0] || '/fallback.jpg'}
                        fill
                        alt={product.name ?? 'Product'}
                        style={{ objectFit: 'cover' }}
                      />

                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.25), transparent)'
                      }} />

                      <div style={{
                        position: 'absolute',
                        bottom: 16,
                        left: 0,
                        right: 0,
                        display: 'flex',
                        justifyContent: 'center'
                      }}>
                        <span style={{
                          padding: '7px 16px',
                          fontSize: 11,
                          letterSpacing: '0.25em',
                          border: '1px solid rgba(255,255,255,0.7)',
                          color: '#fff',
                          background: 'rgba(0,0,0,0.25)',
                          backdropFilter: 'blur(6px)'
                        }}>
                          SHOP NOW
                        </span>
                      </div>

                    </div>

                  </div>

                </Link>
              ))}

            </div>

          </div>

          {/* 🔥 TITLE RIGHT SIDE */}
          <div style={{
            width: 260,
            background: '#E8D8C3',
            borderRadius: 14,
            padding: '50px 30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond',
              fontSize: '2.6rem',
              color: '#1A0A08',
              textAlign: 'right' // 👈 RIGHT ALIGN
            }}>
              Kids <br />
              <span style={{ color: '#C9A84C' }}>Collection</span>
            </h2>

            <p style={{
              marginTop: 16,
              fontSize: 11,
              letterSpacing: '0.35em',
              color: '#7A6A55',
              textAlign: 'right'
            }}>
              FOR LITTLE ONES
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}