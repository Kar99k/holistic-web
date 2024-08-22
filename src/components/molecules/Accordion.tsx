import { useState } from 'react'
import { motion } from 'framer-motion'
import classNames from 'classnames'
import { Icon } from '@iconify/react/dist/iconify.js'

interface AccordionProps {
  header: string
  content: string
}

export default function Accordion({ header, content }: AccordionProps) {
  const [clicked, setClicked] = useState(false)

  return (
    <div>
      <div
        className="inline-flex w-full justify-between rounded-xl p-4 hover:cursor-pointer hover:bg-secondary"
        onClick={() => {
          setClicked(!clicked)
        }}
      >
        <div className="font-montserratBold  text-textColor lg:text-xl">
          {header}
        </div>
        <div
          className={classNames('block cursor-pointer', {
            block: !clicked,
            hidden: clicked
          })}
          onClick={() => {
            setClicked(!clicked)
          }}
        >
          <Icon icon="typcn:plus" style={{ color: '#564AA3' }} />
        </div>
        <div
          className={classNames('block cursor-pointer', {
            block: clicked,
            hidden: !clicked
          })}
          onClick={() => {
            setClicked(!clicked)
          }}
        >
          <Icon icon="typcn:minus" style={{ color: '#564AA3' }} />
        </div>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: clicked ? 'auto' : 0, opacity: clicked ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden font-montserratMedium text-sm text-textColor80 lg:text-base"
      >
        <div className="px-4">{content}</div>
      </motion.div>
    </div>
  )
}
