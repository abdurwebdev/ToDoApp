import React, { useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP);
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  useGSAP(() => {
    gsap.to("#nav", {
      backgroundColor: "#000",
      duration: 0.5,
      delay: 1,
      height: "120px",
      scrollTrigger: {
        trigger: "#nav",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
      }
    })
  })
  const openMenu = () => {
    if (!menu) {
      const tl = gsap.timeline();
      tl.to("#menu", {
        x: 0
      })
      tl.from("#menu h4", {
        opacity: 0,
        y: 50,
        stagger: 0.2
      })
    }
    else {
      gsap.to("#menu", {
        x: "-100%"
      })
    }
    setMenu(!menu);
  }
  return (
    <>
      <div id='menu' className='fixed ottom-0 lg:hidden flex items-center justify-center translate-x-[-100%] flex-col w-full z-50 bg-black h-screen'>
        <h4 className='text-[8vw] mt-16 hover:text-black font-extrabold text-white'>TOPTRACER RANGE</h4>
        <h4 className='text-[8vw] hover:text-black font-extrabold text-white'>GOLF LESSONS</h4>
        <h4 className='text-[8vw] hover:text-black font-extrabold text-white'>ADVENTURE GOLF</h4>
        <h4 className='text-[8vw] hover:text-black font-extrabold text-white uppercase'>Café</h4>
        <h4 className='text-[8vw] hover:text-black font-extrabold text-white'>EVENTS</h4>
      </div>
      <nav id="nav" className='lg:flex flex items-center justify-between w-full text-white fixed z-50 lg:z-50 lg:fixed lg:w-full  lg:items-center lg:justify-start px-5 lg:px-5 xl:px-20 lg:py-5 py-5 h-36 lg:gap-x-5 lg:h-36 lg:text-white'>
        <div>
          <img className='lg:h-20 h-16 hover:scale-90 transition-transform duration-300 ease-in-out' src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg" alt="" />
        </div>
        <div className='lg:flex hidden  lg:text-[14px] xl:text-lg lg:gap-x-5'>
          <h4>TOPTRACER RANGE</h4>
          <h4>GOLF LESSONS</h4>
          <h4>ADVENTURE GOLF</h4>
          <h4 className='uppercase'>Café</h4>
          <h4>EVENTS</h4>
        </div>
        <div id='button-one' className='flex  sm:hidden'>
          <button className='px-5  rounded-full py-2 border-[#91B508] border-2 bg-black text-white'><span>BOOK RANGE</span></button>
        </div>
        <div onClick={openMenu} className='flex lg:hidden sm:order-3' >
          <button>
            <svg className='w-11' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.655 543.64"><defs><clipPath id="openmenu"><path fill="#fff" d="M544 144h512v414H544z"></path></clipPath></defs><path fill="#fff" d="m138.6 541-.33-115.5h-32.01l-36.63 61.545L32.01 425.5H0V541h35.475v-50.82l25.08 40.42h17.16l25.08-42.24.33 52.64Zm57.095-29.37v-15.18h48.84V468.4h-48.84v-13.53h55.6V425.5H157.41V541h96.03v-29.37Zm148.66-86.13v52.47l-43.89-52.47h-32.01V541h37.95v-52.47l43.89 52.47h32.01V425.5Zm112.04 118.14c35.475 0 56.265-19.965 56.265-54.615V425.5h-38.285v62.37c0 17.655-6.765 24.255-17.655 24.255s-17.655-6.6-17.655-24.255V425.5h-38.94v63.525c0 34.65 20.79 54.615 56.27 54.615Z"></path><g clip-path="url(#openmenu)" transform="translate(-543.405 -144)"><path fill="#fff" d="M893.3 146.514a23.983 23.983 0 0 1 34.7 21.5v208a26.932 26.932 0 0 1-.3 4 25.955 25.955 0 0 1 .3 4v92.8c76.5 16.6 128 47.7 128 83.2 0 53-114.6 96-256 96s-256-43-256-96 114.6-96 256-96a657.784 657.784 0 0 1 80 4.8v-78l-194.7-97.4a24.028 24.028 0 0 1 0-43l208-104ZM768 560.014c0 17.7 28.7 32 64 32s64-14.3 64-32-28.7-32-64-32-64 14.3-64 32Z"></path></g><path fill="#91b508" d="M169.55 132.385a6 6 0 0 1 0-10.769l157.4-77.365a6 6 0 0 1 8.645 5.384v154.73a6 6 0 0 1-8.647 5.385Z"></path></svg>
          </button>
        </div>
        <div id='button-two' className='sm:flex sm:gap-x-4 sm:order-2 sm:mt-0 lg:mt-20 hidden'>
          <button className='px-5 rounded-full py-2 border-[#91B508] border-2 bg-black text-white'><span>BOOK RANGE</span></button>
          <button className='px-5 rounded-full py-2 border-[#91B508] border-2 bg-black text-white'><span>BOOK GOLF</span></button>
        </div>
      </nav>
    </>
  )
}

export default Navbar