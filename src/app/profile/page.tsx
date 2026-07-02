import ProjectCard from "@/components/Profile/ProjectCard";
import ConversationCard from "@/components/Profile/ConversationCard";
import PlatformSettingsCard from "@/components/Profile/PlatformSettingCard";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import ProfileInformationCard from "@/components/Profile/ProfileInformationCard";
import { getAuthors } from "@/lib/table";
import Footer from "@/components/Home/Footer";

export default async function ProfilePage() {
  const authors = await getAuthors();

  return (
    <div className="w-full p-4 sm:p-6">
      <ProfileHeader />

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <PlatformSettingsCard />
        <ProfileInformationCard />
        <ConversationCard authors={authors.slice(0, 5)} />
      </div>
      <div className="mt-4">
        <ProjectCard />
      </div>
      <Footer />
    </div>
  );
}
