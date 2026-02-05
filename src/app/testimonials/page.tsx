import { type Metadata } from 'next'
import he from 'he';

import content from '../../../content/testimonials.json';

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { TestimonialSection } from '@/components/TestimonialSection'

function Testimonial({
  quote,
  author,
  context,
}: {
  quote: string
  author: string
  context: string
}) {
  return (
    <Card as="article">
      <blockquote className="text-base text-primary-grey">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <footer className="mt-4">
        <p className="text-sm font-semibold text-primary-gray">
          {author}
        </p>
        <p className="text-sm text-grey-600">{context}</p>
      </footer>
    </Card>
  )
}

export const metadata: Metadata = content.metaData;

export default function Testimonials() {
  return (
    <SimpleLayout
      headline={he.decode(content.headline)}
      intro={he.decode(content.intro)}
    >
      <div className="space-y-20">
        <TestimonialSection>
          {content.testimonials.map((testimonial) => (
            <div key={testimonial.author} className="md:col-span-1">
              <Testimonial
                quote={testimonial.quote}
                author={testimonial.author}
                context={testimonial.context}
              />
            </div>
          ))}
        </TestimonialSection>
      </div>
    </SimpleLayout>
  )
}
