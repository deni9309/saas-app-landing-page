import Features from './sections/features'
import Hero from './sections/hero'
import Header from './sections/header'
import Pricing from './sections/pricing'

const App = () => {
  return (
    <main className="overflow-hidden ">
      <Header />
      <Hero />
      <Features />
      <Pricing />
    </main>
  )
}

export default App
