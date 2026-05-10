import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function JobsPage() {
  const filePath = path.join(process.cwd(), "content", "jobs", "jobs.md");

  const file = fs.readFileSync(filePath, "utf8");

  return (
    <div className="max-w-[900px] mx-auto py-10 px-6">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{file}</ReactMarkdown>
    </div>
  );
}

