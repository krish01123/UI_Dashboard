import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";

type Props = {
  products: any[];
};

export default function ProjectCard({ products }: Props) {
  const projects = [
    {
      id: 1,
      name: "Purity  UI Version",
      budget: 14000,
      completion: 60,
      members: products,
    },
    {
      id: 2,
      name: "Add Progress Track",
      budget: 3000,
      completion: 10,
      members: products.slice(0, 2),
    },
  ];
  return (
    <Card className="border-0 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Projects</CardTitle>

        <p className="text-sm text-muted-foreground">
          <span className="text-emerald-500">✓</span>30 done this month
        </p>
      </CardHeader>

      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Companies
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Members
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Budget
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Completion
                </th>
              </tr>
            </thead>

            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b last:border-0">
                  <td className="px-6 py-5">
                    <p className="font-semibold text-slate-700">
                      {project.name}
                    </p>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex -space-x-3">
                      {project.members.map((member) => (
                        <Avatar
                          key={member.id}
                          className="h-8 w-8 border-2 border-white"
                        >
                          <AvatarImage src={member.image} />
                          <AvatarFallback>
                            {member.title?.charAt(0) ?? "U"}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                  </td>

                  <td className="px-6 py-5 font-semibold text-slate-700">
                    {project.budget
                      ? `$${project.budget.toLocaleString()}`
                      : "Not set"}
                  </td>

                  <td className="px-6 py-5 min-w-[180px]">
                    <div className="space-y-2">
                      <p className="font-semibold text-cyan-500">
                        {project.completion}%
                      </p>

                      <Progress
                        value={project.completion}
                        className="h-2 [&>div]:bg-teal-500"
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
