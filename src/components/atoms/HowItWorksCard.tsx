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
      {/* <div className="flex flex-col items-center">
        <div className="flex size-4 flex-row items-center rounded-xl bg-primary px-2 text-center font-montserratBold text-sm text-secondary"></div>
        <div className="h-32 w-1 bg-secondary"></div>
      </div> */}

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
