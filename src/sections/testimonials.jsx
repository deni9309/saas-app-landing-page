import TestimonialItem from '../components/testimonial-item'
import { testimonials } from '../constants'

const Testimonials = () => {
  const halfLength = Math.floor(testimonials.length / 2)

  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-40">
      <div className="container block lg:flex">
        <div className="relative z-2 testimonials_head-res flex-300 mr-20">
          <p className="caption mb-5 max-md:mb-2.5">Wall of Love</p>
          <h3 className="h3 max-md:h5 text-p4">Words from our fans</h3>
        </div>

        <div className="relative testimonials_inner-after testimonials_inner-before flex items-start max-lg:static -mr-3 -my-12 max-md:block">
          <div className="testimonials_group-after flex-50">
            {testimonials.slice(0, halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassNames="last:after:hidden last:after:max-md:block"
              />
            ))}
          </div>

          <div className="flex-50">
            {testimonials.slice(halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassNames="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
