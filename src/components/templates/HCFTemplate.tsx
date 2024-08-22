import Footer from 'components/organisms/Footer'
import NavbarComponent from 'components/organisms/NavbarComponent'
import { ReactNode } from 'react'

interface HCFTemplateProps {
  children: ReactNode // Define type for children
}

export default function HCFTemplate({ children }: HCFTemplateProps) {
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
