"use client";

import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

interface Props {
  productId: number;
}

export default function WishlistButton({ productId }: Props) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

    setLiked(wishlist.includes(productId));
  }, [productId]);

  function toggleWishlist() {
    const wishlist: number[] = JSON.parse(
      localStorage.getItem("wishlist") || "[]",
    );

    let updated: number[];

    if (wishlist.includes(productId)) {
      updated = wishlist.filter((id) => id! == productId);
      setLiked(false);
    } else {
      updated = [...wishlist, productId];
      setLiked(true);
    }

    localStorage.setItem("wishlist", JSON.stringify(updated));
  }

  return (
    <button
      onClick={toggleWishlist}
      aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-red-500 shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
    >
      {liked ? (
        <FaHeart className="text-red-500" />
      ) : (
        <FiHeart className="text-gray-600" />
      )}
    </button>
  );
}
