import { contentProp } from 'types/global'
import Accordion from './Accordion'

export default function ServiceContentBody({ contents }: contentProp) {
  return (
    <div className="w-full lg:w-1/2">
      {contents.map((item) => (
        <Accordion key={item.id} header={item.header} content={item.content} />
      ))}
    </div>
  )
}
