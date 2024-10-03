import Features from './sections/features'
import Hero from './sections/hero'
import Header from './sections/header'
import Pricing from './sections/pricing'
import Faq from './sections/faq'
import Testimonials from './sections/testimonials'

const App = () => {
  return (
    <main className="overflow-hidden ">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
    </main>
  )
}

export default App
