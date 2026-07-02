import { getAuthors } from "@/lib/table";
import Image from "next/image";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Card } from "../ui/card";

export default async function ProjectCard() {
  const authors = await getAuthors();

  const projects = [
    {
      id: 1,
      project: "Project #1",
      title: "Modern",
      image: "/ImageArchitect1.png",
      description:
        "As Uber works through a hude amount of internal management turmoil.",
      avatars: authors.slice(0, 3),
    },
    {
      id: 2,
      project: "Project #2",
      title: "Scandinavian",
      image: "/ImageArchitect2.png",
      description:
        "Music is simething that every person has his or her own specific opinion about.",
      avatars: authors.slice(3, 6),
    },
    {
      id: 3,
      project: "Project #3",
      title: "Minimalist",
      image: "/ImageArchitect3.png",
      description:
        "Different people have different taste, especially various type of music.",
      avatars: authors.slice(6, 9),
    },
  ];

  return (
    <Card className="w-full max-w-none rounded-3xl p-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="mt-2 text-muted-foreground">Architects Design Houses</p>
      </div>

      <div className="grid gap-6 sm:gap-7 lg:gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-56">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm font-semibold text-gray-500">
                {project.project}
              </p>

              <h2 className="mt-1 text-3xl font-bold">{project.title}</h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {project.description}
              </p>

              <div className="mt-auto flex items-center justify-between pt-6">
                <Button
                  variant="outline"
                  className="rounded-full border-teal-600 px-6 text-teal-700 hover:bg-teal-600 hover:text-white"
                >
                  VIEW PROJECT
                </Button>

                <div className="flex -space-x-3">
                  {project.avatars.map((author: any) => (
                    <img
                      key={author.id}
                      src={author.avatar}
                      alt={author.name}
                      width={36}
                      height={36}
                      className="rounded-full border-2 border-white"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="flex h-full min-h-[470px] cursor-pointer items-center justify-center rounded-2xl border-2 border-dashed">
          <div className="text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
              <Plus className="h-7 w-7 text-gray-500" />
            </div>

            <h3 className="text-lg font-semibold text-gray-600">
              Create a New Project
            </h3>
          </div>
        </div>
      </div>
    </Card>
  );
}
