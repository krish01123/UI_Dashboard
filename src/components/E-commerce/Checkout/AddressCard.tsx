"use client";

import { MapPin } from "lucide-react";

interface AddressCardProps {
  id: number;
  name: string;
  address: string;
  phone: string;
  selected: boolean;
  onSelect: (id: number) => void;
}

export default function AddressCard({
  id,
  name,
  address,
  phone,
  selected,
  onSelect,
}: AddressCardProps) {
  return (
    <div
      className={`rounded-2xl border bg-white p-5 shadow-sm transition-all duration-300 ${
        selected
          ? "border-[#5B7CFA] ring-2 ring-[#5B7CFA]/20"
          : "border-gray-200 hover:border-[#5B7CFA]/40"
      }`}
    >
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>

      <div className="mt-4 flex items-start gap-3">
        <MapPin className="mt-1 text-[#5B7CFA]" size={18} />

        <span className="text-sm font-medium text-gray-700">{phone}</span>
      </div>

      <button
        onClick={() => onSelect(id)}
        className={`mt-6 w-full rounded-lg px-4 py-3 text-sm font-medium transition ${
          selected
            ? "bg-[#5B7CFA] text-white hover:bg-[#4768ef]"
            : "border border-[#5B7CFA] text-[#5B7CFA] hover:bg-[#5B7CFA] hover:text-white"
        }`}
      >
        {selected ? "Selected Address" : "Deliver To This Address"}
      </button>
    </div>
  );
}
