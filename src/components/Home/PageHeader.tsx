import { Bell, Search, Settings, User } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Input } from "../ui/input";

type Crumb = {
  label: string;
  href?: string;
};

type Props = {
  items: Crumb[];
  title: string;
  white?: boolean;
};

export function PageHeader({ items, title, white }: Props) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
      {/* LEFT SIDE */}
      <div>
        <Breadcrumb>
          <BreadcrumbList className="flex flex-wrap items-center">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;

              return (
                <div key={item.label} className="flex items-center">
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage
                        className={
                          white ? "text-white font-semibold" : "text-slate-600"
                        }
                      >
                        {item.label}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink
                        href={item.href ?? "#"}
                        className={
                          white
                            ? "text-white/80 hover:text-white"
                            : "text-slate-600"
                        }
                      >
                        {item.label}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>

                  {!isLast && (
                    <BreadcrumbSeparator
                      className={white ? "text-white/60" : "text-slate-300"}
                    />
                  )}
                </div>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>

        <h1
          className={`cursor-pointer mt-1 text-xl font-bold lg:text-2xl ${
            white ? "text-white" : "text-slate-800"
          }`}
        >
          {title}
        </h1>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full items-center justify-between gap-3 md:justify-end md:w-auto md:ml-auto">
        {/* SEARCH */}
        <div className="relative w-[140px] sm:w-[180px] md:w-[220px] lg:w-64">
          <Search
            className={`absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 ${
              white ? "text-white" : "text-slate-400"
            }`}
          />
          <Input
            placeholder="Type here.."
            className={`h-9 w-full rounded-xl pl-9 text-sm ${
              white
                ? "text-white/90 border-white/30 text-slate-700 plcaeholder:text-slate-400"
                : ""
            }`}
          />
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            className={`cursor-poin ter flex items-center gap-1 text-xs sm:text-sm font-medium ${
              white ? "text-white" : "text-slate-600"
            }`}
          >
            <User size={16} />
            <span className="hidden sm:inline">Sign In</span>
          </button>

          <button className={white ? "text-white" : "text-slate-500"}>
            <Settings size={18} className="cursor-pointer" />
          </button>

          <button className={white ? "text-white" : "text-slate-500"}>
            <Bell size={18} className="cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
}
