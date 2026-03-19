import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({ handleLogin }) {

    const navigate = useNavigate()

    const [ formData , setFormData] = useState({
        email:"",
        password:""
    })

    function handleChange(e){
        const { name , value } = e.target

        setFormData({
            ...formData,
            [name]:value
        })
    }

    async function handleSubmit(e){
        e.preventDefault()

        try{

            const res = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
            })

            const data = await res.json()

            if(res.ok){
            handleLogin(data.token)

            alert("Login successful")
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
