import PrimaryButton from 'components/atoms/PrimaryButton'

export default function HeroSection() {
  return (
    <div className="flex flex-col mx-4 justify-center gap-14 sm:flex-row-reverse">
      <div className="mt-8 sm:w-[415px]">
        <img src="../src/assets/Pic/HeroSection.png" />
      </div>
      <div className="flex flex-col gap-2 sm:w-[445px]">
        <div className="font-semibold sm:text-sm text-primary">
          Label Goes here
        </div>
        <div className="text-6xl font-garamond text-textColor">
          Lorem Ipsum <span className="font-garamondBold ">simply dummy</span>
        </div>
        <div className="text-sm text-accent mt-2">
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
