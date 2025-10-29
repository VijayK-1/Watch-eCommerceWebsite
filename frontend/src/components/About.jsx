import React from 'react'
import aboutBan from '../assets/aboutBan.jpg'
import aboAlt from '../assets/aboAlt.jpg'
import abogold from '../assets/abogold.jpg'
import aboutResearch from '../assets/aboutResearch.png'
import Footer from './Footer'

function About() {
  return (
    <div>
        <div className='grid md:grid-cols-2 grid-cols-1 '>
          <div>
            <img src={aboutBan} alt="" className='h-130 md:h-140 object-cover w-full' />
          </div>
          <div className='bg-[#262626] text-white md:items-center items-start flex'>
            <div className='text-start flex flex-col lg:mx-30 md:mx-15 mx-5 justify-center overflow-hidden'>
                <p className='md:text-5xl text-2xl md:my-10 my-4 font-serif'>
                    A Unique Watch That Fits Your Style
                </p>
                <p className='md:mb-10 mb-4 text-gray-500 text-sm tracking-wide leading-7'>
                  The new Lawson collection is already here! This quartz Lawson Franklin 38 model, designed with simplicity and elegance, is truly a cherry on the cake. Comes in different sizes and band colors, has a stainless steel back for a personalized engraving.
                </p>
                <button className='uppercase border-1 text-center w-35 border-gray-400 md:p-2 p-1 tracking-wide hover:bg-white hover:text-black md:text-sm text-xs font-[600] mb-5 md:mb-0'>
                    learn more
                </button>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='md:items-center items-start flex'>
            <div className='text-start flex flex-col lg:mx-30 md:mx-15 mx-5 justify-center overflow-hidden'>
                <p className='md:text-5xl text-2xl md:my-10 my-4 font-serif'>
                  Watch Repair Services
                </p>
                <p className='md:mb-2 mb-4 text-gray-500 text-sm tracking-wide leading-7'>
                   Our Reprizo repair centers are staffed with professionally trained, Expert Watchmakers that service all brands of timepieces, from Timex to Rolex. Whether it’s a wristwatch, pocket watch, stopwatch, clock or any other timepiece, we have exceptional craftsmen ready to service your needs.
                </p>
                <button className='uppercase border-1 text-center w-35 border-gray-700 md:p-2 p-1 tracking-wide hover:bg-[#262626] hover:text-white md:text-sm text-xs font-[600] mb-5 md:mb-0'>
                    learn more
                </button>
            </div>
          </div>
              <div className='grid md:grid-cols-5 grid-cols-1'>
                 <div className='md:col-span-4'>
                    <img src={aboAlt} alt="" className='object-cover w-full md:h-120 h-100' />
                 </div>
                 <div className='hidden md:block bg-[url(/src/assets/about1.png)] bg-fixed'>
                 </div>
              </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='order-2 md:order-1'>
              <div className='grid md:grid-cols-5 grid-cols-1'>
                 <div>
                    <img src={aboutResearch} alt="research" className='hidden md:block object-cover w-full md:h-120 h-100' />
                 </div>
                 <div className='md:col-span-4'>
                    <img src={abogold} alt="" className='object-cover w-full md:h-120 h-100' />
                 </div>
              </div>
              </div>
            <div className='md:items-center items-start flex order-1 md:order-2'>
            <div className='text-start flex flex-col lg:mx-30 md:mx-15 mx-5 justify-center overflow-hidden'>
                <p className='md:text-5xl text-2xl md:my-10 my-4 font-serif'>
                  Services
                </p>
                <p className='md:mb-10 mb-4 text-gray-500 text-sm tracking-wide leading-7'>
                   With proper care and maintenance, your watch will reward you with a lifetime of enjoyment and luxury.Elegant Watch Repairs stores are staffed with professionally skilled Jewelers that provide a full range of exceptional watch repair, refinishing and refurbishment services.                
                   </p>
                <button className='uppercase border-1 text-center w-35 border-gray-700 md:p-2 p-1 tracking-wide hover:bg-[#262626] hover:text-white md:text-sm text-xs font-[600] mb-5 md:mb-0'>
                    learn more
                </button>
            </div>
          </div>
        </div>
          <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='md:items-center items-start flex'>
            <div className='text-start flex flex-col lg:mx-30 md:mx-15 mx-5 justify-center overflow-hidden'>
                <p className='md:text-5xl text-2xl md:my-10 my-4 font-serif'>
                  Watch Repair Services
                </p>
                <p className='md:mb-10 mb-4 text-gray-500 text-sm tracking-wide leading-7'>
                   Our Reprizo repair centers are staffed with professionally trained, Expert Watchmakers that service all brands of timepieces, from Timex to Rolex. Whether it’s a wristwatch, pocket watch, stopwatch, clock or any other timepiece, we have exceptional craftsmen ready to service your needs.
                </p>
                <button className='uppercase border-1 text-center w-35 border-gray-700 md:p-2 p-1 tracking-wide hover:bg-[#262626] hover:text-white md:text-sm text-xs font-[600] mb-5 md:mb-0'>
                    learn more
                </button>
            </div>
          </div>
            <div className=''>
                <img src={aboutResearch} alt="" className='object-cover w-full md:h-120 h-100' />
            </div>
        </div>
       <Footer/>
    </div>
  )
}

export default About