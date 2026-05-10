// Footer component shown at the bottom of the site
// Displays social media links using icon images

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--usacs-red-light)] py-6">
      <div className="flex justify-center gap-6">
        {/* Each link opens a social media page in a new tab */}
        {/* target="_blank" opens the link in a new tab */}
        {/* rel="noopener noreferrer" is for security when opening new tabs */}

        <a
          href="https://www.instagram.com/rutgers_usacs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/Instagram.png" alt="Instagram" className="h-6 w-6" />
        </a>

        <a
          href="https://github.com/usacs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/Github.png" alt="GitHub" className="h-6 w-6" />
        </a>

        <a
          href="https://medium.com/@rutgersusacs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/MediumBlog.png" alt="Medium" className="h-6 w-6" />
        </a>

        <a
          href="https://www.youtube.com/channel/UCwDoERNwcCrZICFil2fmdmA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/Youtube.png" alt="YouTube" className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
}
