import SectionHeader from 'components/molecules/SectionHeader'
import ProPic from '../../assets/Pic/ProPic.png'
export default function AboutMe() {
  return (
    <div className="flex max-w-[1440px] flex-col items-center gap-6 md:p-7">
      {/* Section Header*/}
      <SectionHeader
        icon="weui:me-filled"
        headerButtonContent="About"
        sectionHeaderContent="Understanding My Approach and Experience"
      />

      {/*Image Section*/}
      <div className="mx-7 flex flex-col gap-6 lg:flex-row">
        <div className="flex justify-center rounded-3xl bg-primary lg:w-3/4 xl:w-full">
          <img src={ProPic} className="xl:w-[384px]" />
        </div>

        {/*Content Section*/}
        <div className="flex flex-col rounded-3xl bg-primary15 px-14 py-8 lg:w-1/2">
          <div className="font-montserratMedium text-xl text-textColor xl:text-3xl">
            Hi Buddy 👋🏽
          </div>
          <div className="font-montserratBold text-3xl text-textColor xl:text-5xl">
            I&#39;m Sreevani
          </div>

          <div className="flex flex-col gap-4 font-montserratMedium text-sm text-textColor80 xl:text-xl">
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
          <div className="mt-4 font-montserratMedium text-xl text-textColor xl:text-3xl">
            Work Experience
          </div>
          <div className="mt-4 font-montserratMedium text-sm text-textColor80 xl:text-xl">
            <ol>
              🔒 We handle your concerns with utmost care, compassion, and
              professionalism, prioritizing privacy.
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
