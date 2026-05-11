import { get } from './client'

export const getPortfolioTopics = () => get('/api/portfolio/topics')
export const getPortfolioItems  = () => get('/api/portfolio/items')
