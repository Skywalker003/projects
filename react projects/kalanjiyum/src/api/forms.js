import { post, postForm } from './client'

export const submitContact = (data) => post('/api/contact', data)
// data: { name, email, phone, subject, message }

export const submitJobApplication = (formData) => postForm('/api/apply/job', formData)
// formData: FormData with fields: firstName, lastName, email, phone, address,
//           position, resume (File), photo (File, optional)

export const submitInternshipApplication = (formData) => postForm('/api/apply/internship', formData)
// formData: FormData with all 8 sections plus:
//           resume (File), bonafide (File, optional), idProof (File, optional)
