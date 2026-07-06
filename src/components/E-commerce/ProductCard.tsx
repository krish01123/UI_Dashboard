"use client";

import { Product } from "@/lib/product";
import WishlistButton from "./WishlistButton";
import { FaShoppingCart, FaStar } from "react-icons/fa";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const oldPrice = (
    product.price +
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="group overflow-hidden rounded-2xl border-2xl border border-gray-200 bg-white transition-all duration-300 hover:-transition-y-2 hover:shadow-xl">
      <div className="relative h-60 overflow-hidden bg-gray-100 sm:h-64">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute right-4 top-4">
          <WishlistButton productId={product.id} />
        </div>

        <button className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-16 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg transition-transform duration-300 group-hover:translate-y-0 hover:bg-indigo-700">
          <FaShoppingCart size={18} />
        </button>

        <span className="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow">
          -{Math.round(product.discountPercentage)}%
        </span>
      </div>

      <div className="p-5">
        <span className="text-sm capitalize text-gray-500">
          {product.category.replace(/-/g, "")}
        </span>

        <h3 className="mt-2 line-clamp-2 text-lg font-semibold leading-7 text-gray-900">
          {product.title}
        </h3>

        <div className="my-3 flex items-center gap-2">
          <FaStar className="text-amber-400" />

          <span className="text-sm font-medium text-gray-700">
            {product.rating.toFixed(1)}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>

          <span className="text-base text-gray-400 line-through">
            ${oldPrice}
          </span>
        </div>
      </div>
    </div>
  );
}
