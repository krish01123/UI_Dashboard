import { getProfile } from "@/lib/profile";
import { PageHeader } from "../Home/PageHeader";
import { FolderKanban, LayoutDashboard, Users } from "lucide-react";

export default async function ProfilePage() {
  const user = await getProfile(1);

  return (
    <div className="pb-10">
      <section className="relative overflow-hidden rounded-[28px]">
        <img
          src="/ProfileBackground.png"
          alt="Profile Background"
          width={1920}
          height={260}
          className="h-[260px] w-full object-cover md:h-[300px]"
        />

        <div className="absolute inset-0 p-4 sm:p-6 lg:p-8">
          <PageHeader
            white
            title="Profile"
            items={[{ label: "Pages", href: "/" }, { label: "Profile" }]}
          />
        </div>
      </section>

      <section className="-mt-14 px-3 sm:px-5 lg:px-8 relative z-20">
        <div className="rounded-3xl border border-white/50 bg-[#D8F3F2] shadow-xl backdrop-blur-md">
          <div className="flex flex-col gap-8 p-5 md:flex-row md:items-center md:justify-between md:p-7">
            <div className="flex items-center gap-5">
              <img
                src={`https://i.pravatar.cc/150?u=${user.id}`}
                alt={`${user.firstName} ${user.lastName}`}
                width={84}
                height={84}
                className="rounded-2xl object-cover shadow-md"
              />

              <div>
                <h2 className="text-xl font-bold text-slate-800">
                  {user.firsName} {user.lastName}
                </h2>

                <p className="mt-1 text-sm text-slate-500">{user.email}</p>
              </div>
            </div>

            <div className="grid w-full grid-cols-3 gap-2 md:w-auto">
              <button className="cursor-pointer flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-100 text-sm font-semibold text-slate-700 transition hover:bg-slate-200">
                <LayoutDashboard size={16} />
                <span className="hidden sm:block">Overview</span>
              </button>

              <button className="cursor-pointer flex h-11 items-center justify-center gap-2 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100">
                <Users size={16} />
                <span className="hidden sm:block">Teams</span>
              </button>

              <button className="cursor-pointer flex h-11 items-center justify-center gap-2 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100">
                <FolderKanban size={16} />
                <span className="hidden sm:block">Projects</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
