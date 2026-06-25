import Dashboard from "@/components/Home/Dashboard";
import { getDashboardData } from "@/lib/api";

export default async function Home() {
  const data = await getDashboardData();

  return (
  <Dashboard data={data} />
)
}
