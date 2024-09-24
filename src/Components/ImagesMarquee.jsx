import React from 'react'
import Marquee from 'react-fast-marquee'
import { AiOutlineInstagram } from "react-icons/ai";
const ImagesMarquee = () => {
  return (
    <section className='w-full py-10'>
      <Marquee>
        <div id='main-mar' className='flex items-center justify-center gap-x-10 ml-5'>
          <img className='w-96 h-96 object-cover' src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/446099330_436478269139605_3616962284735382682_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1" alt="" />
          <img className='w-96 h-96 object-cover' src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/447781550_991790659220634_5577119039868959224_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1" alt="" />
          <img className='w-96 h-96 object-cover' src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/447929470_988634446296987_6093112883687622864_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1" alt="" />
          <img className='w-96 h-96 object-cover' src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/448523995_1030727008770120_6567554558293281910_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1" alt="" />
          <img className='w-96 h-96 object-cover' src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/453518734_1037047134723040_8073951644951463776_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1" alt="" />
          <img className='w-96 h-96 object-cover' src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/435318823_258606790673865_2530423443188938293_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1" alt="" />
          <img className='w-96 h-96 object-cover' src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/436635154_953403546173691_3308096617421948060_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1" alt="" />
          <img className='w-96 h-96 object-cover' src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/438948530_1484966565755090_1439835802890169023_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1" alt="" />
        </div>
      </Marquee>
      <div className='flex  text-white mr-10 mt-5 items-end justify-end'>
        <div className='flex items-center justify-center gap-x-2 text-2xl'>
          <AiOutlineInstagram />
          <h1 className='font-bold'>FOLLOW US ON INSTAGRAM</h1>
        </div>
      </div>
    </section>
  )
}

export default ImagesMarquee