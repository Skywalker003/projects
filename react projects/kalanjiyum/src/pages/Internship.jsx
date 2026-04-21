import InternHero from '../components/sections/internship/InternHero'
import WhyInternWithUs from '../components/sections/internship/WhyInternWithUs'
import InternDomains from '../components/sections/internship/InternDomains'
import WhatYouGain from '../components/sections/internship/WhatYouGain'
import HowItWorks from '../components/sections/internship/HowItWorks'
import Eligibility from '../components/sections/internship/Eligibility'
import InternFAQ from '../components/sections/internship/InternFAQ'
import InternCTA from '../components/sections/internship/InternCTA'

export default function Internship() {
    return (
        <>
            <InternHero />
            <WhyInternWithUs />
            <InternDomains />
            <WhatYouGain />
            <HowItWorks />
            <Eligibility />
            <InternFAQ />
            <InternCTA />
        </>
    )
}
