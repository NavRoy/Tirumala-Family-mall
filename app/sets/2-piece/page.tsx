import type { Metadata } from 'next'
import { ProductCard } from '@/components/product/ProductCard'
import { getProductsByCategory } from '@/lib/products'
export const metadata: Metadata = { title: '2 Piece Sets' }
export default function TwoPieceSetsPage() {
  const products = getProductsByCategory('2-piece-sets')
  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      <div className="bg-gradient-to-r from-[#440000]-900 to-[#CC0000] py-16">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-16">
          <p className="font-body text-xs tracking-[0.3em] text-[#C98C00]/70 uppercase mb-3">Modern Pairing</p>
          <h1 className="font-display text-5xl font-300 text-[#FAF6F0]">2 Piece Sets</h1>
          <p className="font-body text-[#FAF6F0]/70 mt-2">Mix-and-match-ready 2-piece sets, crafted for effortless everyday style.</p>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-4 lg:px-16 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  )
}
