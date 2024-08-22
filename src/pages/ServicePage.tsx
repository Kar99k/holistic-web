import ServicePageOrganism from 'components/organisms/ServicePageOrganism'
import HCFTemplate from 'components/templates/HCFTemplate'
import { Fragment } from 'react/jsx-runtime'

interface ContentItem {
  id: number
  header: string
  content: string
}

const counselingContent: ContentItem[] = [
  {
    id: 1,
    header: 'Individual Counseling',
    content: 'One-on-one sessions tailored to your unique needs.'
  },
  {
    id: 3,
    header: 'Group Therapy',
    content: 'Support groups for shared experiences and mutual support.'
  },
  {
    id: 4,
    header: 'Couples Counseling',
    content: 'Strengthen your relationship with guided sessions.'
  },
  {
    id: 5,
    header: 'Youth Counseling',
    content: 'Specialized support for children and teenagers.'
  },
  {
    id: 6,
    header: 'Senior Support',
    content: 'Tailored counseling for older adults.'
  }
]
export default function ServicePage() {
  return (
    <Fragment>
      <HCFTemplate>
        <div className="flex max-w-[1440px] flex-col gap-32 px-7">
          <ServicePageOrganism
            header="Counseling Session"
            content="Lorem ipsum dolor sit amet consectetur. Nunc neque tincidunt urna enim blandit vitae. Lorem ipsum dolor sit amet consectetur. Nunc neque tincidunt urna enim blandit vitae. Lorem ipsum dolor sit amet consectetur. Nunc neque tincidunt urna enim blandit vitae."
            contents={counselingContent}
            isRev={false}
          />
          <ServicePageOrganism
            header="Empathetic Listening"
            content="Lorem ipsum dolor sit amet consectetur. Nunc neque tincidunt urna enim blandit vitae. Lorem ipsum dolor sit amet consectetur. Nunc neque tincidunt urna enim blandit vitae. Lorem ipsum dolor sit amet consectetur. Nunc neque tincidunt urna enim blandit vitae."
            contents={counselingContent}
            isRev={true}
          />
        </div>
      </HCFTemplate>
    </Fragment>
  )
}
