import { FileText } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";

const invoices = [
  {
    date: "March, 01, 2020",
    id: "#MS-415646",
    amount: "$180",
  },
  {
    date: "Februrary, 10, 2021",
    id: "#RV-126749",
    amount: "$250",
  },
  {
    date: "April, 05, 2022",
    id: "#FB-212562",
    amount: "$560",
  },
  {
    date: "June, 25, 2023",
    id: "#QW-103578",
    amount: "$120",
  },
  {
    date: "March, 01, 2024",
    id: "#AR-803481",
    amount: "$300",
  },
];

export default function InvoiceCard() {
  return (
    <Card className="w-full max-w-md min-h-[410px] rounded-3xl border-0 shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <h2 className="text-lg font-bold text-gray-800">Invoices</h2>

        <Button
          variant="outline"
          size="sm"
          className="cursor-pointer rounded-full border-teal-400 px-5 text-xs font-semibold uppercase text-teal-500 hover:bg-teal-50"
        >
          View All
        </Button>
      </CardHeader>

      <CardContent className="space-y-5">
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            className="flex items-center justify-between gap-3"
          >
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-gray-800 sm:text-base">
                {invoice.date}
              </p>

              <p className="text-xs font-semibold text-gray-400">
                {invoice.id}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-5">
              <span className="text-sm font-semibold text-slate-400">
                {invoice.amount}
              </span>

              <button className="cursor-pointer flex items-center gap-1 text-sm font-semibold text-gray-800 hover:text-teal-500 transition-colors">
                <FileText size={16} />
                <span>PDF</span>
              </button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
