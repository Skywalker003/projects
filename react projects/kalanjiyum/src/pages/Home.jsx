import Hero from '../components/sections/home/Hero'
import StatsBar from '../components/sections/home/StatsBar'
import ServicesGrid from '../components/sections/home/ServicesGrid'
import WhyChooseUs from '../components/sections/home/WhyChooseUs'
import TechPartners from '../components/sections/home/TechPartners'
import Testimonials from '../components/sections/home/Testimonials'
import CTABanner from '../components/sections/home/CTABanner'

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