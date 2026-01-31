import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/content';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { frontmatter, content } = post;

  return (
    <div>
      <header className="border-b border-sage-200/60 bg-white/80 backdrop-blur-sm dark:border-sage-800 dark:bg-stone-900/80">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="font-serif text-xl font-semibold text-sage-800 dark:text-sage-200">
            Rising Hope Doula
          </Link>
          <div className="flex gap-6">
            <Link
              href="/about"
              className="text-sage-600 hover:text-sage-800 dark:text-sage-400 dark:hover:text-sage-200"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-sage-600 hover:text-sage-800 dark:text-sage-400 dark:hover:text-sage-200"
            >
              Blog
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <article>
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-sage-900 dark:text-sage-100">
            {frontmatter.title}
          </h1>
          <p className="mt-3 text-sm text-sage-500 dark:text-sage-400">
            {new Date(frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
            {frontmatter.author && ` · ${frontmatter.author}`}
          </p>
          <div className="prose prose-sage mt-8 dark:prose-invert prose-p:text-sage-700 dark:prose-p:text-sage-300 prose-headings:font-serif prose-headings:text-sage-900 dark:prose-headings:text-sage-100">
            {content.split('\n').map((para, i) =>
              para.trim() ? (
                <p key={i}>{para}</p>
              ) : (
                <br key={i} />
              )
            )}
          </div>
        </article>

        <p className="mt-12">
          <Link href="/blog" className="text-sage-600 hover:underline dark:text-sage-400">
            ← Back to blog
          </Link>
        </p>
      </main>
    </div>
  );
}

export function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }));
}
