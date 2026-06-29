import Footer from "@/components/Home/Footer";
import ProjectCard from "@/components/Home/ProjectCard";
import AuthorTable from "@/components/Table/AuthorTable";
import { getAuthors } from "@/lib/table";

export default async function TablePage() {
  const authors = await getAuthors();
  return (
    <main className="min-h-screen bg-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AuthorTable authors={authors} />
      </div>
      <div className="mt-5">
        <ProjectCard />
      </div>
      <Footer />
    </main>
  );
}
