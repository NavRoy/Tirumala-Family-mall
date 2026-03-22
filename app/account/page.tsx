'use client'

import { useState } from 'react'
import { User, Package, Heart, MapPin, Settings, LogOut, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const MENU_ITEMS = [
  { icon: Package, label: 'My Orders', href: '/account/orders', count: 3 },
  { icon: Heart, label: 'Wishlist', href: '/wishlist', count: 5 },
  { icon: MapPin, label: 'Saved Addresses', href: '/account/addresses' },
  { icon: Settings, label: 'Account Settings', href: '/account/settings' },
]

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-10">
      <div className="max-w-[1000px] mx-auto px-4 lg:px-8">
        <h1 className="font-display text-4xl font-300 text-[#1A0A08] mb-8">My Account</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Profile card */}
            <div className="bg-grad-red rounded-3xl p-6 text-center mb-4">
              <div className="w-16 h-16 rounded-full bg-[#C98C00] flex items-center justify-center mx-auto mb-3">
                <User size={28} className="text-[#1A0A08]" />
              </div>
              <p className="font-display text-xl font-300 text-[#FAF6F0]">Welcome back!</p>
              <p className="font-body text-sm text-[#FAF6F0]/70 mt-1">member since 2025</p>
            </div>

            {/* Menu */}
            <div className="bg-white rounded-3xl shadow-card overflow-hidden">
              {MENU_ITEMS.map(({ icon: Icon, label, href, count }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center justify-between px-5 py-4 hover:bg-[#CC0000]/10 transition-colors border-b border-[#1A0A08]/15 last:border-0 group"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} className="text-[#CC0000]/70 group-hover:text-[#CC0000] transition-colors" />
                    <span className="font-body text-sm text-[#1A0A08]">{label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {count && <span className="font-body text-xs bg-[#CC0000]/10 text-[#CC0000] px-2 py-0.5 rounded-full">{count}</span>}
                    <ChevronRight size={14} className="text-[#1A0A08]/70" />
                  </div>
                </Link>
              ))}
              <button className="flex items-center gap-3 px-5 py-4 w-full hover:bg-[#CC0000]/10 transition-colors text-[#CC0000]">
                <LogOut size={18} />
                <span className="font-body text-sm">Log Out</span>
              </button>
            </div>
          </div>

          {/* Main area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-card">
              <h2 className="font-display text-2xl font-300 text-[#1A0A08] mb-6">Profile Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { label: 'First Name', placeholder: 'Priya' },
                  { label: 'Last Name', placeholder: 'Reddy' },
                  { label: 'Email', placeholder: 'priya@email.com' },
                  { label: 'Phone', placeholder: '+91 98765 43210' },
                ].map(({ label, placeholder }) => (
                  <div key={label}>
                    <label className="font-body text-xs text-[#1A0A08]/70 uppercase tracking-wider mb-2 block">
                      {label}
                    </label>
                    <input
                      type="text"
                      placeholder={placeholder}
                      className="w-full border border-[#1A0A08]/15 rounded-xl px-4 py-3 font-body text-sm text-[#1A0A08] outline-none focus:border-[#CC0000] transition-colors bg-[#FAF6F0]"
                    />
                  </div>
                ))}
              </div>
              <button className="mt-6 bg-[#CC0000] text-[#FAF6F0] px-8 py-3.5 rounded-xl font-body text-sm font-500 hover:bg-[#880000] transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
