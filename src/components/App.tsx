import NavbarComponent from './organisms/NavbarComponent'
import HeroSection from './organisms/HeroSection'
import Stats from './organisms/Stats'
import SectionHeader from './molecules/SectionHeader'
function App() {
  return (
    <div className=" flex flex-col items-center gap-8 md:gap-14 lg:gap-20">
      <NavbarComponent />
      <HeroSection />
      <Stats />
      <SectionHeader
        headerButtonContent="About"
        sectionHeaderContent="Understanding My Approach and Experience"
      />
    </div>
  )
}

export default App
