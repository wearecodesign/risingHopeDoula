import { type Metadata } from 'next'
import he from 'he';

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import content from '../../../content/services.json';
import settings from '../../../content/settings.json';

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

export const metadata: Metadata = content.metaData;

export default function Services() {
  return (
    <SimpleLayout
      headline={he.decode(content.headline)}
      intro={he.decode(content.intro)}
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2"
      >
        {content.services.map((service) => (
          <Card as="li" key={service.name}>
            <h2 className="text-base font-semibold text-primary-wine">
              {service.name}
            </h2>
            <Card.Description>{service.description}</Card.Description>
            <div className="mt-4">
              {service.includes && service.includes.length > 0 && (<ul className="mt-2 space-y-1 text-sm text-primary-grey">
                <h3 className="text-sm font-medium text-primary-wine">
                  What&apos;s included:
                </h3>
                
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="mr-2 text-primary-wine">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Card>
        ))}
      </ul>
      <div className="mt-16 rounded-2xl border border-grey-100 p-8 text-center">
        <h2 className="text-xl font-semibold text-primary-wine">
          Ready to connect?
        </h2>
        <p className="mt-2 text-primary-grey">
          I offer free consultations to discuss your needs and answer any
          questions. Let&apos;s find the right support for your journey.
        </p>
        <a
          href={`mailto:${settings.email}`}
          className="mt-4 inline-block rounded-full bg-primary-wine px-6 py-2 text-sm font-semibold text-white transition hover:bg-wine-800"
        >
          Schedule a free consultation
        </a>
      </div>
    </SimpleLayout>
  )
}
