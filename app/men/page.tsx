import type { Metadata } from 'next'
import { ProductCard } from '@/components/product/ProductCard'
import { getProductsByGender } from '@/lib/products'
import Link from 'next/link'

export const metadata: Metadata = { title: "Men's Wear — Tirumala Family Mall" }

export default function MenPage() {
  const products = getProductsByGender('men')
  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      <div className="py-16 lg:py-20" style={{ background: 'linear-gradient(135deg,#1A0A08,#3D1A14,#8B3A2A)' }}>
        <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
          <p className="font-body text-[10px] tracking-[0.3em] text-[#C98C00]/80 uppercase mb-3">Gents Collection</p>
          <h1 className="font-display text-5xl lg:text-7xl font-300 text-white mb-4">Men's Wear</h1>
          <p className="font-body text-white/55 max-w-md">Shirts, T-shirts, Jeans, Ethnic wear, Blazers, Sherwani and more — all under one roof.</p>
          <div className="flex flex-wrap gap-3 mt-6">
            {[['Shirts','/men/shirts'],['Kurtha Shirts','/men/kurtas'],['Jeans','/men/jeans'],['Sherwani','/men/sherwani'],['Blazers','/men/blazers']].map(([l,h]) => (
              <Link key={l} href={h} className="px-4 py-2 rounded-full border border-white/20 text-white/70 font-body text-xs hover:bg-white/15 hover:text-white transition-all">{l}</Link>
            ))}
          </div>
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
