import React, { useEffect } from 'react';
import Marquee from "react-fast-marquee";

const FastMarquee = () => {


  return (
    <>
      <Marquee>
        <div id='marquee' className='flex items-center justify-center ml-5 gap-x-4 z-50 text-[9vw] font-extrabold lg:text-[9vw] lg:font-extrabold'>
          <h1 className='hover:text-[#91B508] relative z-50'>TOPTRACER RANGE</h1>
          <h1 className='hover:text-[#91B508] relative z-50'>GOLF LESSONS</h1>
          <h1 className='hover:text-[#91B508] relative z-50'>ADVENTURE GOLF</h1>
          <h1 className='hover:text-[#91B508] relative z-50 uppercase'>Café</h1>
          <h1 className='hover:text-[#91B508] relative z-50'>EVENTS</h1>
        </div>
      </Marquee>

      <div id='main-image' className='flex flex-col items-center justify-around gap-y-5 px-5 lg:flex-row lg:px-5 lg:gap-x-4'>
        {/* First Image */}
        <div className='order-1 lg:order-1'>
          <img
            className='w-full lg:w-[200px] lg:h-[150px] rounded-lg object-cover h-[50vw]'
            src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-1-768x511.jpg?strip=all&lossy=1&sharp=1&ssl=1"
            alt="First image"
          />
        </div>

        {/* About Us Section */}
        <div className='order-3 lg:order-2 flex flex-col text-center py-4 text-white lg:mx-4 lg:w-[40%]'>
          <h1 className='uppercase text-[5vw] font-extrabold'>About Us</h1>
          <p className='mt-4'>
            Home to a 46-bay, multi-tier, floodlit driving range, powered by Toptracer Range technology. Complimented by a practice green and bunker, coffee shop and American Golf Store. There truly is something for everyone as we also boast two outdoor 18-hole dinosaur themed crazy golf courses.
          </p>
        </div>

        {/* Second Image */}
        <div className='order-2 lg:order-3'>
          <img
            className='w-full lg:w-[200px] lg:h-[150px] rounded-lg object-cover h-[50vw]'
            src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-2-768x511.jpg?strip=all&lossy=1&sharp=1&ssl=1"
            alt="Second image"
          />
        </div>
      </div>
      <p className='mt-10 px-5 text-white text-center'>Please note: we are a cashless venue. The range closes at 10pm with last balls at 9pm.</p>
    </>
  );
}

export default FastMarquee;
