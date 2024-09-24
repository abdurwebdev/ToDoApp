import React, { useEffect } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ThreeCards = () => {
  useEffect(() => {
    gsap.to(".elem h1", {
      y: -80,
      scrollTrigger: {
        trigger: ".elem",
        scroller: "body",
        start: "top 60%",
        end: "top 55%",
        scrub: 1
      }
    })

    return () => {

    }
  }, [])

  return (
    <div className='w-full lg:flex-row lg:h-64 lg:gap-10 mt-20 elem h-screen lg:items-start  flex items-center lg:px-10 justify-center relative flex-col gap-y-5'>
      <h1 className='font-bold text-3xl absolute top-8 text-white'>WHAT ARE YOU WAITING FOR?</h1>
      <div className='w-[90vw] mains rounded-xl h-[50vh] lg:h-[30vh]  flex items-center justify-center overflow-hidden relative'>
        <div className='absolute elems hidden lg:flex w-full h-full bg-[#91B508]'></div>
        <img className='w-full h-full object-cover' src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-toptracer-1536x1025.jpg?strip=all&lossy=1&sharp=1&ssl=1" alt="" />
        <h2 className='font-extrabold absolute lg:text-3xl text-4xl text-white'>TOPTRACER RANGE</h2>
      </div>
      <div className='w-[90vw] mains rounded-xl h-[50vh] lg:h-[30vh]  flex items-center justify-center overflow-hidden relative'>
        <div className='absolute elems hidden lg:flex w-full h-full bg-[#91B508]'></div>
        <img className='w-full h-full object-cover' src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-lessons-1024x683.jpg?strip=all&lossy=1&sharp=1&ssl=1" alt="" />
        <h2 className='font-extrabold absolute text-4xl text-white lg:text-3xl'>TOPTRACER RANGE</h2>
      </div>
      <div className='w-[90vw] mains rounded-xl h-[50vh] lg:h-[30vh]  flex items-center justify-center overflow-hidden relative'>
        <div className='absolute elems hidden lg:flex w-full h-full bg-[#91B508]'></div>
        <img className='w-full h-full object-cover' src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-ag-1024x682.jpg?strip=all&lossy=1&sharp=1&ssl=1" alt="" />
        <h2 className='font-extrabold absolute text-4xl text-white lg:text-3xl'>TOPTRACER RANGE</h2>
      </div>
    </div>
  )
}

export default ThreeCards