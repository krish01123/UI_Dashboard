"use client";

import { useState } from "react";
import {
  FaFacebookF,
  FaApple,
  FaGoogle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { Home, User, Rocket, UserPlus, LayoutDashboard } from "lucide-react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="mx-2 mt-1 sm:mx-4 lg:mx-6">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-400 px-6 py-12 lg:px-16 lg:py-16">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-20 top-10 h-64 w-64 rounded-full border border-white" />
          <div className="absolute right-0 top-0 h-95 w-96 rounded-full border border-white" />
          <div className="absolute bottom-0 left-1/4 h-80 rounded-full border border-white" />
        </div>

        <div className="relative z-10 flex items-center gap-16">
          <h1 className="flex items-center gap-2 text-sm font-bold text-white">
            <LayoutDashboard className="w-5 h-5 text-white" />
            PURITY UI DASHBOARD
          </h1>

          <nav className="flex items-center gap-8 text-xs font-medium text-white sm:text-sm">
            <a
              href="/dashboard"
              className="flex items-center gap-2 transition hover:text-white/80"
            >
              <Home className="h-5 w-5" />
              Dashboard
            </a>

            <a
              href="/profile"
              className="flex items-center gap-2 transition hover:text-white/80"
            >
              <User className="h-5 w-5" />
              Profile
            </a>

            <a
              href="/signup"
              className="flex items-center gap-2 transition hover:text-white/80"
            >
              <UserPlus className="h-5 w-5" />
              Sign Up
            </a>

            <a
              href="/signin"
              className="flex items-center gap-2 transition hover:text-white/80"
            >
              <Rocket className="h-5 w-5" />
              Sign In
            </a>
          </nav>
        </div>

        <div className="relative z-10 mt-10 flex justify-center">
          <div className="max-w-md text-center text-white">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Welcome!
            </h2>

            <p className="mt-4 text-sm leading-relaxed sm:text-base md:text-lg">
              Use these awesome forms to login or create a new account in your
              project for free.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto -mt-10 w-full max-w-md">
        <div className="rounded-2xl bg-white p-8 shadow-xl">
          <h3 className="text-center text-2xl font-bold text-slate-800">
            Register With
          </h3>

          <div className="mt-6 flex justify-center gap-4">
            <button className="cursor-pointer flex h-14 w-14 items-center justify-center rounded-xl border border-slate-200 hover:bg-teal-200">
              <FaFacebookF className="h-6 w-6" />
            </button>

            <button className="cursor-pointer flex h-14 w-14 items-center justify-center rounded-xl border border-slate-200 hover:bg-teal-200">
              <FaApple className="h-6 w-6" />
            </button>

            <button className="cursor-pointer flex h-14 w-14 items-center justify-center rounded-xl border border-slate-200 hover:bg-teal-200">
              <FaGoogle className="h-6 w-6" />
            </button>
          </div>

          <p className="my-6 text-center font-medium text-slate-400">or</p>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-teal-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-teal-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
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
              className="cursor-pointer w-full rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 py-3 font-semibold text-white shadow-md transition hover:opacity-90"
            >
              SIGN UP
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Already have an account?
            <span className="cursor-pointer font-semibold text-teal-500">
              Sign In
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
