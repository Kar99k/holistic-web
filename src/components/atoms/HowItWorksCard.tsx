import classNames from 'classnames'

interface HowItWorksProps {
  cardHeader: string
  cardContent: string
  img: string
  rowRev: boolean
}

function HowItWorksCard({
  cardHeader,
  cardContent,
  img,
  rowRev = false
}: HowItWorksProps) {
  return (
    <div
      className={classNames('flex gap-8 p-7 items-center', {
        'flex-row-reverse': rowRev
      })}
    >
      <div className="max-w-[340px]">
        <img src={img} className="rounded-xl " />
      </div>

      <div className="-mt-1.5 flex flex-col">
        <div className="font-garamondBold text-3xl leading-tight text-textColor md:text-5xl lg:text-6xl">
          {cardHeader}
        </div>
        <div className="font-montserratMedium text-sm text-textColor80 md:text-base lg:text-xl">
          {cardContent}
        </div>
      </div>
    </div>
  )
}

export default HowItWorksCard
