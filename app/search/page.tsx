'use client'
import { useState, useEffect, useRef, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Search, X, SlidersHorizontal } from 'lucide-react'
import { PRODUCTS } from '@/lib/products'
import { ProductCard } from '@/components/product/ProductCard'

const SUGG = ['Sarees','Kurtis','Nighties','Leggings','Men Shirts','Sherwani','Kids Frocks','Jeans','Blazers','Palazzo']
const GTABS = [{id:'all',l:'All'},{id:'women',l:'Women'},{id:'men',l:'Men'},{id:'kids-boys',l:'Boys'},{id:'kids-girls',l:'Girls'}]
const SORTS = [{v:'relevance',l:'Relevance'},{v:'newest',l:'Newest'},{v:'price-asc',l:'Price ↑'},{v:'price-desc',l:'Price ↓'},{v:'rating',l:'Top Rated'}]

function SearchContent() {
  const sp = useSearchParams()
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const [q, setQ] = useState(sp.get('q') ?? '')
  const [live, setLive] = useState(sp.get('q') ?? '')
  const [gender, setGender] = useState('all')
  const [sort, setSort] = useState('relevance')

  useEffect(() => { const t = setTimeout(() => setLive(q), 260); return () => clearTimeout(t) }, [q])
  useEffect(() => { inputRef.current?.focus() }, [])

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (q.trim()) router.replace(`/search?q=${encodeURIComponent(q.trim())}`)
  }
  const useSugg = (s: string) => { setQ(s); setLive(s); router.replace(`/search?q=${encodeURIComponent(s)}`) }

  const term = live.toLowerCase().trim()
  let results = PRODUCTS.filter(p => {
    const gm = gender === 'all' || p.gender === gender
    if (!gm) return false
    if (!term) return true
    return p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term) || p.tags.some(t => t.toLowerCase().includes(term)) ||
      (p.fabric?.toLowerCase().includes(term) ?? false)
  })
  if (sort === 'price-asc')  results = [...results].sort((a,b) => a.price - b.price)
  if (sort === 'price-desc') results = [...results].sort((a,b) => b.price - a.price)
  if (sort === 'rating')     results = [...results].sort((a,b) => b.rating - a.rating)
  if (sort === 'newest')     results = [...results].sort((a,b) => b.createdAt.localeCompare(a.createdAt))

  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      <div className="bg-[#1A0A08] py-10 lg:py-16">
        <div className="max-w-[760px] mx-auto px-4">
          <p className="font-body text-[10px] tracking-[.3em] uppercase text-[#C98C00]/60 text-center mb-5">Search Tirumala Family Mall</p>
          <form onSubmit={submit}>
            <div className="flex items-center bg-white rounded-2xl overflow-hidden border border-[#CC0000]/15 shadow-[0_8px_48px_rgba(0,0,0,0.3)]">
              <Search size={17} className="ml-5 text-[#1A0A08]/26 shrink-0"/>
              <input ref={inputRef} type="search" value={q} onChange={e => setQ(e.target.value)}
                placeholder="Search sarees, kurtas, nighties, jeans, sherwani…"
                className="flex-1 px-4 py-[18px] font-body text-[15px] text-[#1A0A08] bg-transparent outline-none placeholder:text-[#1A0A08]/24"/>
              {q && <button type="button" onClick={() => { setQ(''); setLive('') }} className="p-2 mr-1"><X size={14} className="text-[#1A0A08]/26 hover:text-[#1A0A08] transition-colors"/></button>}
              <button type="submit" className="bg-[#CC0000] hover:bg-[#AA0000] text-white px-7 py-[18px] font-body text-sm font-500 transition-colors shrink-0 flex items-center gap-2">
                <Search size={13}/> Search
              </button>
            </div>
          </form>
          <div className="flex flex-wrap gap-2 justify-center mt-5">
            {SUGG.map(s => (
              <button key={s} onClick={() => useSugg(s)}
                className={`px-4 py-1.5 rounded-full border font-body text-[11px] transition-all ${q === s ? 'bg-[#CC0000] border-[#CC0000] text-white' : 'border-white/14 text-white/40 hover:bg-white/10 hover:text-white/72 hover:border-white/32'}`}>{s}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 lg:px-12 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 flex-wrap">
            <SlidersHorizontal size={13} className="text-[#1A0A08]/35"/>
            {GTABS.map(t => (
              <button key={t.id} onClick={() => setGender(t.id)}
                className={`px-4 py-1.5 rounded-full font-body text-xs transition-all ${gender === t.id ? 'bg-[#CC0000] text-white' : 'border border-[#CC0000]/22 text-[#8B3A2A] hover:border-[#CC0000] hover:text-[#CC0000]'}`}>{t.l}</button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="font-body text-sm text-[#1A0A08]/38">
              <b className="text-[#1A0A08] font-500">{results.length}</b> {term ? `results for "${live}"` : 'products'}
            </span>
            <select value={sort} onChange={e => setSort(e.target.value)}
              className="border border-[#1A0A08]/12 rounded-xl px-3 py-2 font-body text-xs text-[#1A0A08] bg-white outline-none focus:border-[#CC0000] transition-colors cursor-pointer">
              {SORTS.map(s => <option key={s.v} value={s.v}>{s.l}</option>)}
            </select>
          </div>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5">
            {results.map(p => <ProductCard key={p.id} product={p}/>)}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 gap-6 text-center">
            <div className="w-20 h-20 rounded-full bg-[#CC0000]/8 flex items-center justify-center"><Search size={28} className="text-[#CC0000]/30"/></div>
            <p className="font-display text-2xl font-300 text-[#1A0A08]">No results found</p>
            <p className="font-body text-sm text-[#1A0A08]/40">Try: {SUGG.slice(0,4).join(', ')}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {['Sarees','Kurtis',"Men's Wear",'Kids'].map(s => (
                <button key={s} onClick={() => useSugg(s)} className="px-5 py-2.5 rounded-full bg-[#CC0000] text-white font-body text-sm font-500 hover:bg-[#AA0000] transition-colors">{s}</button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF6F0] flex items-center justify-center"><div className="w-8 h-8 border-2 border-[#CC0000] border-t-transparent rounded-full" style={{animation:'spin .7s linear infinite'}}/></div>}>
      <SearchContent/>
    </Suspense>
  )
}
