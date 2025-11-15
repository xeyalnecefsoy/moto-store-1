"use client"
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { Product } from '@/data/products'

type CartItem = {
  id: string
  name: string
  price: number
  image: string
  qty: number
}

type CartContextValue = {
  items: CartItem[]
  count: number
  subtotal: number
  add: (p: Product, qty?: number) => void
  remove: (id: string) => void
  update: (id: string, qty: number) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

function useLocalStorage<T>(key: string, initial: T) {
  const [state, setState] = useState<T>(initial)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(key)
      if (raw) setState(JSON.parse(raw))
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(state)) } catch {}
  }, [key, state])
  return [state, setState] as const
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useLocalStorage<CartItem[]>('moto-cart', [])

  const api = useMemo<CartContextValue>(() => ({
    items,
    count: items.reduce((n, i) => n + i.qty, 0),
    subtotal: items.reduce((s, i) => s + i.price * i.qty, 0),
    add: (p, qty = 1) => {
      setItems(prev => {
        const found = prev.find(i => i.id === p.id)
        if (found) return prev.map(i => i.id === p.id ? { ...i, qty: i.qty + qty } : i)
        return [...prev, { id: p.id, name: p.name, price: p.price, image: p.image, qty }]
      })
    },
    remove: (id) => setItems(prev => prev.filter(i => i.id !== id)),
    update: (id, qty) => setItems(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, qty) } : i)),
    clear: () => setItems([])
  }), [items, setItems])

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
