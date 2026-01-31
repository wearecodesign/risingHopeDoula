import Link from 'next/link';
import { getAllPosts } from '@/lib/content';

export default function BlogPage() {
  const posts = getAllPosts();

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
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-sage-900 dark:text-sage-100">
          Blog
        </h1>
        <p className="mt-2 text-sage-600 dark:text-sage-400">
          Thoughts on birth, postpartum, and support.
        </p>

        {posts.length === 0 ? (
          <p className="mt-12 text-sage-500 dark:text-sage-400">
            No posts yet. Add markdown files in <code className="rounded bg-sage-100 px-1.5 py-0.5 dark:bg-sage-800">content/posts/</code> or edit via{' '}
            <a
              href="https://app.pagescms.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-sage-700 dark:hover:text-sage-300"
            >
              Pages CMS
            </a>
            .
          </p>
        ) : (
          <ul className="mt-12 space-y-8">
            {posts.map(({ slug, frontmatter }) => (
              <li key={slug}>
                <Link
                  href={`/blog/${slug}`}
                  className="block rounded-lg border border-sage-200/60 bg-white p-6 transition hover:border-sage-300 hover:shadow-sm dark:border-sage-700 dark:bg-stone-900/50 dark:hover:border-sage-600"
                >
                  <span className="font-serif text-xl font-medium text-sage-900 dark:text-sage-100">
                    {frontmatter.title}
                  </span>
                  {frontmatter.description && (
                    <p className="mt-2 text-sage-600 dark:text-sage-400">{frontmatter.description}</p>
                  )}
                  <span className="mt-3 block text-sm text-sage-500 dark:text-sage-400">
                    {new Date(frontmatter.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-12">
          <Link href="/" className="text-sage-600 hover:underline dark:text-sage-400">
            ← Back to home
          </Link>
        </p>
      </main>
    </div>
  );
}
