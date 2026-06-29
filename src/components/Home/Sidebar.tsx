"use client";

import {
  Home,
  CreditCardIcon,
  Table,
  Wrench,
  User,
  Menu,
  X,
  UserPlus,
  PanelLeft,
  Rocket,
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const menuItems = [
  { title: "Dashboard", icon: Home, href: "/" },
  { title: "Tables", icon: Table, href: "/table" },
  { title: "Billing", icon: CreditCardIcon, href: "/billing" },
  { title: "RTL", icon: Wrench, href: "/rtl" },
];

const accountItems = [
  { title: "Profile", icon: User, href: "/profile" },
  { title: "Sign In", icon: Rocket, href: "/signin" },
  { title: "Sign Up", icon: UserPlus, href: "/signup" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-[70] flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-lg lg:hidden"
      >
        {open ? (
          <X className="h-5 w-5 text-slate-700" />
        ) : (
          <Menu className="h-5 w-5 text-slate-700" />
        )}
      </button>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed lg:sticky top-0 left-0 z-50
          h-screen
          bg-[#F8F9FB]
          border-r border-slate-200
          shadow-sm
          flex flex-col
          transition-all duration-300
          ${collapsed ? "lg:w-20" : "lg:w-72 xl:w-80"}
          w-[85%] sm:w-72 md:w-80
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Collapse Button */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="
            hidden lg:flex
            absolute
            top-5
            -right-4
            z-[60]
            h-8
            w-8
            rounded-lg
            bg-white
            shadow-md
          "
        >
          <PanelLeft
            className={`h-4 w-4 transition-transform duration-300 ${
              collapsed ? "rotate-180" : ""
            }`}
          />
        </Button>

        {/* Header */}
        <div
          className={`border-b border-slate-200 px-6 py-6 ${
            collapsed ? "flex justify-center" : ""
          }`}
        >
          {!collapsed ? (
            <div className="flex items-center gap-3">
              <Image src="/main.ico" alt="Favicon" width={20} height={20} />

              <div>
                <h1 className="text-sm font-bold tracking-wide text-slate-800">
                  PURITY UI Dashboard
                </h1>
                <p className="text-xs text-slate-400">Dashboard</p>
              </div>
            </div>
          ) : (
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-bold">
              P
            </div>
          )}
        </div>

        {/* Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Main Menu */}
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`
                    relative flex items-center rounded-2xl p-3 transition-all duration-200
                    ${
                      active
                        ? "bg-white shadow-md"
                        : "hover:bg-white hover:shadow-sm"
                    }
                    ${collapsed ? "justify-center" : "gap-4"}
                  `}
                >
                  <div
                    className={`
                      flex h-10 w-10 items-center justify-center rounded-xl
                      ${
                        active
                          ? "bg-teal-400 text-white shadow-sm"
                          : "bg-white text-slate-500"
                      }
                    `}
                  >
                    <Icon size={18} />
                  </div>

                  {!collapsed && (
                    <span
                      className={`font-medium ${
                        active ? "text-slate-900" : "text-slate-600"
                      }`}
                    >
                      {item.title}
                    </span>
                  )}

                  {active && !collapsed && (
                    <div className="absolute right-3 h-6 w-1 rounded-full bg-teal-400" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="my-8 border-t border-slate-200" />

          {/* Account Pages */}
          {!collapsed && (
            <h3 className="mb-4 px-2 text-xs font-bold uppercase tracking-widest text-slate-400">
              Account Pages
            </h3>
          )}

          <div className="space-y-2">
            {accountItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`
                    relative flex items-center rounded-2xl p-3 transition-all duration-200
                    ${
                      active
                        ? "bg-white shadow-md"
                        : "hover:bg-white hover:shadow-sm"
                    }
                    ${collapsed ? "justify-center" : "gap-4"}
                  `}
                >
                  <div
                    className={`
                      flex h-10 w-10 items-center justify-center rounded-xl
                      ${
                        active
                          ? "bg-teal-400 text-white shadow-sm"
                          : "bg-white text-slate-500"
                      }
                    `}
                  >
                    <Icon size={18} />
                  </div>

                  {!collapsed && (
                    <span
                      className={`font-medium ${
                        active ? "text-slate-900" : "text-slate-600"
                      }`}
                    >
                      {item.title}
                    </span>
                  )}

                  {active && !collapsed && (
                    <div className="absolute right-3 h-6 w-1 rounded-full bg-teal-400" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Support Section */}
          {!collapsed && (
            <>
              <div className="my-8 border-t border-slate-200" />

              <h3 className="mb-4 px-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                Support
              </h3>

              <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-slate-800">
                  Need Help?
                </h4>

                <p className="mb-4 text-sm text-slate-500">
                  Please check our docs and guides.
                </p>

                <button className="w-full rounded-xl bg-teal-400 py-2 text-sm font-semibold text-white transition hover:bg-teal-500">
                  Documentation
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
}
