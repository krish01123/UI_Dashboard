import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp, Calendar, Clock3 } from "lucide-react";
import { Card } from "../ui/card";

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: "income" | "expense" | "pending";
  date: string;
};

const transactions: Transaction[] = [
  {
    id: 1,
    title: "Netflix",
    amount: -2500,
    type: "expense",
    date: "27 March 2020, at 12:30 PM",
  },
  {
    id: 2,
    title: "Apple",
    amount: 2500,
    type: "income",
    date: "2 June 2021, at 1:00 PM",
  },
  {
    id: 3,
    title: "Stripe",
    amount: 800,
    type: "income",
    date: "15 July 2022, at 10:00 AM",
  },
  {
    id: 4,
    title: "HubSpot",
    amount: 1700,
    type: "income",
    date: "16 April 2023, at 11:30 AM",
  },
  {
    id: 5,
    title: "Webflow",
    amount: 0,
    type: "pending",
    date: "23 May 2024, at 3:00 PM",
  },
  {
    id: 6,
    title: "Microsoft",
    amount: 987,
    type: "expense",
    date: "26 August 2025, at 2:30 PM",
  },
];

const newest = transactions.slice(0, 2);
const older = transactions.slice(2);

function TransactionItem({ transaction }: { transaction: Transaction }) {
  const isIncome = transaction.type === "income";
  const isExpense = transaction.type === "expense";
  const isPending = transaction.type === "pending";

  return (
    <div className="flex items-center justify-between gap-3 py-4">
      <div className="flex items-center gap-3 min-w-0">
        <div
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full border",
            isIncome && "border-emerald-500 text-emerald-500 bg-emerald-50",
            isExpense && "border-red-500 text-red-500 bg-red-50",
            isPending && "border-slate-300 text-slate-400 bg-slate-50",
          )}
        >
          {isIncome && <ArrowUp className="h-5 w-5" />}
          {isExpense && <ArrowDown className="h-5 w-5" />}
          {isPending && <Clock3 className="h-5 w-5" />}
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-slate-800 sm:text-base">
            {transaction.title}
          </h3>

          <p className="text-xs text-slate-400 sm:text-sm">
            {transaction.date}
          </p>
        </div>
      </div>

      <div className="shrink-0 text-right">
        {isPending ? (
          <span className="font-semibold text-slate-700">Pending</span>
        ) : (
          <span
            className={cn(
              "text-sm font-bold sm:text-lg",
              isIncome ? "text-emerald-500" : "text-red-500",
            )}
          >
            {isIncome ? "+" : "-"}$
            {Math.abs(transaction.amount).toLocaleString()}
          </span>
        )}
      </div>
    </div>
  );
}

export default function TransactionCard() {
    
  return (
    <Card className="h-full w-full rounded-3xl border-0 bg-white p-5 shadow-lg sm:p-6">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-800 sm:text-xl">
          Your Transactions
        </h2>

        <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
          <Calendar className="h-4 w-4" />
          <span>23 - 30 March</span>
        </div>
      </div>

      <div>
        <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
          Newest
        </h4>

        {newest.map((item) => (
          <TransactionItem key={item.id} transaction={item} />
        ))}
      </div>

      <div className="mt-6">
        <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
          Older
        </h4>

        {older.map((item) => (
          <TransactionItem key={item.id} transaction={item} />
        ))}
      </div>
    </Card>
  );
}
