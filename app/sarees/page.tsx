import type { Metadata } from 'next'
import { ProductCard } from '@/components/product/ProductCard'
import { getProductsByCategory } from '@/lib/products'

export const metadata: Metadata = { title: 'Sarees — Tirumala Family Mall' }

export default function SareesPage() {
  const products = getProductsByCategory('sarees')
  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      <div className="py-16 lg:py-20" style={{ background: 'linear-gradient(135deg,#440000,#880000,#CC0000)' }}>
        <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
          <p className="font-body text-[10px] tracking-[0.3em] text-[#C98C00]/80 uppercase mb-3">Timeless Elegance</p>
          <h1 className="font-display text-5xl lg:text-7xl font-300 text-white mb-4">Sarees</h1>
          <p className="font-body text-white/55 max-w-md">Kanjivaram silk, Banarasi, Chanderi, linen — premium sarees for every occasion.</p>
          <p className="font-body text-sm text-[#C98C00]/70 mt-4">{products.length} sarees</p>
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
