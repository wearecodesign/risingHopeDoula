import Link from 'next/link'
import he from 'he';
import menu from '../../content/menu.json';

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-secondary-wine"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-grey-100 pt-10 pb-16">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-primary-grey">
                {menu.menuLinks.map((link) => (
                  <NavLink key={link.linkText} href={link.linkHref}>
                    {he.decode(link.linkText)}
                  </NavLink>
                ))}
              </div>
              <p className="text-sm text-grey-600">
                &copy; {new Date().getFullYear()} Rising Hope Doula. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
