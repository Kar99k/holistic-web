import Footer from 'components/organisms/Footer'
import NavbarComponent from 'components/organisms/NavbarComponent'
import { TemplateProps } from 'types/global'

export default function HCFTemplate({ children }: TemplateProps) {
  return (
    <div className="h-screen w-full">
      <NavbarComponent />
      <div className="mx-auto flex h-fit flex-col items-center gap-[82px]">
        {children}
      </div>
      <Footer />
    </div>
  )
}
