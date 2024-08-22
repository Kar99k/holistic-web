import { Fragment } from 'react/jsx-runtime'
import HCFTemplate from 'components/templates/HCFTemplate'
import HeroSection from 'components/organisms/HeroSection'
import AboutMe from 'components/organisms/AboutMe'
import ContactUs from 'components/organisms/ContactUs'
import FAQ from 'components/organisms/FAQ'
import Services from 'components/organisms/Services'
import Stats from 'components/organisms/Stats'
import HowItWorks from 'components/organisms/HowItWorks'

export default function HomePage() {
  return (
    <Fragment>
      <HCFTemplate>
        <div className="flex flex-col justify-between gap-8 sm:gap-16 lg:gap-24 2xl:gap-32">
          <HeroSection />
          <Stats />
        </div>

        <AboutMe />
        <Services />
        <HowItWorks />
        <ContactUs />
        <FAQ />
      </HCFTemplate>
    </Fragment>
  )
}
