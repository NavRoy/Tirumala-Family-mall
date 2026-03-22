import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const PROMOS=[
  {tag:'Festival Special',title:"Women's\nFestive Wear",sub:'Sarees · Lehengas · Anarkali',cta:'Explore Now',href:'/women',img:'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=900&q=85'},
  {tag:"Men's Edit",title:"Regal Men's\nEthnic Wear",sub:'Kurtha · Sherwani · Blazers',cta:'Shop Men',href:'/men',img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=85'},
]

export function PromoBannerStrip() {
  return (
    <section className="py-10 lg:py-16 bg-[#FAF6F0]">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
          {PROMOS.map(p=>(
            <Link key={p.href+p.title} href={p.href}
              className="group relative rounded-2xl overflow-hidden img-zoom block" style={{minHeight:320}}>
              <Image src={p.img} alt={p.title} fill className="object-cover object-top group-hover:scale-[1.05] transition-transform duration-700" sizes="(max-width:1024px) 100vw,50vw"/>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A0A08]/75 via-[#1A0A08]/30 to-transparent"/>
              <div className="absolute inset-0 flex flex-col justify-end p-7">
                <p className="font-body text-[10px] tracking-[0.26em] uppercase text-[#C98C00] mb-2">{p.tag}</p>
                <h3 className="font-display text-white font-300 mb-1.5" style={{fontSize:'clamp(1.5rem,2.8vw,2.3rem)',whiteSpace:'pre-line',lineHeight:1.1}}>{p.title}</h3>
                <p className="font-body text-white/55 text-sm mb-5">{p.sub}</p>
                <span className="inline-flex items-center gap-2 bg-[#CC0000] text-white px-6 py-3 rounded-full font-body text-sm font-500 group-hover:bg-[#AA0000] transition-colors w-fit shadow-[0_4px_16px_rgba(204,0,0,0.3)]">
                  {p.cta} <ArrowRight size={13}/>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
