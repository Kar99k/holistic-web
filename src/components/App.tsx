import NavbarComponent from './organisms/NavbarComponent'
import HeroSection from './organisms/HeroSection'
import Stats from './organisms/Stats'
import AboutMe from './organisms/AboutMe'
import Services from './organisms/Services'
import HowItWorks from './organisms/HowItWorks'
import ContactUs from './organisms/ContactUs'
import FAQ from './organisms/FAQ'
function App() {
  return (
    <div className=" flex flex-col items-center gap-8 md:gap-14 lg:gap-20">
      <NavbarComponent />
      <HeroSection />
      <Stats />
      <AboutMe />
      <Services />
      <HowItWorks />
      <ContactUs />
      <FAQ />
    </div>
  )
}

export default App
