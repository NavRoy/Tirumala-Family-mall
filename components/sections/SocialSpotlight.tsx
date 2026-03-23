'use client'
import { Instagram } from 'lucide-react'

const IG = 'https://www.instagram.com/tirumalafamilymall777/'

const REELS = [
  { id:1, video:'/reels/reel1.mp4', cap:'New Saree Collection' },
  { id:2, video:'/reels/reel1.mp4', cap:'Kurta Sets' },
  { id:3, video:'/reels/reel1.mp4', cap:'3 Piece Sets' },
  { id:4, video:'/reels/reel1.mp4', cap:'Banarasi Silk' },
  { id:5, video:'/reels/reel1.mp4', cap:'Kids Wear' },
  { id:6, video:'/reels/reel1.mp4', cap:'Frocks Collection' },
]

export function SocialSpotlight() {
  return (
    <section className="relative py-28 px-4 overflow-hidden bg-gradient-to-b from-white via-[#FAF6F0] to-white">

      {/* ✨ Ambient luxury glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C98C00]/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-100px] right-10 w-[300px] h-[300px] bg-[#CC0000]/10 blur-[120px] rounded-full" />
      </div>

      {/* HEADING */}
      <div className="text-center mb-20 relative">
        <h2 className="font-display text-[#1A0A08] text-[clamp(2.2rem,4vw,3.2rem)] font-[400] tracking-wide">
          Social Spotlight
        </h2>

        <p className="text-sm text-[#1A0A08]/60 mt-3 tracking-wide">
          Real moments from our store · @tirumalafamilymall777
        </p>

        <div className="flex justify-center mt-6">
          <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-[#C98C00] to-transparent" />
        </div>
      </div>

      {/* REELS */}
      <div className="
        flex lg:grid lg:grid-cols-6
        gap-7
        max-w-[1350px] mx-auto
        overflow-x-auto lg:overflow-visible
        snap-x lg:snap-none
        no-scrollbar
        px-2
      ">

        {REELS.map((r, i) => (
          <a
            key={r.id}
            href={IG}
            target="_blank"
            className="
              group relative rounded-[24px] overflow-hidden
              min-w-[78%] sm:min-w-[48%] lg:min-w-0
              snap-start
              transition-all duration-500
            "
            style={{
              aspectRatio: '9/16',
              transform: 'translateY(0)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.18)'
            }}
          >

            {/* 🎬 VIDEO */}
            <video
              src={r.video}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />

            {/* ✨ DARK DEPTH */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* ✨ GOLD LIGHT SWEEP */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-tr from-transparent via-[#C98C00]/25 to-transparent" />

            {/* ✨ GLASS BADGE */}
            <div className="
              absolute top-3 left-3 
              bg-white/80 backdrop-blur-xl
              px-3 py-[4px] rounded-full 
              text-[11px] flex items-center gap-1.5
              shadow-md border border-white/40
            ">
              <Instagram size={12} />
              <span className="tracking-wide font-medium">Reel</span>
            </div>

            {/* ✨ CAPTION */}
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white text-[13px] tracking-wide font-medium leading-snug">
                {r.cap}
              </p>
            </div>

            {/* ✨ PREMIUM BORDER */}
            <div className="
              absolute inset-0 rounded-[24px]
              border border-transparent
              group-hover:border-[#C98C00]/50
              transition-all duration-500
            " />

            {/* ✨ FLOAT EFFECT */}
            <div className="absolute inset-0 group-hover:translate-y-[-6px] transition duration-500" />

          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-20">
        <a
          href={IG}
          target="_blank"
          className="
            group relative flex items-center gap-2 px-12 py-3.5 rounded-full text-white text-sm tracking-wide
            transition-all duration-300 overflow-hidden
          "
          style={{
            background: 'linear-gradient(135deg,#833AB4,#FD1D1D,#FCAF45)',
            boxShadow: '0 12px 35px rgba(253,29,29,0.35)'
          }}
        >
          {/* ✨ Shine animation */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700" />

          <Instagram size={16} />
          Follow @tirumalafamilymall777
        </a>
      </div>

    </section>
  )
}