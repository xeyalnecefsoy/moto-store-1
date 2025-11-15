import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Bike, Gauge, Mountain, Flame, Wrench, Sparkles } from "lucide-react";

export default function HomePage() {
  const featured = products.slice(0, 3);
  const categories = [...new Set(products.map((p) => p.category))];

  const iconFor = (cat: string) => {
    switch (cat) {
      case "Naked":
        return <Bike className="h-6 w-6" />;
      case "Sport":
      case "Supersport":
        return <Gauge className="h-6 w-6" />;
      case "Adventure":
        return <Mountain className="h-6 w-6" />;
      case "Scrambler":
        return <Flame className="h-6 w-6" />;
      case "Classic":
        return <Wrench className="h-6 w-6" />;
      default:
        return <Sparkles className="h-6 w-6" />;
    }
  };

  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-xl border border-neutral-800">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            alt="Motorcycle hero background"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
        </div>
        <div className="relative p-8 sm:p-12">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Ride the Future
          </h1>
          <p className="mt-3 max-w-2xl text-neutral-300">
            Discover modern motorcycles across sport, adventure, classic, and
            more. Clean design. Fast experience.
          </p>
          <div className="mt-6 flex gap-3">
            <Link className="btn-primary" href="/products">
              Browse Bikes
            </Link>
            <a
              className="inline-flex items-center gap-2 rounded-md border border-neutral-800 px-4 py-2 text-sm hover:bg-neutral-900"
              href="#featured"
            >
              View Featured
            </a>
          </div>
        </div>
      </section>

      <section aria-labelledby="categories">
        <h2 id="categories" className="text-xl font-semibold mb-4">
          Popular Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={{ pathname: "/products", query: { category: cat } }}
              className="card p-4 text-center hover:border-primary/40 transition group"
            >
              <div className="mb-2 mx-auto grid place-items-center h-10 w-10 rounded-md bg-neutral-800 group-hover:bg-neutral-700">
                {iconFor(cat)}
              </div>
              <div className="text-sm text-neutral-300">{cat}</div>
            </Link>
          ))}
        </div>
      </section>

      <section id="featured" aria-labelledby="featured-title">
        <h2 id="featured-title" className="text-xl font-semibold mb-4">
          Featured Bikes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
