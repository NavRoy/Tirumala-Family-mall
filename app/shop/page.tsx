'use client'

import { useState } from 'react'
import { SlidersHorizontal, ChevronDown, X, Grid3X3, Grid2X2 } from 'lucide-react'
import { ProductCard } from '@/components/product/ProductCard'
import { PRODUCTS, CATEGORIES } from '@/lib/products'

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest First' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
]

const PRICE_RANGES = [
  { label: 'Under ₹1,000', min: 0, max: 1000 },
  { label: '₹1,000 – ₹2,500', min: 1000, max: 2500 },
  { label: '₹2,500 – ₹5,000', min: 2500, max: 5000 },
  { label: '₹5,000 – ₹10,000', min: 5000, max: 10000 },
  { label: 'Above ₹10,000', min: 10000, max: Infinity },
]

export default function ShopPage() {
  const [sort, setSort] = useState('featured')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [gridCols, setGridCols] = useState(4)

  let products = [...PRODUCTS]

  if (selectedCategory) {
    products = products.filter((p) => p.category === selectedCategory)
  }

  if (selectedPrice !== null) {
    const range = PRICE_RANGES[selectedPrice]
    products = products.filter((p) => p.price >= range.min && p.price <= range.max)
  }

  if (sort === 'newest') products.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
  if (sort === 'price-asc') products.sort((a, b) => a.price - b.price)
  if (sort === 'price-desc') products.sort((a, b) => b.price - a.price)
  if (sort === 'rating') products.sort((a, b) => b.rating - a.rating)

  const activeFiltersCount = [selectedCategory, selectedPrice !== null ? 1 : null].filter(Boolean).length

  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      {/* Page header */}
      <div className="bg-white border-b border-[#C98C00]/20 py-10">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-16">
          <p className="font-body text-xs tracking-[0.3em] text-[#C98C00] uppercase mb-2">Explore</p>
          <h1 className="font-display text-4xl lg:text-5xl font-300 text-[#1A0A08]">All Products</h1>
          <p className="font-body text-sm text-[#1A0A08]/70 mt-2">{products.length} products</p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 lg:px-16 py-8">
        {/* Controls bar */}
        <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
          <div className="flex items-center gap-3">
            {/* Filter toggle (mobile) */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="lg:hidden flex items-center gap-2 border border-[#1A0A08]/15 text-[#1A0A08] px-4 py-2.5 rounded-xl font-body text-sm hover:border-[#CC0000] hover:text-[#CC0000] transition-colors"
            >
              <SlidersHorizontal size={15} />
              Filters
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 bg-[#CC0000] text-[#FAF6F0] rounded-full text-xs flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Active filters chips */}
            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-1.5 bg-[#CC0000]/10 text-[#CC0000] px-3.5 py-2 rounded-full font-body text-xs"
              >
                {CATEGORIES.find((c) => c.id === selectedCategory)?.name}
                <X size={12} />
              </button>
            )}
            {selectedPrice !== null && (
              <button
                onClick={() => setSelectedPrice(null)}
                className="flex items-center gap-1.5 bg-[#CC0000]/10 text-[#CC0000] px-3.5 py-2 rounded-full font-body text-xs"
              >
                {PRICE_RANGES[selectedPrice].label}
                <X size={12} />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* Grid toggle */}
            <div className="hidden lg:flex items-center gap-1 bg-white rounded-xl p-1 border border-[#1A0A08]/15">
              <button
                onClick={() => setGridCols(4)}
                className={`p-2 rounded-lg transition-colors ${gridCols === 4 ? 'bg-[#CC0000] text-[#FAF6F0]' : 'text-[#1A0A08]/70 hover:text-[#1A0A08]'}`}
              >
                <Grid3X3 size={15} />
              </button>
              <button
                onClick={() => setGridCols(3)}
                className={`p-2 rounded-lg transition-colors ${gridCols === 3 ? 'bg-[#CC0000] text-[#FAF6F0]' : 'text-[#1A0A08]/70 hover:text-[#1A0A08]'}`}
              >
                <Grid2X2 size={15} />
              </button>
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-white border border-[#1A0A08]/15 text-[#1A0A08] text-sm font-body px-4 py-2.5 pr-9 rounded-xl outline-none focus:border-[#CC0000] cursor-pointer hover:border-[#CC0000] transition-colors"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1A0A08]/70 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters (desktop always visible) */}
          <div className={`lg:block w-64 flex-shrink-0 space-y-8 ${filtersOpen ? 'block' : 'hidden'}`}>

            {/* Category filter */}
            <div>
              <h3 className="font-body text-xs tracking-[0.2em] uppercase text-[#1A0A08]/70 mb-4">Category</h3>
              <div className="space-y-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-body transition-all duration-200 ${
                      selectedCategory === cat.id
                        ? 'bg-[#CC0000] text-[#FAF6F0]'
                        : 'text-[#1A0A08]/70 hover:bg-[#CC0000]/10 hover:text-[#CC0000]'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-[11px] opacity-60">{cat.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price filter */}
            <div>
              <h3 className="font-body text-xs tracking-[0.2em] uppercase text-[#1A0A08]/70 mb-4">Price Range</h3>
              <div className="space-y-1">
                {PRICE_RANGES.map((range, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedPrice(selectedPrice === i ? null : i)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-body transition-all duration-200 ${
                      selectedPrice === i
                        ? 'bg-[#CC0000] text-[#FAF6F0]'
                        : 'text-[#1A0A08]/70 hover:bg-[#CC0000]/10 hover:text-[#CC0000]'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear filters */}
            {activeFiltersCount > 0 && (
              <button
                onClick={() => { setSelectedCategory(null); setSelectedPrice(null) }}
                className="w-full text-center text-sm font-body text-[#1A0A08]/70 hover:text-[#CC0000] transition-colors py-2 border border-[#1A0A08]/15 rounded-xl hover:border-[#CC0000]"
              >
                Clear All Filters
              </button>
            )}
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {products.length === 0 ? (
              <div className="text-center py-24">
                <p className="font-display text-3xl font-300 text-[#1A0A08]/70">No products found</p>
                <p className="font-body text-sm text-[#1A0A08]/70 mt-2">Try adjusting your filters</p>
              </div>
            ) : (
              <div
                className={`grid gap-4 lg:gap-6 ${
                  gridCols === 4
                    ? 'grid-cols-2 lg:grid-cols-4'
                    : 'grid-cols-2 lg:grid-cols-3'
                }`}
              >
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
