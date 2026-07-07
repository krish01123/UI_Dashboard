import ProductDetail from "@/components/E-commerce/ProductDetail";
import { getProduct } from "@/lib/api";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  console.log("Product ID:", id);

  const product = await getProduct(id);

  return (
    <div className="container mx-auto">
      <ProductDetail product={product} />
    </div>
  );
}
