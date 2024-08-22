import Accordion from 'components/molecules/Accordion'
import SectionHeader from 'components/molecules/SectionHeader'

export default function FAQ() {
  return (
    <div className="flex max-w-[1440px] flex-col gap-6 p-7">
      <div className="">
        <SectionHeader
          headerButtonContent="FAQs"
          sectionHeaderContent="Frequently Asked Questions"
          icon="wpf:faq"
        />
      </div>
      <div className="">
        <Accordion
          header="Is Therapy Free ?"
          content="Yes, Preline is an open-source project and is copyright 2022 Htmlstream."
        />
        <Accordion header="How to book" content="follow the steps" />
        <Accordion
          header="Header 3"
          content="Placeholder for something to write"
        />
      </div>
    </div>
  )
}
