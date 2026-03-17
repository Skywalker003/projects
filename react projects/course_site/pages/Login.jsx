import React from 'react'
import { useState } from 'react'

export default function Login() {

    const [ formData , setFormData] =useState({
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
            localStorage.setItem("token", data.token)

            alert("Login successful")

            } else {
            alert(data.message)
            }

        } catch(err){
            console.log(err)
        }
    }
    
    return (
    <div className="login-container">

        <form onSubmit={handleSubmit}>
            <input 
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="enter your mail" />
            
            <input
            type="password"
            name="password"
            autoComplete="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="enter your password" />

            <button type="submit">Submit</button>
        </form>

    </div>
  )
}
