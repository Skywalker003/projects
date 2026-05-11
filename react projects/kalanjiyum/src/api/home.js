import { get } from './client'

export const getHomeStats    = () => get('/api/home/stats')
export const getHomeFeatures = () => get('/api/home/features')
export const getTestimonials = () => get('/api/testimonials')
