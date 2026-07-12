"use client";

import { ProductStatus } from "@/lib/types";
import { UploadCloud } from "lucide-react";
import { useState } from "react";
import ProductEditor from "./ProductEditor";
import { stat } from "fs";

const statusColors = {
  Draft: {
    dot: "bg-gray-400",
    select: "text-gray-700",
  },
  Schedule: {
    dot: "bg-amber-500",
    select: "text-amber-700",
  },
  Publish: {
    dot: "bg-emerald-500",
    select: "text-emerald-700",
  },
  Inactive: {
    dot: "bg-red-500",
    select: "text-red-600",
  },
};

export default function ProductForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<ProductStatus>("Publish");

  const handleSumbit = () => {
    console.log({
      title,
      description,
      status,
    });
  };

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-[2fr_360px]">
      <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">General</h2>

        <div className="mt-8">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Product Name
            <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Product Name"
            className="h-12 w-full rounded-lg border border-gray-300 px-4 outline-none transition focus:border-indigo-500"
          />

          <p className="mt-2 text-xs text-gray-500">
            A product name is required and recommended to be unique.
          </p>
        </div>

        <div className="mt-8">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Description
          </label>

          <ProductEditor value={description} onChange={setDescription} />

          <p className="mt-2 text-xs text-gray-500">
            Set a description to the product for better visibility.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Thumbnail</h2>

          <div className="mt-5 flex h-56 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-blue-300 bg-blue-50/40 transition hover:bg-blue-50">
            <UploadCloud className="mb-3 h-10 w-10 text-gray-400" />

            <p className="text-sm font-medium text-gray-700">
              Drop Thumbail here to upload
            </p>
          </div>

          <p className="mt-3 text-xs text-gray-500">
            Set the product thumbnail image. Only *.png, *.jpg and *.jpeg are
            accepted.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Status</h2>

            <div
              className={`h-3 w-3 rounded-full ${statusColors[status].dot}`}
            />
          </div>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as ProductStatus)}
            className={`cursor-pointer h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm outline-none focus:border-indigo-500 ${statusColors}`}
          >
            <option value="Draft">Draft</option>
            <option value="Schedule">Schedule</option>
            <option value="Publish">Publish</option>
            <option value="Inactive">Inactive</option>
          </select>

          <p className="mt-2 text-xs text-gray-500">Set the product status.</p>

          <button
            onClick={handleSumbit}
            className="cursor-pointer mt-6 h-12 w-full rounded-xl bg-indigo-600 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Save Product
          </button>
        </div>
      </div>
    </div>
  );
}
