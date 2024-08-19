import PrimaryButton from 'components/atoms/PrimaryButton'
import HeroImage from '../../assets/Pic/HeroSection.png'

export default function HeroSection() {
  return (
    <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-8 px-3 md:flex-row-reverse 2xl:px-0">
      <div className="px-4">
        <img src={HeroImage} className="md:scale-110 lg:scale-100" />
      </div>
      <div className="flex flex-col justify-center gap-2 px-4 md:w-3/4 lg:w-1/2">
        <div className="text-xs font-semibold text-primary md:text-sm">
          Label Goes here
        </div>
        <div className="font-garamond text-5xl text-textColor md:text-6xl lg:text-7xl">
          Lorem Ipsum <span className="font-garamondBold ">simply dummy</span>
        </div>
        <div className="mt-2 text-xs text-accent md:text-base">
          Welcome to Burger Bliss, where we take your cravings to a whole new
          level! Our mouthwatering burgers are made from 100% beef and are
          served on freshly baked buns.
        </div>
        <div className="mt-4">
          <PrimaryButton text="Book now" />
        </div>
      </div>
    </div>
  )
}
