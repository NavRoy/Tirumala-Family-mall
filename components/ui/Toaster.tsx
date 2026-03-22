'use client'
import { useEffect, useState } from 'react'
import { CheckCircle2, X } from 'lucide-react'

interface Toast { id: string; msg: string; type?: 'success'|'info'|'error' }
let listeners: ((t: Toast) => void)[] = []

export function showToast(msg: string, type: Toast['type'] = 'success') {
  const t: Toast = { id: Date.now().toString(), msg, type }
  listeners.forEach(l => l(t))
}

export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([])
  useEffect(() => {
    const handler = (t: Toast) => {
      setToasts(p => [...p, t])
      setTimeout(() => setToasts(p => p.filter(x => x.id !== t.id)), 3200)
    }
    listeners.push(handler)
    return () => { listeners = listeners.filter(l => l !== handler) }
  }, [])

  if (!toasts.length) return null
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] flex flex-col gap-2 pointer-events-none">
      {toasts.map(t => (
        <div key={t.id} className="flex items-center gap-3 bg-[#1A0A08] text-white px-5 py-3.5 rounded-2xl shadow-xl anim-fade-up pointer-events-auto min-w-[240px]">
          <CheckCircle2 size={15} className="text-[#C98C00] shrink-0"/>
          <span className="font-body text-sm">{t.msg}</span>
        </div>
      ))}
    </div>
  )
}
