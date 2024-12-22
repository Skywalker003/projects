import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (

    <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
            <img src={assets.logo} className="mb-5 w-32" alt="" />
            <p className="w-full md:w-2/3 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil voluptatum cum sint eaque sapiente distinctio consequatur animi voluptates temporibus culpa eum dolor reiciendis quod expedita veniam ullam, sunt rem pariatur.
            </p>
        </div>

        <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+1-212-456-7890</li>
                <li>contact@foreveryou.com</li>
            </ul>
        </div>

        <div className='col-span-1 sm:col-span-3'>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com - All rights reserved.</p>
        </div>

    </div>
  )
}

export default Footer