import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const FoodDrink = () => {
  return (
    <section className='w-full lg:flex-row  text-white lg:flex lg:items-start lg:justify-between flex flex-col overflow-hidden h-auto px-5 lg:gap-10 lg:px-20 mt-20 '>
      <div>
        <img className='w-[100vw] lg:w-[50vw] rounded-lg h-96 object-cover' src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-5.jpg?strip=all&lossy=1&sharp=1&ssl=1" alt="" />
        <div>
          <img className='w-36' src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-white.svg" alt="" />
        </div>
      </div>
      <div className='flex lg:w-[50%] text-white flex-col gap-y-5'>
        <h1 className='font-bold uppercase text-[3vw]'>Food And Drink</h1>
        <p className='text-lg'>Whether you’re getting ready to play, just finishing your practice session or feeling peckish on the range, we have a variety of food and drink options bought directly to your table or bay.</p>
        <p className='text-lg'>We make sure that we cater for everyone, offering a range of vegan and gluten free options.</p>
        <div id='button-one' className='pointer-events-auto z-50 '>
          <button className='px-5  rounded-full py-2 border-[#91B508] border-2 bg-black text-white items-start justify-start flex'><span>COFEE SHOP</span></button>
        </div>
      </div>
    </section>
  )
}

export default FoodDrink