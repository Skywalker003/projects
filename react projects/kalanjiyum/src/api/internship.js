import { get } from './client'

export const getInternshipDomains  = () => get('/api/internship/domains')
export const getInternshipReasons  = () => get('/api/internship/reasons')
export const getInternshipBenefits = () => get('/api/internship/benefits')
export const getInternshipSteps    = () => get('/api/internship/steps')
export const getEligibilityCards   = () => get('/api/internship/eligibility')
export const getInternshipFAQs     = () => get('/api/internship/faqs')
