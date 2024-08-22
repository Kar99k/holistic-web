import AboutMe from 'components/organisms/AboutMe'
import ContactUs from 'components/organisms/ContactUs'
import FAQ from 'components/organisms/FAQ'
import Footer from 'components/organisms/Footer'
import HeroSection from 'components/organisms/HeroSection'
import HowItWorks from 'components/organisms/HowItWorks'
import NavbarComponent from 'components/organisms/NavbarComponent'
import Services from 'components/organisms/Services'
import Stats from 'components/organisms/Stats'

export default function HCFTemplate() {
  return (
    <div className="h-screen w-full">
      <NavbarComponent />
      <div className="mx-auto flex h-fit flex-col items-center gap-[82px]">
        <div className="flex flex-col justify-between gap-8 sm:gap-16 lg:gap-24 2xl:gap-32">
          <HeroSection />
          <Stats />
        </div>

        <AboutMe />
        <Services />
        <HowItWorks />
        <ContactUs />
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}
