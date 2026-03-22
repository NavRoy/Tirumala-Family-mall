import type { Metadata } from 'next'
import { ProductCard } from '@/components/product/ProductCard'
import { getProductsByGender } from '@/lib/products'

export const metadata: Metadata = { title: "Kids Girls Wear — Tirumala Family Mall" }

export default function KidsGirlsPage() {
  const products = getProductsByGender('kids-girls')
  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      <div className="py-16 lg:py-20" style={{ background: 'linear-gradient(135deg,#8B1A4A,#CC2277,#FF69B4)' }}>
        <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
          <p className="font-body text-[10px] tracking-[0.3em] text-white/60 uppercase mb-3">For Little Princesses</p>
          <h1 className="font-display text-5xl lg:text-7xl font-300 text-white mb-4">Kids Girls</h1>
          <p className="font-body text-white/55 max-w-md">Lehenga sets, Frocks, Kurta sets and adorable casual wear for your little girl.</p>
          <p className="font-body text-sm text-white/40 mt-4">{products.length} styles</p>
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
