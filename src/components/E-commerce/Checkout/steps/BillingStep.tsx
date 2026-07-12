"use client";

import { useMemo, useState } from "react";
import AddressCard from "../AddressCard";
import OrderSummary from "../OrderSummary";
import CheckoutNavigation from "../CheckoutNavigation";
import { useCart } from "@/components/Context/CartContext";

interface BillingStepProps {
  onPrevious: () => void;
  onNext: () => void;
}

interface Address {
  id: number;
  name: string;
  address: string;
  phone: string;
}

export default function BillingStep({ onPrevious, onNext }: BillingStepProps) {
  const [selectedAddress, setSelectedAddress] = useState(1);

  const { subtotal } = useCart();

  const address: Address[] = [
    {
      id: 1,
      name: "John Doe",
      address: "123 Main Street, Springfield, California 90001, United States",
      phone: "+1 (555) 123-4567",
    },
    {
      id: 2,
      name: "Michael Johnson",
      address: "78 Palm Street, Miami, Florida 33103, United States",
      phone: "+1 (555) 654-3210",
    },
    {
      id: 3,
      name: "Jane Smith",
      address: "45 Lake View Avenue, New York, NY 10001, United States",
      phone: "+1 (555) 987-6543",
    },
  ];

  const discount = useMemo(() => subtotal * 0.05, [subtotal]);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Select Delivery Address
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Choose the address where you'd like your order delivered.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {address.map((address) => (
          <AddressCard
            key={address.id}
            id={address.id}
            name={address.name}
            address={address.address}
            phone={address.phone}
            selected={selectedAddress === address.id}
            onSelect={setSelectedAddress}
          />
        ))}
      </div>

      <OrderSummary subTotal={subtotal} discount={discount} shipping={0} />

      <CheckoutNavigation onPrevious={onPrevious} onNext={onNext} />
    </div>
  );
}
