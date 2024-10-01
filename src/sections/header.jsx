import { useState } from 'react'
import { Link as LinkScroll } from 'react-scroll'

import { cn } from '../../lib/utils'

const NavLink = ({ title }) => (
  <LinkScroll
    to="#"
    className="base-bold text-p4 uppercase transition-colors duration-300 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
  >
    {title}
  </LinkScroll>
)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="fixed w-full py-10 top-0 left-0 z-50">
      <div className="container flex items-center max-lg:px-5 h-14">
        <a href="#" className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/xora.svg" alt="Xora Logo" width={115} height={55} />
        </a>

        <div
          className={cn(
            'w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0',
            isOpen ? 'max-lg:opacity-100' : 'max-lg:pointer-events-none',
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot" />
                  <NavLink title="pricing" />
                </li>

                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-100}
                    spy
                    smooth
                    className={cn(
                      'max-lg:hidden transition-transform duration-500 cursor-pointer',
                    )}
                  >
                    <img
                      src="/images/xora.svg"
                      alt="Xora Logo"
                      width={160}
                      height={55}
                    />
                  </LinkScroll>
                </li>

                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>

            <div className="lg:hidden absolute block top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                src="/images/bg-outlines.svg"
                alt="outline"
                width={960}
                height={380}
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                alt="outline"
                width={960}
                height={380}
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsOpen((prevState) => !prevState)}
          className="lg:hidden flex justify-center items-center rounded-full z-2 size-10 border-2 border-s5/25"
        >
          <img
            alt="magic icon"
            src={'/images/' + (isOpen ? 'close' : 'magic') + '.svg'}
            className="size-[60%] object-contain"
          />
        </button>
      </div>
    </header>
  )
}

export default Header
