import { Element } from 'react-scroll'

import FaqItem from '../components/faq-item'
import { faq } from '../constants'

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2)

  return (
    <section>
      <Element name="faq" className="relative">
        <div className="relative z-2 container py-28">
          <div>
            <h3 className="h3 text-p4 max-md:h5 max-w-640 max-lg:max-w-md mb-7">
              Curiosity didn&apos;t kill the cat, it gave it answers.
            </h3>
            <p className="body-1 max-lg:max-w-sm">
              You&apos;ve got questions, we&apos;ve got answers.
            </p>
          </div>

          <div className="absolute -z-1 top-0 left-[calc(50%-1px)] faq-line_after w-0.5 h-full bg-s2" />
        </div>

        <div className="relative z-2 faq-glow_before border-2 border-s2 bg-s1">
          <div className="container flex gap-10 max-lg:block">
            <div className="absolute -top-10 left-[calc(50%-40px)] z-4 flex items-center justify-center size-20 rounded-half border-2 border-s2 bg-s1">
              <img
                src="/images/faq-logo.svg"
                alt="Xora Logo"
                className="size-1/2"
              />
            </div>

            <div className="relative flex-1 pt-24">
              {faq.slice(0, halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={index} />
              ))}
            </div>

            <div className="relative flex-1 lg:pt-24">
              {faq.slice(halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={halfLength + index} />
              ))}
            </div>
          </div>

          <div className="absolute -z-1 faq-line_after left-[calc(50%-1px)] top-0 h-full w-0.5 bg-s2 max-lg:hidden" />
        </div>
      </Element>
    </section>
  )
}

export default Faq
