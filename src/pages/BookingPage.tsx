import HFTemplate from 'components/templates/HFTemplate'
import { useEffect } from 'react'
import { Fragment } from 'react/jsx-runtime'

export default function BookingPage() {
  useEffect(() => {
    // Load the Calendly script dynamically
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <Fragment>
      <HFTemplate>
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <div className="text-center font-garamondBold text-3xl text-primary lg:text-4xl xl:text-5xl">
            Schedule a Call with us for Free
          </div>
          <div
            className="calendly-inline-widget h-screen w-full "
            data-url="https://calendly.com/krthkeyanlee/30min?hide_gdpr_banner=1"
          ></div>
        </div>
      </HFTemplate>
    </Fragment>
  )
}
