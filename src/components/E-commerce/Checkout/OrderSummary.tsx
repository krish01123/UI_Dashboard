"use client";

interface OrderSummaryProps {
  subTotal?: number;
  discount?: number;
  shipping?: number;
}

export default function OrderSummary({
  subTotal = 0,
  discount = 0,
  shipping = 0,
}: OrderSummaryProps) {
  const total = subTotal - discount + shipping;

  return (
    <div className="mt-8 w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="mb-6 text-lg font-semibold text-gray-800">
        Order Summary
      </h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Sub Total</span>

          <span className="font-medium text-gray-800">
            ${subTotal.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">Discount</span>

          <span className="font-medium text-red-500">
            -${discount.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">Shipping</span>

          {shipping === 0 ? (
            <span className="font-medium text-green-600">Free</span>
          ) : (
            <span className="font-medium text-green-800">
              ${shipping.toFixed(2)}
            </span>
          )}
        </div>

        <hr className="border-gray-200" />

        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-800">Total</span>

          <span className="text-xl font-bold text-[#5B7CFA">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
