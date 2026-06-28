import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="px-4 py-6 pb-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p className="text-center">© 2026 Made with ❤️ by Krish Maharjan</p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link
            href={`https://www.instagram.com/mhj_cris/`}
            target="_blank"
            className="flex items-center gap-2 hover:text-[#4fd1c5] transition"
          >
            <FaInstagram size={18} />
            Instagram
          </Link>

          <Link
            href={`https://www.facebook.com/kris.mhj`}
            target="_blank"
            className="flex items-center gap-2 hover:text-[#4fd1c5] transition"
          >
            <FaFacebook size={18} />
            Facebook
          </Link>

          <Link
            href={`https://github.com/krish01123`}
            target="_blank"
            className="flex items-center gap-2 hover:text-[#4fd1c5] transition"
          >
            <FaGithub size={18} />
            GitHub
          </Link>

          <Link
            href={`https://www.threads.com/@mhj_cris`}
            target="_blank"
            className="flex items-center gap-2 hover:text-[#4fd1c5] transition"
          >
            <FaThreads size={18} />
            Threads
          </Link>
        </div>
      </div>
    </footer>
  );
}
