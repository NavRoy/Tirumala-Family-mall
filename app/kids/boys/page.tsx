import type { Metadata } from 'next'
import { ProductCard } from '@/components/product/ProductCard'
import { getProductsByGender } from '@/lib/products'

export const metadata: Metadata = { title: "Kids Boys Wear — Tirumala Family Mall" }

export default function KidsBoysPage() {
  const products = getProductsByGender('kids-boys')
  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      <div className="py-16 lg:py-20" style={{ background: 'linear-gradient(135deg,#1B3A7A,#2D52A0,#5B7FC4)' }}>
        <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
          <p className="font-body text-[10px] tracking-[0.3em] text-[#FCD34D]/80 uppercase mb-3">For Little Stars</p>
          <h1 className="font-display text-5xl lg:text-7xl font-300 text-white mb-4">Kids Boys</h1>
          <p className="font-body text-white/55 max-w-md">Kurta sets, Sherwani, Casual T-shirts and more for your little prince.</p>
          <p className="font-body text-sm text-[#FCD34D]/70 mt-4">{products.length} styles</p>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-4 lg:px-12 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  )
}
