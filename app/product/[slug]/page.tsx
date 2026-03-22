'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Heart, ShoppingBag, Star, Truck, RefreshCw, Shield, ChevronDown, ChevronLeft } from 'lucide-react'
import { PRODUCTS, formatPrice } from '@/lib/products'
import { useCartStore, useWishlistStore } from '@/store'
import { showToast } from '@/components/ui/Toaster'
import { ProductCard } from '@/components/product/ProductCard'

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug)
  if (!product) notFound()

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState<string | null>('description')

  const addToCart = useCartStore((s) => s.addItem)
  const { isInWishlist, toggleItem } = useWishlistStore()
  const isWishlisted = isInWishlist(product.id)

  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const ACCORDIONS = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'fabric',
      title: 'Fabric & Care',
      content: [
        product.fabric ? `Fabric: ${product.fabric}` : null,
        ...(product.care || []),
      ].filter(Boolean).join('\n'),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free shipping on orders above ₹999. Standard delivery in 4-7 business days. Easy returns within 7 days of delivery. Exchange available for size issues.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-16 py-4">
        <div className="flex items-center gap-2 font-body text-xs text-[#1A0A08]/70">
          <Link href="/" className="hover:text-[#CC0000] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#CC0000] transition-colors">Shop</Link>
          <span>/</span>
          <Link href={`/${product.category}`} className="hover:text-[#CC0000] transition-colors capitalize">
            {product.category.replace(/-/g, ' ')}
          </Link>
          <span>/</span>
          <span className="text-[#1A0A08]/70 line-clamp-1">{product.name}</span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 lg:px-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left: Images */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative flex-shrink-0 w-16 h-20 lg:w-20 lg:h-24 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === i ? 'border-[#CC0000]' : 'border-transparent opacity-60 hover:opacity-90'
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative aspect-[3/4] rounded-3xl overflow-hidden bg-[#F5EDE0] img-zoom">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.badge && (
                  <span className={`px-3 py-1 rounded-full text-xs font-500 font-body ${
                    product.badge === 'insta-live'
                      ? 'text-white'
                      : product.badge === 'bestseller'
                      ? 'bg-[#C98C00] text-[#1A0A08]'
                      : product.badge === 'new'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-[#1A0A08] text-[#FAF6F0]'
                  }`}
                  style={product.badge === 'insta-live' ? { background: 'linear-gradient(135deg, #833AB4, #FD1D1D, #FCAF45)' } : {}}
                  >
                    {product.badge === 'insta-live' ? '✦ Insta Live' : product.badge.charAt(0).toUpperCase() + product.badge.slice(1)}
                  </span>
                )}
                {product.discount && (
                  <span className="px-3 py-1 rounded-full text-xs font-500 font-body bg-[#CC0000] text-white">
                    -{product.discount}% Off
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="lg:py-4">
            {/* Name */}
            <h1 className="font-display text-3xl lg:text-4xl font-300 text-[#1A0A08] leading-tight mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className={i < Math.floor(product.rating) ? 'fill-gold text-[#C98C00]' : 'fill-charcoal/10 text-[#1A0A08]/70'} />
                ))}
              </div>
              <span className="font-body text-sm text-[#1A0A08]/70">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-8">
              <span className="font-display text-3xl font-400 text-[#1A0A08]">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="font-body text-base text-[#1A0A08]/70 line-through">{formatPrice(product.originalPrice)}</span>
              )}
              {product.discount && (
                <span className="font-body text-sm font-600 text-[#CC0000]">Save {formatPrice(product.originalPrice! - product.price)}</span>
              )}
            </div>

            {/* Gold divider */}
            <div className="h-[1px] mb-8" style={{ background: 'linear-gradient(90deg, #C98C00, transparent)' }} />

            {/* Color */}
            <div className="mb-6">
              <p className="font-body text-sm font-500 text-[#1A0A08] mb-3">
                Colour: <span className="font-400 text-[#1A0A08]/70">{selectedColor.name}</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    title={color.name}
                    className={`relative w-9 h-9 rounded-full border-2 transition-all duration-200 ${
                      selectedColor.name === color.name ? 'border-[#CC0000] scale-110' : 'border-transparent hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  >
                    {selectedColor.name === color.name && (
                      <span className="absolute inset-0 rounded-full border-2 border-white m-0.5" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            {product.sizes.length > 1 && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-body text-sm font-500 text-[#1A0A08]">
                    Size: <span className="font-400 text-[#1A0A08]/70">{selectedSize}</span>
                  </p>
                  <Link href="/sizing" className="font-body text-xs text-[#CC0000] underline underline-offset-2">
                    Size Guide
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-xl border font-body text-sm transition-all duration-200 ${
                        selectedSize === size
                          ? 'bg-[#CC0000] text-[#FAF6F0] border-[#CC0000]'
                          : 'border-[#1A0A08]/15 text-[#1A0A08] hover:border-[#CC0000] hover:text-[#CC0000]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-[#1A0A08]/15 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-[#CC0000]/10 transition-colors font-body text-lg"
                >
                  −
                </button>
                <span className="px-4 py-3 font-body text-sm font-500 min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-[#CC0000]/10 transition-colors font-body text-lg"
                >
                  +
                </button>
              </div>
              {product.inStock ? (
                <span className="font-body text-sm text-emerald-600 flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full" /> In Stock
                </span>
              ) : (
                <span className="font-body text-sm text-[#CC0000]">Out of Stock</span>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 mb-8">
              <button
                disabled={!product.inStock}
                onClick={() => {
                  addToCart(product, selectedColor, selectedSize, quantity)
                  showToast(`${product.name} added to bag`)
                }}
                className="flex-1 flex items-center justify-center gap-2 bg-[#1A0A08] text-[#FAF6F0] py-4 rounded-2xl font-body font-500 text-sm tracking-wide hover:bg-[#CC0000] transition-all duration-300 disabled:opacity-40"
              >
                <ShoppingBag size={17} /> Add to Bag
              </button>
              <button
                onClick={() => {
                  toggleItem(product)
                  showToast(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist')
                }}
                className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-300 ${
                  isWishlisted ? 'bg-[#CC0000] border-[#CC0000] text-[#FAF6F0]' : 'border-[#1A0A08]/15 text-[#1A0A08]/70 hover:border-[#CC0000] hover:text-[#CC0000]'
                }`}
              >
                <Heart size={18} className={isWishlisted ? 'fill-current' : ''} />
              </button>
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { Icon: Truck, text: 'Free Shipping', sub: 'Above ₹999' },
                { Icon: RefreshCw, text: 'Easy Returns', sub: 'Within 7 days' },
                { Icon: Shield, text: 'Secure Payment', sub: 'UPI & Cards' },
              ].map(({ Icon, text, sub }) => (
                <div key={text} className="text-center bg-white rounded-2xl p-3 border border-[#C98C00]/20">
                  <Icon size={18} className="text-[#CC0000] mx-auto mb-1.5" />
                  <p className="font-body text-xs font-500 text-[#1A0A08]">{text}</p>
                  <p className="font-body text-[11px] text-[#1A0A08]/70">{sub}</p>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="space-y-2">
              {ACCORDIONS.map((acc) => (
                <div key={acc.id} className="border border-[#1A0A08]/15 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between px-5 py-4 font-body text-sm font-500 text-[#1A0A08] hover:bg-[#CC0000]/10 transition-colors"
                  >
                    {acc.title}
                    <ChevronDown
                      size={16}
                      className={`text-[#1A0A08]/70 transition-transform duration-300 ${openAccordion === acc.id ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openAccordion === acc.id && (
                    <div className="px-5 pb-4 font-body text-sm text-[#1A0A08]/70 leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-24">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="font-body text-xs tracking-[0.3em] text-[#C98C00] uppercase mb-2">You may also like</p>
                <h2 className="font-display text-3xl font-300 text-[#1A0A08]">Related Products</h2>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
