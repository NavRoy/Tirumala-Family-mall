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
    <section className="bg-white py-20 px-4 relative overflow-hidden">

      {/* ✨ subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAF6F0]/40 to-white opacity-70" />

      {/* HEADING */}
      <div className="text-center mb-14 relative">
        <h2 className="font-display text-[#1A0A08] tracking-wide"
            style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 400 }}>
          Social Spotlight
        </h2>

        <p className="text-sm text-[#1A0A08]/55 mt-3 tracking-wide">
          Real moments from our store · @tirumalafamilymall777
        </p>

        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C98C00] to-transparent mx-auto mt-5" />
      </div>

      {/* REELS */}
      <div className="
        flex lg:grid
        lg:grid-cols-6
        gap-5
        max-w-[1200px]
        mx-auto

        overflow-x-auto lg:overflow-visible
        px-2 lg:px-0
        snap-x lg:snap-none
        no-scrollbar
        relative
      ">

        {REELS.map((r) => (
          <a
            key={r.id}
            href={IG}
            target="_blank"
            className="
              group relative rounded-[20px] overflow-hidden

              min-w-[72%] sm:min-w-[45%] lg:min-w-0
              snap-start
              transition-all duration-500
            "
            style={{
              aspectRatio: '9/16',
              boxShadow: '0 10px 35px rgba(0,0,0,0.12)'
            }}
            onMouseEnter={(e) => e.currentTarget.querySelector('video')?.pause()}
            onMouseLeave={(e) => e.currentTarget.querySelector('video')?.play()}
          >

            {/* VIDEO */}
            <video
              ref={(el) => { if (el) el.playbackRate = 1.25 }}
              src={r.video}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* ✨ GRADIENT DEPTH */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* ✨ SOFT HOVER GLOW */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-t from-[#C98C00]/20 to-transparent" />

            {/* TOP BADGE */}
            <div className="
              absolute top-3 left-3 
              bg-white/85 backdrop-blur-md 
              px-2.5 py-[3px] rounded-full 
              text-[10px] flex items-center gap-1.5
              shadow-sm
            ">
              <Instagram size={11} />
              <span className="tracking-wide">Reel</span>
            </div>

            {/* CAPTION */}
            <div className="absolute bottom-3 left-3 right-3">
              <p className="text-white text-[13px] tracking-wide leading-snug">
                {r.cap}
              </p>
            </div>

            {/* ✨ PREMIUM BORDER ON HOVER */}
            <div className="absolute inset-0 rounded-[20px] border border-transparent group-hover:border-[#C98C00]/40 transition-all duration-500" />

          </a>
        ))}

      </div>

      {/* CTA */}
      <div className="flex justify-center mt-14 relative">
        <a
          href={IG}
          target="_blank"
          className="
            group flex items-center gap-2 px-8 py-3 rounded-full text-white text-sm tracking-wide
            transition-all duration-300
          "
          style={{
            background: 'linear-gradient(135deg,#833AB4,#FD1D1D,#FCAF45)',
            boxShadow: '0 8px 24px rgba(253,29,29,0.25)'
          }}
        >
          <Instagram size={16} />
          Follow @tirumalafamilymall777
        </a>
      </div>

    </section>
  )
}