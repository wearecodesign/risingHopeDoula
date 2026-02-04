import { useId } from 'react'

export function TestimonialSection({
  children,
}: {
  children: React.ReactNode
}) {
  let id = useId()

  return (
    <section
      aria-labelledby={id}
    >
      <div className="grid grid-cols-1 items-baseline gap-8 md:grid-cols-3">
        {children}
      </div>
    </section>
  )
}
