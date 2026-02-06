import { type Metadata } from 'next'
import he from 'he'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

import content from '../../../content/resources.json'

function ResourceSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Resource({
  title,
  href,
  children,
  target,
}: {
  title: string
  href?: string
  children: React.ReactNode
  target?: string
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href} target={target}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata: Metadata = content.metaData;

export default function Resources() {
  const categories = [...new Set(content.resources.map((resource) => resource.category))];

  return (
    <SimpleLayout
      headline={he.decode(content.headline)}
      intro={he.decode(content.intro)}
    >
      <div className="space-y-20">
        {categories.map((category) => (
          <ResourceSection key={category} title={category}>
            {content.resources.filter((resource) => resource.category === category).map((resource) => (
              <Resource key={resource.title} title={resource.title} href={resource.href ?? undefined} target="_blank">
                {he.decode(resource.description)}
              </Resource>
            ))}
          </ResourceSection>
        ))}
      </div>
    </SimpleLayout>
  )
}
