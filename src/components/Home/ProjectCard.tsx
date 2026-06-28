import {
  SiAtlassian,
  SiFigma,
  SiInvision,
  SiShopify,
  SiSlack,
} from "react-icons/si";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";

const users = [
  {
    id: 1,
    name: "John",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Emma",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Alex",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Sophia",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "James",
    image: "https://i.pravatar.cc/150?img=5",
  },
];

export default function ProjectCard() {
  const projects = [
    {
      id: 1,
      name: "Purity UI Version",
      budget: 14000,
      completion: 60,
      members: users,
      icon: <SiFigma className="text-purple-500 text-xl" />,
    },
    {
      id: 2,
      name: "Add Progress Track",
      budget: 3000,
      completion: 10,
      members: users.slice(0, 2),
      icon: <SiAtlassian className="text-blue-500 text-xl" />,
    },
    {
      id: 3,
      name: "Fix Platform Errors",
      budget: null,
      completion: 100,
      members: users.slice(1, 3),
      icon: <SiSlack className="text-purple-500 text-xl" />,
    },
    {
      id: 4,
      name: "Launch our Mobile App",
      budget: 32000,
      completion: 100,
      members: users.slice(0, 4),
      icon: <SiShopify className="text-emerald-500 text-xl" />,
    },
    {
      id: 5,
      name: "Add the New Pricing Page",
      budget: 400,
      completion: 25,
      members: users,
      icon: <SiShopify className="text-emerald-500 text-xl" />,
    },
    {
      id: 6,
      name: "Redesign New Online Shop",
      budget: 7600,
      completion: 40,
      members: users.slice(2, 5),
      icon: <SiInvision className="text-pink-500 text-xl" />,
    },
  ];

  return (
    <Card className="border-0 shadow-lg rounded-2xl">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Projects</CardTitle>

        <p className="text-sm text-muted-foreground">
          <span className="text-emerald-500 font-semibold">✓ 30</span> done this
          month.
        </p>
      </CardHeader>

      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-muted-foreground text-xs uppercase">
                <th className="px-6 py-4 text-left">Companies</th>
                <th className="px-6 py-4 text-left">Members</th>
                <th className="px-6 py-4 text-left">Budget</th>
                <th className="px-6 py-4 text-left">Completion</th>
              </tr>
            </thead>

            <tbody>
              {projects.map((project) => (
                <tr
                  key={project.id}
                  className="border-b last:border-none hover:bg-slate-50"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center">
                        {project.icon}
                      </div>

                      <span className="font-semibold text-slate-700">
                        {project.name}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex -space-x-3">
                      {project.members.map((member) => (
                        <Avatar
                          key={member.id}
                          className="h-9 w-9 border-2 border-white"
                        >
                          <AvatarImage src={member.image} alt={member.name} />
                          <AvatarFallback>
                            {member.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                  </td>

                  <td className="px-6 py-5 font-semibold">
                    {project.budget
                      ? `$${project.budget.toLocaleString()}`
                      : "Not set"}
                  </td>

                  <td className="px-6 py-5 w-56">
                    <div className="space-y-2">
                      <p className="text-cyan-500 font-semibold">
                        {project.completion}%
                      </p>

                      <Progress
                        value={project.completion}
                        className="h-2 [&>div]:bg-cyan-500"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
