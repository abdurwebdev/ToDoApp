import React from 'react'

const Card = () => {
  return (
    <section className='w-full px-20 py-10 gap-12 lg:flex lg:items-center lg:justify-center lg:flex-row flex items-center justify-center flex-col'>
      <div className='card w-[90vw] lg:w-[90%] h-[70vh] rounded-lg overflow-hidden relative bg-red-400'>
        <div className="overlay py-28 flex flex-col gap-y-5 absolute w-full h-full bg-[#91B508] p-5">
          <h1 className='font-bold text-4xl'>TOPTRACER RANGE</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque eligendi sed nostrum ratione libero laboriosam neque at rerum velit accusantium?</p>
        </div>
        <img className='w-full h-full object-cover' src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-2-768x511.jpg?strip=all&lossy=1&sharp=1&ssl=1" alt="" />
      </div>
      <div className='card relative w-[90vw] lg:w-[90%] h-[70vh] bg-red-400 rounded-lg overflow-hidden'>
        <div className="overlay py-28 flex flex-col gap-y-5 absolute w-full h-full bg-[#91B508] p-5">
          <h1 className='font-bold text-4xl'>TOPTRACER RANGE</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque eligendi sed nostrum ratione libero laboriosam neque at rerum velit accusantium?</p>
        </div>
        <img className='w-full h-full object-cover' src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-4.jpg?strip=all&lossy=1&sharp=1&ssl=1" alt="" />
      </div>
      <div className='card relative w-[90vw] lg:w-[90%] h-[70vh] rounded-lg overflow-hidden'>
        <div className="overlay py-28 flex flex-col gap-y-5  rounded-xl absolute w-full h-full bg-[#91B508] p-5">
          <h1 className='font-bold text-4xl'>TOPTRACER RANGE</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque eligendi sed nostrum ratione libero laboriosam neque at rerum velit accusantium?</p>
        </div>
        <img className='w-full h-full object-cover rounded-lg' src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-lessons-1024x682.jpg?strip=all&lossy=1&sharp=1&ssl=1" alt="" />
      </div>
    </section>
  )
}

export default Card