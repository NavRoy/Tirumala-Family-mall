'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { useRef, useState } from 'react'
import { NEW_ARRIVALS } from '@/lib/products'

export function NewArrivals() {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'right' ? 300 : -300, behavior: 'smooth' })
  }

  const products = NEW_ARRIVALS.slice(0, 5)

  return (
    <section style={{ background: '#F5EDE0', padding: '80px 0' }}>

      <style>{`
        /* MOBILE SLIDER */
        @media (max-width: 768px) {
          .na-products {
            display: flex !important;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
          }

          .na-card {
            min-width: 85%;
            scroll-snap-align: center;
          }

          .na-nav {
            display: none;
          }

          .na-layout {
            flex-direction: column;
          }
        }

        /* DESKTOP GRID */
        @media (min-width: 769px) {
          .na-products {
            display: grid !important;
            grid-template-columns: repeat(5, 1fr);
          }
        }

        .na-products::-webkit-scrollbar {
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

        <div className="na-layout" style={{ display: 'flex', gap: 20 }}>

          {/* LEFT CARD */}
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
              color: '#1A0A08'
            }}>
              New <br />
              <span style={{ color: '#C9A84C' }}>Arrivals</span>
            </h2>

            <p style={{
              marginTop: 16,
              fontSize: 11,
              letterSpacing: '0.35em',
              color: '#7A6A55'
            }}>
              SS’26 COLLECTION
            </p>
          </div>

          {/* RIGHT */}
          <div style={{ flex: 1 }}>

            {/* NAV (DESKTOP ONLY) */}
            <div className="na-nav" style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 10,
              marginBottom: 12
            }}>
              <button onClick={() => scroll('left')}><ChevronLeft /></button>
              <button onClick={() => scroll('right')}><ChevronRight /></button>
            </div>

            {/* PRODUCTS */}
            <div ref={scrollRef} className="na-products" style={{ gap: 18 }}>

              {products.map((product: any) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug ?? product.id}`}
                  className="na-card"
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

                      {/* OVERLAY */}
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.25), transparent)'
                      }} />

                      {/* BUTTON */}
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

        </div>

      </div>
    </section>
  )
}