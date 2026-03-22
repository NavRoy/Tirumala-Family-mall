import { HeroSection }           from '@/components/sections/HeroSection'
import { CircleCategoryBubbles } from '@/components/sections/CircleCategoryBubbles'
import { MarqueeStrip }          from '@/components/sections/MarqueeStrip'
import { FeaturedCategories }      from '@/components/sections/FeaturedProducts'
import { ShopByCategoryGrid }    from '@/components/sections/ShopByCategoryGrid'
import { NewArrivals }           from '@/components/sections/NewArrivals'
import { PromoBannerStrip }      from '@/components/sections/PromoBannerStrip'
import { MensBestsellers }       from '@/components/sections/MensBestsellers'
import { KidsSection }           from '@/components/sections/KidsSection'
import { BrandValues }           from '@/components/sections/BrandValues'

import { SocialSpotlight }       from '@/components/sections/SocialSpotlight'
import { DiscoverStore }         from '@/components/sections/DiscoverStore'

export default function HomePage() {
  return (
    <>
      {/* 1 — Fullscreen hero slides (mobile ~55vh, desktop ~88vh) */}
      <HeroSection />

      {/* 2 — Scalloped circle categories (All / Women / Men / Kids) */}
      <CircleCategoryBubbles />

      {/* 3 — Full-width lotus marquee */}
      <MarqueeStrip />

      {/* 4 — Suta wavy Featured Categories + Most Loved tabs */}
     <FeaturedCategories />

      {/* 5 — 3-panel editorial grid (like screenshot 2) */}
      <ShopByCategoryGrid />

      {/* 6 — New Arrivals */}
      <NewArrivals />

      {/* 7 — Women + Men promo banners */}
      <PromoBannerStrip />

      {/* 8 — Men's Bestsellers (dark bg) */}
      <MensBestsellers />

      {/* 9 — Kids Boys + Girls split */}
      <KidsSection />

      {/* 10 — Brand values / trust signals */}
      <BrandValues />



      {/* 12 — Social Spotlight (fast-scroll reels like mypurvi) */}
      <SocialSpotlight />

      {/* 13 — Discover Our Store (above footer) */}
      <DiscoverStore />
    </>
  )
}
