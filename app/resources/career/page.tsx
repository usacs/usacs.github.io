import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Each tile shown on the Career page (ex: Resume, Applying, etc)
// slug is the part of the URL and matches the markdown file name
// ex: slug "resume" → goes to /resources/career/resume → loads resume.md
type CareerSection = {
  title: string;
  slug: string;
};

// Defines the data at the top of career.md
// - title: page title
// - sections: list of tiles to display on this page
type CareerFrontmatter = {
  title: string;
  sections: CareerSection[];
};

export default async function CareerPage() {
  // Path to the main career markdown file
  // This file controls both the tiles and the text content below them
  const filePath = path.join(process.cwd(), "content", "career", "career.md");
  const raw = fs.readFileSync(filePath, "utf8");

  // Split the markdown file into:
  // - data: the frontmatter (title + sections for tiles)
  // - content: the main written content (paragraphs, lists, etc)
  const { data, content } = matter(raw);
  const frontmatter = data as CareerFrontmatter;

  return (
    <div className="max-w-[900px] mx-auto py-10 px-6">
      {/* Breadcrumb navigation showing where the user is */}
      <nav className="mb-4 text-sm text-black/60">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/resources" className="hover:underline">
          Resources
        </Link>
        <span className="mx-2">/</span>
        <span className="text-black/80">Career</span>
      </nav>

      {/* Page title from career.md */}
      <h1 className="text-4xl font-bold mb-12">{frontmatter.title}</h1>

      {/* Career tiles */}
      {/* These are generated from the "sections" list in career.md */}
      {/* Each tile links to a page using its slug */}
      {/* Example: slug "resume" → links to /resources/career/resume and matches resume.md */}

      {/* To add a new tile:
          1. Add a new item in the sections list in career.md (title + slug)
          2. Create a markdown file in content/career with the same slug name
            Example: slug "portfolio" should have portfolio.md
          3. Create a new folder in resources/career/ and a corresponding page.tsx
    */}
      <section className="grid grid-cols-3 gap-8">
        {/* First 3 tiles shown in the top row */}
        {frontmatter.sections.slice(0, 3).map((section) => (
          <Link
            key={section.slug}
            href={`/resources/career/${section.slug}`}
            className="
              bg-[var(--light-red-box)]
              rounded-[20px]
              h-[140px]
              flex items-center justify-center
              text-center font-semibold text-lg
              text-[#87111D]
              shadow-sm hover:shadow-md transition
            "
          >
            {section.title}
          </Link>
        ))}

        {/* Remaining tiles shown centered on the second row */}
        <div className="col-span-3 flex justify-center gap-8">
          {frontmatter.sections.slice(3).map((section) => (
            <Link
              key={section.slug}
              href={`/resources/career/${section.slug}`}
              className="
                bg-[var(--light-red-box)]
                rounded-[20px]
                h-[140px]
                w-[260px]
                flex items-center justify-center
                text-center font-semibold text-lg
                text-[#87111D]
                shadow-sm hover:shadow-md transition
              "
            >
              {section.title}
            </Link>
          ))}
        </div>
      </section>

      {/* Main written content below the tiles */}
      {/* This comes from the body of career.md (paragraphs, lists, etc) */}
      <article
        className="
          prose prose-neutral max-w-none mt-16

          [&_h2]:text-2xl
          [&_h2]:font-semibold
          [&_h2]:text-black
          [&_h2]:mt-10
          [&_h2]:mb-3

          [&_h3]:text-lg
          [&_h3]:font-semibold
          [&_h3]:mt-6
          [&_h3]:mb-2

          [&_a]:text-blue-600
          [&_a]:underline
          [&_a:hover]:text-blue-700

          [&_p]:my-3

          [&_ul]:my-4
          [&_ul]:list-disc
          [&_ul]:pl-6

          [&_ol]:my-4
          [&_ol]:list-decimal
          [&_ol]:pl-6

          [&_li]:my-1.5

          [&_hr]:my-8
        "
      >
        {/* Converts markdown into formatted content */}
        {/* Enables support for tables, lists, and other markdown features */}
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </div>
  );
}
