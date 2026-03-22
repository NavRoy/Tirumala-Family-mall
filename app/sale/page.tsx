import type { Metadata } from 'next'
import { ProductCard } from '@/components/product/ProductCard'
import { PRODUCTS } from '@/lib/products'

export const metadata: Metadata = { title: 'Sale — Tirumala Family Mall' }

export default function SalePage() {
  const products = PRODUCTS.filter((p) => p.discount && p.discount >= 20).sort((a,b) => (b.discount??0)-(a.discount??0))
  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      <div className="py-16 lg:py-20" style={{ background: 'linear-gradient(135deg,#440000,#CC0000,#FF6B6B)' }}>
        <div className="max-w-[1440px] mx-auto px-4 lg:px-12 text-center">
          <p className="font-body text-[10px] tracking-[0.4em] text-white/50 uppercase mb-4">Limited Time</p>
          <h1 className="font-display font-300 text-white mb-4" style={{ fontSize:'clamp(3.5rem,9vw,7.5rem)' }}>Sale</h1>
          <p className="font-body text-lg text-white/60 mb-2">Up to 35% off on premium styles</p>
          <p className="font-body text-sm text-white/35">{products.length} products on sale</p>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-4 lg:px-12 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  )
}
