"use client";

import { useCart } from "@/components/Context/CartContext";
import { Product } from "@/lib/product";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowLeft, FaStar } from "react-icons/fa";

interface Props {
  product: Product;
}

export default function ProductDetail({ product }: Props) {
  const router = useRouter();
  const { addToCart } = useCart();

  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description",
  );

  const oldPrice = (
    product.price +
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.title,
      image: product.thumbnail,
      price: product.price,
    });

    toast.success(`${product.title} added to cart`);
  };

  return (
    <div className="bg-white rounded-xl shadow p-8">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <div className="mb-6">
            <button
              onClick={() => router.push("/e-commerce/shop")}
              className="cursor-pointer inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
            >
              <FaArrowLeft className="text-sm" />
            </button>
          </div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full rounded-lg border"
          />

          <div className="mt-4 flex flex-wrap gap-3">
            {product.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Product ${i + 1}`}
                className="w-20 h-20 object-cover rounded-lg border cursor-pointer hover:border-indigo-500"
              />
            ))}
          </div>
        </div>

        <div>
          <span className="rounded-full bg-indigo-600 text-white px-4 py-1 text-sm">
            In Stock
          </span>

          <h1 className="text-4xl font-bold mt-4">{product.title}</h1>

          <p className="mt-4 text-gray-500 leading-7">
            {product.description.length > 150
              ? `${product.description.slice(0, 150)}...`
              : product.description}
          </p>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-3xl font-bold text-indigo-600">
              ${product.price}
            </span>

            <span className="text-xl text-gray-400 line-through">
              ${oldPrice}
            </span>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            <span>{product.rating}</span>
          </div>

          <div className="w-full border-t border-gray-200" />

          <div className="mt-8">
            <h3 className="font-semibold mb-3">Colors</h3>

            <div className="flex gap-3">
              <button className="w-8 h-8 rounded-full bg-red-500 border-2 border-gray-200" />
              <button className="w-8 h-8 rounded-full bg-blue-500 border-2 border-gray-200" />
              <button className="w-8 h-8 rounded-full bg-green-500 border-2 border-gray-200" />
            </div>
          </div>

          <div className="w-full border-t border-gray-200" />

          <div className="mt-8 flex items-center gap-4">
            <span className="font-semibold">Qty</span>

            <button
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="cursor-pointer w-10 h-10 rounded border"
            >
              -
            </button>

            <div className="w-12 h-10 flex items-center justify-center border rounded">
              {qty}
            </div>

            <button
              onClick={() => setQty(qty + 1)}
              className="cursor-pointer w-10 h-10 rounded border"
            >
              +
            </button>
          </div>

          <div className="mt-10 flex gap-4">
            <button className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg">
              Buy Now
            </button>

            <button
              onClick={handleAddToCart}
              className="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="flex gap-4 border-b pb-4">
          <button
            onClick={() => setActiveTab("description")}
            className={`cursor-pointer px-5 py-2 rounded-lg transition ${
              activeTab === "description"
                ? "bg-indigo-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            Description
          </button>

          <button
            onClick={() => setActiveTab("reviews")}
            className={`cursor-pointer px-5 py-2 rounded-lg transition ${
              activeTab === "reviews"
                ? "bg-indigo-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            Reviews
          </button>
        </div>

        {activeTab === "description" && (
          <div className="mt-8 border rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Product Description</h2>

            <p className="text-gray-600 leading-8">{product.description}</p>

            <p className="text-gray-600 leading-8 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus, harum. Eaque magni exercitationem atque dignissimos
              veritatis consequatur quidem numquam corporis.
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="mt-8 grid md:grid-cols-3 gap-8">
            <div className="border rounded-xl p-8 flex flex-col items-center justify-center">
              <h3 className="text-lg font-semibold">Average Rating</h3>

              <div className="text-5xl font-bold text-indigo-600 mt-4">
                {product.rating}/5
              </div>

              <div className="flex gap-1 mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={
                      star <= Math.round(product.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
            </div>

            <div className="border rounded-xl p-8">
              {[5, 4, 3, 2, 1].map((star) => (
                <div
                  key={star}
                  className="flex justify-between items-center py-3 border-b last:border-none"
                >
                  <span>{star} Stars</span>

                  <span className="font-semibold">
                    {Math.floor(Math.random() * 700)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border rounded-xl p-8 flex items-center justify-center">
              <button className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition">
                Write a Review
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
