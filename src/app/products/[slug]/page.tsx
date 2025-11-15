import Link from "next/link";
import { products } from "@/data/products";
import Image from "next/image";
import AddToCart from "@/components/AddToCart";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

// YENİ ƏLAVƏ EDİLƏN HİSSƏ BAŞLAYIR
interface ProductPageParams {
  slug: string; // Dinamik marşrut qovluğunun adı [slug] olduğu üçün
}

interface ProductPageProps {
  params: ProductPageParams;
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product)
    return <div className="text-neutral-400">Product not found.</div>;

  return (
    <article className="grid gap-8 md:grid-cols-2">
      <div className="card overflow-hidden">
        <div className="aspect-[4/3] relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 640px, 100vw"
          />
        </div>
      </div>
      <div>
        <nav className="text-sm mb-3 text-neutral-400">
          <Link className="hover:text-primary" href="/products">
            ← Back to products
          </Link>
        </nav>
        <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
        <div className="mt-2 text-primary text-xl font-extrabold">
          ${product.price.toLocaleString()}
        </div>
        <p className="mt-4 text-neutral-300">{product.description}</p>
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          {product.specs.map((s) => (
            <li key={s} className="card p-3">
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <AddToCart product={product} />
        </div>
      </div>
    </article>
  );
}
