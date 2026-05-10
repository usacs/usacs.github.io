# Contributing to USACS Resources

Thank you for your interest in contributing! 🎉  
We welcome contributions from the community, whether it's:

- Adding new guides
- Improving existing content
- Fixing bugs or formatting issues

All contributions must be submitted through a Pull Request and approved before being merged.

---

## How to Contribute

### 1. Fork the repository

Click the **"Fork"** button on GitHub.

### 2. Clone your fork locally

```bash
git clone https://github.com/YOUR-USERNAME/usacs-website.git
cd usacs-website
```

### 3. Create a new branch

```bash
git checkout -b feature/your-feature-name
```

### 4. Make your changes

Edit or add files (see sections below).

### 5. Commit and push

```bash
git add .
git commit -m "Describe your changes"
git push origin feature/your-feature-name
```

### 6. Open a Pull Request

Go to your fork on GitHub and click **"Compare & pull request"**.

---

## Editing or Adding Content

All content is written in Markdown and stored in the `content/` folder.

### Example directories:

- `content/career/`
- `content/academics/`
- `content/general/`

---

### To edit an existing page:

1. Locate the corresponding `.md` file
2. Update the content using Markdown

---

### To add a new page:

1. Create a new `.md` file in the appropriate folder in `content/`

### Example: If you want to add another section to career (like career-paths.md), go to the career folder in `content/` and create an `.md` file with that name

2. Add the following frontmatter at the top of your `.md` file:

```md
---
title: Your Title
writtenBy: Your name
published: Month Day, Year
readTime: X min
---
```

3. Write your content below the frontmatter (this is what will be rendered on the website page). Be sure to add a title and slug to the main markdown file.

Slug must match your markdown file name.

### Example 1: Adding a new section to Career

Navigate to the main markdown file:

`content/career/career.md`

Add a new section like this:

title: "Career"  
type: "hub"  
sections:

- title: "Career Paths"  
  slug: "career-paths"

---

### Example 2: Adding a new section to Academics

Navigate to the main markdown file:

`content/academics/academics.md`

Add a new section like this:

title: "Academics"  
type: "hub"  
sections:

- title: "Exams"  
  slug: "exams"

---

### Next Steps

Once your markdown file is created:

1. Go to the `app/resources/` folder

2. Navigate to the correct section:
   - Career → `app/resources/career`
   - Academics → `app/resources/academics`

3. Create a new folder for your page  
   Example:
   `app/resources/career/career-paths`

4. Inside that folder, create a `page.tsx` file:
   `app/resources/career/career-paths/page.tsx`

5. Add content to your `page.tsx` file

Inside your `page.tsx`, you should load your Markdown file and pass it into the shared `MarkdownPage` component.

### Example:

```tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownPage from "@/app/components/MarkdownPage";

export default function CareerPathsPage() {
  const filePath = path.join(
    process.cwd(),
    "content",
    "career",
    "career-paths.md",
  );

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
```

---

---

### Example Structure

- Markdown file with content:`content/general/general-principles.md`
- Page that renders the md: `app/resources/general/page.tsx`

---

### How it works

The `page.tsx` file:

1. Reads the Markdown file from the `content/` folder
2. Extracts metadata (title, read time, etc.) using `gray-matter`
3. Passes the content into the shared `MarkdownPage` component

Example:

```tsx
<MarkdownPage
  title={data.title}
  content={content}
  readTime={data.readTime}
  breadcrumbs={[...]}
/>
```

---

## Markdown Guidelines

- Leave a blank line between paragraphs
- Use `-` or `1.` for lists
- Use headings (`##`, `###`) for structure
- Keep formatting clean and consistent
- HTML is allowed (e.g., tables) if needed

---

## Code Changes

- Follow the existing project structure
- Keep components reusable and clean
- Test your changes before submitting

Run locally:

```bash
npm run dev
```

---

## Pull Request Process

When creating a PR, please:

- Use a clear and descriptive title
- Explain what you changed and why
- Keep PRs focused (avoid unrelated changes)

After submitting:

1. Wait for review from maintainers
2. Address any requested changes
3. Once approved, your changes will be merged 🎉

---

## Guidelines

- Check existing issues before starting work
- Test your changes before submitting
- Write clear commit messages
- Be respectful and collaborative

---

## Questions?

- Open an issue on GitHub for questions or feature requests

Thank you for helping improve USACS Resources! 🚀
