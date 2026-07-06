"use client";

import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="flex h-12 w-full items-center rounded-xl border border-gray-300 bg-white px-4 shadow-sm transition-all duration-200 focus-within:border-indigo-500 focus-within-ring-2 focus-within:ring-indigo-100">
      <FiSearch className="h-5 w-5 text-gray-400" />

      <input
        type="text"
        placeholder="Search products.."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="ml-3 flex-1 bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
      />
    </div>
  );
}
