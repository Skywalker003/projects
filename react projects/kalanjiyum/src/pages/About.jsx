import About_Hero from '../components/sections/about/About_Hero'
import WhoWeAre from '../components/sections/about/WhoWeAre'
import StatsStrip from '../components/sections/about/StatsStrip'
import MissionVision from '../components/sections/about/MissionVision'
import CoreValues from '../components/sections/about/CoreValues'
import TeamGallery from '../components/sections/about/TeamGallery'

export default function About() {
  return (
    <>
      <About_Hero />
      <WhoWeAre />
      <StatsStrip />
      <MissionVision />
      <CoreValues />
      <TeamGallery />
    </>
  )
}