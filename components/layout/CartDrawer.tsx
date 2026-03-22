'use client'
import { useCartStore } from '@/store'
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { formatPrice } from '@/lib/products'

export function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, totalPrice, totalItems } = useCartStore()
  const sub = totalPrice()
  const ship = sub >= 999 ? 0 : 99

  return (
    <>
      {isOpen && <div className="fixed inset-0 z-[70] bg-[#1A0A08]/55 backdrop-blur-sm" onClick={closeCart}/>}
      <div className={`fixed top-0 right-0 h-full z-[80] w-full max-w-[420px] bg-[#FAF6F0] shadow-[0_0_60px_rgba(26,10,8,0.25)] flex flex-col transition-transform duration-500 ease-out ${isOpen?'translate-x-0':'translate-x-full'}`}>

        <div className="flex items-center justify-between px-6 py-[18px] bg-white border-b border-[#1A0A08]/7 shrink-0">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} className="text-[#CC0000]"/>
            <h2 className="font-display text-xl font-400 text-[#1A0A08] tracking-wide">Your Bag</h2>
            {totalItems()>0&&<span className="bg-[#CC0000] text-white text-[10px] px-2.5 py-0.5 rounded-full font-body font-600">{totalItems()}</span>}
          </div>
          <button onClick={closeCart} className="w-8 h-8 rounded-full hover:bg-[#CC0000]/10 flex items-center justify-center transition-colors">
            <X size={15} className="text-[#1A0A08]/50"/>
          </button>
        </div>
        <div className="h-[1.5px] shrink-0" style={{background:'linear-gradient(90deg,transparent,#C98C00,#CC0000,#C98C00,transparent)'}}/>

        <div className="flex-1 overflow-y-auto no-scroll py-4 px-5">
          {items.length===0?(
            <div className="flex flex-col items-center justify-center h-full gap-5 text-center">
              <div className="w-20 h-20 rounded-full bg-[#CC0000]/8 flex items-center justify-center">
                <ShoppingBag size={28} className="text-[#CC0000]/32"/>
              </div>
              <div>
                <p className="font-display text-xl font-300 text-[#1A0A08]">Your bag is empty</p>
                <p className="font-body text-sm text-[#1A0A08]/42 mt-1">Add your favourite pieces</p>
              </div>
              <button onClick={closeCart} className="bg-[#CC0000] text-white px-7 py-3 rounded-xl font-body text-sm font-500 hover:bg-[#AA0000] transition-colors">Continue Shopping</button>
            </div>
          ):(
            <div className="space-y-4">
              {items.map(item=>{
                const key=`${item.product.id}-${item.selectedColor.name}-${item.selectedSize}`
                return (
                  <div key={key} className="flex gap-4 bg-white rounded-2xl p-3.5 shadow-[0_2px_12px_rgba(26,10,8,0.06)]">
                    <div className="relative w-20 h-24 rounded-xl overflow-hidden shrink-0">
                      <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" sizes="80px"/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-body text-[13.5px] font-500 text-[#1A0A08] line-clamp-2 leading-snug">{item.product.name}</h4>
                      <p className="font-body text-[11.5px] text-[#1A0A08]/40 mt-0.5">{item.selectedColor.name} · {item.selectedSize}</p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="font-body text-sm font-600 text-[#CC0000]">{formatPrice(item.product.price)}</span>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center border border-[#1A0A08]/12 rounded-lg overflow-hidden">
                            <button onClick={()=>updateQuantity(item.product.id,item.selectedColor.name,item.selectedSize,item.quantity-1)} className="w-7 h-7 flex items-center justify-center hover:bg-[#CC0000]/8 transition-colors text-[#1A0A08]/58"><Minus size={11}/></button>
                            <span className="w-8 text-center font-body text-sm">{item.quantity}</span>
                            <button onClick={()=>updateQuantity(item.product.id,item.selectedColor.name,item.selectedSize,item.quantity+1)} className="w-7 h-7 flex items-center justify-center hover:bg-[#CC0000]/8 transition-colors text-[#1A0A08]/58"><Plus size={11}/></button>
                          </div>
                          <button onClick={()=>removeItem(item.product.id,item.selectedColor.name,item.selectedSize)} className="w-7 h-7 rounded-lg hover:bg-[#CC0000]/10 flex items-center justify-center transition-colors">
                            <Trash2 size={13} className="text-[#1A0A08]/32 hover:text-[#CC0000]"/>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {items.length>0&&(
          <div className="px-5 pb-5 pt-4 bg-white border-t border-[#1A0A08]/7 space-y-4 shrink-0">
            <div className="flex justify-between font-body text-sm text-[#1A0A08]/52"><span>Subtotal</span><span>{formatPrice(sub)}</span></div>
            <div className="flex justify-between font-body text-sm text-[#1A0A08]/52"><span>Shipping</span><span className={ship===0?'text-green-600 font-500':''}>{ship===0?'Free':formatPrice(ship)}</span></div>
            {sub<999&&(
              <div className="bg-[#FAF6F0] rounded-xl px-4 py-2.5">
                <div className="h-1.5 bg-[#E0D4C0] rounded-full overflow-hidden mb-1.5">
                  <div className="h-full rounded-full transition-all duration-500" style={{width:`${(sub/999)*100}%`,background:'linear-gradient(90deg,#CC0000,#C98C00)'}}/>
                </div>
                <p className="font-body text-[11px] text-[#1A0A08]/42">Add {formatPrice(999-sub)} for free shipping</p>
              </div>
            )}
            <div className="div-gold"/>
            <div className="flex justify-between font-display text-xl text-[#1A0A08]"><span>Total</span><span>{formatPrice(sub+ship)}</span></div>
            <Link href="/checkout" onClick={closeCart} className="flex items-center justify-center gap-2 w-full bg-[#CC0000] hover:bg-[#AA0000] text-white py-4 rounded-2xl font-body font-500 text-sm tracking-wide transition-colors shadow-[0_4px_16px_rgba(204,0,0,0.3)]">
              Checkout <ArrowRight size={15}/>
            </Link>
            <button onClick={closeCart} className="w-full text-center font-body text-sm text-[#1A0A08]/38 hover:text-[#CC0000] transition-colors py-1">Continue Shopping</button>
          </div>
        )}
      </div>
    </>
  )
}
