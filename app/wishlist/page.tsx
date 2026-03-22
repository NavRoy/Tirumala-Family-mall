'use client'

import { useWishlistStore, useCartStore } from '@/store'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingBag, X, ArrowRight } from 'lucide-react'
import { formatPrice } from '@/lib/products'
import { showToast } from '@/components/ui/Toaster'

export default function WishlistPage() {
  const { items, removeItem } = useWishlistStore()
  const addToCart = useCartStore((s) => s.addItem)

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAF6F0] flex flex-col items-center justify-center gap-6 px-4">
        <Heart size={48} className="text-[#CC0000]/70" />
        <h1 className="font-display text-3xl font-300 text-[#1A0A08]">Your wishlist is empty</h1>
        <p className="font-body text-[#1A0A08]/70 text-center max-w-sm">
          Save your favourite pieces here and come back to them anytime.
        </p>
        <Link
          href="/shop"
          className="flex items-center gap-2 bg-[#CC0000] text-[#FAF6F0] px-8 py-4 rounded-full font-body font-500 hover:bg-[#880000] transition-colors"
        >
          Explore Collection <ArrowRight size={16} />
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-10">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <Heart size={24} className="text-[#CC0000] fill-[#CC0000]" />
          <h1 className="font-display text-4xl font-300 text-[#1A0A08]">Wishlist</h1>
          <span className="font-body text-sm text-[#1A0A08]/70">({items.length} items)</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {items.map((product) => (
            <div key={product.id} className="product-card group">
              <div className="relative aspect-[3/4] overflow-hidden img-zoom">
                <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="300px" />
                <button
                  onClick={() => { removeItem(product.id); showToast('Removed from wishlist', 'info') }}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white shadow-card flex items-center justify-center hover:bg-[#CC0000] hover:text-white transition-all duration-200"
                >
                  <X size={14} />
                </button>
              </div>
              <div className="p-4">
                <Link href={`/product/${product.slug}`} className="font-body text-sm font-500 text-[#1A0A08] hover:text-[#CC0000] transition-colors line-clamp-2">
                  {product.name}
                </Link>
                <p className="font-body text-sm font-600 text-[#1A0A08] mt-1.5 mb-3">{formatPrice(product.price)}</p>
                <button
                  onClick={() => {
                    addToCart(product, product.colors[0], product.sizes[0])
                    removeItem(product.id)
                    showToast('Moved to bag!')
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#CC0000] text-[#FAF6F0] py-2.5 rounded-xl font-body text-sm font-500 hover:bg-[#880000] transition-colors"
                >
                  <ShoppingBag size={14} /> Move to Bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
