import { Icon } from '@iconify/react/dist/iconify.js'
interface HeaderButtonProps {
  content: string
  icon: string
}

export default function HeaderButton({ content, icon }: HeaderButtonProps) {
  return (
    <div className="flex w-fit items-center justify-center gap-1 rounded-xl border border-secondary px-3 py-1">
      <Icon icon={icon} style={{ color: '#564AA3' }} width={20} />
      <div className=" font-garamondBold text-xl text-primary">{content}</div>
    </div>
  )
}
