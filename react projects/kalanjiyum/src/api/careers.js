import { get } from './client'

export const getJobs          = () => get('/api/jobs')
export const getCareersReasons = () => get('/api/careers/reasons')
