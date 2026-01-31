import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

export interface PageFrontmatter {
  title: string;
  description?: string;
  [key: string]: unknown;
}

export interface PostFrontmatter extends PageFrontmatter {
  date: string;
  author?: string;
  published?: boolean;
}

export function getPageBySlug(slug: string): { frontmatter: PageFrontmatter; content: string } | null {
  const fullPath = path.join(contentDir, 'pages', `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { frontmatter: data as PageFrontmatter, content };
}

export function getAllPosts(): { slug: string; frontmatter: PostFrontmatter; content: string }[] {
  const postsDir = path.join(contentDir, 'posts');
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir);
  const posts = files
    .filter((f) => f.endsWith('.md'))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '');
      const fullPath = path.join(postsDir, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      return { slug, frontmatter: data as PostFrontmatter, content };
    })
    .filter((p) => p.frontmatter.published !== false)
    .sort((a, b) => (new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()));
  return posts;
}

export function getPostBySlug(slug: string): { frontmatter: PostFrontmatter; content: string } | null {
  const fullPath = path.join(contentDir, 'posts', `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { frontmatter: data as PostFrontmatter, content };
}
