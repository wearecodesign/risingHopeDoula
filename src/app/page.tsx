import clsx from 'clsx'
import he from 'he';

import { Container } from '@/components/Container'
import {
  InstagramIcon,
  MailIcon,
} from '@/components/SocialIcons'

import image1320 from '~/images/photos/home/image-1-320.jpg'
import image2320 from '~/images/photos/home/image-2-320.jpg'
import image3320 from '~/images/photos/home/image-3-320.jpg'
import image4320 from '~/images/photos/home/image-4-320.jpg'
import image5320 from '~/images/photos/home/image-5-320.jpg'

import image1WebP320 from '~/images/photos/home/image-1-320.webp'
import image2WebP320 from '~/images/photos/home/image-2-320.webp'
import image3WebP320 from '~/images/photos/home/image-3-320.webp'
import image4WebP320 from '~/images/photos/home/image-4-320.webp'
import image5WebP320 from '~/images/photos/home/image-5-320.webp'

import image1Avif320 from '~/images/photos/home/image-1-320.avif'
import image2Avif320 from '~/images/photos/home/image-2-320.avif'
import image3Avif320 from '~/images/photos/home/image-3-320.avif'
import image4Avif320 from '~/images/photos/home/image-4-320.avif'
import image5Avif320 from '~/images/photos/home/image-5-320.avif'

import image1 from '~/images/photos/home/image-1-640.jpg'
import image2 from '~/images/photos/home/image-2-640.jpg'
import image3 from '~/images/photos/home/image-3-640.jpg' 
import image4 from '~/images/photos/home/image-4-640.jpg'
import image5 from '~/images/photos/home/image-5-640.jpg'

import image1WebP from '~/images/photos/home/image-1-640.webp'
import image2WebP from '~/images/photos/home/image-2-640.webp'
import image3WebP from '~/images/photos/home/image-3-640.webp'
import image4WebP from '~/images/photos/home/image-4-640.webp'
import image5WebP from '~/images/photos/home/image-5-640.webp'

import image1Avif from '~/images/photos/home/image-1-640.avif'
import image2Avif from '~/images/photos/home/image-2-640.avif'
import image3Avif from '~/images/photos/home/image-3-640.avif'
import image4Avif from '~/images/photos/home/image-4-640.avif'
import image5Avif from '~/images/photos/home/image-5-640.avif'

import content from '../../content/home.json';
import settings from '../../content/settings.json';
import { SocialLink } from '@/components/SocialLink';

function Photos() {
  const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
  const images = [
    {image: image1, image320: image1320, imageWebP: image1WebP, imageWebP320: image1WebP320, imageAvif: image1Avif, imageAvif320: image1Avif320}, 
    {image: image2, image320: image2320, imageWebP: image2WebP, imageWebP320: image2WebP320, imageAvif: image2Avif, imageAvif320: image2Avif320}, 
    {image: image3, image320: image3320, imageWebP: image3WebP, imageWebP320: image3WebP320, imageAvif: image3Avif, imageAvif320: image3Avif320}, 
    {image: image4, image320: image4320, imageWebP: image4WebP, imageWebP320: image4WebP320, imageAvif: image4Avif, imageAvif320: image4Avif320}, 
    {image: image5, image320: image5320, imageWebP: image5WebP, imageWebP320: image5WebP320, imageAvif: image5Avif, imageAvif320: image5Avif320}
  ]

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {images.map((imageObject, imageIndex) => (
          <div
            key={imageObject.image.src}
            className={clsx(
              'relative w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <div className="aspect-9/10">
              <picture>
                <source srcSet={imageObject.imageAvif.src} media="(min-width: 640px)" type="image/avif" />
                <source srcSet={imageObject.imageAvif320.src} media="(max-width: 639px)" type="image/avif" />
                <source srcSet={imageObject.imageWebP.src} media="(min-width: 640px)" type="image/webp" />
                <source srcSet={imageObject.imageWebP320.src} media="(max-width: 639px)" type="image/webp" />
                <source srcSet={imageObject.image.src} media="(min-width: 640px)" type="image/jpeg" />
                <source srcSet={imageObject.image320.src} media="(max-width: 639px)" type="image/jpeg" />
                <img
                  src={imageObject.image.src}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
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
          <ul className="mt-6 flex gap-4 list-none">
            {settings.socials.map((social) => (
              <SocialLink 
                key={social.name} 
                aria-label={`Follow on ${social.name}`} 
                target="_blank"
                href={social.url} 
                icon={InstagramIcon} 
              />
            ))}
            <SocialLink
              key="email"
              aria-label={`Email me at ${settings.email}`}
              target="_blank"
              href={`mailto:${settings.email}`}
              icon={MailIcon}
            />
          </ul>
        </div>
      </Container>
      <Photos />
    </>
  )
}
