import { Icon } from '@iconify/react/dist/iconify.js'

export default function Footer() {
  return (
    <footer className="mt-12 w-full bg-secondary">
      <div className="mx-auto flex max-w-screen-lg flex-row flex-wrap justify-center gap-4 p-4 sm:justify-between">
        <div className="flex justify-center gap-2">
          <Icon
            icon="hugeicons:yoga-03"
            width="1.8em"
            height="1.8em"
            style={{ color: '#564AA3' }}
          />
          <div className="text-center font-montserratBold text-2xl text-textColor">
            Hollistic Care
          </div>
        </div>
        <div className="mt-2 flex w-full flex-row flex-wrap justify-center gap-6 text-sm sm:w-16 md:w-fit">
          <a
            className="font-medium text-textColor hover:font-bold focus:font-bold focus:outline-none"
            href="#"
          >
            Home
          </a>
          <a
            className="font-medium text-textColor hover:font-bold focus:font-bold focus:outline-none"
            href="#"
          >
            About
          </a>

          <a
            className="font-medium text-textColor hover:font-bold focus:font-bold focus:outline-none"
            href="#"
          >
            Resources
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center justify-center gap-2 md:justify-start">
            <Icon
              icon="bxl:linkedin"
              style={{ color: '#4E3876' }}
              width="1.8em"
              className="cursor-pointer"
            />
            <Icon
              icon="bxl:instagram"
              style={{ color: '#4E3876' }}
              width="1.8em"
              className="cursor-pointer"
            />
            <Icon
              icon="bxl:twitter"
              style={{ color: '#4E3876' }}
              width="1.8em"
              className="cursor-pointer"
            />
            <Icon
              icon="bxl:youtube"
              style={{ color: '#4E3876' }}
              width="1.8em"
              className="cursor-pointer"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-1.5 font-montserratBold text-sm text-textColor md:items-start">
            <a className="inline-flex items-center gap-2 " href="#">
              <Icon icon="cib:mail-ru" />
              contact@company.com
            </a>
            <a className="inline-flex items-center gap-2" href="#">
              <Icon icon="material-symbols:call-sharp" />
              +91 9944332211
            </a>
            <a className="inline-flex items-center gap-2" href="#">
              <Icon icon="vaadin:office" />
              Enter Address
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
