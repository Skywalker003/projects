import { get } from './client'

export const getLocations   = () => get('/api/locations')
export const getFooterContact = () => get('/api/locations/footer-contact')
