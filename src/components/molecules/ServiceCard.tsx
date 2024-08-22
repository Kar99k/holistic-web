import PrimaryButton from 'components/atoms/PrimaryButton'
import placeholder from '../../assets/Pic/placeholder.png'
import { Link } from 'react-router-dom'
interface ServiceCardProps {
  header: string
  content: string
}

export default function ServiceCard({ header, content }: ServiceCardProps) {
  return (
    <div className="flex w-64 max-w-96 flex-col items-center gap-2 rounded-3xl border-2 border-primary p-5 lg:w-80">
      <div className="w-full">
        <img src={placeholder} width={300} />
      </div>
      <div className="font-garamondBold text-2xl text-textColor lg:text-3xl">
        {header}
      </div>
      <div className=" text-center font-montserratMedium text-sm italic text-textColor80 lg:text-xl">
        {content}
      </div>
      <Link className="w-full" to="/services">
        <PrimaryButton text="Learn more" />
      </Link>
    </div>
  )
}
