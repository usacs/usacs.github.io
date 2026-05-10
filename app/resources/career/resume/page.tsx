import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownPage from "@/app/components/MarkdownPage";

export default function ResumePage() {
  const filePath = path.join(process.cwd(), "content", "career", "resume.md");

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return (
    <MarkdownPage
      title={data.title}
      content={content}
      writtenBy={data.writtenBy}
      published={data.published}
      readTime={data.readTime}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Career", href: "/resources/career" },
        { label: data.title },
      ]}
    />
  );
}
