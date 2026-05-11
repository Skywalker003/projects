import { get } from './client'

export const getServices       = () => get('/api/services')
export const getServiceProcess = () => get('/api/services/process')
