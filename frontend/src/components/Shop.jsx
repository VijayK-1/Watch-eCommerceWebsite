import React, { useState,useEffect } from 'react'
import shopban1 from '../assets/shopban1.jpg'
import shopban2 from '../assets/shopban2.jpg'
import shopban3 from '../assets/shopban3.jpg'
import shopban4 from '../assets/shopban4.jpg'
import shopban5 from '../assets/shopban5.jpg'
import rolex1 from '../assets/rolex1.jpg'
import rolex2 from '../assets/rolex2.jpg'
import rolex3 from '../assets/rolex3.jpg'
import shop1 from '../assets/shop1.jpg'
import cart1 from '../assets/sup4.png'
import cart2 from '../assets/cart2.png'
import cart3 from '../assets/cart3.png'
import { useNavigate } from 'react-router-dom'
import shop2 from '../assets/newseller.jpg'
import shop3 from '../assets/menBanner.png'
import shop4 from '../assets/womenPage.jpg'
import men1 from '../assets/menPage (1).jpg'
import men2 from '../assets/menPage (2).jpg'
import men3 from '../assets/product6.jpg'
import men4 from '../assets/menPage (4).jpg'
import { BsBoxArrowUpRight } from "react-icons/bs";
import girl1 from '../assets/girl1.png'
import girl2 from '../assets/girl2.png'
import girl3 from '../assets/girl3.png'
import girl4 from '../assets/girl4.png'
import con1 from '../assets/con1.webp'
import con2 from '../assets/con2.webp'
import con4 from '../assets/con4.webp'
import con5 from '../assets/con5.jpg'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const shoping=[
  shopban1,men4,rolex1,shopban4,
  rolex2,shopban3,rolex3,
  shopban5,shopban2
]

const frontBan=[
  {src:shop1,title:'Time is luxury. Wear it well.',text:'A watch is more than just a timepiece—it’s a reflection of style, personality, and precision.'},
  {src:shop2,title:'Own every second.”',text:'Experience the perfect blend of elegance and precision with this exquisite timepiece. Crafted from high-quality materials and designed to stand the test of time.'},
  {src:shop3,title:'More than a watch. It’s your style.',text:'Reliable, stylish, and made for everyday adventures, this watch keeps you on time while enhancing your look.'},
  {src:shop4,title:'Luxury that ticks with you.',text:'Engineered for performance, this watch combines durability with style. Water-resistant, shock-proof, and designed for an active lifestyle.'},
]

const menDetails=[
    {src:men1,text:'Cotton off-white shirt',price:'$ 65.00'},{src:men2,text:'Handmade crop',price:'$ 65.00'},
    {src:men3,text:'Dark florish onepiece',price:'$ 65.00'},{src:rolex1,text:'Chronosport X1',price:'$ 65.00'},
]
const womenDetail=[
    {src:girl1,text:'Cotton off-white shirt',price:'$ 65.00'},{src:girl2,text:'Handmade crop',price:'$ 65.00'},
    {src:girl3,text:'Dark florish onepiece',price:'$ 65.00'},{src:girl4,text:'Chronosport X1',price:'$ 65.00'},
]

function Shop() {

  const [slider,setSlider]=useState(0)
  useEffect(()=>{
    const intervel=setInterval(()=>(
      setSlider((prev)=>(prev + 1))
    ),2000)
    return ()=>clearInterval(intervel)
  },[])

  const shoppbanner= shoping [slider % shoping.length]
  const nextslider= shoping[(slider + 1) % shoping.length]
  const nextslider2= shoping[(slider + 2) % shoping.length]

  const navigate=useNavigate()
  const [load,setLoad]=useState(0)
  useEffect(()=>{
    const intervels=setInterval(()=>{
      setLoad((prev)=>(prev + 1) % frontBan.length )
    },2000)
    return ()=> clearInterval(intervels)
  },[frontBan.length])

    useEffect(() => {
    AOS.init({     
      duration: 1000,   
      once: true,     
      easing: 'ease-in-out', 
      mirror: false,  
    });
    AOS.refresh();
  }, [])


  return (
    <div>
      <div className='grid md:grid-cols-3 grid-cols-1 relative'>
     <div className="md:col-span-2 overflow-hidden relative">
     <div
      className="flex transition-transform duration-700 ease-in-out"
      style={{ transform: `translateX(-${load * 100}%)` }}
      >
      {frontBan.map((item, index) => (
        <div key={index} className="w-full flex-shrink-0 text-center relative">
          <img
            src={item.src}
            alt='images'
            className="h-125 w-full object-cover relative"
          />
          <div className='absolute inset-0 flex flex-col justify-center items-center text-white text-center'>
            <p className='tracking-widest'>{item.title}</p>
            <p className='text-xs mt-5'>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
        <div className='flex flex-col justify-center items-center gap-7 sm:gap-10 text-xl sm:text-3xl my-7 sm:my-15 font-[500] tracking-widest'>
          <div onClick={()=>navigate('/men')}
          className='bg-blue-200 cursor-pointer hover:scale-90 transition-all duration-500
          text-white uppercase border-1 w-full sm:h-30 h-20 flex justify-between relative items-center px-10'>
            <p>for men</p>
            <div className='absolute right-0 bottom-0' data-aos='fade-right' data-aos-delay='300'>
            <img src={cart2} alt="" className='object-contain sm:h-40 h-30 w-full' />
            </div>
          </div>
          <div onClick={()=>navigate('/women')}
           className='bg-black cursor-pointer hover:scale-90 transition-all duration-500
           text-blue-200 uppercase border-1 w-full sm:h-30 h-20 flex justify-between relative items-center px-10'>
            <div className='order-2'>
            <p>for women</p>
            </div>
            <div data-aos='fade-right' data-aos-delay='300' className='absolute right-0 bottom-0 order-1'>
            <img src={cart3} alt="" className='object-contain h-30 sm:h-40 w-full' />
            </div>
          </div>
          <div onClick={()=>navigate('/about')}
          className='uppercase w-full cursor-pointer hover:scale-90 transition-all duration-500 bg-gray-100
          sm:h-30 h-20 flex justify-between relative items-center px-5 sm:px-10 text-shadow-lg/40'>
            <p>support</p>
            <div className='absolute right-0 bottom-0'  data-aos='fade-right' data-aos-delay='300'>
                <img src={cart1} alt="" className='object-contain sm:h-35 h-25 w-full' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center my-10 uppercase text-2xl sm:text-4xl font-[600]
      text-shadow-lg/30 text-shadow-stone-950'>
         you may like
      </div>
      <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 flex gap-5 sm:gap-10 mx-10 sm:mx-20 overflow-hidden'>
        {menDetails.map((item,index)=>(
          <div onClick={()=>navigate('/men')}
           key={index} className='relative cursor-pointer hover:scale-115 transition-all duration-400  '>
             <img src={item.src} alt="" className='relative object-contain' data-aos='zoom-in' />
             <div className='absolute left-0 bottom-0 text-white m-5 lg:m-10'>
              <p className='lg:text-lg font-[700]'>{item.text}</p>
              <p className='text-xs'>{item.price}</p>
             </div>
          </div>
        ))}
        </div>
        <div onClick={()=>navigate('/men')}
        className='cursor-pointer uppercase text-blue-400 my-5 mx-20 flex gap-2 sm:text-lg text-xs justify-center md:justify-end intems-start'>
          explore more <BsBoxArrowUpRight className='mt-1'/>
        </div>
      </div>
      <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 flex gap-5 sm:gap-10 mx-10 sm:mx-20 overflow-hidden'>
        {womenDetail.map((item,index)=>(
          <div onClick={()=>navigate('/women')}
           key={index} className='relative cursor-pointer hover:scale-115 bg-gray-200 md:h-60 lg:h-100 transition-all duration-400  '>
             <img src={item.src} alt="" className='relative object-contain' data-aos='zoom-in' />
             <div className='absolute left-0 bottom-0 m-5 lg:m-10'>
              <p className='lg:text-lg font-[700]'>{item.text}</p>
              <p className='text-xs'>{item.price}</p>
             </div>
          </div>
        ))}
        </div>
        <div onClick={()=>navigate('/women')}
        className='cursor-pointer uppercase text-blue-400 my-5 mx-20 flex gap-2 sm:text-lg text-xs justify-center md:justify-end intems-start'>
          explore more <BsBoxArrowUpRight className='mt-1'/>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 my-15'>
        <div className='grid grid-cols-1 lg:grid-cols-4'>
           <div className='lg:col-span-3 md:mb-0 mb-2'>
             <img src={shoppbanner} alt="" className='md:h-170 h-140 w-full object-cover'/>          
          </div>
          <div className='hidden lg:flex flex-col items-end justify-end gap-2 mx-5'>
          <div>
              <img src={shoppbanner} alt="" className='h-55 transition-all duration-300' />
             </div>
             <div>
              <img src={nextslider} alt=""  className='h-55' />
             </div>
             <div>
              <img src={nextslider2} alt=""  className='h-55' />
             </div>
          </div>
        </div>
        <div className='grid grid-cols-2'>
           <div className='grid grid-cols-2 gap-2 '>
             <div className='backdrop-blur-xs'>
              <img src={con2} alt=""className='h-170 w-full object-cover object-center ' />
             </div>
             <div>
              <img src={con5} alt="" className='h-170 w-full object-cover' />
             </div>
           </div>
           <div className='gap-2 flex-col flex mx-2'>
            <img src={con1} alt="" className='w-full h-84 object-cover object-center' />
            <img src={con4} alt="" className='w-full h-84 object-cover object-center' />
           </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Shop
