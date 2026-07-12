"use client";

import { ChevronLeft, ChevronRight, Download, ShoppingBag } from "lucide-react";

interface CheckoutNavigationProps {
  showPrevious?: boolean;

  previousText?: string;
  nextText?: string;

  onPrevious?: () => void;
  onNext?: () => void;

  showDownload?: boolean;
  showContinueShopping?: boolean;

  onDownload?: () => void;
  onContinueShopping?: () => void;
}

export default function CheckoutNavigation({
  showPrevious = true,

  previousText = "Previous",
  nextText = "Next",

  onPrevious,
  onNext,

  showDownload = false,
  showContinueShopping = false,

  onDownload,
  onContinueShopping,
}: CheckoutNavigationProps) {
  return (
    <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap gap-3">
        {showPrevious && (
          <button
            onClick={onPrevious}
            className="flex items-center gap-2 rounded-lg bg-gray-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-600"
          >
            <ChevronLeft size={18} />
            {previousText}
          </button>
        )}

        {showContinueShopping && (
          <button
            onClick={onContinueShopping}
            className="flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-700"
          >
            <ShoppingBag size={18} />
            Continue Shopping
          </button>
        )}
      </div>

      <div className="flex flex-wrap justify-end gap-3">
        {showDownload && (
          <button
            onClick={onDownload}
            className="flex items-center gap-2 rounded-lg border border-[#5B7CFA] px-5 py-3 text-sm font-medium text-[#5B7CFA] transition hover:bg-[#5B7CFA] hover:text-white"
          >
            <Download size={18} />
            Download Receipt
          </button>
        )}

        <button
          onClick={onNext}
          className="flex items-center gap-2 rounded-lg bg-[#5B7CFA] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#4468f5]"
        >
          {nextText}
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
