import { useState } from 'react'
import classNames from 'classnames'

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="flex w-full flex-wrap bg-secondary px-3 py-3 sm:py-6 text-sm sm:flex-nowrap sm:justify-start">
      <nav className="mx-auto w-full max-w-[1440px] px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <a
            className="flex-none text-xl font-semibold text-textColor focus:opacity-80 hover:opacity-80"
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
            <a
              className="font-medium text-textColor hover:font-bold focus:font-bold focus:outline-none "
              href="#"
            >
              Services
            </a>
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
