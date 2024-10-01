import { cn } from '../lib/utils'
import Marker from './marker'

const CustomButton = ({
  icon,
  iconTitle,
  markerFill,
  children,
  href,
  containerClassNames,
  onClick,
}) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[1px]">
          <Marker markerFill={markerFill} />
        </span>
        {icon && (
          <img
            src={icon}
            alt={iconTitle ?? 'circle'}
            className="size-10 mr-5 object-contain z-10"
          />
        )}
        <span className="relatize z-2 font-poppins base-bold text-p1 uppercase">
          {children}
        </span>
      </span>

      <span className="glow-before glow-after" />
    </>
  )

  return href ? (
    <a
      href={href}
      className={cn(
        'relative p-0.5 g5 rounded-2xl shadow-500 group',
        containerClassNames,
      )}
    >
      <Inner />
    </a>
  ) : (
    <button
      onClick={onClick}
      className={cn(
        'relative p-0.5 g5 rounded-2xl shadow-500 group',
        containerClassNames,
      )}
    >
      <Inner />
    </button>
  )
}

export default CustomButton
