'use client'
import { useWishlistStore, useCartStore } from '@/store'
import { X, Heart, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { formatPrice } from '@/lib/products'
import { showToast } from '@/components/ui/Toaster'

export function WishlistDrawer() {
  const { isOpen, closeWishlist, items, removeItem } = useWishlistStore()
  const addToCart = useCartStore(s => s.addItem)

  return (
    <>
      {isOpen && <div className="fixed inset-0 z-[70] bg-[#1A0A08]/55 backdrop-blur-sm" onClick={closeWishlist}/>}
      <div className={`fixed top-0 right-0 h-full z-[80] w-full max-w-[400px] bg-[#FAF6F0] shadow-[0_0_60px_rgba(26,10,8,0.25)] flex flex-col transition-transform duration-500 ease-out ${isOpen?'translate-x-0':'translate-x-full'}`}>

        <div className="flex items-center justify-between px-6 py-[18px] bg-white border-b border-[#1A0A08]/7 shrink-0">
          <div className="flex items-center gap-3">
            <Heart size={18} className="text-[#CC0000] fill-[#CC0000]"/>
            <h2 className="font-display text-xl font-400 text-[#1A0A08]">Wishlist</h2>
            {items.length>0&&<span className="bg-[#CC0000] text-white text-[10px] px-2.5 py-0.5 rounded-full font-body font-600">{items.length}</span>}
          </div>
          <button onClick={closeWishlist} className="w-8 h-8 rounded-full hover:bg-[#CC0000]/10 flex items-center justify-center transition-colors">
            <X size={15} className="text-[#1A0A08]/50"/>
          </button>
        </div>
        <div className="h-[1.5px] shrink-0" style={{background:'linear-gradient(90deg,transparent,#C98C00,#CC0000,#C98C00,transparent)'}}/>

        <div className="flex-1 overflow-y-auto no-scroll py-4 px-5">
          {items.length===0?(
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <Heart size={38} className="text-[#CC0000]/20"/>
              <p className="font-display text-xl font-300 text-[#1A0A08]">Your wishlist is empty</p>
              <p className="font-body text-sm text-[#1A0A08]/40">Save your favourite pieces here</p>
            </div>
          ):(
            <div className="space-y-4">
              {items.map(product=>(
                <div key={product.id} className="flex gap-4 bg-white rounded-2xl p-3.5 shadow-[0_2px_12px_rgba(26,10,8,0.06)]">
                  <Link href={`/product/${product.slug}`} onClick={closeWishlist} className="shrink-0">
                    <div className="relative w-20 h-24 rounded-xl overflow-hidden">
                      <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="80px"/>
                    </div>
                  </Link>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-body text-[13.5px] font-500 text-[#1A0A08] line-clamp-2 leading-snug">{product.name}</h4>
                    <p className="font-body text-sm font-600 text-[#CC0000] mt-1.5">{formatPrice(product.price)}</p>
                    <div className="flex gap-2 mt-3">
                      <button onClick={()=>{addToCart(product,product.colors[0],product.sizes[0]);removeItem(product.id);showToast('Moved to bag!')}}
                        className="flex-1 flex items-center justify-center gap-1.5 bg-[#CC0000] text-white text-[11.5px] py-2 rounded-lg font-500 hover:bg-[#AA0000] transition-colors">
                        <ShoppingBag size={11}/> Move to Bag
                      </button>
                      <button onClick={()=>removeItem(product.id)} className="px-3 py-2 rounded-lg border border-[#1A0A08]/12 hover:border-[#CC0000]/45 transition-colors">
                        <X size={12} className="text-[#1A0A08]/38"/>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
