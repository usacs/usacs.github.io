import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import rehypeRaw from "rehype-raw";

interface Crumb {
  label: string;
  href?: string;
}

interface MarkdownPageProps {
  title: string;
  content: string;
  breadcrumbs: Crumb[];
  published?: string;
  readTime?: string;
  writtenBy?: string;
}

export default function MarkdownPage({
  title,
  content,
  breadcrumbs,
  published,
  readTime,
  writtenBy,
}: MarkdownPageProps) {
  return (
    <div className="max-w-[900px] mx-auto py-10 px-6">
      <nav className="mb-4 text-sm text-black/60">
        {breadcrumbs.map((crumb, i) => (
          <span key={i}>
            {i > 0 && <span className="mx-2">/</span>}
            {crumb.href ? (
              <Link href={crumb.href} className="hover:underline">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-black/80">{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl font-bold">{title}</h1>
        {(writtenBy || published || readTime) && (
          <div className="mt-3 flex flex-wrap items-center gap-x-2 text-sm text-black/60">
            {writtenBy && <span>Written by {writtenBy}</span>}
            {writtenBy && (published || readTime) && <span>•</span>}
            {published && <span>Published {published}</span>}
            {published && readTime && <span>•</span>}
            {readTime && <span>Read Time {readTime}</span>}
          </div>
        )}
      </header>

      <article
        className="
          prose prose-neutral max-w-none
          [&_p]:mb-7
          [&_p]:leading-7
          [&_h2]:text-2xl
          [&_h2]:font-bold
          [&_h2]:mt-12
          [&_h2]:mb-5
          [&_h3]:text-xl
          [&_h3]:font-semibold
          [&_h3]:mt-10
          [&_h3]:mb-4
          [&_ul]:list-disc
          [&_ul]:ml-6
          [&_ul]:my-5
          [&_ol]:list-decimal
          [&_ol]:ml-6
          [&_ol]:my-5
          [&_li]:my-2
          [&_a]:text-blue-600
          [&_a]:underline
          [&_a:hover]:text-blue-700
          [&_h1]:text-4xl
[&_h1]:font-bold
[&_h1]:mt-14
[&_h1]:mb-6
        "
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
