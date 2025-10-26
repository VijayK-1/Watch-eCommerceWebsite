import React from 'react'
import { useState,useEffect } from 'react'
import banner from '../assets/banner.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'
import { GrNext } from "react-icons/gr";
import { MdArrowBackIosNew } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsFillCalendarDateFill } from "react-icons/bs";
import { TbRotateRectangle } from "react-icons/tb";
import { FaGift } from "react-icons/fa6";
import { FaStore } from "react-icons/fa";
import Sections from './Sections'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

const banners=[
  {src:banner2,title:' TIMELESS ELEGANCE, CRAFTED FOR ADVENTURE',cont:"Discover the world's finest luxury timepieces, where precision meets artistry."},
  {src:banner,title:'Classic elegance',cont:"For those who appreciate timeless sophistication—sleek designs with refined details, powered by mechanical mastery."},
  {src:banner3,title:'sport & Adventure',cont:"Engineered for precision under pressure—robust, high-performance watches for the modern explorer."},
]
const bannering=[
    banner,banner2,banner3
]

function Home() {

  const [slider,setSlider]=useState(0)
  const handlePrevSlider=()=>{
    setSlider((prev)=>(prev - 1 + banners.length )% banners.length)
  }
  const handlenextSlider=()=>{
    setSlider((prev)=> (prev + 1) % banners.length )
  }
  useEffect(() => {
    AOS.init({
      delay: 200,       
      duration: 1000,    
      once: true, 
      easing: 'ease-in-out', 
    });
    AOS.refresh();
  }, [])

  const navigate=useNavigate()

  return (
    <div>
      <div className='grid lg:grid-cols-2 bg-gray-300 pb-20 md:grid-cols-2 sm:grid-cols-1'>
      <div className='flex gap-5 mb-10 md:mb-0 transition-all duration-400'>
        <div className='flex items-center justify-center'>
          <p onClick={handlePrevSlider} className='text-xl border-1 hidden sm:block border-gray-500 h-12 w-12 p-1 md:h-20 md:w-20 bg-gray-200 rounded-[50%] md:pt-6 md:pl-4
            hover:bg-black hover:text-white cursor-pointer'><MdArrowBackIosNew className='md:text-[35px] text-[25px]  pl-3 pt-3 md:pl:0 md:pt-0
           text-gray-400 '/></p>
        </div>
        <div className="transition-transform duration-700 ease-in-out">
          <img data-aos='fade-in'
            src={banners[slider].src}
             className='lg:h-215 md:h-150 w-full object-contain' />
        </div>
        <div className='flex items-center justify-center block md:hidden'>
          <p onClick={handlenextSlider} className='text-xl hidden sm:block border-1 border-gray-500 h-12 w-12 p-1 md:h-20 md:w-20 bg-gray-200 rounded-[50%]
           text-center md:pt-5 hover:bg-black hover:text-white text-gray-400  cursor-pointer '><GrNext className='text-center pl-3 pt-3 
           text-[25px] text-gray-400 '/></p>
        </div>
      </div>
      <div className='flex items-center justify-center text-ellipsis object-contain'>
        <div className='flex flex-col jsutify-center items-center  wrap-anywhere w-auto'>
          <div className='lg:text-7xl md:text-6xl text-4xl text-center font-[700] leading-tight uppercase'>
          {banners[slider].title}
          </div>
          <div className='text-center mt-20'>
            <p className='text-gray-700'>
              {banners[slider].cont}
            </p>
          <p onClick={()=>navigate('/shop')}
          className='mt-10 uppercase text-lg border-2 text-center p-1 transtion-all duration-300
          tracking-widest hover:text-gray-400 hover:bg-black border- cursor-pointer'>
            explore the collection
          </p>
          </div>
        </div>
        <div className='ml-7'>
          <div className='flex items-center justify-center pt:15 md:pt:0 '>
          <p onClick={handlenextSlider} className='text-xl hidden md:block border-1 border-gray-500 h-12 w-12 p-1 md:h-20 md:w-20 bg-gray-200 rounded-[50%] md:pt-6 md:pl-4  hover:bg-black hover:text-white cursor-pointer'><GrNext className='md:text-[35px] text-[25px] text-gray-400 pl-3 pt-3 md:pl:0 md:pt-0 font-[700]'/></p>
        </div>
        </div>
      </div>
      </div>
      <div className='py-20 sm:px-20 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center'>
        <div onClick={()=>navigate('/about')}
        className='flex flex-col gap-5 justify-center items-center cursor-pointer hover:scale-85 trasition-all duration-300'>
          <p><BsFillCalendarDateFill className='text-6xl md:text-4xl'/></p>
          <p className='sm:text-2xl text-xl'>Book An Appointment</p>
          <p className='text-gray-600'>
            At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
          </p>
        </div>
        <div onClick={()=>navigate('/about')}
        className='flex flex-col gap-5 justify-center items-center cursor-pointer hover:scale-85 trasition-all duration-300'>
          <p><FaStore className='text-6xl md:text-4xl'/></p>
          <p className='sm:text-2xl text-xl capitalcase'>Pick up in store</p>
          <p className='text-gray-600'>
            At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
          </p>
        </div>
        <div onClick={()=>navigate('/about')}
        className='flex flex-col gap-5 justify-center items-center cursor-pointer hover:scale-85 trasition-all duration-300'>
          <p><FaGift className='text-6xl md:text-4xl'/></p>
          <p className='sm:text-2xl text-xl'>Special packaging</p>
          <p className='text-gray-600'>
            At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
          </p>
        </div>
        <div onClick={()=>navigate('/about')}
        className='flex flex-col gap-5 justify-center items-center cursor-pointer hover:scale-85 trasition-all duration-300'>
          <p><TbRotateRectangle className='text-6xl md:text-4xl'/></p>
          <p className='text-2xl'>free global returns</p>
          <p className='text-gray-600'>
            At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
          </p>
        </div>
      </div>
     <Sections/>
     <Footer/>
    </div>
  )
}

export default Home