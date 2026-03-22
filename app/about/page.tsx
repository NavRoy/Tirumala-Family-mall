import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
export const metadata: Metadata = { title: 'Our Story — About Tirumala Family Mall' }
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&q=85" alt="About" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 lg:px-16 pb-16 max-w-[1440px] mx-auto">
          <p className="font-body text-xs tracking-[0.3em] text-[#C98C00]/70 uppercase mb-3">Est. 2024 · Vizianagaram, AP</p>
          <h1 className="font-display text-5xl lg:text-7xl font-300 text-[#FAF6F0]">Our Story</h1>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-4 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="font-display text-4xl font-300 text-[#1A0A08] mb-6 leading-tight">Born from a love of <em className="italic text-[#CC0000]">Indian textiles</em> and the women who wear them.</h2>
            <p className="font-body text-[#1A0A08]/70 leading-relaxed mb-5">Tirumala Family Mall began as a dream — to bring the incredible richness of Indian weaving traditions to women across the country, curated with modern sensibility and delivered with premium care.</p>
            <p className="font-body text-[#1A0A08]/70 leading-relaxed">Founded in Vizianagaram, Andhra Pradesh, we work directly with artisan weavers and craftspeople from across India to bring you authentic, exceptional pieces.</p>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-square img-zoom">
            <Image src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=85" alt="Artisan" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
        <div className="text-center bg-grad-red rounded-4xl p-16">
          <h3 className="font-display text-4xl font-300 text-[#FAF6F0] mb-4">Ready to explore the collection?</h3>
          <p className="font-body text-[#FAF6F0]/70 mb-8">Thousands of women trust Tirumala Family Mall for their most special moments.</p>
          <Link href="/shop" className="inline-flex items-center gap-2 bg-[#C98C00] text-[#1A0A08] px-8 py-4 rounded-full font-body font-500 text-sm hover:bg-[#C98C00]-light transition-all">
            Shop the Collection <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  )
}
