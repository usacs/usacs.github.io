## Overview

This project is a full redesign and rewrite of the USACS (Undergraduate Student Alliance of Computer Scientists) website for 2026.

The goal of this project is to create a modern, maintainable, and scalable web application that allows USACS members to easily access information about the organization, events, and curated resources for computer science students.

A key feature of this system is the use of Markdown-based content. Instead of hardcoding text directly into components, content is stored in `.md` files and dynamically rendered on each page. This makes it easy to update resources, add new sections, and scale the website without modifying core application logic.

The application is built using Next.js and follows a component-based architecture, with reusable UI components and clearly separated content and presentation layers.

## Tech Stack

- **Next.js (App Router)**  
  https://nextjs.org/docs  
  Used as the main framework for building the application, handling routing, server-side rendering, and page structure.

- **React**  
  https://react.dev/  
  Used for building reusable UI components and managing the structure of the frontend.

- **TypeScript**  
  https://www.typescriptlang.org/docs/  
  Provides type safety across the codebase, making components and data structures more predictable and easier to maintain.

- **Tailwind CSS**  
  https://tailwindcss.com/docs  
  Used for styling the application with utility classes, enabling consistent design and rapid UI development.

- **Markdown (via ReactMarkdown)**  
  https://github.com/remarkjs/react-markdown  
  Used to render content from `.md` files into styled HTML within the application.

- **gray-matter**  
  https://github.com/jonschlinkert/gray-matter  
  Used to extract frontmatter (metadata like titles and sections) from markdown files.

- **remark-gfm**  
  https://github.com/remarkjs/remark-gfm  
  Enables GitHub-Flavored Markdown features such as lists, tables, and links.

  ## Project Structure

The project is organized to clearly separate application logic, reusable UI components, and content.

### `app/`

Contains all application pages and routing (Next.js App Router).

- Each folder inside `app/` represents a route  
  (e.g., `/resources`, `/resources/career`, `/resources/academics`)
- `page.tsx` files define what is rendered for each route
- Career subpages (like applying, interviewing, etc.) each have their own page that loads content dynamically from markdown files

### `app/components/`

Contains reusable UI components used across the site.

Examples:

- `NavBar.tsx` → top navigation bar
- `Footer.tsx` → social links at the bottom of every page
- `Card.tsx` / `CardResource.tsx` → reusable card layouts
- `PageHeader.tsx`, `PageSubtitle.tsx` → consistent page headers
- `SectionWrapper.tsx` → layout wrapper for spacing and alignment

These components help maintain consistent styling and reduce repeated code.

### `content/`

Stores all site content in Markdown (`.md`) files.

- Content is separated by category:
  - `academics/`
  - `career/`
  - `alumni/`
  - `general/`

- Each `.md` file contains:
  - **Frontmatter** (metadata like title, sections, etc.)
  - **Body content** (the actual text shown on the page)

Example:

- `career.md` → controls the Career landing page (tiles + main content)
- `resume.md`, `applying.md`, etc. → individual career pages

### How content is connected to pages

- Pages use `fs` to read markdown files from the `content/` folder
- `gray-matter` extracts metadata (title, sections, etc.)
- `ReactMarkdown` converts markdown into styled HTML
- Slugs (like `"resume"` or `"applying"`) map URLs to specific markdown files

Example:

- `/resources/career/resume` → loads `content/career/resume.md`

## Running Locally

To run the project on your local machine:

1. Clone the repository

```bash
git clone https://github.com/rutgersusacs/usacs-website.git

2. Navigate into the project folder
cd usacs-website

3. Install dependencies
npm install

4. Start the development server
npm run dev

5. Open in your browser:
http://localhost:3000

Contributors
Shreya Bhardwaj — Class of 2026
Ved Pant — Class of 2029
Harish Angadala — Class of 2029

```
