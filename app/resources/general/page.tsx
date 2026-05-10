import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownPage from "@/app/components/MarkdownPage";

export default async function GeneralPage() {
  const filePath = path.join(
    process.cwd(),
    "content",
    "general",
    "general-principles.md",
  );

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return (
    <MarkdownPage
      title={data.title}
      content={content}
      readTime={data.readTime}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: data.title },
      ]}
    />
  );
}
