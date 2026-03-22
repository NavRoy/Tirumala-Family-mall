'use client'

const V = [
  { icon: '🪡', t: 'Authentic Handloom', d: 'Direct from weavers across India.' },
  { icon: '🌿', t: 'Premium Quality', d: 'Tested cotton, silk & georgette.' },
  { icon: '💰', t: 'Best Prices', d: 'Most competitive in Srikakulam.' },
  { icon: '🚚', t: 'Fast Delivery', d: '3–5 days pan-India. COD available.' }
]

export function BrandValues() {
  return (
    <section className="py-16 lg:py-24 bg-[#FAF6F0] relative overflow-hidden">

      {/* ✨ subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,#1A0A08_1px,transparent_0)] [background-size:20px_20px]" />

      <div className="relative max-w-[1440px] mx-auto px-4 lg:px-12">

        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="eyebrow justify-center mb-3 block tracking-[3px] text-[#C98C00]">
            Why Shop With Us
          </span>

          <h2 className="font-serif text-[#1A0A08] tracking-wide"
              style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 400 }}>
            The Tirumala Promise
          </h2>

          {/* ✨ divider line */}
          <div className="w-16 h-[1px] bg-[#C98C00] mx-auto mt-4 opacity-60" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">

          {V.map((v, i) => (
            <div
              key={i}
              className="group relative bg-white/70 backdrop-blur-md rounded-2xl p-6 lg:p-7 text-center border border-black/5 hover:border-[#C98C00]/30 shadow-[0_4px_20px_rgba(26,10,8,0.05)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2"
            >

              {/* ✨ top gradient glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-[#C98C00]/10 via-transparent to-transparent" />

              {/* ICON */}
              <div className="text-3xl mb-4 transition-transform duration-500 group-hover:scale-110">
                {v.icon}
              </div>

              {/* TITLE */}
              <h3 className="font-serif text-[17px] text-[#1A0A08] tracking-wide mb-2">
                {v.t}
              </h3>

              {/* DESCRIPTION */}
              <p className="font-body text-[13px] text-[#1A0A08]/55 leading-relaxed">
                {v.d}
              </p>

              {/* ✨ animated underline */}
              <div className="h-[1.5px] mt-5 w-0 group-hover:w-full transition-all duration-500 mx-auto rounded-full bg-gradient-to-r from-[#C98C00] to-[#CC0000]" />

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}