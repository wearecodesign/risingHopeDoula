import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { InstagramIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    "I'm a certified doula providing compassionate, evidence-based support for families during pregnancy, birth, and postpartum.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m here to support you through one of life&apos;s most
            transformative journeys.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              My journey to becoming a doula began with my own birth experience.
              I learned firsthand how powerful it is to have continuous,
              compassionate support during such a vulnerable time. That
              experience ignited my passion for helping other families feel
              informed, empowered, and held.
            </p>
            <p>
              As a certified doula, I provide evidence-based, non-judgmental
              support that honors your unique needs and choices. Whether
              you&apos;re planning a home birth, hospital birth, medicated or
              unmedicated — I&apos;m here to support your vision for your birth
              experience.
            </p>
            <p>
              My approach is rooted in the belief that every birthing person
              deserves to feel safe, respected, and supported. I combine
              practical knowledge with emotional presence, offering comfort
              measures, advocacy support, and a calm, reassuring presence
              throughout your journey.
            </p>
            <p>
              Beyond birth support, I&apos;m passionate about postpartum care.
              The fourth trimester is a profound transition, and families
              deserve nurturing support as they adjust to life with a new baby.
              I&apos;m here to help you navigate this beautiful, challenging
              time.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={InstagramIcon}>
              Follow on Instagram
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:hello@risinghopedoula.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              hello@risinghopedoula.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
