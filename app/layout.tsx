import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import '../styles/globals.css'
import { Header }          from '@/components/layout/Header'
import { Footer }          from '@/components/layout/Footer'
import { CartDrawer }      from '@/components/layout/CartDrawer'
import { WishlistDrawer }  from '@/components/layout/WishlistDrawer'
import { AnnouncementBar } from '@/components/layout/AnnouncementBar'
import { Toaster }         from '@/components/ui/Toaster'

const cormorant = Cormorant_Garamond({ subsets:['latin'], weight:['300','400','500','600'], style:['normal','italic'], variable:'--font-display', display:'swap' })
const dmSans    = DM_Sans({ subsets:['latin'], weight:['300','400','500','600'], variable:'--font-body', display:'swap' })

export const metadata: Metadata = {
  title: { default:'Tirumala Family Mall — Fashion for Everyone', template:'%s | Tirumala Family Mall' },
  description:"Tirumala Family Mall — Tekkali, Srikakulam. Premium women's wear, men's ethnic wear, kids fashion. Sarees, kurtas, nighties, leggings, blazers and more.",
  keywords:['Tirumala Family Mall','fashion Srikakulam','sarees','ethnic wear','Tekkali'],
  metadataBase: new URL('https://tirumalafamilymall.in'),
}

export const viewport: Viewport = { width:'device-width', initialScale:1, themeColor:'#CC0000' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-body bg-[#FAF6F0] text-[#1A0A08] antialiased">
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <CartDrawer />
        <WishlistDrawer />
        <Toaster />
      </body>
    </html>
  )
}
