"use client";

import { Home, LayoutDashboard, User, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen bg-[#f8f9f3] flex flex-col">
      {/* Navbar */}
      <header className="w-full flex justify-center px-4 pt-4 md:pt-6">
        <nav className="w-full max-w-6xl bg-white rounded-2xl shadow-sm px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="w-5 h-5 text-gray-700" />
            <span className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Purity UI Dashboard
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <Link href="/dashboard" className="flex items-center gap-1">
              <Home size={14} />
              Dashboard
            </Link>

            <Link href="/profile" className="flex items-center gap-1">
              <User size={14} />
              Profile
            </Link>

            <Link href="/signup" className="flex items-center gap-1">
              <UserPlus size={14} />
              Sign Up
            </Link>
          </div>

          <button className="bg-[#1a2035] text-white text-xs md:text-sm px-4 md:px-7 py-3 rounded-full font-semibold hoveropacity-90 transition">
            Free Download
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 md:py-12">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div className="max-w-md mx-auto lg:mx-0 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-[#4fd2c5] mb-2">
              Welcome Back
            </h1>

            <p className="text-gray-400 mb-10 text-sm md:text-base">
              Enter your email and password to sign in
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#4fd1c5]"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Your Password"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-teal-400"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="h-5 w-5" />
                    ) : (
                      <FaEye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="remember"
                  className="cursor-pointer h-4 w-4 rounded border-slate-300 text-teal-500"
                />
                <label htmlFor="remember" className="text-sm text-slate-600">
                  Remember Me
                </label>
              </div>

              <button
                type="submit"
                className="cursor-pointer w-full bg-[#4fd1c5] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                SIGN IN
              </button>
            </form>

            <p className="text-center text-sm text-gray-400 mt-8">
              Don't have an account?
              <Link href="/signup" className="text-[#4fd1c5] font-semibold">
                Sign Up
              </Link>
            </p>
          </div>

          {/* Right Side */}
          <div className="hidden lg:block">
            <div className="relative overflow-hidden rounded-[30px] h-[650px] bg-[#4fd1c5]">
              <div className="absolute inset-0 opacity-20">
                <svg className="absolute inset-0 h-full w-full">
                  <path
                    d="M-50 600C150 350 150 250 350 0"
                    stroke="white"
                    strokeWidth="20"
                    strokeOpacity="0.4"
                  />
                  <path
                    d="M50 700C250 450 250 250 500 -50"
                    stroke="white"
                    strokeWidth="16"
                    strokeOpacity="0.3"
                  />
                  <path
                    d="M-100 300C100 150 250 150 650 500"
                    stroke="white"
                    strokeWidth="14"
                    strokeOpacity="0.25"
                  />
                </svg>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={`Chakra.svg`}
                      alt="Chakra UI"
                      width={260}
                      height={80}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
