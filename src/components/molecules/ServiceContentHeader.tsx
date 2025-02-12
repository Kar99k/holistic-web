import PrimaryButton from 'components/atoms/PrimaryButton'
import { useNavigate } from 'react-router-dom'
import { ContentItem } from 'types/global'

export default function ServiceContentHeader({ header, content }: ContentItem) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/booking`)
  }
  return (
    <div className="w-full lg:w-1/2">
      <div className="flex flex-col justify-center gap-6">
        <div className="font-garamondBold text-4xl text-textColor md:text-5xl">
          {header}
        </div>
        <div className=" text-textColor80">{content}</div>
        <div className="w-full max-w-96">
          <PrimaryButton text="Book now" onClick={handleClick} />
        </div>
      </div>
    </div>
  )
}
