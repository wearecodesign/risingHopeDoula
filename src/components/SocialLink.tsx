import Link from 'next/link'
import clsx from 'clsx'

export function SocialLink({
    icon: Icon,
    ...props
  }: React.ComponentPropsWithoutRef<typeof Link> & {
    icon: React.ComponentType<{ className?: string }>
  }) {
    return (
      <li className={clsx(props.className, 'flex')}>
        <Link
          aria-label={props['aria-label']}
          href={props.href}
          className="group flex text-sm font-medium text-primary-grey transition hover:text-primary-wine"
        >
          <Icon className="h-6 w-6 flex-none fill-primary-grey transition group-hover:fill-primary-wine" />
          {props.children && (
            <span className="ml-4">{props.children}</span>
          )}
        </Link>
      </li>
    )
  }