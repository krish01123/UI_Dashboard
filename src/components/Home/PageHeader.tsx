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
};

export function PageHeader({ items, title }: Props) {
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
                      <BreadcrumbPage className="text-slate-600">
                        {item.label}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink
                        href={item.href ?? "#"}
                        className="text-slate-400"
                      >
                        {item.label}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>

                  {!isLast && (
                    <BreadcrumbSeparator className="text-slate-300" />
                  )}
                </div>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="mt-1 text-xl font-bold text-slate-800 lg:text-2xl">
          {title}
        </h1>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full items-center justify-between gap-3 md:justify-end md:w-auto md:ml-auto">
        {/* SEARCH */}
        <div className="relative w-[140px] sm:w-[180px] md:w-[220px] lg:w-64">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            placeholder="Type here.."
            className="h-9 w-full rounded-xl pl-9 text-sm"
          />
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button className="flex items-center gap-1 text-xs sm:text-sm font-medium text-slate-600">
            <User size={16} />
            <span className="hidden sm:inline">Sign In</span>
          </button>

          <button className="text-slate-500">
            <Settings size={18} />
          </button>

          <button className="text-slate-500">
            <Bell size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
