// ─── Types ───────────────────────────────────────────────────────────────────

export interface Product {
  id: string; slug: string; name: string; description: string
  price: number; originalPrice?: number; discount?: number
  category: string; gender: 'women' | 'men' | 'kids-boys' | 'kids-girls' | 'unisex'
  images: string[]; colors: ColorOption[]; sizes: string[]
  fabric?: string; care?: string[]; tags: string[]
  badge?: 'new' | 'bestseller' | 'sale' | 'limited' | 'insta-live'
  rating: number; reviewCount: number; inStock: boolean
  featured?: boolean; createdAt: string
}

export interface ColorOption { name: string; hex: string }

export interface CartItem {
  product: Product; quantity: number
  selectedColor: ColorOption; selectedSize: string
}

// ─── GENTS WEAR — Full Navigation Tree ───────────────────────────────────────

export const GENTS_NAV: Record<string, Record<string, string[]>> = {
  'Shirts': {
    'Full Hand Shirts': ['Slim Fit', 'Plain', 'Printed', 'Checks', 'Cotton', 'Party Wear'],
    'Half Hand Shirts': ['Slim Fit', 'Plain', 'Printed', 'Checks', 'Cotton', 'Party Wear'],
  },
  'T-Shirts': {
    'Full Hand T-Shirts': ['Slim Fit', 'Plain', 'Printed', 'Checks', 'Collar Neck', 'Round Neck'],
    'Half Hand T-Shirts': ['Slim Fit', 'Plain', 'Printed', 'Checks', 'Up Down'],
    'Sports T-Shirts': ['Cotton', 'Party Wear'],
  },
  'Jeans': {
    'All Fits': ['Slim Fit', 'Ankle Fit', 'Baggy Fit', 'Mom Fit', 'Regular Fit'],
  },
  'Trousers': {
    'Cotton Trousers': ['Slim Fit', 'Ankle Fit', 'Baggy Fit', 'Mom Fit', 'Regular Fit', 'Linen', 'Cargo'],
  },
  'Tracks & Shorts': {
    'Tracks': ['Cotton', 'Sports Wear', 'Grip', 'Cargo', 'Hosiery'],
    'Off Shorts': ['Cotton', 'Sports Wear', 'Hosiery', 'Cargo'],
    '3/4 Shorts': ['Cotton', 'Sports Wear', 'Hosiery', 'Cargo'],
    'Boxers': ['Checks', 'Printed'],
  },
  'Inner Wear': {
    'Baniyan': ['Cutting Style', 'Sleeveless'],
    'Drawers': ['Cutting Style', 'Full Length'],
    'Brands': ['Jockey', 'Poomex', 'Dixey Scott'],
  },
  'Ethnic Wear': {
    'Kurtha Shirts': ['Short Length', 'Medium Length', 'Long Length'],
    'Sherwani': ['Simple', 'DJ Tillu', 'Indo West', 'Modi Style'],
    'Modi Coats': ['Plain', 'Printed', 'Checks'],
    'Blazers': ['Single', '2 PC Set', '3 PC Set', '4 PC Set', '5 PC Set'],
    'Ramraj': ['Single Panchi', 'Dhoti', 'Panchi Shirt Set', 'Dhoti Shirt Set', 'Linen Shirts (White)', 'Kerchief'],
    'Minister White': ['Single Panchi', 'Dhoti', 'Panchi Shirt Set', 'Dhoti Shirt Set', 'Linen Shirts (White)', 'Kerchief'],
  },
  'Accessories': {
    'Leather Belts': ['All Styles'],
    'Socks': ['Ankle', 'Regular'],
    'Caps': ['Cotton', 'Winter', 'Sports Wear'],
    'Masks': ['Cotton', 'Winter Wear'],
    'Misc': ['Gloves', 'Ties', 'Sherwani Caps', 'Glasses'],
  },
  'Winter & Seasonal': {
    'All': ['Sweaters', 'Rain Coats', 'Leather Jackets', 'Jeans Jackets'],
  },
  'Home & Others': {
    'All': ['Towels', 'Lungies'],
  },
}

// ─── LADIES WEAR — Full Navigation Tree (104 categories) ─────────────────────

export const LADIES_NAV: Record<string, Record<string, string[]>> = {
  'Frocks & Tops': {
    'Frocks': ['Long Frocks', 'Anarkali Dresses', 'Naira Cut', 'Alia Cut Dresses', 'Umbrella Tops', 'Nayara Model'],
    'Tops': ['Jean Tops', 'Long Tops', 'Middle Tops', 'Western Tops', 'Crop T-Shirts', 'Round Neck T-Shirts', 'Full Hand Hoodies'],
    'Middies': ['Long Middies (Single)', 'Short Middie', 'Jem Suit Middie'],
  },
  'Ethnic Wear': {
    'Sarees': ['Saree Models'],
    'Half Sarees': ['Half Sarees', 'Vanees'],
    'Salwar Suits': ['Chudidars', '3 PC Chudidar (Cutting)', 'Patiyala Dresses', 'Sarara Models', 'Pep Line Model'],
    'Lehenga': ['Lehanga Model'],
    'Kurtas': ['Short', 'Medium', 'Long'],
    'Dress Materials': ['All Types'],
    'Jem Suits': ['Jem Suits'],
  },
  'Western Wear': {
    'Jeans': ['Jean Pants (Slim Fit)', 'Cargo Jeans', 'Mom Fit Jeans', '3/4 Jeans', 'Short Jeans', 'Jean Middies'],
    'Coord Sets': ['Cord Set Dresses'],
    'Coats': ['Overcoats (Banian)', 'Jean Coats', 'Jean Shirts'],
  },
  'Night Wear': {
    'Regular Nighties': ['Regular Nighties', 'Charak Nighties', 'Charak Frock Nighties', 'Sheetal Nighties'],
    'Special Nighties': ['Bell Hands Nighties', 'Smoke Nighties', 'Butta Nighties', 'Collar Nighties', 'Square Nighties', 'Elastic Nighties', 'Round Neck Nighties'],
    'Mother Wear': ['Mother Nighties', 'Mother Nighties (Banian)', 'Mother Tops', 'Mother Chudidars'],
    'Full Night Dresses': ['Full Night Dresses', '3/4 Night Dresses'],
    'Inners': ['Inners Nighty (Plain)', 'Inners Nighty (BRA Inner)', 'Sappers (Low Langs)'],
  },
  'Leggings': {
    'Prisma': ['Ankle Length', 'Full Length'],
    'Royal': ['Full Length', 'Ankle Length'],
    'Manvi': ['Full Length', 'Ankle Length'],
    'Twin Birds': ['Full Length', 'Ankle Length'],
    'Simmer': ['Ankle Length', 'Full Length'],
    'Slimz': ['Full Length', 'Ankle Length', '3/4 Length'],
  },
  'Bottoms': {
    'Trousers': ['Single Trousers Pants (Fancy)', 'Simmer Trousers (Twin Birds)', 'Trousers (Rion Cloth)'],
    'Plazo Pants': ['Single Plazo Pants', 'Banian Cloth Plazo Pants', 'Plazo (Rion Cloth)'],
    'Patiyala': ['Cotton Patiyala (Single)', 'Banian Cloth Patiyala (Single)'],
    'Shorts': ['Yoga Shorts'],
  },
  'Inner Wear': {
    'Bras — Jockey': ['Jockey Bras (Hooks)', 'Jockey Bras (Sports)'],
    'Bras — Alfa': ['Alfa Bras (Hooks)', 'Alfa Bras (Sports)', 'Alfa Bras (Glory Sports)'],
    'Bras — Daisy': ['Daisy Bras Hooks', 'Daisy Bras Sports'],
    'Bras — Intimincy': ['Intimincy Bras Hooks', 'Intimincy Bras Sports', 'Intimincy Feeding Bras', 'Intimincy Cup Bras'],
    'Drawers & Slips': ['Alfa Drawers', 'Alfa Semizs', 'Alfa Thamanna Semizs', 'Alfa Nancy Semizs', 'Poomex Drawers', 'Jockey Drawers', 'Jockey Semizs', 'Intimincy Drawers'],
    'Blouses': ['Banian Cloth Blouses (Plain)', 'Fancy Blouses', 'Regular Blouses'],
  },
  'Accessories': {
    'Dupattas': ['Plain Chunnies', 'Fancy Chunnies', 'Simmer Chunnies', 'Scarfs'],
    'Accessories': ['Hip Belts (Gold)', 'Hip Belts (Silver)'],
  },
}

// ─── Circle category bubbles (homepage) ──────────────────────────────────────

export const CIRCLE_CATEGORIES = [
  { id: 'sarees', name: 'Sarees', href: '/sarees', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80', gender: 'women' },
  { id: 'kurtis', name: 'Kurtis', href: '/kurtis', image: 'https://images.unsplash.com/photo-1573227895226-66e7a51a7ed2?w=400&q=80', gender: 'women' },
  { id: 'frocks', name: 'Frocks', href: '/frocks', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80', gender: 'women' },
  { id: 'leggings', name: 'Leggings', href: '/women/leggings', image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&q=80', gender: 'women' },
  { id: 'nightwear', name: 'Night Wear', href: '/women/nightwear', image: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&q=80', gender: 'women' },
  { id: 'half-sarees', name: 'Half Sarees', href: '/women/half-sarees', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&q=80', gender: 'women' },
  { id: 'men-shirts', name: 'Shirts', href: '/men/shirts', image: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=400&q=80', gender: 'men' },
  { id: 'men-ethnic', name: 'Men Ethnic', href: '/men/ethnic', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80', gender: 'men' },
  { id: 'blazers', name: 'Blazers', href: '/men/blazers', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80', gender: 'men' },
  { id: 'boys-ethnic', name: 'Boys Ethnic', href: '/kids/boys/kurta-sets', image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=400&q=80', gender: 'kids' },
  { id: 'girls-frocks', name: 'Girls Frocks', href: '/kids/girls/frocks', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80', gender: 'kids' },
]

// ─── Products ─────────────────────────────────────────────────────────────────

const I = {
  s1: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80',
  s2: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80',
  s3: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80',
  e1: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
  e2: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
  e3: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&q=80',
  k1: 'https://images.unsplash.com/photo-1573227895226-66e7a51a7ed2?w=800&q=80',
  k2: 'https://images.unsplash.com/photo-1607346705516-8eca5b20e7d8?w=800&q=80',
  f1: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80',
  f2: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4dfa?w=800&q=80',
  f3: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800&q=80',
  f4: 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=800&q=80',
  f5: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80',
  f6: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
  m1: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=800&q=80',
  m2: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
  m3: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80',
}

export const PRODUCTS: Product[] = [
  // WOMEN
  { id:'w1', slug:'kanjivaram-silk-saree-deep-plum', gender:'women', name:'Kanjivaram Silk Saree — Deep Plum', description:'Handwoven pure Kanjivaram silk saree in rich deep plum with traditional zari border. A true heirloom.', price:8999, originalPrice:12999, discount:31, category:'sarees', images:[I.s1,I.s2,I.s3], colors:[{name:'Deep Plum',hex:'#5A1F60'},{name:'Royal Blue',hex:'#1B3A7A'}], sizes:['Free Size'], fabric:'Pure Kanjivaram Silk', care:['Dry clean only'], tags:['silk','wedding','festive'], badge:'bestseller', rating:4.9, reviewCount:234, inStock:true, featured:true, createdAt:'2026-01-15' },
  { id:'w2', slug:'chanderi-cotton-saree-ivory', gender:'women', name:'Chanderi Cotton Saree — Ivory Gold', description:'Lightweight Chanderi cotton saree with delicate gold motifs. Perfect for everyday elegance.', price:2499, originalPrice:3499, discount:28, category:'sarees', images:[I.s2,I.s1,I.s3], colors:[{name:'Ivory Gold',hex:'#C98C00'},{name:'Rose Pink',hex:'#E47E6E'}], sizes:['Free Size'], fabric:'Chanderi Cotton', tags:['cotton','casual'], badge:'new', rating:4.7, reviewCount:89, inStock:true, featured:true, createdAt:'2026-02-01' },
  { id:'w3', slug:'banarasi-silk-saree-heritage-red', gender:'women', name:'Banarasi Silk Saree — Heritage Red', description:'Quintessential bridal Banarasi in deep heritage red with gold brocade.', price:15999, originalPrice:22000, discount:27, category:'sarees', images:[I.s3,I.s1,I.s2], colors:[{name:'Heritage Red',hex:'#8B1A1A'},{name:'Royal Purple',hex:'#5A1F60'}], sizes:['Free Size'], fabric:'Pure Banarasi Silk', tags:['banarasi','bridal','wedding'], badge:'bestseller', rating:5.0, reviewCount:312, inStock:true, featured:true, createdAt:'2025-12-01' },
  { id:'w4', slug:'anarkali-3pc-set-rose-dust', gender:'women', name:'Anarkali 3 Piece Set — Rose Dust', description:'Breathtaking Anarkali suit in muted rose with thread embroidery. Includes dupatta and salwar.', price:3999, originalPrice:5499, discount:27, category:'3-piece-sets', images:[I.e1,I.e2,I.e3], colors:[{name:'Rose Dust',hex:'#E8C4B8'},{name:'Sage',hex:'#8FAF8F'}], sizes:['XS','S','M','L','XL','XXL'], fabric:'Georgette', tags:['anarkali','festive','embroidered'], badge:'bestseller', rating:4.8, reviewCount:156, inStock:true, featured:true, createdAt:'2026-01-20' },
  { id:'w5', slug:'coord-set-marigold', gender:'women', name:"Co-ord 2 Piece Set — Marigold Print", description:'Contemporary co-ord in vibrant marigold block print. Cinched top and wide-leg pants.', price:1949, originalPrice:2799, discount:30, category:'2-piece-sets', images:[I.e2,I.e1,I.f1], colors:[{name:'Marigold',hex:'#F5AB0A'},{name:'Indigo',hex:'#3D52A0'}], sizes:['S','M','L','XL'], fabric:'Pure Cotton', tags:['coord','casual','printed'], badge:'insta-live', rating:4.6, reviewCount:78, inStock:true, createdAt:'2026-03-01' },
  { id:'w6', slug:'embroidered-kurta-lilac', gender:'women', name:'Embroidered Straight Kurta — Lilac', description:'Sophisticated straight-cut kurta in soft lilac with floral embroidery at neckline and hem.', price:1299, originalPrice:1899, discount:32, category:'kurtis', images:[I.k1,I.k2,I.f2], colors:[{name:'Lilac',hex:'#C5A3D4'},{name:'Peach',hex:'#FFCBA4'}], sizes:['XS','S','M','L','XL','XXL'], fabric:'Rayon', tags:['kurta','casual','office'], badge:'new', rating:4.5, reviewCount:112, inStock:true, createdAt:'2026-02-15' },
  { id:'w7', slug:'floral-midi-frock', gender:'women', name:'Floral Midi Frock — Blush Garden', description:'Dreamy floral midi dress with puffed sleeves and nipped waist.', price:1599, originalPrice:2199, discount:27, category:'frocks', images:[I.f6,I.f1,I.f5], colors:[{name:'Blush Garden',hex:'#F8D8D4'},{name:'Lavender',hex:'#C5A3D4'}], sizes:['XS','S','M','L','XL'], fabric:'Georgette', tags:['floral','casual','midi'], badge:'new', rating:4.7, reviewCount:145, inStock:true, createdAt:'2026-03-05' },
  { id:'w8', slug:'palazzo-set-3pc-teal', gender:'women', name:'Cotton Palazzo Set 3 Piece — Teal Bloom', description:'Breezy cotton palazzo set with kurta, wide-leg pants, and stole. Hand block-printed.', price:2299, originalPrice:3199, discount:28, category:'3-piece-sets', images:[I.e2,I.e3,I.e1], colors:[{name:'Teal',hex:'#2A7F7F'},{name:'Coral',hex:'#E47E6E'}], sizes:['S','M','L','XL','XXL'], fabric:'Pure Cotton', tags:['palazzo','block-print'], badge:'insta-live', rating:4.8, reviewCount:201, inStock:true, createdAt:'2026-02-10' },
  { id:'w9', slug:'linen-saree-rust', gender:'women', name:'Linen Saree — Rust & Natural', description:'Eco-conscious handloom linen saree in earthy rust tones. Breathable and sustainable.', price:1849, originalPrice:2499, discount:26, category:'sarees', images:[I.s2,I.s3,I.s1], colors:[{name:'Rust',hex:'#C1440E'},{name:'Natural',hex:'#D4C5A9'}], sizes:['Free Size'], fabric:'Handloom Linen', tags:['linen','handloom','casual'], rating:4.6, reviewCount:98, inStock:true, createdAt:'2026-01-10' },

  // MEN
  { id:'m1', slug:'mens-slim-fit-printed-shirt', gender:'men', name:'Slim Fit Printed Shirt — Navy Geometric', description:'Premium slim fit full-hand printed shirt. Perfect for casual and semi-formal occasions.', price:899, originalPrice:1299, discount:31, category:'shirts', images:[I.m1,I.m2,I.m3], colors:[{name:'Navy',hex:'#1B3A7A'},{name:'White',hex:'#F5F5F5'}], sizes:['S','M','L','XL','XXL'], fabric:'Cotton Blend', tags:['shirt','slim-fit','casual'], badge:'new', rating:4.5, reviewCount:89, inStock:true, featured:true, createdAt:'2026-02-01' },
  { id:'m2', slug:'indo-west-sherwani-ivory', gender:'men', name:'Indo-West Sherwani Set — Ivory Gold', description:'Elegant Indo-Western sherwani for weddings. Includes churidar and dupatta.', price:12999, originalPrice:18000, discount:28, category:'sherwani', images:[I.m2,I.m1,I.m3], colors:[{name:'Ivory Gold',hex:'#C98C00'},{name:'Royal Blue',hex:'#1B3A7A'}], sizes:['S','M','L','XL','XXL'], fabric:'Brocade Silk', tags:['sherwani','wedding','festive'], badge:'bestseller', rating:4.9, reviewCount:167, inStock:true, featured:true, createdAt:'2026-01-10' },
  { id:'m3', slug:'cotton-kurtha-medium', gender:'men', name:'Cotton Kurtha Shirt — Medium Length', description:'Classic medium-length kurtha in breathable cotton. Ideal for festive and daily ethnic wear.', price:699, originalPrice:999, discount:30, category:'kurtha-shirts', images:[I.m3,I.m1,I.m2], colors:[{name:'White',hex:'#F5F5F5'},{name:'Cream',hex:'#F8F2E4'},{name:'Sky Blue',hex:'#87CEEB'}], sizes:['S','M','L','XL','XXL'], fabric:'Pure Cotton', tags:['kurtha','ethnic','daily-wear'], badge:'new', rating:4.6, reviewCount:234, inStock:true, createdAt:'2026-02-20' },
  { id:'m4', slug:'slim-fit-jeans-dark-indigo', gender:'men', name:'Slim Fit Jeans — Dark Indigo', description:'Premium slim-fit jeans in dark indigo wash. Comfortable stretch fabric.', price:1299, originalPrice:1899, discount:32, category:'jeans', images:[I.m1,I.m3,I.m2], colors:[{name:'Dark Indigo',hex:'#1B3A7A'},{name:'Black',hex:'#1a1018'}], sizes:['28','30','32','34','36','38'], fabric:'Denim', tags:['jeans','casual','slim-fit'], badge:'bestseller', rating:4.7, reviewCount:312, inStock:true, createdAt:'2026-01-15' },
  { id:'m5', slug:'ramraj-dhoti-panchi', gender:'men', name:'Ramraj Dhoti Panchi Set', description:'Authentic Ramraj cotton dhoti and panchi shirt set. Pure white, traditional South Indian style.', price:1499, originalPrice:1999, discount:25, category:'ramraj', images:[I.m2,I.m3,I.m1], colors:[{name:'Pure White',hex:'#F5F5F5'}], sizes:['Free Size','M','L','XL'], fabric:'Pure Cotton', tags:['ramraj','dhoti','traditional'], badge:'bestseller', rating:4.8, reviewCount:445, inStock:true, createdAt:'2025-12-15' },
  { id:'m6', slug:'blazer-3pc-charcoal', gender:'men', name:'3 Piece Blazer Set — Charcoal', description:'Premium 3-piece blazer set: blazer, trouser, and waistcoat in charcoal grey.', price:7999, originalPrice:11999, discount:33, category:'blazers', images:[I.m3,I.m2,I.m1], colors:[{name:'Charcoal',hex:'#36454F'},{name:'Navy',hex:'#1B3A7A'}], sizes:['S','M','L','XL','XXL'], fabric:'Polyester Blend', tags:['blazer','formal','wedding'], badge:'new', rating:4.6, reviewCount:78, inStock:true, featured:true, createdAt:'2026-02-25' },
  { id:'m7', slug:'modi-coat-printed', gender:'men', name:'Modi Coat — Printed Festive', description:'Stylish printed Modi coat in festive colours. Perfect ethnic statement piece.', price:2499, originalPrice:3499, discount:29, category:'modi-coats', images:[I.m2,I.m1,I.m3], colors:[{name:'Maroon',hex:'#800020'},{name:'Navy',hex:'#1B3A7A'}], sizes:['S','M','L','XL','XXL'], fabric:'Polyester Blend', tags:['modi-coat','ethnic','festive'], badge:'new', rating:4.5, reviewCount:56, inStock:true, createdAt:'2026-03-01' },

  // KIDS BOYS
  { id:'kb1', slug:'boys-kurta-festive-gold', gender:'kids-boys', name:"Boys Kurta Set — Festive Gold", description:'Adorable festive kurta and churidar set for little princes.', price:799, originalPrice:1199, discount:33, category:'kurta-sets', images:[I.e3,I.e1,I.e2], colors:[{name:'Gold',hex:'#C98C00'},{name:'Royal Blue',hex:'#1B3A7A'}], sizes:['2-3Y','3-4Y','4-5Y','5-6Y','6-7Y','7-8Y','8-9Y','9-10Y'], fabric:'Cotton Blend', tags:['kids','festive','kurta'], badge:'new', rating:4.7, reviewCount:56, inStock:true, createdAt:'2026-02-10' },
  { id:'kb2', slug:'boys-sherwani-wedding', gender:'kids-boys', name:"Boys Sherwani — Wedding Collection", description:'Mini sherwani for little boys at weddings and special occasions.', price:1499, originalPrice:2199, discount:32, category:'sherwani', images:[I.m2,I.e3,I.e1], colors:[{name:'Ivory',hex:'#F8F2E4'},{name:'Wine',hex:'#722F37'}], sizes:['2-3Y','3-4Y','4-5Y','5-6Y','6-7Y','7-8Y'], fabric:'Brocade', tags:['kids','sherwani','wedding'], badge:'bestseller', rating:4.8, reviewCount:89, inStock:true, createdAt:'2026-01-15' },
  { id:'kb3', slug:'boys-casual-tshirt-printed', gender:'kids-boys', name:"Boys Printed T-Shirt Set", description:'Fun printed t-shirt and shorts combo for everyday play.', price:499, originalPrice:699, discount:29, category:'t-shirts', images:[I.f3,I.f4,I.f5], colors:[{name:'Sky Blue',hex:'#87CEEB'},{name:'Orange',hex:'#F5AB0A'}], sizes:['2-3Y','3-4Y','4-5Y','5-6Y','6-7Y','7-8Y'], fabric:'Cotton', tags:['kids','casual','play-wear'], badge:'bestseller', rating:4.5, reviewCount:89, inStock:true, createdAt:'2026-01-20' },

  // KIDS GIRLS
  { id:'kg1', slug:'girls-lehenga-festive-pink', gender:'kids-girls', name:"Girls Lehenga Set — Festive Pink", description:'Beautiful lehenga choli set for little girls. Perfect for festivals and celebrations.', price:1299, originalPrice:1899, discount:32, category:'lehenga', images:[I.e2,I.e1,I.f6], colors:[{name:'Pink',hex:'#F8D8D4'},{name:'Purple',hex:'#C5A3D4'}], sizes:['2-3Y','3-4Y','4-5Y','5-6Y','6-7Y','7-8Y','8-9Y','9-10Y'], fabric:'Net & Silk', tags:['kids','lehenga','festive'], badge:'bestseller', rating:4.8, reviewCount:134, inStock:true, createdAt:'2026-01-15' },
  { id:'kg2', slug:'girls-floral-frock', gender:'kids-girls', name:"Girls Floral Frock — Summer Bloom", description:'Pretty floral frock for girls. Light and comfortable for daily wear.', price:699, originalPrice:999, discount:30, category:'frocks', images:[I.f6,I.f5,I.f4], colors:[{name:'Floral Pink',hex:'#F8D8D4'},{name:'Yellow',hex:'#F5AB0A'}], sizes:['2-3Y','3-4Y','4-5Y','5-6Y','6-7Y','7-8Y'], fabric:'Cotton', tags:['kids','frock','casual'], badge:'new', rating:4.6, reviewCount:78, inStock:true, createdAt:'2026-02-20' },
  { id:'kg3', slug:'girls-kurta-set-ethnic', gender:'kids-girls', name:"Girls Kurta Plazo Set — Ethnic", description:'Cute ethnic kurta plazo set for festive occasions and daily wear.', price:899, originalPrice:1299, discount:31, category:'kurta-sets', images:[I.e1,I.e2,I.k1], colors:[{name:'Lilac',hex:'#C5A3D4'},{name:'Mint',hex:'#A8D5BA'}], sizes:['2-3Y','3-4Y','4-5Y','5-6Y','6-7Y','7-8Y','8-9Y','9-10Y'], fabric:'Cotton', tags:['kids','ethnic','kurta'], badge:'new', rating:4.7, reviewCount:67, inStock:true, createdAt:'2026-02-25' },
]

// ─── Derived collections ──────────────────────────────────────────────────────

export const FEATURED_PRODUCTS   = PRODUCTS.filter((p) => p.featured)
export const NEW_ARRIVALS        = PRODUCTS.filter((p) => p.badge === 'new').slice(0, 8)
export const BESTSELLERS         = PRODUCTS.filter((p) => p.badge === 'bestseller').slice(0, 8)
export const INSTA_LIVE_PRODUCTS = PRODUCTS.filter((p) => p.badge === 'insta-live')

export function formatPrice(n: number): string {
  return `₹\u00A0${n.toLocaleString('en-IN')}`
}
export function getProductsByCategory(cat: string): Product[] {
  return PRODUCTS.filter((p) => p.category === cat)
}
export function getProductsByGender(g: Product['gender']): Product[] {
  return PRODUCTS.filter((p) => p.gender === g)
}
export const CATEGORIES = [
  'sarees',
  'kurtis',
  'frocks',
  'leggings',
  'nightwear',
  'shirts',
  't-shirts',
  'jeans',
  'blazers',
  'kurta-sets',
  'sherwani',
];


