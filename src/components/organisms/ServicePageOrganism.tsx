import classNames from 'classnames'
import ServiceContentBody from 'components/molecules/ServiceContentBody'
import ServiceContentHeader from 'components/molecules/ServiceContentHeader'
import { ContentItem } from 'types/global'

export interface ServicePageOrganismProps {
  contents: ContentItem[]
  header: string
  content: string
  isRev: boolean
}

export default function ServicePageOrganism({
  contents,
  header,
  content,
  isRev = false
}: ServicePageOrganismProps) {
  return (
    <div
      className={classNames('flex flex-col gap-12 ', {
        'lg:flex-row': !isRev,
        'lg:flex-row-reverse': isRev
      })}
    >
      <ServiceContentHeader header={header} content={content} />
      <ServiceContentBody contents={contents} />
    </div>
  )
}
