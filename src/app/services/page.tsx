import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

function HeartIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        fill="currentColor"
      />
    </svg>
  )
}

const services = [
  {
    name: 'Birth Doula Support',
    description:
      'Continuous emotional, physical, and informational support during labor and delivery. Includes prenatal visits to discuss your birth preferences, on-call availability, and immediate postpartum support.',
    includes: [
      'Two prenatal visits',
      '24/7 on-call support from 38 weeks',
      'Continuous labor and birth support',
      'Comfort measures and positioning guidance',
      'Partner support and involvement',
      'One postpartum visit',
    ],
  },
  {
    name: 'Postpartum Doula Care',
    description:
      'Nurturing support during the fourth trimester as you adjust to life with your new baby. Whether you need daytime help or overnight support, I provide evidence-based care for the whole family.',
    includes: [
      'Newborn care education',
      'Infant feeding support',
      'Light household tasks',
      'Meal preparation',
      'Sibling care assistance',
      'Emotional support and resources',
    ],
  },
  {
    name: 'Prenatal Education',
    description:
      'Personalized childbirth education sessions tailored to your needs and preferences. Learn about the stages of labor, comfort measures, medical interventions, and how to advocate for yourself.',
    includes: [
      'Understanding labor and birth',
      'Comfort techniques and positions',
      'Birth preferences planning',
      'Partner preparation',
      'Newborn care basics',
      'Postpartum planning',
    ],
  },
  {
    name: 'Virtual Support Package',
    description:
      'For families who prefer remote support or are outside my service area. Includes video calls, text support, and resources to help you feel prepared and supported throughout your journey.',
    includes: [
      'Video prenatal consultations',
      'Birth preferences review',
      'On-call text/video support during labor',
      'Postpartum check-in calls',
      'Curated resource library access',
      'Email support throughout pregnancy',
    ],
  },
]

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Doula services including birth support, postpartum care, and prenatal education.',
}

export default function Services() {
  return (
    <SimpleLayout
      title="Services to support your unique journey."
      intro="Every family's needs are different. I offer flexible packages designed to meet you where you are—whether you need comprehensive birth support, postpartum care, or guidance preparing for your new arrival."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2"
      >
        {services.map((service) => (
          <Card as="li" key={service.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <HeartIcon className="h-6 w-6 text-teal-500" />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {service.name}
            </h2>
            <Card.Description>{service.description}</Card.Description>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                What&apos;s included:
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="mr-2 text-teal-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </ul>
      <div className="mt-16 rounded-2xl border border-zinc-100 p-8 text-center dark:border-zinc-700/40">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Ready to connect?
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          I offer free consultations to discuss your needs and answer any
          questions. Let&apos;s find the right support for your journey.
        </p>
        <a
          href="mailto:hello@risinghopedoula.com"
          className="mt-4 inline-block rounded-full bg-teal-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-teal-600"
        >
          Schedule a free consultation
        </a>
      </div>
    </SimpleLayout>
  )
}
