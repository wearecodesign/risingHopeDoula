import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: "You're subscribed",
  description: 'Thanks for subscribing to the Rising Hope Doula newsletter.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Thanks for subscribing."
      intro="I'll send you updates on birth tips, postpartum resources, and supportive insights for your journey into parenthood. You can unsubscribe at any time, no hard feelings."
    />
  )
}
