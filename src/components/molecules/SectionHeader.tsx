import HeaderButton from 'components/atoms/HeaderButton'
interface HeaderButtonProps {
  headerButtonContent: string
  sectionHeaderContent: string
  icon: string
}

export default function SectionHeader({
  headerButtonContent,
  sectionHeaderContent,
  icon
}: HeaderButtonProps) {
  return (
    <div className="flex max-w-[864px] flex-col items-center justify-center gap-4">
      <HeaderButton icon={icon} content={headerButtonContent} />
      <div className="text-center font-montserratMedium text-xl text-textColor md:text-3xl">
        {sectionHeaderContent}
      </div>
    </div>
  )
}
