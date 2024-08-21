import StatsCard from 'components/atoms/StatsCard'

export default function Stats() {
  return (
    <div className="container mx-auto max-w-[1440px] px-7">
      <div className="grid grid-cols-2 gap-6 rounded-3xl md:grid-cols-3 lg:h-[188px] lg:bg-primary15">
        <StatsCard />
        <StatsCard />
        <StatsCard />
      </div>
    </div>
  )
}
