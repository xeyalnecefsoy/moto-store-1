import Link from 'next/link'
import type { Product } from '@/data/products'
import Image from 'next/image'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="card overflow-hidden group">
      <div className="aspect-[4/3] relative">
        <Image src={product.image} alt={product.name} fill className="object-cover opacity-90 group-hover:opacity-100 transition" sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw" />
      </div>
      <div className="p-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold leading-tight">{product.name}</h3>
          <p className="text-sm text-neutral-400">{product.category}</p>
        </div>
        <div className="text-primary font-bold">${product.price.toLocaleString()}</div>
      </div>
    </Link>
  )
}
