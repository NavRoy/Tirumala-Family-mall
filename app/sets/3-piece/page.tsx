import type { Metadata } from 'next'
import { ProductCard } from '@/components/product/ProductCard'
import { getProductsByCategory } from '@/lib/products'

export const metadata: Metadata = { title: '3 Piece Sets' }

export default function ThreePiecePage() {
  const products = getProductsByCategory('3-piece-sets')

  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      <div className="bg-gradient-to-r from-[#440000] via-[#880000]-light to-blush-400 py-20">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-16">
          <p className="font-body text-xs tracking-[0.3em] text-white/60 uppercase mb-3">Complete Looks</p>
          <h1 className="font-display text-5xl lg:text-7xl font-300 text-white mb-4">3 Piece Sets</h1>
          <p className="font-body text-white/60 max-w-md">Head-to-toe curated sets — kurta, bottom, and dupatta — complete outfits effortlessly styled for you.</p>
          <p className="font-body text-sm text-white/40 mt-4">{products.length} sets</p>
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
