
import type { Metadata } from 'next'
import { ProductCard } from '@/components/product/ProductCard'
import { PRODUCTS } from '@/lib/products'

export const metadata: Metadata = { title: 'Bestsellers' }

export default function BestsellersPage() {
  const products = PRODUCTS.filter((p) => p.badge === 'bestseller' || p.rating >= 4.7)
    .sort((a, b) => b.reviewCount - a.reviewCount)

  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      <div className="bg-white border-b border-[#C98C00]/20 py-14">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-16">
          <p className="font-body text-xs tracking-[0.3em] text-[#C98C00] uppercase mb-2">Most loved</p>
          <h1 className="font-display text-5xl font-300 text-[#1A0A08]">Bestsellers</h1>
          <p className="font-body text-[#1A0A08]/70 mt-2 text-sm">Our most popular styles, loved by thousands</p>
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
