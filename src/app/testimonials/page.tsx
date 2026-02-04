import { type Metadata } from 'next'
import testimonials from '../../../content/testimonials.json';

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
      <blockquote className="text-base text-zinc-600 dark:text-zinc-400">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <footer className="mt-4">
        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {author}
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{context}</p>
      </footer>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    "Hear from families I've had the honor of supporting through pregnancy, birth, and postpartum.",
}

export default function Testimonials() {
  return (
    <SimpleLayout
      title="Stories from families I've had the honor of supporting."
      intro="Every birth story is unique, and it's a privilege to be part of such transformative moments. Here's what some families have shared about their experience."
    >
      <div className="space-y-20">
        <TestimonialSection>
          {testimonials.testimonials.map((testimonial) => (
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
