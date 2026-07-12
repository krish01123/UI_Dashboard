import ProductTable from "@/components/E-commerce/List/ProductTable";
import { getAllProduct } from "@/lib/api";

export default async function ProductPage() {
  const products = await getAllProduct();

  return (
    <main className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6 lg:p-8">
      <ProductTable products={products} />
    </main>
  );
}
