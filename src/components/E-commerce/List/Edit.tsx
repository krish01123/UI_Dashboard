"use client";

import { Product } from "@/lib/product";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  product: Product | null;
  onClose: () => void;
  onSave: (product: Product) => void;
}

export default function EditProductModal({
  open,
  product,
  onClose,
  onSave,
}: Props) {
  const [form, setForm] = useState<Product | null>(null);

  useEffect(() => {
    setForm(product);
  }, [product]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open || !form) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-8 py-5">
          <h2 className="text-2xl font-semibold text-gray-800">Edit Product</h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-gray-100"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Title */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Title
              </label>

              <input
                value={form.title}
                onChange={(e) =>
                  setForm({
                    ...form,
                    title: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Price */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Price
              </label>

              <input
                type="number"
                value={form.price}
                onChange={(e) =>
                  setForm({
                    ...form,
                    price: Number(e.target.value),
                  })
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Stock */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Stock
              </label>

              <select
                value={form.stock > 0 ? "instock" : "out"}
                onChange={(e) =>
                  setForm({
                    ...form,
                    stock: e.target.value === "instock" ? 1 : 0,
                  })
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              >
                <option value="instock">In Stock</option>
                <option value="out">Out of Stock</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Date
              </label>

              <input
                type="date"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Image URL */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Image URL
              </label>

              <input
                value={form.thumbnail}
                onChange={(e) =>
                  setForm({
                    ...form,
                    thumbnail: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Preview */}
            <div className="md:col-span-2">
              <label className="mb-3 block text-sm font-medium text-gray-700">
                Image Preview
              </label>

              <div className="h-56 w-56 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                <img
                  src={form.thumbnail}
                  alt={form.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 border-t bg-gray-50 px-8 py-5">
          <button
            onClick={onClose}
            className="rounded-xl border border-red-500 px-6 py-2.5 text-red-500 transition hover:bg-red-50"
          >
            Cancel
          </button>

          <button
            onClick={() => onSave(form)}
            className="rounded-xl bg-blue-600 px-6 py-2.5 text-white transition hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
