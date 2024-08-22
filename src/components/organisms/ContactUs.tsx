import InputField from 'components/atoms/InputField'
import SectionHeader from 'components/molecules/SectionHeader'

export default function ContactUs() {
  return (
    <div className="flex max-w-[1440px] flex-col gap-6 md:p-7">
      <div className="">
        <SectionHeader
          headerButtonContent="Contact Us"
          sectionHeaderContent="Get in touch with us today"
          icon="ic:baseline-mail"
        />
      </div>

      <div>
        <div className="min-w-[324px] max-w-[624px] rounded-3xl bg-primary15 p-6">
          <div className=" p-4 sm:px-6 lg:p-8">
            <div className="mx-auto max-w-xl">
              <div className="">
                <form>
                  <div className="grid gap-4 lg:gap-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                      <div>
                        <InputField
                          fieldName="Name"
                          placeHolder="Enter your name"
                          type="text"
                        />
                      </div>
                      <div>
                        <InputField
                          fieldName="Last Name"
                          placeHolder="Enter your LastName"
                          type="text"
                        />
                      </div>
                    </div>

                    <div>
                      <InputField
                        fieldName="Email"
                        placeHolder="Enter your email"
                        type="text"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                      <div>
                        <InputField
                          fieldName="Company"
                          placeHolder="Enter your Company name"
                          type="text"
                        />
                      </div>

                      <div>
                        <InputField
                          fieldName="Company mail"
                          placeHolder="Enter your mail"
                          type="text"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="Message"
                        className="mb-2 block font-montserratSemiBold font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="Message"
                        name="Message"
                        rows={4}
                        className="block w-full rounded-3xl bg-white p-4 font-montserratMedium focus:border-primary15"
                      ></textarea>
                    </div>
                  </div>

                  <div className="mt-6 grid">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-x-2 rounded-full border border-transparent bg-primary px-4 py-3 text-sm font-medium text-background hover:bg-textColor  disabled:pointer-events-none disabled:opacity-50"
                    >
                      Send inquiry
                    </button>
                  </div>

                  <div className="mt-3 text-center">
                    <p className="text-sm text-gray-500">
                      We&#39;ll get back to you in 1-2 business days.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
