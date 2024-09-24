import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Review = () => {
  useEffect(() => {
    gsap.from("#quote-one", {
      y: -70,
      x: -70,
      scrollTrigger: {
        trigger: "#quote-one", // Corrected ID here
        scroller: "body",
        start: "top 55%",
        end: "top 25%",
        scrub: 1,
      },
    });
    gsap.from("#quote-two", {
      y: 70,
      x: 70,
      scrollTrigger: {
        trigger: "#quote-one", // Corrected ID here
        scroller: "body",
        start: "top 55%",
        end: "top 25%",
        scrub: 1,
      },
    });
    return () => {
      // Cleanup function if needed
    };
  }, []);

  return (
    <div className='flex py-10 overflow-hidden items-center justify-center relative w-full'>
      <img
        id='quote-one'
        className='w-24 absolute top-[25%] left-[10%]'
        src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg"
        alt="Quote Left"
      />
      <div className='lg:w-[55%] w-full'>
        <h1 className='text-center uppercase font-bold text-2xl text-white'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi tenetur porro optio debitis, ipsa ratione. Officiis reiciendis ullam itaque commodi, ad consectetur numquam aliquam? Iste possimus necessitatibus quidem optio maxime?
        </h1>
      </div>
      <img
        id='quote-two'
        className='w-24 absolute bottom-[25%] right-[10%]'
        src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg"
        alt="Quote Right"
      />
    </div>
  );
};

export default Review;
