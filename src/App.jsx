import React, { useEffect } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import FastMarquee from './Components/FastMarquee';
import Card from './Components/Card';
import Banner from './Components/Banner';
import FoodDrink from './Components/FoodDrink';
import ImagesMarquee from './Components/ImagesMarquee';
import Review from './Components/Review';
import ThreeCards from './Components/ThreeCards';
import Footer from './Components/Footer';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    // Background color animation on scroll
    gsap.to("#main", {
      backgroundColor: "#000",
      scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -100%",
        scrub: 1,
      },
    });

    // Mouse movement animation
    const handleMouseMove = (event) => {
      gsap.to("#cursor", {
        x: event.clientX,
        y: event.clientY,
      });
      gsap.to("#cursor-blur", {
        x: event.clientX - 150,
        y: event.clientY - 150,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array to run effect once on mount

  return (
    <>
      <Navbar />
      <div id="cursor" className="w-5 fixed z-[60] h-5 rounded-full bg-[#91B508]"></div>
      <div id="cursor-blur" className="w-80 fixed z-40 h-80 rounded-full blur-[200px] bg-[#91B508]"></div>
      <video className="lg:w-full w-full h-full object-cover lg:h-full lg:object-cover fixed" src="https://videos.pexels.com/video-files/3214020/3214020-uhd_2560_1440_25fps.mp4" autoPlay loop muted></video>
      <div id="main" className="relative">
        <Hero />
        <div id="page2" className="relative z-40 w-full min-h-screen">
          <FastMarquee />
        </div>
        <div id="page3" className='relative w-full '>
          <Card />
        </div>
        <div id="page4" className='relative w-full'>
          <Banner />
        </div>
        <div id="page5" className='relative w-full'>
          <FoodDrink />
        </div>
        <div id="page6" className='relative w-full'>
          <ImagesMarquee />
        </div>
        <div id="page7" className='relative w-full'>
          <Review />
        </div>
        <div id="page7" className='relative w-full'>
          <ThreeCards />
        </div>
        <div id="page8" className='relative w-full'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
