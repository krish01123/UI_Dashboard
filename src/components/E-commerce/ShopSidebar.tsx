"use client";

import { FiGrid, FiTag } from "react-icons/fi";

interface Category {
  slug: string;
  name: string;
  url?: string;
}

interface Props {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ShopSidebar({
  categories,
  selectedCategory,
  onCategoryChange,
}: Props) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h3 className="mb-5 text-lg font-bold text-gray-900">
        Filter By Category
      </h3>

      <div className="flex flex-col gap-2">
        <button
          onClick={() => onCategoryChange("all")}
          className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition-all duration-200 ${
            selectedCategory === "all"
              ? "bg-indigo-100 text-indigo-600 font-semibold"
              : "text-gray-700 hover:bg-indgigo-50 hover:text-indigo-600"
          }`}
        >
          <FiGrid className="h-5 w-5 flex-shrink-0" />
          <span>All</span>
        </button>

        {categories.map((category) => (
          <button
            key={category.slug}
            onClick={() => onCategoryChange(category.slug)}
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm capitalize transition-all duration-200 ${
              selectedCategory === category.slug
                ? "bg-indigo-100 text-indigo-600 font-semibold"
                : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
            }`}
          >
            <FiTag className="h-5 w-5 flex-shrink-0" />

            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
