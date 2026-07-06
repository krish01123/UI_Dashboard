"use client";

interface Props {
  page: number;
  total: number;
  onChange: (page: number) => void;
}

export default function Pagination({ page, total, onChange }: Props) {
  if (total <= 1) return null;

  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      <button
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className="rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-indigo-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        Previous
      </button>

      {Array.from({ length: total }).map((_, index) => {
        const pageNumber = index + 1;

        return (
          <button
            key={pageNumber}
            onClick={() => onChange(pageNumber)}
            className={`h-10 w-10 rounded-lg text-sm font-medium transition-all duration-200 ${
              page === pageNumber
                ? "bg-indigo-600 text-white shadow-md"
                : "border border-gray-200 bg-gray-100 text-gray-700 hover:bg-indigp-600 hover:text-white"
            }`}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        disabled={page === total}
        onClick={() => onChange(page + 1)}
        className="rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 tranisiton-all duration-200 hover:bg-indigo-600 hover:text-white disable:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
