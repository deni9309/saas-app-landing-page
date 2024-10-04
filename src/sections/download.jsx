import { Element } from 'react-scroll'

import Marker from '../components/marker'
import { links, logos } from '../constants'

const Download = () => {
  return (
    <section>
      <Element
        name="download"
        className="relative g7 pb-32 pt-24 max-lg:pb-24 mx-md:py-16"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="relative flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100 mr-6">
              <div className="mb-10">
                <img
                  src="/images/xora.svg"
                  alt="xora"
                  width={160}
                  height={55}
                />
              </div>
              <p className="body-1 mb-10 max-w-md">
                Try it now for free on iOS, Android, PC, Web - whatever your
                flavour, we&apos;ve got you covered.
              </p>

              <ul className="flex items-center flex-wrap gap-6">
                {links.map(({ id, icon, url }) => (
                  <li
                    key={id}
                    className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                  >
                    <a
                      href={url}
                      className="relative download_tech-icon_before flex items-center justify-center size-22 rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-[400ms]"
                    >
                      <span className="absolute -top-2 rotate-90">
                        <Marker />
                      </span>
                      <img
                        src="/images/lines.svg"
                        alt="lines"
                        className="absolute size-13/20 object-contain"
                      />
                      <span className="download_tech-icon">{icon}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10 max-md:hidden">
              <div className="relative download_preview-before download_preview-after w-[955px] rounded-40 border-2 border-s5 p-6">
                <div className="relative bg-s1 px-6 pb-6 pt-14 rounded-3xl">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />

                  <img
                    src="/images/screen.jpg"
                    alt="screen"
                    width={855}
                    height={655}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* -- Start of Our Company Clients  -- */}
          <ul className="flex justify-center mt-24 max-lg:hidden">
            {logos.map(({ id, title, url, width, height }) => (
              <li key={id} className="mx-10">
                <img src={url} alt={title} width={width} height={height} />
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  )
}

export default Download
