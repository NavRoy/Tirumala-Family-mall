import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] flex flex-col items-center justify-center px-4 text-center gap-6">
      <div className="w-28 h-28 rounded-full bg-[#CC0000] flex items-center justify-center shadow-[0_8px_32px_rgba(204,0,0,0.35)]">
        <span className="font-display text-4xl font-300 text-white">404</span>
      </div>
      <h1 className="font-display text-5xl font-300 text-[#1A0A08]">Page Not Found</h1>
      <p className="font-body text-[#1A0A08]/48 max-w-sm">The page you're looking for doesn't exist or has been moved.</p>
      <div className="flex gap-4">
        <Link href="/" className="flex items-center gap-2 bg-[#CC0000] text-white px-7 py-3.5 rounded-full font-body font-500 text-sm hover:bg-[#AA0000] transition-colors shadow-[0_4px_16px_rgba(204,0,0,0.3)]">
          <ArrowLeft size={14}/> Go Home
        </Link>
        <Link href="/shop" className="flex items-center gap-2 border border-[#CC0000]/25 text-[#CC0000] px-7 py-3.5 rounded-full font-body font-500 text-sm hover:bg-[#CC0000]/8 transition-colors">
          Shop All
        </Link>
      </div>
    </div>
  )
}
