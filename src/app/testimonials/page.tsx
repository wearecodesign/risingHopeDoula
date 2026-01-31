import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function TestimonialSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

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
        <TestimonialSection title="Birth Support">
          <Testimonial
            quote="Having our doula by our side was the best decision we made for our birth. She helped us navigate unexpected changes with grace and made sure our voices were heard. We felt supported every step of the way."
            author="Sarah & Michael"
            context="First-time parents, hospital birth"
          />
          <Testimonial
            quote="I was nervous about giving birth, especially as a first-time mom. Our doula's calm presence and constant encouragement gave me the confidence I needed. She helped my partner know exactly how to support me."
            author="Jennifer"
            context="Unmedicated birth"
          />
          <Testimonial
            quote="After a difficult first birth experience, I was anxious about my second. Our doula helped me process my fears and create a birth plan that honored my needs. This time, I felt empowered and in control."
            author="Maria"
            context="VBAC birth"
          />
        </TestimonialSection>
        <TestimonialSection title="Postpartum Care">
          <Testimonial
            quote="The postpartum period was harder than I expected. Having someone come in who actually understood what I was going through was invaluable. She helped me rest, fed my toddler, and reminded me that it's okay to ask for help."
            author="Amanda"
            context="Second-time mom, postpartum support"
          />
          <Testimonial
            quote="Overnight postpartum support saved my sanity. Knowing someone was there to care for the baby so I could sleep was life-changing. I woke up feeling human again."
            author="David & Lisa"
            context="Twins, overnight care"
          />
        </TestimonialSection>
        <TestimonialSection title="Prenatal Education">
          <Testimonial
            quote="The childbirth education sessions were exactly what we needed. Everything was explained clearly, and we felt so much more prepared walking into the hospital. I actually looked forward to labor!"
            author="Nicole & James"
            context="First-time parents"
          />
        </TestimonialSection>
      </div>
    </SimpleLayout>
  )
}
