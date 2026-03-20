import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AUTH_API_URL } from '../src/config'

export default function Login({ handleLogin }) {

    const navigate = useNavigate()

    // storing the form values in one object for easier updates
    const [ formData , setFormData] = useState({
        email:"",
        password:""
    })

    function handleChange(e){
        const { name , value } = e.target

        // using input name to update the matching field
        setFormData({
            ...formData,
            [name]:value
        })
    }

    async function handleSubmit(e){
        e.preventDefault()

        try{

            // sending login details to backend
            const res = await fetch(`${AUTH_API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
            })

            const data = await res.json()

            if(res.ok){
            // if login works, save token through parent function and go to home
            handleLogin(data.token)

            navigate("/Home")

            } else {
            alert(data.message)
            }

        } catch(err){
            console.log(err)
        }
    }
    
    return (
    <div className="login-page">

        <div className="login-card">

            <h2>Welcome Back</h2>
            <p>Login to continue your learning journey</p>

            <form onSubmit={handleSubmit}>
            
            <input 
                type="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
            />

            <input
                type="password"
                name="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
            />

            <button type="submit" className="login-btn">
                Login
            </button>

            </form>

            <div className="login-extra">
                <p>Don't have an account? <span>Sign up</span></p>
            </div>

        </div>

    </div>
  )
}
