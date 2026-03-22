import Link from 'next/link'
import { Instagram, Facebook, Youtube, Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react'

const COLS = [
  { title:"Women's Wear", links:[["Sarees","/sarees"],["Kurtis","/kurtis"],["Frocks","/frocks"],["Night Wear","/women/nightwear"],["Leggings","/women/leggings"],["3 Piece Sets","/sets/3-piece"],["Inner Wear","/women/innerwear"]] },
  { title:"Men's Wear",   links:[["Shirts","/men/shirts"],["T-Shirts","/men/t-shirts"],["Jeans","/men/jeans"],["Trousers","/men/trousers"],["Kurtha Shirts","/men/kurtas"],["Sherwani","/men/sherwani"],["Blazers","/men/blazers"]] },
  { title:"Kids Wear",    links:[["Boys Kurta Sets","/kids/boys/kurta-sets"],["Boys Sherwani","/kids/boys/sherwani"],["Girls Lehenga","/kids/girls/lehenga"],["Girls Frocks","/kids/girls/frocks"],["Boys Casual","/kids/boys/sets"]] },
  { title:"Help",         links:[["Size Guide","/sizing"],["Track Order","/track-order"],["Returns & Exchange","/returns"],["Shipping Policy","/shipping"],["FAQ","/faq"],["Contact Us","/contact"]] },
]

export function Footer() {
  return (
    <footer className="bg-[#1A0A08] text-white/55 overflow-hidden">

      {/* Top ornament line */}
      <div className="div-ornament w-full"/>

      {/* Newsletter */}
      <div className="border-b border-white/6" style={{background:'linear-gradient(135deg,#330000,#660000,#880000)'}}>
        <div className="max-w-[1440px] mx-auto px-4 lg:px-12 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-white text-2xl lg:text-3xl font-300">Join Our Fashion Circle</h3>
              <p className="font-body text-sm text-white/40 mt-1">Exclusive offers, early access & new arrival alerts</p>
            </div>
            <div className="flex w-full lg:w-auto max-w-md overflow-hidden rounded-xl border border-white/10">
              <input type="email" placeholder="Your email address" className="flex-1 bg-white/7 text-white placeholder:text-white/26 px-5 py-3.5 font-body text-sm outline-none"/>
              <button className="bg-[#C98C00] hover:bg-[#F5C040] text-[#1A0A08] px-6 py-3.5 font-body text-sm font-600 transition-colors shrink-0 flex items-center gap-2">
                Subscribe <ArrowRight size={13}/>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-12 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-3">
            <Link href="/" className="flex items-center gap-3 mb-5 group w-fit">
              <svg width="34" height="38" viewBox="0 0 90 100" fill="none">
                <path d="M45 3L84 15v43q0 22-39 38Q7 80 7 58V15z" fill="#CC0000"/>
                <path d="M45 11L77 21v36q0 18-32 32Q13 75 13 57V21z" fill="#1A0A08"/>
                <rect x="22" y="27" width="46" height="11" rx="3.5" fill="#CC0000"/>
                <rect x="22" y="38" width="15" height="32" rx="3" fill="#CC0000"/>
                <rect x="53" y="38" width="15" height="32" rx="3" fill="#CC0000"/>
              </svg>
              <div>
                <p className="font-display text-xl text-white font-300 leading-none group-hover:text-[#FFD700] transition-colors">Tirumala</p>
                <p className="font-display text-sm text-[#C98C00] italic font-300 leading-none">Family Mall</p>
              </div>
            </Link>

            <div className="h-px mb-5 div-gold"/>

            <p className="font-body text-[13px] text-white/38 leading-relaxed mb-6">
              Your complete fashion destination in Srikakulam — women's wear, men's wear, kids wear, and accessories all under one roof.
            </p>

            <div className="space-y-3 mb-7">
              <div className="flex items-start gap-3">
                <MapPin size={13} className="text-[#CC0000] shrink-0 mt-0.5"/>
                <p className="font-body text-[13px] text-white/40 leading-relaxed">Rotary Nagar 3, Old NH5<br/>Tekkali, Srikakulam District<br/>Andhra Pradesh</p>
              </div>
              <a href="tel:+919966248223" className="flex items-center gap-3 font-body text-[13px] text-white/40 hover:text-[#C98C00] transition-colors">
                <Phone size={12} className="text-[#CC0000] shrink-0"/> +91 99662 48223
              </a>
              <a href="https://wa.me/919966248223" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-[13px] text-white/40 hover:text-[#25D366] transition-colors">
                <MessageCircle size={12} className="text-[#25D366] shrink-0"/> WhatsApp: 9966248223
              </a>
            </div>

            <div className="flex gap-2.5">
              {[{Icon:Instagram,href:'https://www.instagram.com/tirumalafamilymall777/',l:'Instagram'},{Icon:Facebook,href:'https://facebook.com',l:'Facebook'},{Icon:Youtube,href:'https://youtube.com',l:'YouTube'}].map(({Icon,href,l})=>(
                <a key={l} href={href} target="_blank" rel="noopener noreferrer" aria-label={l}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-[#CC0000]/55 hover:text-[#CC0000] transition-all">
                  <Icon size={14}/>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-7 grid grid-cols-2 lg:grid-cols-4 gap-7 lg:px-5">
            {COLS.map(col=>(
              <div key={col.title}>
                <h4 className="font-body text-[9.5px] uppercase tracking-[.22em] text-[#C98C00] mb-4">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map(([lbl,href])=>(
                    <li key={lbl}><Link href={href} className="font-body text-[13px] text-white/34 hover:text-white transition-colors">{lbl}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA card */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-white/7 bg-white/4 p-6 space-y-4">
              <h4 className="font-display text-white text-lg font-300">Order on WhatsApp</h4>
              <p className="font-body text-[12px] text-white/36 leading-relaxed">Send your order details on WhatsApp. We ship within 24 hours pan-India.</p>
              <a href="https://wa.me/919966248223" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center py-3 rounded-xl bg-[#25D366] text-white font-body text-sm font-500 hover:bg-[#1ebe5d] transition-colors">
                <MessageCircle size={13}/> WhatsApp Order
              </a>
              <a href="https://www.instagram.com/tirumalafamilymall777/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center py-3 rounded-xl text-white font-body text-sm font-500 hover:opacity-85 transition-opacity"
                style={{background:'linear-gradient(135deg,#833AB4,#FD1D1D,#FCAF45)'}}>
                <Instagram size={13}/> @tirumalafamilymall777
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="font-body text-[11.5px] text-white/20 text-center lg:text-left">
            © 2026 Tirumala Family Mall. All rights reserved. Tekkali, Srikakulam, Andhra Pradesh.
          </p>
          <div className="flex items-center gap-5 flex-wrap justify-center">
            <Link href="/privacy" className="font-body text-[11.5px] text-white/20 hover:text-white/42 transition-colors">Privacy</Link>
            <Link href="/returns" className="font-body text-[11.5px] text-white/20 hover:text-white/42 transition-colors">Returns</Link>
            <Link href="/shipping" className="font-body text-[11.5px] text-white/20 hover:text-white/42 transition-colors">Shipping</Link>
            <span className="font-body text-[11.5px] text-white/16">UPI · PhonePe · GPay · COD</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
