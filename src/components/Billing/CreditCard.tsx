import Image from "next/image";
import { Card } from "../ui/card";

const CreditCard = () => {
  return (
    <Card className="max-w-[320px] h-60 rounded-3xl border-0 p-0 overflow-hidden shadow-none bg-transparent">
      <div
        className="w-full h-full bg-cover bg-center text-white p-6 flex flex-col justify-between"
        style={{
          backgroundImage: "url('/BackgroundCard1.png')",
        }}
      >
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg sm:text-xl">Purity UI</h2>

          <Image
            src="/Mastercard-logo.svg.png"
            alt="Mastercard"
            width={42}
            height={28}
          />
        </div>

        <h1 className="font-bold tracking-[3px] text-xl sm:text-2xl md:text-3xl">
          7812 2139 0823 XXXX
        </h1>

        <div className="flex gap-8">
          <div>
            <p className="text-[15px] opacity-80">VALID THRU</p>
          </div>

          <div>
            <p className="text-[15px] opacity-80">CVV</p>
            <p className="font-semibold">09x</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CreditCard;
