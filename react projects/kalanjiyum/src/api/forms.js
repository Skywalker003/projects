import { post, postForm } from './client'

export const submitContact = (data) => post('/api/submissions/contact', data)

async function uploadFile(file) {
    if (!file) return null
    const fd = new FormData()
    fd.append('file', file)
    const res = await postForm('/api/submissions/upload', fd)
    return res.url
}

export const submitJobApplication = async (formData) => {
    const [resumeUrl, photoUrl] = await Promise.all([
        uploadFile(formData.get('resume')),
        uploadFile(formData.get('photo')),
    ])
    return post('/api/submissions/jobs', {
        id: 0, submittedAt: '',
        firstName:  formData.get('firstName'),
        lastName:   formData.get('lastName'),
        email:      formData.get('email'),
        phone:      formData.get('phone'),
        position:   formData.get('position'),
        address:    formData.get('address'),
        resumeUrl,
        photoUrl,
    })
}

export const submitInternshipApplication = async (formData) => {
    const [resumeUrl, bonafideUrl, idProofUrl] = await Promise.all([
        uploadFile(formData.get('resume')),
        uploadFile(formData.get('bonafide')),
        uploadFile(formData.get('idProof')),
    ])
    return post('/api/submissions/internship', {
        id: 0, submittedAt: '',
        fullName:        formData.get('fullName'),
        gender:          formData.get('gender'),
        dob:             formData.get('dob'),
        email:           formData.get('email'),
        phone:           formData.get('phone'),
        fullAddress:     formData.get('fullAddress'),
        district:        formData.get('district'),
        state:           formData.get('state'),
        pincode:         formData.get('pincode'),
        collegeName:     formData.get('collegeName'),
        collegeLocation: formData.get('collegeLocation'),
        registerNo:      formData.get('registerNo'),
        qualification:   formData.get('qualification'),
        department:      formData.get('department'),
        currentStatus:   formData.get('currentStatus'),
        passedYear:      formData.get('passedYear'),
        domain:          formData.get('domain'),
        role:            formData.get('role'),
        mode:            formData.get('mode'),
        duration:        formData.get('duration'),
        startDate:       formData.get('startDate'),
        endDate:         formData.get('endDate'),
        skills:          JSON.parse(formData.get('skills')  || '[]'),
        tools:           JSON.parse(formData.get('tools')   || '[]'),
        experience:      formData.get('experience') || null,
        resumeUrl,
        bonafideUrl,
        idProofUrl,
    })
}
