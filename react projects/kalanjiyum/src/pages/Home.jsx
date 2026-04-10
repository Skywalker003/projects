import Hero from '../components/sections/Hero'
import StatsBar from '../components/sections/StatsBar'
import ServicesGrid from '../components/sections/ServicesGrid'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import TechPartners from '../components/sections/TechPartners'
import Testimonials from '../components/sections/Testimonials'
import CTABanner from '../components/sections/CTABanner'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <WhyChooseUs />
      <TechPartners />
      <Testimonials />
      <CTABanner />
    </>
  )
}