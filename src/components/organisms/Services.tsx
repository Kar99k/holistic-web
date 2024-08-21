import SectionHeader from 'components/molecules/SectionHeader'
import ServiceCard from 'components/molecules/ServiceCard'

export default function Services() {
  return (
    <div className="mx-7 flex max-w-[1440px] flex-col items-center justify-center gap-5">
      {/* Section Header*/}
      <SectionHeader
        icon="mdi:talk"
        headerButtonContent="Services"
        sectionHeaderContent=" Providing compassionate support and professional guidance to enhance well-being."
      />
      <div className="flex w-full flex-row flex-wrap items-center justify-center gap-5 lg:gap-10">
        <ServiceCard
          header="Empathetic Listening"
          content=" Providing compassionate support and professional guidance to enhance well-being."
        />

        <ServiceCard
          header="Counseling Session"
          content="Providing compassionate support and professional guidance to enhance well-being."
        />
      </div>
    </div>
  )
}
