'use client'
import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const R=[{id:1,n:'Lakshmi Devi',l:'Srikakulam',r:5,t:"Best saree collection in town! The quality is superb and the price is very reasonable. Delivery was fast too.",p:'Kanjivaram Saree',ini:'LD',c:'#CC0000'},
{id:2,n:'Ravi Kumar',l:'Vizianagaram',r:5,t:"Got a sherwani for my son's wedding — excellent stitching and gorgeous fabric. Everyone was asking where we bought it!",p:'Indo-West Sherwani',ini:'RK',c:'#8B3A2A'},
{id:3,n:'Priya Rao',l:'Narasannapeta',r:5,t:"Great experience at Tirumala Family Mall! Nice variety and helpful staff. The 3-piece set I bought was exactly what I wanted.",p:'3 Piece Set',ini:'PR',c:'#C98C00'},
{id:4,n:'Sunitha',l:'Palakonda',r:5,t:"The leggings brands here are all genuine — Prisma, Royal, Twin Birds at best prices. My go-to store forever.",p:'Prisma Leggings',ini:'SN',c:'#440000'},
{id:5,n:'Mohammed Ali',l:'Srikakulam',r:5,t:"Best men's collection in Srikakulam. Ramraj always available. Staff is honest and helpful.",p:'Ramraj Set',ini:'MA',c:'#1A0A08'}]

export function TestimonialsSection() {
  const [cur,setCur]=useState(0)
  const vis=[R[(cur-1+R.length)%R.length],R[cur],R[(cur+1)%R.length]]
  return (
    <section className="py-12 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
        <div className="text-center mb-10">
          <span className="eyebrow justify-center mb-2 block">Happy Customers</span>
          <h2 className="font-display text-[#1A0A08]" style={{fontSize:'clamp(1.7rem,3.2vw,2.6rem)',fontWeight:400}}>What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-1 mt-3">{Array.from({length:5}).map((_,i)=><Star key={i} size={14} className="fill-[#C98C00] text-[#C98C00]"/>)}<span className="font-body text-sm text-[#1A0A08]/40 ml-2">4.9 · 1,200+ customers</span></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          {vis.map((r,i)=>(
            <div key={r.id} className={`bg-[#FAF6F0] rounded-3xl p-7 relative transition-all duration-400 ${i===1?'border border-[#CC0000]/25 shadow-[0_8px_32px_rgba(204,0,0,0.12)] scale-[1.02]':'border border-[#C98C00]/8 opacity-60 shadow-[0_2px_12px_rgba(26,10,8,0.06)]'}`}>
              <div className="flex gap-0.5 mb-4">{Array.from({length:r.r}).map((_,j)=><Star key={j} size={12} className="fill-[#C98C00] text-[#C98C00]"/>)}</div>
              <p className="font-body text-sm text-[#1A0A08]/65 leading-relaxed mb-5">"{r.t}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display shrink-0" style={{background:r.c}}>{r.ini}</div>
                <div><p className="font-body text-sm font-600 text-[#1A0A08]">{r.n}</p><p className="font-body text-[11px] text-[#1A0A08]/38">{r.l} · {r.p}</p></div>
              </div>
              {i===1&&<div className="absolute bottom-0 left-8 right-8 h-[2px] rounded-b-full" style={{background:'linear-gradient(90deg,#C98C00,#CC0000)'}}/>}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4">
          <button onClick={()=>setCur(c=>(c-1+R.length)%R.length)} className="w-11 h-11 rounded-full border border-[#CC0000]/18 flex items-center justify-center hover:bg-[#CC0000] hover:text-white hover:border-[#CC0000] text-[#1A0A08]/42 transition-all"><ChevronLeft size={17}/></button>
          <div className="flex gap-2">{R.map((_,i)=><button key={i} onClick={()=>setCur(i)} className="rounded-full transition-all duration-300" style={{width:i===cur?24:7,height:7,background:i===cur?'#CC0000':'rgba(204,0,0,0.18)'}}/>)}</div>
          <button onClick={()=>setCur(c=>(c+1)%R.length)} className="w-11 h-11 rounded-full border border-[#CC0000]/18 flex items-center justify-center hover:bg-[#CC0000] hover:text-white hover:border-[#CC0000] text-[#1A0A08]/42 transition-all"><ChevronRight size={17}/></button>
        </div>
      </div>
    </section>
  )
}
