import {
  Bar,
  BarChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  YAxis,
} from "recharts";
import { Card, CardContent } from "../ui/card";
import { ChartConfig, ChartContainer } from "../ui/chart";
import { MousePointerClick, Package, ShoppingCart, Users } from "lucide-react";

type Props = {
  users: number;
  clicks: number;
  sales: number;
  items: number;
};

const chartConfig = {
  value: {
    label: "Value",
    color: "#ffffff",
  },
} satisfies ChartConfig;

export default function ActiveUsersCard({
  users,
  clicks,
  sales,
  items,
}: Props) {
  const chartData = [
    { month: "Jan", values: 320 },
    { month: "Feb", values: 240 },
    { month: "Mar", values: 90 },
    { month: "Apr", values: 280 },
    { month: "May", values: 470 },
    { month: "Jun", values: 330 },
    { month: "Jul", values: 260 },
    { month: "Aug", values: 120 },
    { month: "Sep", values: 410 },
  ];

  return (
    <Card className="rounded-3xl border-0 shadow-sm bg-white">
      <CardContent className="p-6">
        <div className="rounded-3xl bg-gradient-to-r from-[#2D3561] to-[#0B1023] p-5">
          <div className="h-[180px] sm:h-[200px]">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{
                    top: 10,
                    right: 10,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <YAxis
                    stroke="#fff"
                    axisLine={false}
                    tickLine={false}
                    width={35}
                    domain={[0, 500]}
                  />

                  <Tooltip
                    cursor={false}
                    content={({ active, payload, label }) => {
                      if (!active || !payload?.length) return null;

                      return (
                        <div className="rounded-lg border border-white/10 bg-[#111] px-3 py-2 text-white shadow=lg">
                          <p className="mb-2 text-sm">
                            {payload[0]?.payload?.month}
                          </p>

                          <div className="flex items-center gap-2 text-sm">
                            <div className="h-3 w-3 rounded-full bg-white" />
                            <span>Sales:</span>
                            <span className="font-semibold">
                              {payload[0].value}
                            </span>
                          </div>
                        </div>
                      );
                    }}
                  />
                  <Bar
                    dataKey="values"
                    fill="#FFFFFF"
                    activeBar={{
                      fill: "#FFFFF",
                      opacity: 0.8,
                    }}
                    radius={[10, 10, 0, 0]}
                    barSize={10}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <h3 className="text-xl font-bold text-slate-800">Active Users</h3>

          <p className="mt-2 text-sm">
            <span className="font-semibold text-green-500">+23%</span>

            <span className="text-slate-400">than last week</span>
          </p>

          <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
            <Metric
              icon={<Users size={16} />}
              label="Users"
              value={users.toLocaleString()}
              width="30%"
            />

            <Metric
              icon={<MousePointerClick size={16} />}
              label="Clicks"
              value={`${(users * 73).toLocaleString()}`}
              width="70%"
            />

            <Metric
              icon={<ShoppingCart size={16} />}
              label="Sales"
              value={`$${sales.toLocaleString()}`}
              width="35%"
            />

            <Metric
              icon={<Package size={16} />}
              label="Items"
              value={items.toLocaleString()}
              width="40%"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function Metric({
  icon,
  label,
  value,
  width,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  width: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4FD1C5] text-white">
          {icon}
        </div>

        <span className="text-sm font-semibold text-slate-400">{label}</span>
      </div>

      <h4 className="mt-2 text-lg font-bold text-slate-800">{value}</h4>

      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
        <div className="h-full rounded-full bg-[#4FD1C5]" style={{ width }} />
      </div>
    </div>
  );
}
