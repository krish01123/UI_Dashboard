import Image from "next/image";
import { Button } from "../ui/button";
import { Pencil } from "lucide-react";

const cards = [
  {
    id: 1,
    type: "Mastercard",
    logo: "/Mastercard-logo.svg.png",
    number: "7812 2139 0823 XXXX",
  },
  {
    id: 2,
    type: "Visa",
    logo: "/visa.svg",
    number: "7812 2139 0823 XXXX",
  },
];

export default function PaymentMethod() {
  return (
    <section className="w-full rounded-3xl bg-white px-6 py-5 shadow-sm">
      <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold text-slate-800">Payment Method</h2>

        <Button className="cursor-pointer h-10 rounded-xl bg-[#20284B] px-6 text-sm font-semibold hover:bg-[#1b2343]">
          ADD NEW CARD
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex h-[60px] items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 transition hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <Image
                src={card.logo}
                alt={card.type}
                width={34}
                height={22}
                className="object-contain"
              />

              <span className="text-sm font-semibold tracking-wide text-slate-400 sm:text-sm">
                {card.number}
              </span>
            </div>

            <button className="rounded-md p-2 transition hover:bg-gray-100">
              <Pencil className="cursor-pointer h-4 w-4 text-black" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
