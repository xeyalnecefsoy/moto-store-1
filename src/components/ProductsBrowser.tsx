"use client"
import { useEffect, useMemo, useState } from 'react'
import type { Product } from '@/data/products'
import ProductCard from './ProductCard'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function ProductsBrowser({ products, initialQuery = '', initialCategory = 'All', initialType = 'All' }: { products: Product[], initialQuery?: string, initialCategory?: string, initialType?: 'All' | 'Motorcycle' | 'Moped' | 'Scooter' }) {
  const categories = useMemo(() => ['All', ...Array.from(new Set(products.map(p => p.category)))], [products])
  const types = ['All', 'Motorcycle', 'Moped', 'Scooter'] as const
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const [query, setQuery] = useState(initialQuery || searchParams.get('q') || '')
  const [category, setCategory] = useState(initialCategory || searchParams.get('category') || 'All')
  const qpType = (searchParams.get('type') as (typeof types)[number]) || initialType || 'All'
  const safeType = ((types as readonly string[]).includes(qpType as string) ? qpType : 'All') as (typeof types)[number]
  const [type, setType] = useState<(typeof types)[number]>(safeType)

  // keep URL in sync when filters change
  useEffect(() => {
    const params = new URLSearchParams()
    if (query.trim()) params.set('q', query.trim())
    if (category && category !== 'All') params.set('category', category)
    if (type && type !== 'All') params.set('type', type)
    const qs = params.toString()
    router.replace(qs ? `${pathname}?${qs}` : pathname)
  }, [query, category, type, pathname, router])

  const filtered = products.filter(p => {
    const matchCategory = category === 'All' || p.category === category
    const matchType = type === 'All' || p.type === type
    const q = query.trim().toLowerCase()
    const matchQuery = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
    return matchCategory && matchType && matchQuery
  })

  return (
    <div className="space-y-4">
      {/* Type filter first */}
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-sm text-neutral-400">Type:</span>
        {types.map(t => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={`px-3 py-1 rounded-md border text-sm transition ${type === t ? 'bg-primary text-black border-primary' : 'border-neutral-800 hover:bg-neutral-900'}`}
          >
            {t}
          </button>
        ))}
      </div>
      {/* Search and model/category dropdown */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search bikes..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full sm:max-w-sm rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
        <label className="sm:w-64">
          <span className="sr-only">Model</span>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            {categories.map(c => (
              <option key={c} value={c}>{c === 'All' ? 'All Models' : c}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
        {filtered.length === 0 && (
          <div className="text-neutral-400">No bikes found.</div>
        )}
      </div>
    </div>
  )
}
