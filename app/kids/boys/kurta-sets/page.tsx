import type { Metadata } from 'next'
import { ProductCard } from '@/components/product/ProductCard'
import { getProductsByGender } from '@/lib/products'
export const metadata: Metadata = { title: 'Boys Kurta Sets — Tirumala Family Mall' }
export default function BoysKurtaSets() {
  const products = getProductsByGender('kids-boys')
  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      <div className="py-14" style={{ background:'linear-gradient(135deg,#1B3A7A,#2D52A0)' }}>
        <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
          <h1 className="font-display text-4xl font-300 text-white">Boys Kurta Sets</h1>
          <p className="font-body text-white/45 mt-2 text-sm">Festive and ethnic wear for boys</p>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-4 lg:px-12 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  )
}
