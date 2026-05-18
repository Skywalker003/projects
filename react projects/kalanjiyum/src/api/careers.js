import { get } from './client'

export const getJobs          = () => get('/api/careers/jobs')
export const getCareersReasons = () => get('/api/careers/reasons')
