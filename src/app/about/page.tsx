import { type Metadata } from 'next'
import parse from 'html-react-parser';
import he from 'he';

import { Container } from '@/components/Container'
import { InstagramIcon, MailIcon } from '@/components/SocialIcons'
import portraitImage from '~/images/photos/about/image-1.jpg'
import portraitImage320 from '~/images/photos/about/image-1-320.jpg'
import portraitImage1024 from '~/images/photos/about/image-1-1024.jpg'
import portraitImageWebP320 from '~/images/photos/about/image-1-320.webp'
import portraitImageWebP1024 from '~/images/photos/about/image-1-1024.webp'
import portraitImageAvif320 from '~/images/photos/about/image-1-320.avif'
import portraitImageAvif1024 from '~/images/photos/about/image-1-1024.avif'
import { SocialLink } from '@/components/SocialLink';

import settings from '../../../content/settings.json';
import content from '../../../content/about.json';

export const metadata: Metadata = content.metaData;

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <picture>
              <source srcSet={portraitImageAvif1024.src} media="(min-width: 1024px)" type="image/avif" />
              <source srcSet={portraitImageAvif320.src} media="(max-width: 1023px)" type="image/avif" />
              <source srcSet={portraitImageWebP1024.src} media="(min-width: 1024px)" type="image/webp" />
              <source srcSet={portraitImageWebP320.src} media="(max-width: 1023px)" type="image/webp" />
              <source srcSet={portraitImage1024.src} media="(min-width: 1024px)" type="image/jpeg" />
              <source srcSet={portraitImage320.src} media="(max-width: 1023px)" type="image/jpeg" />
              <img
                src={portraitImage.src}
                alt=""
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </picture>
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-primary-wine sm:text-5xl">
            {parse(content.headline)}
          </h1>
          <div className="mt-6 space-y-7 text-base text-primary-grey">
            {parse(he.decode(content.intro))}
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {settings.socials.map((social) => (
              <SocialLink key={social.name} href={social.url} icon={InstagramIcon}>
                Follow on {social.name}
              </SocialLink>
            ))}
            <SocialLink
              key="email"
              href={`mailto:${settings.email}`}
              icon={MailIcon}
              className="mt-8 border-t border-grey-100 pt-8"
            >
              {settings.email}
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
