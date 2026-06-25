import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent } from "../ui/card";
import { ChartConfig, ChartContainer } from "../ui/chart";

const chartData = [
  { month: "Jan", current: 40, previous: 20 },
  { month: "Feb", current: 50, previous: 80 },
  { month: "Mar", current: 300, previous: 40 },
  { month: "Apr", current: 220, previous: 140 },
  { month: "May", current: 500, previous: 290 },
  { month: "Jun", current: 250, previous: 340 },
  { month: "Jul", current: 400, previous: 340 },
  { month: "Aug", current: 230, previous: 220 },
  { month: "Sep", current: 500, previous: 400 },
];

const chartConfig = {
  current: {
    label: "Current Year",
    color: "#4FD1C5",
  },
  previous: {
    label: "Previous Year",
    color: "#2D3748",
  },
} satisfies ChartConfig;

export default function SalesOverviewCard() {
  return (
    <Card className="rounded-3xl border-0 bg-white shadow-sm">
      <CardContent className="p-6">
        <div>
          <h3 className="text-2xl font-bold text-slate-800">Sales Overview</h3>

          <p className="mt-2 text-lg font-semibold text-green-500">
            5% more
            <span className="ml-1 font-medium text-slate-400">in 2026</span>
          </p>
        </div>

        <div className="mt-8 h-[320px]">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{
                  top: 10,
                  right: 10,
                  left: -20,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient
                    id="currentGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#4FD1C5" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#4FD1C5" stopOpacity={0.05} />
                  </linearGradient>

                  <linearGradient
                    id="previousGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="95%" stopColor="#2D3748" stopOpacity={0.03} />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="4 4"
                  vertical={false}
                  stroke="#E5E7EB"
                />

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#A0AEC0", fontSize: 12 }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#A0AEC0", fontSize: 12 }}
                  domain={[0, 600]}
                />

                <Tooltip
                  cursor={{
                    stroke: "#CBD5E0",
                    strokeWidth: 1,
                    strokeDasharray: "5 5",
                  }}
                  content={({ active, payload, label }) => {
                    if (!active || !payload?.length) return null;

                    return (
                      <div className="rounded-xl border bg-white p-3 shadow-xl">
                        <p className="mb-2 font-semibold text-slate-800">
                          {label}
                        </p>

                        <div className="space-y-1">
                          <div className="flex items-center justify-between gap-6">
                            <span className="text-[#4FD1C5]">Current</span>

                            <span className="font-semibold">
                              {payload[0]?.value}
                            </span>
                          </div>

                          <div className="flex items-center justify-between gap-6">
                            <span className="text-slate-600">Previous</span>

                            <span className="font-semibold">
                              {payload[1]?.value}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }}
                />

                <Area
                  type="natural"
                  dataKey="current"
                  stroke="#4DF1C5"
                  strokeWidth={4}
                  fill="url(#currentGradient)"
                  activeDot={{
                    r: 6,
                    fill: "#4FD1C5",
                    stroke: "#fff",
                    strokeWidth: 3,
                  }}
                />

                <Area
                  type="natural"
                  dataKey="previous"
                  stroke="#2D3748"
                  strokeWidth={4}
                  fill="url(#previousGradient)"
                  activeDot={{
                    r: 6,
                    fill: "#2D3748",
                    stroke: "#fff",
                    strokeWidth: 3,
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
