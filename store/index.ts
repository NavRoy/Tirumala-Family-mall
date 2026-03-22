import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CartItem, Product, ColorOption } from '@/lib/products'

// ─── Cart Store ───────────────────────────────────────────────────────────────

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  addItem: (product: Product, color: ColorOption, size: string, qty?: number) => void
  removeItem: (productId: string, color: string, size: string) => void
  updateQuantity: (productId: string, color: string, size: string, qty: number) => void
  clearCart: () => void
  totalItems: () => number
  totalPrice: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((s) => ({ isOpen: !s.isOpen })),

      addItem: (product, color, size, qty = 1) => {
        set((state) => {
          const key = `${product.id}-${color.name}-${size}`
          const existing = state.items.find(
            (i) => i.product.id === product.id && i.selectedColor.name === color.name && i.selectedSize === size
          )
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.product.id === product.id && i.selectedColor.name === color.name && i.selectedSize === size
                  ? { ...i, quantity: i.quantity + qty }
                  : i
              ),
            }
          }
          return {
            items: [...state.items, { product, quantity: qty, selectedColor: color, selectedSize: size }],
          }
        })
        get().openCart()
      },

      removeItem: (productId, color, size) =>
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.product.id === productId && i.selectedColor.name === color && i.selectedSize === size)
          ),
        })),

      updateQuantity: (productId, color, size, qty) =>
        set((state) => ({
          items: qty <= 0
            ? state.items.filter(
                (i) => !(i.product.id === productId && i.selectedColor.name === color && i.selectedSize === size)
              )
            : state.items.map((i) =>
                i.product.id === productId && i.selectedColor.name === color && i.selectedSize === size
                  ? { ...i, quantity: qty }
                  : i
              ),
        })),

      clearCart: () => set({ items: [] }),

      totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

      totalPrice: () => get().items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
    }),
    { name: 'tirumala-family-mall-cart' }
  )
)

// ─── Wishlist Store ───────────────────────────────────────────────────────────

interface WishlistStore {
  items: Product[]
  isOpen: boolean
  openWishlist: () => void
  closeWishlist: () => void
  toggleWishlist: () => void
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  isInWishlist: (productId: string) => boolean
  toggleItem: (product: Product) => void
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      openWishlist: () => set({ isOpen: true }),
      closeWishlist: () => set({ isOpen: false }),
      toggleWishlist: () => set((s) => ({ isOpen: !s.isOpen })),

      addItem: (product) =>
        set((state) => ({
          items: state.items.find((i) => i.id === product.id)
            ? state.items
            : [...state.items, product],
        })),

      removeItem: (productId) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== productId) })),

      isInWishlist: (productId) => get().items.some((i) => i.id === productId),

      toggleItem: (product) => {
        const store = get()
        if (store.isInWishlist(product.id)) {
          store.removeItem(product.id)
        } else {
          store.addItem(product)
        }
      },
    }),
    { name: 'tirumala-family-mall-wishlist' }
  )
)

// ─── UI Store ─────────────────────────────────────────────────────────────────

interface UIStore {
  searchOpen: boolean
  mobileMenuOpen: boolean
  openSearch: () => void
  closeSearch: () => void
  openMobileMenu: () => void
  closeMobileMenu: () => void
}

export const useUIStore = create<UIStore>()((set) => ({
  searchOpen: false,
  mobileMenuOpen: false,
  openSearch: () => set({ searchOpen: true }),
  closeSearch: () => set({ searchOpen: false }),
  openMobileMenu: () => set({ mobileMenuOpen: true }),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),
}))
