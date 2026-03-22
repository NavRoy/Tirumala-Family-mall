import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Size Guide' }

const SIZE_CHART = [
  { size: 'XS', bust: '32"', waist: '26"', hip: '36"', length: '52"' },
  { size: 'S', bust: '34"', waist: '28"', hip: '38"', length: '53"' },
  { size: 'M', bust: '36"', waist: '30"', hip: '40"', length: '54"' },
  { size: 'L', bust: '38"', waist: '32"', hip: '42"', length: '55"' },
  { size: 'XL', bust: '40"', waist: '34"', hip: '44"', length: '56"' },
  { size: 'XXL', bust: '42"', waist: '36"', hip: '46"', length: '57"' },
]

export default function SizingPage() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] py-16">
      <div className="max-w-[900px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-body text-xs tracking-[0.3em] text-[#C98C00] uppercase mb-3">Perfect Fit</p>
          <h1 className="font-display text-5xl font-300 text-[#1A0A08]">Size Guide</h1>
          <p className="font-body text-[#1A0A08]/70 mt-3">Measure yourself accurately for the best fit.</p>
        </div>

        {/* How to measure */}
        <div className="bg-white rounded-3xl p-8 shadow-card mb-8">
          <h2 className="font-display text-2xl font-300 text-[#1A0A08] mb-6">How to Measure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Bust', instruction: 'Measure around the fullest part of your chest, keeping the tape horizontal.' },
              { label: 'Waist', instruction: 'Measure around the narrowest part of your waist, typically 1 inch above your navel.' },
              { label: 'Hip', instruction: 'Measure around the fullest part of your hips, about 8 inches below your waist.' },
            ].map((m) => (
              <div key={m.label} className="bg-[#FAF6F0] rounded-2xl p-5">
                <h3 className="font-body text-sm font-600 text-[#CC0000] mb-2">{m.label}</h3>
                <p className="font-body text-sm text-[#1A0A08]/70 leading-relaxed">{m.instruction}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Size chart */}
        <div className="bg-white rounded-3xl p-8 shadow-card">
          <h2 className="font-display text-2xl font-300 text-[#1A0A08] mb-6">Kurta & Top Size Chart</h2>
          <div className="overflow-x-auto">
            <table className="w-full font-body text-sm">
              <thead>
                <tr className="border-b border-[#C98C00]/20">
                  {['Size', 'Bust', 'Waist', 'Hip', 'Kurta Length'].map((h) => (
                    <th key={h} className="text-left py-3 px-4 text-xs font-500 text-[#1A0A08]/70 uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SIZE_CHART.map((row, i) => (
                  <tr key={row.size} className={`border-b border-[#1A0A08]/15 ${i % 2 === 0 ? 'bg-[#FAF6F0]' : ''}`}>
                    <td className="py-3.5 px-4 font-600 text-[#CC0000]">{row.size}</td>
                    <td className="py-3.5 px-4 text-[#1A0A08]/70">{row.bust}</td>
                    <td className="py-3.5 px-4 text-[#1A0A08]/70">{row.waist}</td>
                    <td className="py-3.5 px-4 text-[#1A0A08]/70">{row.hip}</td>
                    <td className="py-3.5 px-4 text-[#1A0A08]/70">{row.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-[#C98C00]/15 rounded-2xl p-4 border border-[#C98C00]/20">
            <p className="font-body text-sm text-[#1A0A08]/70">
              <span className="font-600 text-[#C98C00]">Pro tip:</span> For sarees, one size fits all.
              For sets and kurtis, if you're between sizes, we recommend sizing up for a comfortable fit.
              Contact us on WhatsApp for personalised sizing help.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
