import Link from 'next/link';
import { getPageBySlug } from '@/lib/content';

export default function AboutPage() {
  const page = getPageBySlug('about');

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
        {page ? (
          <>
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-sage-900 dark:text-sage-100">
              {page.frontmatter.title}
            </h1>
            {page.frontmatter.description && (
              <p className="mt-2 text-lg text-sage-600 dark:text-sage-400">{page.frontmatter.description}</p>
            )}
            <div className="prose prose-sage mt-8 dark:prose-invert prose-p:text-sage-700 dark:prose-p:text-sage-300 prose-headings:font-serif prose-headings:text-sage-900 dark:prose-headings:text-sage-100">
              {page.content.split('\n').map((para, i) =>
                para.trim() ? (
                  <p key={i}>{para}</p>
                ) : (
                  <br key={i} />
                )
              )}
            </div>
          </>
        ) : (
          <>
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-sage-900 dark:text-sage-100">
              About
            </h1>
            <p className="mt-6 text-sage-600 dark:text-sage-400">
              Edit <code className="rounded bg-sage-100 px-1.5 py-0.5 dark:bg-sage-800">content/pages/about.md</code>{' '}
              via Pages CMS or locally to add your about content.
            </p>
          </>
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
