import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ProductCard } from '@/components/product/ProductCard'
import { getProductsByGender } from '@/lib/products'

export function MensBestsellers() {
  const products = getProductsByGender('men').slice(0,5)

  return (
    <section className="py-14 lg:py-24 bg-[#1A0A08] relative overflow-hidden">

      {/* ✨ subtle gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#330000]/20 to-transparent pointer-events-none"/>

      <div className="max-w-[1440px] mx-auto px-4 lg:px-12 relative">

        {/* HEADER */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-body text-[10px] tracking-[.3em] uppercase text-[#C98C00]/80 mb-3">
              — Gents Collection
            </p>

            <h2 className="font-display text-white"
                style={{ fontSize:'clamp(1.8rem,3vw,2.6rem)', fontWeight:400 }}>
              Men's Bestsellers
            </h2>

            {/* gold line */}
            <div className="w-16 h-[1px] bg-[#C98C00]/60 mt-4"/>
          </div>

          <Link
            href="/men"
            className="flex items-center gap-2 text-[#C98C00] font-body text-sm tracking-wide hover:gap-3 transition-all"
          >
            Shop All Men
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1"/>
          </Link>
        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">

          {products.map(p => (
            <div
              key={p.id}
              className="group relative transition-all duration-500 hover:-translate-y-2"
            >

              {/* ✨ glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-[#C98C00]/10 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"/>

              {/* wrapper to override text color */}
              <div className="relative [&_*]:!text-white [&_.text-[#1A0A08]]:!text-white [&_.text-[#1A0A08\\/40]]:!text-white/60">

                <ProductCard product={p} />

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}