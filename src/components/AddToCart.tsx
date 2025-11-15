"use client"
import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import type { Product } from '@/data/products'

export default function AddToCart({ product }: { product: Product }) {
  const { add } = useCart()
  const [qty, setQty] = useState(1)
  return (
    <div className="mt-4 flex items-center gap-3">
      <div className="flex items-center border border-neutral-800 rounded-md">
        <button
          onClick={() => setQty(q => Math.max(1, q - 1))}
          className="px-3 py-2 hover:bg-neutral-900"
          aria-label="Decrease quantity"
        >
          −
        </button>
        <input
          className="w-14 bg-transparent text-center py-2"
          type="number"
          min={1}
          value={qty}
          onChange={e => setQty(Math.max(1, Number(e.target.value) || 1))}
        />
        <button
          onClick={() => setQty(q => q + 1)}
          className="px-3 py-2 hover:bg-neutral-900"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <button className="btn-primary" onClick={() => add(product, qty)}>
        Add to Cart
      </button>
    </div>
  )
}
