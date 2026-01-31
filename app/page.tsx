import Link from 'next/link';
import { getAllPosts } from '@/lib/content';

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="relative">
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

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <section className="text-center">
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-sage-900 dark:text-sage-100 sm:text-5xl">
            Compassionate support for your journey
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-sage-600 dark:text-sage-400">
            Birth and postpartum doula care rooted in evidence, respect, and presence. You deserve to feel
            supported, informed, and held.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="rounded-full bg-sage-600 px-6 py-3 text-white shadow-sm transition hover:bg-sage-700 dark:bg-sage-500 dark:hover:bg-sage-600"
            >
              Learn more
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-sage-300 bg-white px-6 py-3 text-sage-700 transition hover:bg-sage-50 dark:border-sage-600 dark:bg-stone-900 dark:text-sage-300 dark:hover:bg-sage-900/50"
            >
              Read the blog
            </Link>
          </div>
        </section>

        {posts.length > 0 && (
          <section className="mt-24 border-t border-sage-200 pt-16 dark:border-sage-800">
            <h2 className="font-serif text-2xl font-semibold text-sage-900 dark:text-sage-100">
              Recent posts
            </h2>
            <ul className="mt-6 space-y-6">
              {posts.map(({ slug, frontmatter }) => (
                <li key={slug}>
                  <Link
                    href={`/blog/${slug}`}
                    className="block rounded-lg border border-sage-200/60 bg-white p-5 transition hover:border-sage-300 hover:shadow-sm dark:border-sage-700 dark:bg-stone-900/50 dark:hover:border-sage-600"
                  >
                    <span className="font-medium text-sage-900 dark:text-sage-100">{frontmatter.title}</span>
                    <span className="mt-1 block text-sm text-sage-500 dark:text-sage-400">
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
            <p className="mt-6">
              <Link href="/blog" className="text-sage-600 hover:underline dark:text-sage-400">
                View all posts →
              </Link>
            </p>
          </section>
        )}
      </main>

      <footer className="mt-24 border-t border-sage-200 py-8 dark:border-sage-800">
        <div className="mx-auto max-w-5xl px-4 text-center text-sm text-sage-500 dark:text-sage-400 sm:px-6">
          © {new Date().getFullYear()} Rising Hope Doula. Content editable via{' '}
          <a
            href="https://app.pagescms.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-sage-700 dark:hover:text-sage-300"
          >
            Pages CMS
          </a>
          .
        </div>
      </footer>
    </div>
  );
}
