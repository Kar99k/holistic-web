import HowItWorksCard from 'components/atoms/HowItWorksCard'
import SectionHeader from 'components/molecules/SectionHeader'

export default function HowItWorks() {
  return (
    <div className="flex max-w-screen-lg flex-col items-center justify-between gap-8 px-4">
      <div className="">
        <SectionHeader
          headerButtonContent="How it Works"
          sectionHeaderContent="Book our services in <br> Easy Four steps"
          icon="ph:steps-fill"
        />
      </div>

      <div className="flex flex-row">
        <div>
          <HowItWorksCard
            img="https://picsum.photos/400/400"
            cardHeader="Reach out to us"
            cardContent="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm. "
            rowRev={true}
          />
          <HowItWorksCard
            img="https://picsum.photos/400/400"
            cardHeader="Book an Call"
            cardContent="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm."
            rowRev={false}
          />
          <HowItWorksCard
            img="https://picsum.photos/400/400"
            cardHeader="Confirmation & Payment"
            cardContent="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm."
            rowRev={true}
          />
          <HowItWorksCard
            img="https://picsum.photos/400/400"
            cardHeader="Therapy Session"
            cardContent="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm."
            rowRev={false}
          />
        </div>
      </div>
    </div>
  )
}
