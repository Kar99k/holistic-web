import HeaderButton from 'components/atoms/HeaderButton'
interface HeaderButtonProps {
  headerButtonContent: string
  sectionHeaderContent: string
}

export default function SectionHeader({
  headerButtonContent,
  sectionHeaderContent
}: HeaderButtonProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <HeaderButton icon="weui:me-filled" content={headerButtonContent} />
      <div className="text-center font-montserratMedium text-xl">
        {sectionHeaderContent}
      </div>
    </div>
  )
}
