"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export default function CartPage() {
  const { items, subtotal, remove, update, clear } = useCart()

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Your Cart</h1>

      {items.length === 0 ? (
        <div className="card p-6 text-neutral-400">
          Your cart is empty.{' '}
          <Link className="text-primary hover:underline" href="/products">Browse products</Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-[1fr,320px]">
          <div className="space-y-3">
            {items.map(it => (
              <div key={it.id} className="card p-3 flex items-center gap-4">
                <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-md">
                  <Image src={it.image} alt={it.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold leading-tight">{it.name}</div>
                  <div className="text-sm text-neutral-400">${it.price.toLocaleString()}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-2 py-1 rounded border border-neutral-800 hover:bg-neutral-900" onClick={() => update(it.id, it.qty - 1)}>-</button>
                  <input className="w-12 bg-transparent text-center border border-neutral-800 rounded py-1" type="number" min={1} value={it.qty} onChange={e => update(it.id, Math.max(1, Number(e.target.value) || 1))} />
                  <button className="px-2 py-1 rounded border border-neutral-800 hover:bg-neutral-900" onClick={() => update(it.id, it.qty + 1)}>+</button>
                </div>
                <div className="w-24 text-right font-semibold">${(it.price * it.qty).toLocaleString()}</div>
                <button className="ml-2 text-red-400 hover:text-red-300" onClick={() => remove(it.id)}>Remove</button>
              </div>
            ))}
          </div>
          <aside className="card p-5 h-fit sticky top-24 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-neutral-300">Subtotal</span>
              <span className="text-lg font-extrabold text-primary">${subtotal.toLocaleString()}</span>
            </div>
            <button className="btn-primary w-full" aria-disabled>Checkout</button>
            <button className="w-full rounded-md border border-neutral-800 px-4 py-2 text-sm hover:bg-neutral-900" onClick={clear}>Clear Cart</button>
          </aside>
        </div>
      )}
    </div>
  )
}
