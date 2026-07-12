"use client";

import { Product } from "@/lib/product";
import {
  Edit,
  EllipsisVertical,
  Search,
  SlidersHorizontal,
  Trash,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import EditProductModal from "./Edit";

const placeholders = [
  "Look up products...",
  "Search products...",
  "Find top products...",
];
interface Props {
  products: Product[];
}

export default function ProductTable({ products }: Props) {
  const [productList, setProductList] = useState(products);
  const [search, setSearch] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [stockFilter, setStockFilter] = useState<"all" | "in" | "out">("all");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [animate, setAnimate] = useState(false);

  const filtered = useMemo(() => {
    return productList.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStock =
        stockFilter === "all"
          ? true
          : stockFilter === "in"
            ? product.stock > 0
            : product.stock === 0;

      return matchesSearch && matchesStock;
    });
  }, [productList, search, stockFilter]);

  const allSelected =
    filtered.length > 0 &&
    filtered.every((product) => selectedProducts.includes(product.id));

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedProducts(filtered.map((product) => product.id));
    } else {
      setSelectedProducts([]);
    }
  };

  const handleSelectProduct = (id: number) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleDeleteSelected = () => {
    if (selectedProducts.length === 0) {
      alert("Please select a Product to Delete.");
      return;
    }

    const confirmDelete = window.confirm(
      `Delete ${selectedProducts.length} selected product?`,
    );

    if (!confirmDelete) return;

    setProductList((prev) =>
      prev.filter((product) => !selectedProducts.includes(product.id)),
    );

    setSelectedProducts([]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);

      setTimeout(() => {
        setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
        setAnimate(false);
      }, 5000);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">
        {/* Search */}
        <div className="mb-6 flex items-center justify-between gap-3">
          <div className="relative w-full max-w-sm">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder=""
              className={`w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 ${
                fade ? "placeholder-opacity-100" : "placeholder:opacity-30"
              }`}
            />

            {!search && (
              <div className="pointer-events-none absolute left-10 top-1/2 h-6 -translate-y-1/2 overflow-hidden">
                <div
                  className={`transition-transform duration-500 ease-in-out ${
                    animate ? "-translate-y-6" : "translate-y-0"
                  }`}
                >
                  <div className="h-6 text-gray-400">
                    {placeholders[placeholderIndex]}
                  </div>

                  <div className="h-6 text-gray-400">
                    {placeholders[(placeholderIndex + 1) % placeholders.length]}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setFilterOpen((prev) => !prev)}
              className="cursor-pointer rounded-xl border border-gray-200 p-3 hover:bg-gray-100"
            >
              <SlidersHorizontal size={18} />
            </button>

            {filterOpen && (
              <div className="absolute right-0 z-20 mt-2 w-40 rounded-xl border bg-white shadow-lg">
                <button
                  onClick={() => {
                    setStockFilter("all");
                    setFilterOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                >
                  All Products
                </button>

                <button
                  onClick={() => {
                    setStockFilter("in");
                    setFilterOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                >
                  In Stock
                </button>

                <button
                  onClick={() => {
                    setStockFilter("out");
                    setFilterOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                >
                  Out of Stock
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-sm text-gray-500">
                <th className="py-4 w-12">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className="cursor-pointer"
                  />
                </th>

                <th className="py-4">Products</th>
                <th className="py-4">Date</th>
                <th className="py-4">Status</th>
                <th className="py-4">Price</th>
                <th className="py-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((product, index) => (
                <tr
                  key={product.id}
                  className="border-b transition hover:bg-gray-50"
                >
                  <td className="py-5">
                    <input
                      type="checkbox"
                      checked={selectedProducts.includes(product.id)}
                      onChange={() => handleSelectProduct(product.id)}
                      className="cursor-pointer"
                    />
                  </td>

                  <td>
                    <div className="flex items-center gap-4">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="h-14 w-14 rounded-full object-cover"
                      />

                      <div>
                        <h3 className="font-semibold">{product.title}</h3>

                        <p className="text-sm capitalize text-gray-500">
                          {product.category}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>
                    {new Date(
                      Date.now() - index * 86400000,
                    ).toLocaleDateString()}
                  </td>

                  <td>
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          product.stock > 0 ? "bg-green-500" : "bg-red-500"
                        }`}
                      />

                      <span>
                        {product.stock > 0 ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>
                  </td>

                  <td className="font-semibold">${product.price}</td>

                  <td>
                    <button
                      onClick={() =>
                        setOpenMenu(openMenu === product.id ? null : product.id)
                      }
                      className="rounded-lg p-2 hover:bg-gray-100"
                    >
                      <EllipsisVertical
                        size={18}
                        className="cursor-pointer text-gray-500"
                      />
                    </button>

                    {openMenu === product.id && (
                      <div className="absolute right-0 z-20 mt-2 w-36 rounded-lg border border-gray-200 bg-white shadow-lg">
                        <button
                          onClick={() => {
                            setEditingProduct(product);
                            setOpenEdit(true);
                            setOpenMenu(null);
                          }}
                          className="cursor-pointer flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          <Edit className="h-4 w-4 shrink-0" />
                          <span>Edit</span>
                        </button>

                        <button
                          onClick={() => {
                            setOpenMenu(null);
                            handleDeleteSelected();
                          }}
                          className="cursor-pointer flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                        >
                          <Trash className="h-4 w-4 shrink-0" />
                          <span>Delete</span>
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-10 text-center text-gray-500">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile */}
        <div className="space-y-4 md:hidden">
          {filtered.map((product, index) => (
            <div key={product.id} className="rounded-xl border p-4">
              <div className="mb-3 flex items-center justify-between">
                <input
                  type="checkbox"
                  checked={selectedProducts.includes(product.id)}
                  onChange={() => handleSelectProduct(product.id)}
                />

                <button>
                  <EllipsisVertical size={18} />
                </button>
              </div>

              <div className="flex gap-3">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-20 w-20 rounded-xl object-cover"
                />

                <div className="flex-1">
                  <h3 className="font-semibold">{product.title}</h3>

                  <p className="text-sm capitalize text-gray-500">
                    {product.category}
                  </p>

                  <div className="mt-3 flex justify-between">
                    <span className="text-gray-500">Price</span>

                    <span className="font-semibold">${product.price}</span>
                  </div>

                  <div className="mt-2 flex justify-between">
                    <span className="text-gray-500">Date</span>

                    <span>
                      {new Date(
                        Date.now() - index * 86400000,
                      ).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="mt-2 flex justify-between">
                    <span className="text-gray-500">Status</span>

                    <span
                      className={`font-medium ${
                        product.stock > 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {product.stock > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="rounded-xl border p-8 text-center text-gray-500">
              No products found.
            </div>
          )}
        </div>
      </div>
      <EditProductModal
        open={openEdit}
        product={editingProduct}
        onClose={() => setOpenEdit(false)}
        onSave={async (updated) => {
          setProductList((prev) =>
            prev.map((product) =>
              product.id === updated.id ? updated : product,
            ),
          );
          setEditingProduct(updated);
          setOpenEdit(false);
        }}
      />
    </>
  );
}
