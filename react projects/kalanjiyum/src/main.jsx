import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const preloader = document.getElementById('preloader')
if (preloader) {
  setTimeout(() => {
    document.body.classList.remove('preloading')
    preloader.classList.add('hidden')
    preloader.addEventListener('transitionend', () => preloader.remove(), { once: true })
  }, 2500)
}
