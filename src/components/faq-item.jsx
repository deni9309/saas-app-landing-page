import { useState } from 'react'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

import { cn } from '../lib/utils'

const FaqItem = ({ item: { id, question, answer }, index }) => {
  const [activeId, setActiveId] = useState(null)
  const active = activeId === id

  return (
    <div className="relative z-2 mb-16">
      <div
        className="relative group flex items-center justify-between gap-10 cursor-pointer px-7"
        onClick={() => {
          setActiveId(activeId === id ? null : id)
        }}
      >
        <div className="flex-1">
          <div className="small-compact text-p3 max-lg:hidden mb-1.5">
            {index < 10 && '0'}
            {index}
          </div>
          <div
            className={cn(
              'max-md:flex max-md:items-center h6 text-p4 max-md:min-h-20  transition-colors duration-[400ms]',
              active && 'max-lg:text-p1',
            )}
          >
            {question}
          </div>
        </div>

        <div
          className={cn(
            'relative flex items-center justify-center faq-icon size-12 rounded-full border-2 border-s2 shadow-400 transition-all duration-[400ms] group-hover:border-s4',
            active && 'before:bg-p1 after:rotate-0 after:bg-p1',
          )}
        >
          <div className="size-11/12 g4 rounded-full shadow-300" />
        </div>
      </div>

      <SlideDown>
        {activeId === id && <div className="body-3 px-7 py-3.5">{answer}</div>}
      </SlideDown>

      <div
        className={cn(
          'absolute -z-1 -bottom-7 -top-7 left-0 right-0 g5 rounded-3xl opacity-0 transition-opacity duration-[400ms]',
          active && 'opacity-100',
        )}
      >
        <div className="absolute -z-1 inset-0.5 g4 rounded-3xl" />
        <div className="absolute left-8 top-0 h-0.5 w-40 bg-p1" />
      </div>
    </div>
  )
}

export default FaqItem
