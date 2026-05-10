import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownPage from "@/app/components/MarkdownPage";

export default function ApplyingPage() {
  const filePath = path.join(process.cwd(), "content", "career", "applying.md");

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return (
    <MarkdownPage
      title={data.title}
      content={content}
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
