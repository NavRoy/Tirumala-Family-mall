'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, Eye, ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import { useCartStore } from '@/store'
import { showToast } from '@/components/ui/Toaster'

export function ProductCard({ product }: any) {
  const [hover, setHover] = useState(false)
  const [showSizes, setShowSizes] = useState(false)

  const addToCart = useCartStore(s => s.addItem)

  const img1 = product.images?.[0]
  const img2 = product.images?.[1] || product.images?.[0]

  const handleAdd = (size: string) => {
    addToCart(product, product.colors?.[0], size)
    showToast(`${product.name} added`)
    setShowSizes(false)
  }

 return (
  <div
    className="group relative block"
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => {
      setHover(false)
      setShowSizes(false)
    }}
  >
    {/* IMAGE */}
    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[18px] bg-[#F6F1EA]">

      {/* LINK ONLY FOR IMAGE */}
      <Link href={`/product/${product.slug}`}>
        <div className="absolute inset-0 z-[1]" />
      </Link>

      {/* IMAGE 1 */}
      <Image
        src={img1}
        alt={product.name}
        fill
        className={`object-cover transition-all duration-700 ${
          hover ? 'opacity-0 scale-[1.05]' : 'opacity-100'
        }`}
      />

      {/* IMAGE 2 */}
      <Image
        src={img2}
        alt={product.name}
        fill
        className={`absolute inset-0 object-cover transition-all duration-700 ${
          hover ? 'opacity-100 scale-[1.02]' : 'opacity-0'
        }`}
      />

      {/* NEW TAG */}
      <span className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] px-2 py-[3px] z-10">
        New
      </span>

      {/* ICONS */}
      <div className="absolute top-3 right-3 flex flex-col gap-2 
        opacity-100 md:opacity-0 md:group-hover:opacity-100 
        transition duration-300 z-10"
      >
        <button className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-sm">
          <Heart size={14} />
        </button>

        <button className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-sm">
          <Eye size={14} />
        </button>
      </div>

      {/* ADD TO BAG */}
      {!showSizes && (
        <div className="absolute bottom-0 left-0 right-0 
          flex items-center justify-center gap-2 
          text-white text-[12px] tracking-[0.2em] uppercase
          py-3
          bg-gradient-to-t from-black/70 via-black/30 to-transparent
          opacity-100 md:opacity-0 md:group-hover:opacity-100
          transition duration-300 z-10"
        >
          <button
            onClick={(e) => {
              e.preventDefault()
              setShowSizes(true)
            }}
            className="flex items-center gap-2"
          >
            <ShoppingBag size={14} />
            Add to Bag
          </button>
        </div>
      )}

      {/* SIZE SELECTOR */}
      {showSizes && (
        <div className="absolute inset-0 bg-black/40 flex items-end z-20">
          <div className="bg-white w-full p-4 rounded-t-[14px]">

            <p className="text-[10px] tracking-[0.25em] text-center mb-3">
              SELECT SIZE
            </p>

            <div className="flex justify-center gap-2 flex-wrap">
              {product.sizes?.map((size: string) => (
                <button
                  key={size}
                  onClick={(e) => {
                    e.preventDefault()
                    handleAdd(size)
                  }}
                  className="px-3 py-1 border border-[#1A0A08]/20 text-xs hover:bg-black hover:text-white transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>

    {/* CONTENT */}
    <div className="pt-3 px-1 space-y-1">
      <h3 className="text-[#1A0A08] text-[12.5px] tracking-[0.12em] uppercase leading-snug">
        {product.name}
      </h3>

      <span className="inline-block text-[10px] text-[#1A0A08]/50 border px-2 py-[2px] rounded-md">
        {product.category || 'Saree'}
      </span>

      <p className="text-[#1A0A08] text-[13.5px] font-medium">
        ₹ {product.price}
      </p>
    </div>
  </div>
)
}