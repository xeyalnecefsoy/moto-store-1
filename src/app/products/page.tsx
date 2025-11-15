import { products } from "@/data/products";
import ProductsBrowser from "@/components/ProductsBrowser";
import { Suspense } from "react"; // 1. Suspense-i import edirik

export const metadata = { title: "Products - Tufan Motors" };

export default function ProductsPage() {
  return (
    <div>
            <h1 className="text-2xl font-bold mb-6">All Motorcycles</h1>
      {/* 2. ProductsBrowser-i Suspense bloku ilə əhatə edirik */}     {" "}
      <Suspense
        fallback={
          <div className="text-xl text-neutral-400">
            Loading search filters and motorcycles...
          </div>
        }
      >
              <ProductsBrowser products={products} />     {" "}
      </Suspense>
         {" "}
    </div>
  );
}
