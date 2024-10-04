import { socials } from '../constants'

const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex max-md:flex-col w-full">
          <div className="flex flex-1 flex-wrap items-center justify-center gap-5 small-compact">
            <p className="opacity-70">&copy; Xora Dev Team 2024</p>
            <div className="flex items-center justify-center sm:ml-auto">
              <p className="relative legal-after text-p5 mr-9 transition-all duration-[400ms] hover:text-p1">
                Privacy Policy
              </p>
              <p className="text-p5 mr-9 transition-all duration-[400ms] hover:text-p1">
                Terms of Use
              </p>
            </div>
          </div>

          <ul className="flex flex-1 justify-center md:justify-end gap-3 max-md:mt-10">
            {socials.map(({ id, icon, title, url }) => (
              <li key={id}>
                <a href={url} className="social-icon">
                  <img
                    src={icon}
                    alt={title}
                    className="size-1/3 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
