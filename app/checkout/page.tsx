'use client'

import { useState } from 'react'
import { useCartStore } from '@/store'
import { ArrowRight, Lock, Truck, Check } from 'lucide-react'
import { formatPrice } from '@/lib/products'
import Link from 'next/link'

type Step = 'address' | 'payment' | 'confirm'

export default function CheckoutPage() {
  const [step, setStep] = useState<Step>('address')
  const [paymentMethod, setPaymentMethod] = useState('upi')
  const { items, totalPrice, clearCart } = useCartStore()
  const [placed, setPlaced] = useState(false)

  const shipping = totalPrice() >= 999 ? 0 : 99
  const total = totalPrice() + shipping

  const handlePlaceOrder = () => {
    setPlaced(true)
    clearCart()
  }

  if (placed) {
    return (
      <div className="min-h-screen bg-[#FAF6F0] flex flex-col items-center justify-center px-4 gap-6">
        <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
          <Check size={36} className="text-emerald-600" />
        </div>
        <div className="text-center">
          <h1 className="font-display text-4xl font-300 text-[#1A0A08] mb-2">Order Placed!</h1>
          <p className="font-body text-[#1A0A08]/70">Thank you for shopping with Tirumala Family Mall. You'll receive a confirmation shortly.</p>
        </div>
        <div className="bg-white rounded-3xl p-6 text-center shadow-card max-w-sm w-full">
          <p className="font-body text-sm text-[#1A0A08]/70 mb-1">Order Number</p>
          <p className="font-display text-2xl font-400 text-[#CC0000]">#ANV{Date.now().toString().slice(-6)}</p>
          <div className="h-[1px] my-4" style={{ background: 'linear-gradient(90deg, transparent, #C98C00, transparent)' }} />
          <p className="font-body text-sm text-[#1A0A08]/70">Expected delivery in 4-7 business days</p>
        </div>
        <Link href="/" className="bg-[#CC0000] text-[#FAF6F0] px-8 py-4 rounded-full font-body font-500 text-sm hover:bg-[#880000] transition-colors">
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-10">
      <div className="max-w-[1100px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <Link href="/" className="font-display text-3xl font-300 tracking-widest text-[#1A0A08]">TIRUMALA FAMILY MALL</Link>
          <div className="h-[1px] w-16 mx-auto mt-2" style={{ background: 'linear-gradient(90deg, #C98C00, #5A1F60)' }} />
        </div>

        {/* Steps */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {(['address', 'payment', 'confirm'] as Step[]).map((s, i) => (
            <div key={s} className="flex items-center gap-4">
              <div className={`flex items-center gap-2 ${step === s ? 'text-[#CC0000]' : i < ['address','payment','confirm'].indexOf(step) ? 'text-emerald-600' : 'text-[#1A0A08]/70'}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-500 font-body border-2 ${step === s ? 'border-[#CC0000] bg-[#CC0000] text-[#FAF6F0]' : i < ['address','payment','confirm'].indexOf(step) ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-[#1A0A08]/15'}`}>
                  {i < ['address','payment','confirm'].indexOf(step) ? <Check size={12}/> : i + 1}
                </div>
                <span className="font-body text-sm capitalize hidden sm:block">{s}</span>
              </div>
              {i < 2 && <div className={`h-[1px] w-12 ${i < ['address','payment','confirm'].indexOf(step) ? 'bg-emerald-300' : 'bg-[#1A0A08]/80'}`} />}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            {step === 'address' && (
              <div className="bg-white rounded-3xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-300 text-[#1A0A08] mb-6 flex items-center gap-2">
                  <Truck size={20} className="text-[#CC0000]" /> Delivery Address
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: 'First Name', span: false },
                    { label: 'Last Name', span: false },
                    { label: 'Email Address', span: true },
                    { label: 'Phone Number', span: false },
                    { label: 'Pincode', span: false },
                    { label: 'Address Line 1', span: true },
                    { label: 'Address Line 2 (Optional)', span: true },
                    { label: 'City', span: false },
                    { label: 'State', span: false },
                  ].map(({ label, span }) => (
                    <div key={label} className={span ? 'md:col-span-2' : ''}>
                      <label className="font-body text-xs text-[#1A0A08]/70 uppercase tracking-wider mb-2 block">{label}</label>
                      <input
                        type="text"
                        className="w-full border border-[#1A0A08]/15 rounded-xl px-4 py-3 font-body text-sm outline-none focus:border-[#CC0000] transition-colors bg-[#FAF6F0]"
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setStep('payment')}
                  className="mt-8 flex items-center gap-2 bg-[#CC0000] text-[#FAF6F0] px-8 py-4 rounded-xl font-body font-500 text-sm hover:bg-[#880000] transition-colors"
                >
                  Continue to Payment <ArrowRight size={16} />
                </button>
              </div>
            )}

            {step === 'payment' && (
              <div className="bg-white rounded-3xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-300 text-[#1A0A08] mb-6 flex items-center gap-2">
                  <Lock size={20} className="text-[#CC0000]" /> Payment Method
                </h2>
                <div className="space-y-3">
                  {[
                    { id: 'upi', label: 'UPI Payment', desc: 'PhonePe, GPay, Paytm, BHIM' },
                    { id: 'card', label: 'Credit / Debit Card', desc: 'Visa, Mastercard, Rupay' },
                    { id: 'netbanking', label: 'Net Banking', desc: 'All major banks' },
                    { id: 'cod', label: 'Cash on Delivery', desc: '₹30 extra charge applies' },
                  ].map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${paymentMethod === method.id ? 'border-[#CC0000] bg-[#CC0000]/10' : 'border-[#1A0A08]/15 hover:border-[#CC0000]/25'}`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={() => setPaymentMethod(method.id)}
                        className="accent-plum w-4 h-4"
                      />
                      <div>
                        <p className="font-body text-sm font-500 text-[#1A0A08]">{method.label}</p>
                        <p className="font-body text-xs text-[#1A0A08]/70">{method.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
                <div className="flex gap-3 mt-8">
                  <button onClick={() => setStep('address')} className="px-6 py-4 rounded-xl border border-[#1A0A08]/15 font-body text-sm text-[#1A0A08] hover:border-[#CC0000] hover:text-[#CC0000] transition-colors">Back</button>
                  <button onClick={() => setStep('confirm')} className="flex items-center gap-2 bg-[#CC0000] text-[#FAF6F0] px-8 py-4 rounded-xl font-body font-500 text-sm hover:bg-[#880000] transition-colors">
                    Review Order <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {step === 'confirm' && (
              <div className="bg-white rounded-3xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-300 text-[#1A0A08] mb-6">Review Your Order</h2>
                <div className="space-y-3 mb-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-4 py-3 border-b border-[#1A0A08]/15">
                      <img src={item.product.images[0]} alt={item.product.name} className="w-14 h-16 rounded-xl object-cover" />
                      <div className="flex-1">
                        <p className="font-body text-sm font-500 text-[#1A0A08]">{item.product.name}</p>
                        <p className="font-body text-xs text-[#1A0A08]/70">{item.selectedColor.name} · {item.selectedSize} · Qty {item.quantity}</p>
                      </div>
                      <p className="font-body text-sm font-600 text-[#1A0A08]">{formatPrice(item.product.price * item.quantity)}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setStep('payment')} className="px-6 py-4 rounded-xl border border-[#1A0A08]/15 font-body text-sm text-[#1A0A08] hover:border-[#CC0000] hover:text-[#CC0000] transition-colors">Back</button>
                  <button
                    onClick={handlePlaceOrder}
                    className="flex-1 flex items-center justify-center gap-2 bg-grad-red text-[#FAF6F0] py-4 rounded-xl font-body font-500 text-sm hover:opacity-90 transition-opacity"
                  >
                    <Lock size={15} /> Place Order — {formatPrice(total)}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order summary sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 shadow-card sticky top-24">
              <h3 className="font-display text-xl font-300 text-[#1A0A08] mb-5">Order Summary</h3>
              <div className="space-y-3 mb-5 max-h-48 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-3 items-start">
                    <img src={item.product.images[0]} alt="" className="w-12 h-14 rounded-xl object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-body text-xs font-500 text-[#1A0A08] line-clamp-2">{item.product.name}</p>
                      <p className="font-body text-xs text-[#1A0A08]/70 mt-0.5">×{item.quantity}</p>
                    </div>
                    <p className="font-body text-xs font-600 text-[#1A0A08] flex-shrink-0">{formatPrice(item.product.price * item.quantity)}</p>
                  </div>
                ))}
              </div>
              <div className="h-[1px] mb-4" style={{ background: 'linear-gradient(90deg, #C98C00, transparent)' }} />
              <div className="space-y-2 font-body text-sm">
                <div className="flex justify-between text-[#1A0A08]/70"><span>Subtotal</span><span>{formatPrice(totalPrice())}</span></div>
                <div className="flex justify-between text-[#1A0A08]/70"><span>Shipping</span><span className={shipping === 0 ? 'text-emerald-600' : ''}>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span></div>
                <div className="h-[1px] my-2 bg-[#1A0A08]/80" />
                <div className="flex justify-between font-display text-lg text-[#1A0A08]"><span>Total</span><span>{formatPrice(total)}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
