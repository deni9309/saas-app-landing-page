import { Element } from 'react-scroll'

import CustomButton from '../components/custom-button'
import { details, features } from '../constants/index'

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="relative z-2 flex-50 max-md:g7 md:px-10 px-5 md:pb-10 pb-5 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
              >
                <div className="flex justify-start items-start w-full">
                  <div className="flex flex-col items-center justify-center -ml-3 mb-12">
                    <div className="w-0.5 h-16 bg-s3" />
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="size-28 object-contain"
                    />
                  </div>
                </div>

                <p className="caption mb-5 max-md:mb-6">{feature.caption}</p>
                <h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5">
                  {feature.title}
                </h2>
                <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">
                  {feature.text}
                </p>

                <CustomButton icon={feature.button.icon}>
                  {feature.button.title}
                </CustomButton>
              </div>
            ))}

            <ul className="relative flex flex-grow justify-around px-[5%] border-2 border-s3 rounded-7xl max-md:hidden">
              <div className="absolute z-10 bg-s3/30 top-[38%] left-0 right-0 w-full h-[1px]" />
              {details.map((detail) => (
                <li key={detail.id} className="relative pt-16 px-4 pb-14">
                  <div className="absolute top-8 bottom-0 left-1/2 bg-s3/30 w-[1px] h-full z-10" />
                  <div className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-[400ms] shadow-500 size-20">
                    <img
                      src={detail.icon}
                      alt={detail.title}
                      className="size-17/20 object-contain z-50"
                    />
                  </div>

                  <h3 className="relative z-50 text-center base-small uppercase max-w-36 mx-auto my-0">
                    {detail.title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  )
}

export default Features
