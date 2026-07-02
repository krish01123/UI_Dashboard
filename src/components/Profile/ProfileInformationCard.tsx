import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { FaThreads } from "react-icons/fa6";

export default function ProfileInformationCard() {
  return (
    <Card className="h-full rounded-2xl border border-slate-200 bg-white shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-slate-800 sm:text-xl">
          Profile Information
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
          Hi, I’m Jackson, Decisions: If you can’t decide, the answer is no. If
          two equally difficult paths, choose the one more painful in the short
          term (pain avoidance is creating an illusion of equality).
        </p>

        <div className="space-y-5 border-t border-slate-200 pt-5">
          <div className="flex flex-wrap gap-2">
            <span className="font-semibold text-slate-800">Full Name:</span>
            <span className="text-slate-500 ">Jackson</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="font-semibold  text-slate-800">Location</span>
            <span className="text-slate-500">United States</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="font-semibold text-slate-800">Social Media</span>

            <div className="flex items-center gap-3 text-cyan-400">
              <FaFacebook className="h-4 w-4 cursor-pointer hover:text-cyan-500" />
              <FaInstagram className="h-4 w-4 cursor-pointer hover:text-cyan-500" />
              <FaThreads className="h-4 w-4 cursor-pointer hover:text-cyan-500" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
