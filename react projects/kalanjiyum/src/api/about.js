import { get } from './client'

export const getAboutStats      = () => get('/api/about/stats')
export const getWhoWeAreText    = () => get('/api/about/who-we-are')
export const getMissionVision   = () => get('/api/about/mission-vision')
export const getCoreValues      = () => get('/api/about/core-values')
export const getGallerySlides   = () => get('/api/about/gallery')
