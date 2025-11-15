import { products } from "@/data/products";
import ProductsBrowser from "@/components/ProductsBrowser";

export const metadata = { title: "Products - Tufan Motors" };

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">All Motorcycles</h1>
      <ProductsBrowser products={products} />
    </div>
  );
}
