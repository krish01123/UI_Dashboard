"use client";

import Image from "next/image";
import CheckoutNavigation from "../CheckoutNavigation";

interface PaymentStepProps {
  onPrevious: () => void;
  onSubmit?: () => void;
  onContinueShopping?: () => void;
  onDownloadReceipt?: () => void;
}

export default function PaymentStep({
  onPrevious,
  onSubmit,
  onContinueShopping,
  onDownloadReceipt,
}: PaymentStepProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-72 w-full max-w-md">
        <Image
          src="/payment.svg"
          alt="Payment Success"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="mt-8 max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Thank you for your purchase!
        </h2>

        <p className="mt-4 text-gray-500">
          Your order has been placed successfully. You will receive a
          confirmation email shortly.
        </p>

        <div className="mt-8 rounded-xl bg-gray-100 px-6 py-4">
          <p className="text-sm text-gray-500">Order ID</p>

          <p className="mt-2 font-semibold tracking-wider text-[#5B7CFA]">
            #ORD-2026-001256
          </p>
        </div>
      </div>

      <div className="mt-10 w-full">
        <CheckoutNavigation
          previousText="Previous"
          nextText="Submit"
          onPrevious={onPrevious}
          onNext={onSubmit}
          showContinueShopping
          showDownload
          onContinueShopping={onContinueShopping}
          onDownload={onDownloadReceipt}
        />
      </div>
    </div>
  );
}
