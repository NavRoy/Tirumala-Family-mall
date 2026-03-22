import type { Metadata } from 'next'
import { ProductCard } from '@/components/product/ProductCard'
import { PRODUCTS } from '@/lib/products'

export const metadata: Metadata = { title: 'New Arrivals' }

export default function NewArrivalsPage() {
  const products = PRODUCTS.filter((p) => p.badge === 'new' || p.createdAt > '2026-02-01')

  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      <div className="bg-white border-b border-[#C98C00]/20 py-14">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <p className="font-body text-xs tracking-[0.3em] text-[#C98C00] uppercase">Just arrived</p>
          </div>
          <h1 className="font-display text-5xl font-300 text-[#1A0A08]">New Arrivals</h1>
          <p className="font-body text-[#1A0A08]/70 mt-2 text-sm">{products.length} new styles this season</p>
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
