import React from 'react'
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='w-full p-5 footer py-10'>
      <div className='grid grid-cols-1 lg:grid-cols-4'>
        <div className='w-full items-center lg:flex-col lg:gap-y-5 flex justify-between'>
          <div>
            <img className='w-20' src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg" alt="" />
          </div>
          <div className='flex flex-col lg:flex-row text-2xl'>
            <AiOutlineInstagram />
            <AiOutlineFacebook />
          </div>
        </div>
        <div className='font-bold text-2xl  text-black'>
          <h1 className='uppercase'>Toptracer Range</h1>
          <h1 className='uppercase'>crazy golf</h1>
          <h1 className='uppercase'>Café</h1>
        </div>
        <div className='font-bold text-2xl  text-black'>
          <h1 className='uppercase'>Events</h1>
          <h1 className='uppercase'>Golf Lessons</h1>
          <h1 className='uppercase'>Contact Us</h1>
        </div>
        <div className='uppercase'>
          <h3>A20, Sidcup Bypass
          </h3>
          <h3>Chislehurst</h3>
          <h3>Kent</h3>
          <h3>BR7 6RP</h3>
          <h3>Tel: 0208 309 0181</h3>
          <h1 className='text-2xl font-bold'>Get Directions</h1>
        </div>
      </div>
      <div className='flex lg:flex-row lg:items-center lg:justify-between flex-col mt-10 '>
        <div className='lg:flex-row'> <p>Copyright © 2023 Adventure Leisure Ltd. All rights reserved.</p>
          <p>Privacy Policy|
            Terms And Conditions|
            Gender Pay Gap</p></div>
        <div className='mt-5'>
          <p>WEB DESIGN LONDON</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer