"use client";

import { Product } from "@/lib/product";
import { useDebounce } from "@/lib/hooks";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import SortDropdown from "./SortDropdown";
import ShopSidebar from "./ShopSidebar";
import ProductGrid from "./ProductGrid";
import Pagination from "./Pagination";
import {
  getAllProduct,
  getCategories,
  getCategoryProducts,
  searchProducts,
  type Category,
} from "@/lib/api";

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);
  const [sort, setSort] = useState("newest");

  const [page, setPage] = useState(1);

  const limit = 12;

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    loadProduct();
  }, [selectedCategory, debouncedSearch]);

  async function loadCategories() {
    const data = await getCategories();
    setCategories(data);
  }

  async function loadProduct() {
    setLoading(true);
    let data: Product[] = [];

    if (debouncedSearch.trim()) {
      data = await searchProducts(debouncedSearch);
    } else if (selectedCategory !== "all") {
      data = await getCategoryProducts(selectedCategory);
    } else {
      data = await getAllProduct();
    }

    setProducts(data);
    setPage(1);

    setLoading(false);
  }

  const sortedProducts = [...products].sort((a, b) => {
    switch (sort) {
      case "price-low":
        return a.price - b.price;

      case "price-high":
        return b.price - a.price;

      case "rating":
        return b.rating - a.rating;

      case "name":
        return a.title.localeCompare(b.title);

      default:
        return b.id - a.id;
    }
  });

  const start = (page - 1) * limit;
  const end = start + limit;

  const paginatedProducts = sortedProducts.slice(start, end);

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full">
      <aside className="w-full lg:w-64 xl:w-72 shrink-0">
        <ShopSidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </aside>

      <section className="flex-1">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Products</h2>
            <p className="text-gray-500 mt-1">
              {products.length}Products Found
            </p>
          </div>

          <div className="w-full sm:w-80">
            <SearchBar value={search} onChange={setSearch} />
          </div>

          <div className="w-full sm:w-52">
            <SortDropdown value={sort} onChange={setSort} />
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-96 rounded-2xl bg-gray-200 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <ProductGrid products={paginatedProducts} />
        )}
        <div className="mt-10">
          <Pagination
            page={page}
            total={Math.ceil(products.length / limit)}
            onChange={setPage}
          />
        </div>
      </section>
    </div>
  );
}
