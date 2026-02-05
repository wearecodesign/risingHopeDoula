import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import he from 'he';

import { Container } from '@/components/Container'
import {
  InstagramIcon,
  MailIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'

import content from '../../content/home.json';
import settings from '../../content/settings.json';
import { SocialLink } from '@/components/SocialLink';

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <div className="aspect-9/10">
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-primary-wine sm:text-5xl">
            {he.decode(content.headline)}
          </h1>
          <p className="mt-6 text-base text-primary-grey">
            {he.decode(content.intro)}
          </p>
          <div className="mt-6 flex gap-2">
            {settings.socials.map((social) => (
              <SocialLink 
                key={social.name} 
                aria-label={`Follow on ${social.name}`} 
                href={social.url} 
                icon={InstagramIcon} 
              />
            ))}
            <SocialLink
              key="email"
              href={`mailto:${settings.email}`}
              icon={MailIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
    </>
  )
}
