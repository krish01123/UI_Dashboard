"use client";

import { useMemo, useState } from "react";

import ProductTable, { Product } from "../ProductTable";
import OrderSummary from "../OrderSummary";
import CheckoutNavigation from "../CheckoutNavigation";
import { useCart } from "@/components/Context/CartContext";

interface CartStepProps {
  onNext: () => void;
}

export default function CartStep({ onNext }: CartStepProps) {
  const { cart, increaseQuantity, decreaseQuantity, removeProduct, subtotal } =
    useCart();

  const discount = useMemo(() => subtotal * 0.05, [subtotal]);

  return (
    <div className="space-y-8">
     
      <ProductTable
        products={cart}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onRemove={removeProduct}
      />

      {/* Order Summary */}
      <OrderSummary subTotal={subtotal} discount={discount} shipping={0} />

      {/* Navigation */}
      <CheckoutNavigation showPrevious={false} onNext={onNext} />
    </div>
  );
}
