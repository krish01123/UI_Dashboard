import ProductForm from "@/components/E-commerce/Admin/Product/ProductForm";

export default function NewProductPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <ProductForm />
      </div>
    </main>
  );
}
