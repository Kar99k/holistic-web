import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Icon } from '@iconify/react/dist/iconify.js'

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="mb-8 flex w-full flex-wrap bg-secondary p-3 text-sm sm:mb-24 sm:flex-nowrap sm:justify-start sm:py-6">
      <nav className="mx-auto w-full max-w-[1440px] px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <a
            className="flex-none text-xl font-semibold text-textColor hover:opacity-80 focus:opacity-80"
            href="#"
          >
            Holistic Care
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              onClick={handleToggle}
              className="relative flex size-10 items-center justify-center gap-2 rounded-lg border border-secondary bg-primary align-middle text-sm font-medium text-gray-400 shadow-sm hover:bg-primary/80 focus:bg-primary/80 focus:outline-none"
            ></button>
          </div>
        </div>
        <div
          className={classNames(
            'grow basis-full overflow-hidden transition-all duration-200 ease-in-out	',
            {
              'max-h-[1000px]': isOpen,
              'max-h-0': !isOpen
            },
            'sm:max-h-none sm:opacity-100'
          )}
        >
          <div className="mt-5 flex flex-col gap-6 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:ps-5">
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

            <div className="">
              <button
                className="inline-flex items-center font-medium text-textColor hover:font-bold focus:font-bold focus:outline-none"
                onClick={() => {
                  setDropdown(!dropdown)
                }}
              >
                Services
                <Icon
                  icon="gridicons:dropdown"
                  style={{
                    color: '#3C1C55',
                    marginTop: '-2px'
                  }}
                  className={classNames({ '-rotate-180': dropdown })}
                  width="2em"
                  height="2em"
                />
              </button>

              <div
                className={classNames(
                  'absolute gap-2 rounded-xl bg-accent/80 p-4 text-secondary font-montserratSemiBold backdrop-blur-3xl',
                  { hidden: !dropdown, 'flex flex-col': dropdown }
                )}
              >
                <a href="#">🧑‍⚕️ Counseling Session</a>
                <a href="#">🤗 Empathetic Listening</a>
              </div>
            </div>

            <a
              className="font-medium text-textColor hover:font-bold focus:font-bold focus:outline-none"
              href="#"
            >
              Resources
            </a>
            <a
              className="font-medium text-textColor hover:font-bold focus:font-bold focus:outline-none"
              href="#"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
