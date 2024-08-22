import NavbarComponent from 'components/organisms/NavbarComponent'
import { TemplateProps } from 'types/global'

export default function HFTemplate({ children }: TemplateProps) {
  return (
    <div className="h-screen w-full">
      <NavbarComponent />
      <div className="mx-auto flex h-fit flex-col items-center  px-7 md:-mt-12">
        {children}
      </div>
    </div>
  )
}
