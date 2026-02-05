import { Container } from '@/components/Container'

export function SimpleLayout({
  headline,
  intro,
  children,
}: {
  headline: string
  intro: string
  children?: React.ReactNode
}) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-primary-wine sm:text-5xl">
          {headline}
        </h1>
        <p className="mt-6 text-base text-primary-grey">
          {intro}
        </p>
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  )
}
