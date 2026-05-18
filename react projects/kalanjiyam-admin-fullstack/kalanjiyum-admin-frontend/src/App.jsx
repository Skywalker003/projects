import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { useAuth } from './hooks/useAuth'
import { ToastProvider } from './components/ui/Toast'
import AdminLayout from './components/layout/AdminLayout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ContactEnquiries from './pages/submissions/ContactEnquiries'
import JobApplications from './pages/submissions/JobApplications'
import InternshipApplications from './pages/submissions/InternshipApplications'
import Home from './pages/content/Home'
import About from './pages/content/About'
import Services from './pages/content/Services'
import Portfolio from './pages/content/Portfolio'
import Careers from './pages/content/Careers'
import Internship from './pages/content/Internship'
import Locations from './pages/content/Locations'

function ProtectedRoute({ children }) {
    const { token } = useAuth()
    return token ? children : <Navigate to="/login" replace />
}

export default function App() {
    return (
        <AuthProvider>
          <ToastProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={
                        <ProtectedRoute>
                            <AdminLayout />
                        </ProtectedRoute>
                    }>
                        <Route index element={<Dashboard />} />

                        {/* Submissions */}
                        <Route path="submissions/contact"    element={<ContactEnquiries />} />
                        <Route path="submissions/jobs"       element={<JobApplications />} />
                        <Route path="submissions/internship" element={<InternshipApplications />} />

                        {/* Content */}
                        <Route path="content/home"       element={<Home />} />
                        <Route path="content/about"      element={<About />} />
                        <Route path="content/services"   element={<Services />} />
                        <Route path="content/portfolio"  element={<Portfolio />} />
                        <Route path="content/careers"    element={<Careers />} />
                        <Route path="content/internship" element={<Internship />} />
                        <Route path="content/locations"  element={<Locations />} />
                    </Route>
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
          </ToastProvider>
        </AuthProvider>
    )
}
