"use client";

import { Minus, Plus, Trash2 } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface ProductTableProps {
  products: Product[];
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function ProductTable({
  products,
  onIncrease,
  onDecrease,
  onRemove,
}: ProductTableProps) {
  if (products.length === 0) {
    return (
      <div className="flex h-56 items-center justify-center rounded-2xl border border-dashed border-gray-300">
        <p className="text-gray-500">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <>
      <div className="overflow-x-auto rounded-2xl border">
        <table className="min-w-[700px] w-full">
          <thead className="bg-gray-50">
            <tr className="text-left text-xs sm:text-sm text-gray-600">
              <th className="p-3 sm:p-4 lg:p-5">Product</th>
              <th className="p-3 sm:p-4 lg:p-5 text-center">Quantity</th>
              <th className="p-3 sm:p-4 lg:p-5 text-center">Price</th>
              <th className="p-3 sm:p-4 lg:p-5 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t">
                <td className="p-5">
                  <div className="flex items-center gap-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold">{product.name}</h3>

                      <p className="text-sm text-gray-500">
                        Product ID #{product.id}
                      </p>
                    </div>
                  </div>
                </td>

                <td>
                  <div className="flex justify-center">
                    <div className="flex items-center rounded-lg border">
                      <button
                        onClick={() => onDecrease(product.id)}
                        className="p-3 hover:bg-gray-100"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="w-10 text-center">
                        {product.quantity}
                      </span>

                      <button
                        onClick={() => onIncrease(product.id)}
                        className="p-3 hover:bg-gray-100"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </td>

                <td className="text-center font-semibold text-[#5B7CFA]">
                  ${(product.price * product.quantity).toFixed(2)}
                </td>

                <td>
                  <div className="flex justify-center">
                    <button
                      onClick={() => onRemove(product.id)}
                      className="rounded-lg bg-red-50 p-3 text-red-500 hover:bg-red-100"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
