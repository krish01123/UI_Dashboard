import { Wallet } from "lucide-react";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { ReactNode } from "react";

interface SalaryCardProps {
  title: string;
  subtitle: string;
  amount: string;
  icon?: ReactNode;
}

export function SalaryCard({ title, subtitle, amount, icon }: SalaryCardProps) {
  return (
    <Card className="w-full h-[238px] rounded-3xl border-0 shadow-md flex flex-col items-center justify-between py-6 bg-white">
      <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-400 w-14 h-14 sm:w-16 sm:h-16">
        {icon ?? <Wallet className="w-7 h-7 text-white" />}
      </div>

      <div className="text-center space-y-1">
        <h3 className="font-bold text-lg md:text-xl text-slate-700">{title}</h3>

        <p className="text-slate-400 text-xs md:text-sm font-medium">
          {subtitle}
        </p>
      </div>

      <Separator className="bg-gray-200" />

      <p className="font-bold text-2xl text-slate-700">{amount}</p>
    </Card>
  );
}
