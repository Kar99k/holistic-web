import SectionHeader from 'components/molecules/SectionHeader'
import ProPic from '../../assets/Pic/ProPic.png'
export default function AboutMe() {
  return (
    <div className="flex max-w-[1440px] flex-col gap-6 md:h-[380px] md:w-full md:p-7">
      {/* Section Header*/}
      <SectionHeader
        headerButtonContent="About"
        sectionHeaderContent="Understanding My Approach and Experience"
      />

      {/*Image Section*/}

      <div className="mx-7 flex justify-center rounded-3xl bg-primary">
        <img src={ProPic} />
      </div>

      {/*Content Section*/}
      <div className="mx-7 flex flex-col rounded-3xl bg-primary15 px-14 py-8 md:hidden">
        <div className="font-montserratMedium text-xl text-textColor">
          Hi Buddy 👋🏽
        </div>
        <div className="font-montserratBold text-3xl text-textColor">
          Im Sreevani
        </div>

        <div className="flex flex-col gap-4 font-montserratMedium text-sm text-textColor80">
          <ol>🎓 Completed MSc Counselling psychotherapy.</ol>
          <ol>
            🧘 Practiced as a counselor addressing various issues in mental
            health.
          </ol>
          <ol>
            🔒 We handle your concerns with utmost care, compassion, and
            professionalism, prioritizing privacy.
          </ol>
        </div>
        <div className="mt-4 font-montserratMedium text-xl text-textColor">
          Work Experience
        </div>
        <div className="mt-4 font-montserratMedium text-sm text-textColor80">
          <ol>
            🔒 We handle your concerns with utmost care, compassion, and
            professionalism, prioritizing privacy.
          </ol>
        </div>
      </div>
    </div>
  )
}
