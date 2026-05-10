import Link from "next/link";
import Image from "next/image";

// Footer component shown at the bottom of the site
// Displays social media links using icon images

export default function Footer() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <footer className="w-full bg-[var(--usacs-red-light)] py-6">
      <div className="flex justify-center gap-6">
        {/* Each link opens a social media page in a new tab */}
        {/* target="_blank" opens the link in a new tab */}
        {/* rel="noopener noreferrer" is for security when opening new tabs */}

        <Link
          href="https://www.instagram.com/rutgers_usacs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={`${basePath}/icons/Instagram.png`}
            alt="Instagram"
            width={24}
            height={24}
            className="h-6 w-6"
          />
        </Link>

        <Link
          href="https://github.com/usacs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={`${basePath}/icons/Github.png`}
            alt="GitHub"
            width={24}
            height={24}
            className="h-6 w-6"
          />
        </Link>

        <Link
          href="https://medium.com/@rutgersusacs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={`${basePath}/icons/MediumBlog.png`}
            alt="Medium"
            width={24}
            height={24}
            className="h-6 w-6"
          />
        </Link>

        <Link
          href="https://www.youtube.com/channel/UCwDoERNwcCrZICFil2fmdmA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={`${basePath}/icons/Youtube.png`}
            alt="YouTube"
            width={24}
            height={24}
            className="h-6 w-6"
          />
        </Link>
      </div>
    </footer>
  );
}
