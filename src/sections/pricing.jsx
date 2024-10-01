import { useState } from 'react'
import { Element } from 'react-scroll'
import { cn } from '../lib/utils'

const Pricing = () => {
  const [monthly, setMonthly] = useState(false)
  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="relative pricing-head_before max-w-960 mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="relative z-3 h3 max-lg:h4 max-md:h5 mx-auto text-center text-p4 mb-14 max-md:mb-11 max-w-lg max-sm:max-w-sm">
              Flexible pricing for teams of all sizes
            </h3>

            <div className="relative z-4 flex w-[375px] mx-auto rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]">
              <button
                onClick={() => setMonthly(true)}
                className={cn('pricing-head_btn', monthly && 'text-p4')}
              >
                Monthly
              </button>
              <button
                onClick={() => setMonthly(false)}
                className={cn('pricing-head_btn', !monthly && 'text-p4')}
              >
                Annual
              </button>

              <div
                className={cn(
                  'absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] before:h-100 pricing-head_btn_before g4 rounded-14 overflow-hidden shadow-400 transition-transform duration-500',
                  !monthly && 'translate-x-full'
                )}
              />
            </div>
          </div>
        </div>
      </Element>
    </section>
  )
}

export default Pricing
