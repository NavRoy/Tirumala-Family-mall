'use client'

const MSGS = [
  { text: '100+ Categories In Store', accent: false },
  { text: 'Free Shipping Above ₹999', accent: false },
  { text: 'New Arrivals Every Week', accent: true },
  { text: 'Easy 7-Day Returns', accent: false },
  { text: 'Insta Live Shopping', accent: false },
  { text: 'Authentic Indian Fashion', accent: true },
  { text: 'Cash on Delivery', accent: false },
  { text: 'Women · Men · Kids', accent: false },
  { text: 'Tirumala Family Mall', accent: true },
  { text: 'Best Prices in Srikakulam', accent: false },
]

const TRACK = [...MSGS, ...MSGS, ...MSGS]

function OrnUnit() {
  return (
    <span className="flex items-center">
      <span className="w-[26px] h-[1.5px] bg-gradient-to-r from-[#C9A84C] via-[#E2C068] to-[#C9A84C]" />
      <span className="w-[22px] h-[13px] rounded-full border border-[#C9A84C]/60 flex items-center justify-center bg-[#C9A84C]/10">
        <span className="w-[4px] h-[4px] rounded-full bg-[#C9A84C]/70" />
      </span>
    </span>
  )
}

function OrnBorder({ reverse = false }: { reverse?: boolean }) {
  const units = Array.from({ length: 60 })

  return (
    <div className="flex overflow-hidden py-1">
      <div className={`flex ${reverse ? 'marquee-rev' : 'marquee'}`}>
        {units.map((_, i) => <OrnUnit key={i} />)}
      </div>
      <div className={`flex ${reverse ? 'marquee-rev' : 'marquee'} -ml-full`}>
        {units.map((_, i) => <OrnUnit key={'b'+i} />)}
      </div>
    </div>
  )
}

export function MarqueeStrip() {
  return (
    <div className="bg-[#FAF6F0] overflow-hidden">

      <OrnBorder />

      <div className="flex overflow-hidden py-2">
        <div className="flex marquee-text">
          {TRACK.map((m, i) => (
            <span key={i} className="flex items-center">

              {i % 2 === 0 ? (
                <span className="w-[5px] h-[5px] rounded-full bg-[#CC0000]/40 mx-2" />
              ) : (
                <span className="text-[#C9A84C] mx-2 text-[9px]">✦</span>
              )}

              <span
                className={`whitespace-nowrap px-4 ${
                  m.accent
                    ? 'font-display italic text-[#C98C00]'
                    : 'font-body uppercase tracking-[0.25em] text-[#8B3A2A]/70 text-[11px]'
                }`}
              >
                {m.text}
              </span>

            </span>
          ))}
        </div>
      </div>

      <OrnBorder reverse />

    </div>
  )
}