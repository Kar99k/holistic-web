import { Fragment } from 'react/jsx-runtime'
import HCFTemplate from 'components/templates/HCFTemplate'
import HeroSection from 'components/organisms/HeroSection'
import AboutMe from 'components/organisms/AboutMe'
import ContactUs from 'components/organisms/ContactUs'
import FAQ from 'components/organisms/FAQ'
import Services from 'components/organisms/Services'
import Stats from 'components/organisms/Stats'
import HowItWorks from 'components/organisms/HowItWorks'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export default function HomePage() {
  const location = useLocation()
  const aboutMeRef = useRef<HTMLDivElement>(null)
  const contactUsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const section = params.get('scrollTo')

    const sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      aboutMe: aboutMeRef,
      contact: contactUsRef
    }

    if (section && sectionRefs[section]?.current) {
      sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' })
    }

    // Remove the query parameter after scrolling
    const newUrl = window.location.pathname
    window.history.replaceState(null, '', newUrl)
  }, [location])

  return (
    <Fragment>
      <HCFTemplate>
        <div className="flex flex-col justify-between gap-8 sm:gap-16 lg:gap-24 2xl:gap-32">
          <HeroSection />
          <Stats />
        </div>

        <div ref={aboutMeRef}>
          <AboutMe />
        </div>
        <Services />
        <HowItWorks />
        <div ref={contactUsRef}>
          <ContactUs />
        </div>
        <FAQ />
      </HCFTemplate>
    </Fragment>
  )
}
