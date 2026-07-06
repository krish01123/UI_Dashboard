"use client";

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-700 shadow-sm outline-none transition-all duration-200 cursor-pointer focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
    >
      <option value="newest">Newest</option>
      <option value="price-low">Price: Low → High</option>
      <option value="price-high">Price: High → Low</option>
      <option value="rating">Highest Rating</option>
      <option value="name">Name A-Z</option>
    </select>
  );
}
