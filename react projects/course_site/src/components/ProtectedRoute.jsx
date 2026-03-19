import React from 'react'
import { Navigate } from 'react-router-dom'
import { isTokenValid } from '../utils/auth'

export default function ProtectedRoute({ children, token }) {

    if(!isTokenValid(token)){
        localStorage.removeItem("token")
        return <Navigate to="/Login" />
    }

    return children
}
