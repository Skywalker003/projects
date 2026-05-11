import axios from 'axios'

const client = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: { 'Content-Type': 'application/json' },
})

// Unwrap axios response so callers get data directly
export const get  = (path)       => client.get(path).then(r => r.data)
export const post = (path, body) => client.post(path, body).then(r => r.data)

// For file uploads — axios auto-sets multipart boundary when body is FormData
export const postForm = (path, formData) =>
    client.post(path, formData, { headers: { 'Content-Type': 'multipart/form-data' } }).then(r => r.data)

export default client
