# ANVAYA — Premium Women's Fashion E-Commerce

A full-stack Next.js 14 premium e-commerce website for Indian women's fashion, featuring a stunning 2026 luxury design aesthetic with deep plum, warm ivory, and gold branding.

---

## ✦ Live Features

- **Cinematic 3-slide hero section** with auto-advance and manual controls
- **Mega navigation menu** inspired by mypurvi.com and attach.co.in
- **Insta Live section** — dedicated page + homepage banner for Instagram Live shopping
- **Product cards** with hover image switch, quick-add-to-bag, wishlist toggle
- **Cart drawer** (slide-in from right) with quantity controls, free shipping progress
- **Wishlist drawer** with move-to-bag functionality
- **Announcement bar** with marquee scroll
- **Category grid** with asymmetric luxury layout (6 categories)
- **Testimonials carousel**
- **Instagram feed grid**
- **Brand values section**
- **Marquee strip** between hero and categories

## ✦ Pages Built

| Page | Route |
|---|---|
| Homepage | `/` |
| Shop All | `/shop` |
| Sarees | `/sarees` |
| Kurtis | `/kurtis` |
| Tops | `/tops` |
| Frocks | `/frocks` |
| Dress Materials | `/dress-materials` |
| 3 Piece Sets | `/sets/3-piece` |
| 2 Piece Sets | `/sets/2-piece` |
| **Insta Live** | `/insta-live` |
| New Arrivals | `/new-arrivals` |
| Bestsellers | `/bestsellers` |
| Sale | `/sale` |
| Product Detail | `/product/[slug]` |
| Cart | `/cart` |
| Wishlist | `/wishlist` |
| Checkout | `/checkout` |
| Account | `/account` |
| About | `/about` |
| Contact | `/contact` |
| Size Guide | `/sizing` |
| Returns | `/returns` |
| Shipping | `/shipping` |
| FAQ | `/faq` |
| Privacy | `/privacy` |
| 404 | `not-found.tsx` |

## ✦ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (custom design tokens)
- **Zustand** (cart + wishlist state, persisted to localStorage)
- **Framer Motion** (ready to use)
- **next/font** — Cormorant Garamond + Jost + Playfair Display
- **Lucide React** icons
- **next/image** for optimised images

## ✦ Design System

### Colour Palette
```
Plum (primary):  #5A1F60
Gold (accent):   #C98C00
Ivory (bg):      #F8F2E4
Charcoal (text): #1A1018
Blush (sale):    #E47E6E
```

### Typography
- **Display/Headings**: Cormorant Garamond (300, 400, 500, 600)
- **Body/UI**: Jost (300, 400, 500, 600)
- **Accent**: Playfair Display (400, 700)

---

## ✦ Getting Started

### 1. Install dependencies
```bash
cd anvaya
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

---

## ✦ Project Structure

```
anvaya/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (fonts, header, footer)
│   ├── page.tsx                # Homepage
│   ├── loading.tsx             # Global loading skeleton
│   ├── not-found.tsx           # 404 page
│   ├── shop/page.tsx           # Shop with filters
│   ├── product/[slug]/page.tsx # Product detail
│   ├── sarees/page.tsx
│   ├── kurtis/page.tsx
│   ├── tops/page.tsx
│   ├── frocks/page.tsx
│   ├── dress-materials/page.tsx
│   ├── sets/
│   │   ├── 3-piece/page.tsx
│   │   └── 2-piece/page.tsx
│   ├── insta-live/page.tsx     # ✦ Instagram Live shopping page
│   ├── new-arrivals/page.tsx
│   ├── bestsellers/page.tsx
│   ├── sale/page.tsx
│   ├── cart/page.tsx
│   ├── wishlist/page.tsx
│   ├── checkout/page.tsx
│   ├── account/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── sizing/page.tsx
│   ├── returns/page.tsx
│   ├── shipping/page.tsx
│   ├── faq/page.tsx
│   └── privacy/page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Premium header w/ mega menu
│   │   ├── Footer.tsx          # Full footer w/ newsletter
│   │   ├── AnnouncementBar.tsx # Scrolling announcement strip
│   │   ├── CartDrawer.tsx      # Slide-in cart panel
│   │   └── WishlistDrawer.tsx  # Slide-in wishlist panel
│   ├── sections/
│   │   ├── HeroSection.tsx     # Cinematic 3-slide hero
│   │   ├── MarqueeStrip.tsx    # Scrolling text banner
│   │   ├── CategoryGrid.tsx    # Asymmetric category grid
│   │   ├── FeaturedProducts.tsx# Tabbed product section
│   │   ├── InstaLiveBanner.tsx # Instagram Live promo section
│   │   ├── NewArrivals.tsx
│   │   ├── BrandValues.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── InstagramFeed.tsx
│   ├── product/
│   │   └── ProductCard.tsx     # Product card w/ hover effects
│   └── ui/
│       └── Toaster.tsx         # Toast notifications
│
├── lib/
│   ├── products.ts             # Product types, data, helpers
│   └── utils.ts                # cn() utility
│
├── hooks/
│   └── useScroll.ts            # Scroll hooks
│
├── store/
│   └── index.ts                # Zustand cart + wishlist stores
│
├── styles/
│   └── globals.css             # Global styles + CSS variables
│
├── tailwind.config.js          # Extended theme (colours, fonts, animations)
├── next.config.js
└── tsconfig.json
```

---

## ✦ Customisation Guide

### Adding Products
Edit `/lib/products.ts` — add objects to the `PRODUCTS` array following the `Product` interface.

### Changing Brand Colours
Update CSS variables in `/styles/globals.css` and the colour palette in `/tailwind.config.js`.

### Adding a New Page
Create a `page.tsx` file in `/app/your-route/` — the header and footer are included automatically via `layout.tsx`.

### Connecting a Real Backend
Replace the mock data in `/lib/products.ts` with API calls. The Zustand store is already set up for cart persistence.

---

## ✦ Insta Live Feature

The Insta Live section includes:
- Live badge with pulsing red dot on the homepage hero
- Dedicated `/insta-live` page with past sessions, how-it-works, and products
- Live product collection in the homepage banner
- Navigation link with sparkle icon in header
- Instagram badge in footer

To connect real Instagram Live data, integrate the Instagram Graph API or embed Instagram's live widget.

---

*Built for Anvaya — Premium Women's Fashion, Vizianagaram, Andhra Pradesh, India.*
