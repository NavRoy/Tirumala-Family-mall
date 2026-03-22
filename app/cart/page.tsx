'use client'

import { useCartStore } from '@/store'
import Image from 'next/image'
import Link from 'next/link'
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react'
import { formatPrice } from '@/lib/products'

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAF6F0] flex flex-col items-center justify-center gap-6 px-4">
        <div className="w-24 h-24 rounded-full bg-[#CC0000]/10 flex items-center justify-center">
          <ShoppingBag size={40} className="text-[#CC0000]/70" />
        </div>
        <h1 className="font-display text-3xl font-300 text-[#1A0A08]">Your bag is empty</h1>
        <p className="font-body text-[#1A0A08]/70 text-center max-w-sm">
          Add some beautiful pieces to your bag and they will appear here.
        </p>
        <Link
          href="/shop"
          className="flex items-center gap-2 bg-[#CC0000] text-[#FAF6F0] px-8 py-4 rounded-full font-body font-500 hover:bg-[#880000] transition-colors"
        >
          Continue Shopping <ArrowRight size={16} />
        </Link>
      </div>
    )
  }

  const shipping = totalPrice() >= 999 ? 0 : 99
  const total = totalPrice() + shipping

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-10">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <h1 className="font-display text-4xl font-300 text-[#1A0A08] mb-10">
          Your Bag <span className="text-[#1A0A08]/70 text-2xl">({totalItems()} items)</span>
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedColor.name}-${item.selectedSize}`}
                className="flex gap-5 p-5 bg-white rounded-3xl shadow-card"
              >
                <div className="relative w-24 h-32 rounded-2xl overflow-hidden flex-shrink-0 img-zoom">
                  <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" sizes="96px" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-body text-base font-500 text-[#1A0A08] leading-snug">{item.product.name}</h3>
                  <p className="font-body text-sm text-[#1A0A08]/70 mt-1">
                    {item.selectedColor.name} · Size {item.selectedSize}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-display text-xl font-400 text-[#1A0A08]">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-[#1A0A08]/15 rounded-xl overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedColor.name, item.selectedSize, item.quantity - 1)}
                          className="px-3 py-2 hover:bg-[#CC0000]/10 transition-colors"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="px-3 py-2 font-body text-sm min-w-[2rem] text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedColor.name, item.selectedSize, item.quantity + 1)}
                          className="px-3 py-2 hover:bg-[#CC0000]/10 transition-colors"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id, item.selectedColor.name, item.selectedSize)}
                        className="p-2 rounded-xl hover:bg-[#CC0000]/10 text-[#1A0A08]/70 hover:text-[#CC0000] transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 shadow-card sticky top-24">
              <h2 className="font-display text-2xl font-300 text-[#1A0A08] mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between font-body text-sm text-[#1A0A08]/70">
                  <span>Subtotal ({totalItems()} items)</span>
                  <span>{formatPrice(totalPrice())}</span>
                </div>
                <div className="flex justify-between font-body text-sm text-[#1A0A08]/70">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? 'text-emerald-600 font-500' : ''}>
                    {shipping === 0 ? 'Free' : formatPrice(shipping)}
                  </span>
                </div>
                {shipping === 0 && (
                  <p className="font-body text-xs text-emerald-600 bg-emerald-50 px-3 py-2 rounded-lg">
                    🎉 You qualify for free shipping!
                  </p>
                )}
                {shipping > 0 && (
                  <p className="font-body text-xs text-[#1A0A08]/70 bg-[#FAF6F0] px-3 py-2 rounded-lg">
                    Add {formatPrice(999 - totalPrice())} more for free shipping
                  </p>
                )}
              </div>

              <div
                className="h-[1px] mb-6"
                style={{ background: 'linear-gradient(90deg, #C98C00, transparent)' }}
              />

              <div className="flex justify-between font-display text-xl mb-6 text-[#1A0A08]">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>

              {/* Coupon */}
              <div className="flex gap-2 mb-6">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="flex-1 border border-[#1A0A08]/15 rounded-xl px-4 py-2.5 font-body text-sm outline-none focus:border-[#CC0000] transition-colors"
                />
                <button className="bg-[#1A0A08] text-[#FAF6F0] px-4 py-2.5 rounded-xl font-body text-sm font-500 hover:bg-[#CC0000] transition-colors">
                  Apply
                </button>
              </div>

              <Link
                href="/checkout"
                className="flex items-center justify-center gap-2 w-full bg-grad-red text-[#FAF6F0] py-4 rounded-2xl font-body font-500 tracking-wide hover:opacity-90 transition-opacity"
              >
                Proceed to Checkout <ArrowRight size={16} />
              </Link>

              <div className="mt-4 flex items-center justify-center gap-4 opacity-40">
                <span className="font-body text-xs">Secure checkout</span>
                <span className="font-body text-xs">·</span>
                <span className="font-body text-xs">UPI · Cards · COD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
