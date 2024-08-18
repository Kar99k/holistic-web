import PrimaryButton from 'components/atoms/PrimaryButton'
import HeroImage from '../assets/Pic/HeroSection.png'

export default function HeroSection() {
  return (
    <div className="px-3 mt-8 flex flex-col mx-auto max-w-[1440px] items-center justify-between gap-8 md:flex-row-reverse xl:px-0">
      <div className="px-4">
        <img src={HeroImage} className="md:scale-[1.1] lg:scale-100" />
      </div>
      <div className="px-4 flex flex-col justify-center gap-2 md:w-[70%] lg:w-[50%]">
        <div className="font-semibold text-xs md:text-sm text-primary">
          Label Goes here
        </div>
        <div className="text-5xl md:text-6xl lg:text-7xl font-garamond text-textColor">
          Lorem Ipsum <span className="font-garamondBold ">simply dummy</span>
        </div>
        <div className="text-xs md:text-base text-accent mt-2">
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
