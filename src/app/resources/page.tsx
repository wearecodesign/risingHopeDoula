import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ResourceSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Resource({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Resources',
  description:
    'Helpful resources for pregnancy, birth, and postpartum—books, websites, and local support.',
}

export default function Resources() {
  return (
    <SimpleLayout
      title="Resources for your journey into parenthood."
      intro="I've gathered some of my favorite books, websites, and local resources to support you during pregnancy, birth, and beyond. This page is managed via Pages CMS—check back for updates!"
    >
      <div className="space-y-20">
        <ResourceSection title="Books I Recommend">
          <Resource title="Ina May's Guide to Childbirth by Ina May Gaskin">
            A classic that empowers birthing people with positive birth stories
            and practical wisdom. Great for building confidence in your body&apos;s
            ability to birth.
          </Resource>
          <Resource title="The Fourth Trimester by Kimberly Ann Johnson">
            An essential guide to postpartum recovery that addresses the
            physical, emotional, and relational changes after birth. Every new
            parent should read this.
          </Resource>
          <Resource title="Nurture by Erica Chidi">
            A modern guide to pregnancy, birth, and the first weeks with baby.
            Beautifully designed with evidence-based information presented in an
            accessible way.
          </Resource>
          <Resource title="The Birth Partner by Penny Simkin">
            The definitive guide for anyone supporting a birthing person.
            Perfect for partners, family members, and doulas.
          </Resource>
        </ResourceSection>
        <ResourceSection title="Online Resources">
          <Resource
            title="Evidence Based Birth"
            href="https://evidencebasedbirth.com"
          >
            Research-backed information on pregnancy and birth topics. Their
            podcast and articles help you make informed decisions about your
            care.
          </Resource>
          <Resource title="Spinning Babies" href="https://spinningbabies.com">
            Techniques for optimal fetal positioning and comfort during
            pregnancy and labor. Helpful for preparing your body for birth.
          </Resource>
          <Resource
            title="Postpartum Support International"
            href="https://postpartum.net"
          >
            Support and resources for perinatal mental health. If you&apos;re
            struggling, you&apos;re not alone—help is available.
          </Resource>
          <Resource title="KellyMom" href="https://kellymom.com">
            Evidence-based breastfeeding and parenting resources. A trusted
            source for infant feeding questions.
          </Resource>
        </ResourceSection>
        <ResourceSection title="Preparing for Birth">
          <Resource title="Questions to Ask Your Provider">
            Understanding your options starts with communication. Don&apos;t hesitate
            to ask about their practices, intervention rates, and how they
            support birth preferences.
          </Resource>
          <Resource title="Creating Your Birth Preferences">
            A birth plan isn&apos;t about controlling every detail—it&apos;s about
            communicating your values and priorities. I can help you create one
            that reflects your needs.
          </Resource>
          <Resource title="Comfort Measures for Labor">
            Movement, breathing, hydrotherapy, massage, and position changes can
            all help manage labor sensations. We&apos;ll practice these during our
            prenatal visits.
          </Resource>
        </ResourceSection>
        <ResourceSection title="Postpartum Essentials">
          <Resource title="Building Your Support Network">
            Postpartum is not meant to be done alone. Consider meal trains,
            cleaning help, and family support. I can help you plan for this
            during pregnancy.
          </Resource>
          <Resource title="Signs of Perinatal Mood Disorders">
            Baby blues are common, but persistent symptoms need attention.
            Anxiety, depression, intrusive thoughts, and rage can all be signs
            that you need support.
          </Resource>
          <Resource title="Infant Feeding Resources">
            Whether you&apos;re breastfeeding, pumping, formula feeding, or
            combo-feeding—I support your choices and can connect you with
            lactation specialists if needed.
          </Resource>
        </ResourceSection>
      </div>
    </SimpleLayout>
  )
}
