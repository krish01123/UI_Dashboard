"use client";

import {
  ArrowRight,
  ShoppingCart,
  UserPlus,
  Users,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import { PageHeader } from "./PageHeader";
import ActiveUsersCard from "./ActiveUsersCard";
import SalesOverviewCard from "./SalesOverviewCard";
import ProjectCard from "./ProjectCard";
import OrdersOverview from "./OrdersOverview";
import Footer from "./Footer";

type Props = {
  data: {
    todayMoney: number;
    todayUsers: number;
    newClients: number;
    totalSales: number;
    featuredProducts: any[];
  };
};
export default function Dashboard({ data }: Props) {
  const featuredProduct = data.featuredProducts[0];

  const stats = [
    {
      title: "Today's Money",
      value: `$${data.todayMoney.toLocaleString()}`,
      percentage: "+55%",
      percentageColor: "text-green-500",
      icon: Wallet,
    },
    {
      title: "Today's Users",
      value: data.todayUsers.toLocaleString(),
      percentage: "+5%",
      percentageColor: "text-green-500",
      icon: Users,
    },
    {
      title: "New Clients",
      value: data.newClients.toLocaleString(),
      percentage: "-14%",
      percentageColor: "text-red-500",
      icon: UserPlus,
    },
    {
      title: "Total Sales",
      value: `$${data.totalSales.toLocaleString()}`,
      percentage: "+8%",
      percentageColor: "text-green-500",
      icon: ShoppingCart,
    },
  ];

  return (
    <>
      <div className="w-full">
        <PageHeader
          title="Dashboard"
          items={[{ label: "Pages", href: "/" }, { label: "Dashboard" }]}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-3 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-400">
                      {item.title}
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                      <h3 className="text-2xl font-bold text-slate-800">
                        {item.value}
                      </h3>

                      <span
                        className={`text-sm font-semibold ${item.percentageColor}`}
                      >
                        {item.percentage}
                      </span>
                    </div>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4FD1C5] text-white">
                    <Icon size={20} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 xl:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-[45%_55%]">
              <div className="min-w-0 flex flex-col justify-between p-6">
                <div>
                  <p className="text-sm font-semibold text-slate-400">
                    Built by Developers
                  </p>

                  <h2 className="mt-2 text-2xl xl:text-3xl font-bold text-slate-800 break-words">
                    Purity UI Dashboard
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    From colors, cards, typography to complex elements, you will
                    find the full documentation.
                  </p>
                </div>

                <button className="cursor-pointer mt-10 flex items-center gap-2 text-sm font-medium text-slate-700">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>

              <div className="relative flex items-center justify-center p-6">
                <div className="absolute h-56 w-56 rounded-full bg-cyan-200/40 blur-3xl" />
                <div className="relative flex h-[180px] w-full max-w-[420px] items-center justify-center rounded-3xl bg-gradient-to-br from-[#4FD1C5] to-[#38B2AC] shadow-xl">
                  <Image
                    src="/Chakra.svg"
                    alt="chakra"
                    width={160}
                    height={160}
                    priority
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0">
              <Image
                src="/Group.png"
                alt="Group"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute inset-0 bg-black/50" />

            <div className="relative flex min-h-[260px] flex-col justify-between p-6 text-white">
              <div>
                <h2 className="text-3xl font-bold">Work with the rockets</h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-slate-200">
                  Wealth creation is a revolutionary recent positive-sum game.
                  It is all about who takes the opportunity first.
                </p>
              </div>

              <button className="cursor-pointer flex items-center gap-2 text-2 text-sm font-medium">
                Read More
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ActiveUsersCard
          users={data.todayUsers}
          clicks={data.todayUsers * 73}
          sales={Math.round(data.totalSales)}
          items={data.featuredProducts.length * 80}
        />
        <SalesOverviewCard />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3 items-stretch">
        <div className="lg:col-span-2">
          <ProjectCard />
        </div>
        <div className="lg:col-span-1 flex">
          <OrdersOverview />
        </div>
      </div>

      <Footer />
    </>
  );
}
