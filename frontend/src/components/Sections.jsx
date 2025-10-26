import React, { useState } from 'react'
import men from '../assets/men.jpg'
import simon from '../assets/simon.jpg'
import catogary from '../assets/catogray.jpg'
import product1 from '../assets/product1.jpg'
import product2 from '../assets/product2.jpg'
import product3 from '../assets/product3.jpg'
import product4 from '../assets/product4.jpg'
import product5 from '../assets/product5.jpg'
import product6 from '../assets/product6.jpg'
import product7 from '../assets/product7.jpg'
import pro1 from '../assets/pro1.jpg'
import pro2 from '../assets/pro2.jpg'
import rolex1 from '../assets/rolex1.jpg'
import rolex2 from '../assets/rolex2.jpg'
import rolex3 from '../assets/rolex3.jpg'
import rolex4 from '../assets/rolex4.jpg'
import blog from '../assets/blog.jpg'
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import { useNavigate } from 'react-router-dom'

const images=[
    {src:men,text:'for men',send:'/men'},
    {src:simon,text:'for women',send:'/women'},
    {src:catogary,text:'For Accessories',send:'/shop'}
  ]
  const productImage=[
    {src:product1,text:'Eternalis',price:'$ 55.00'},{src:product2,text:'Chronosport X1',price:'$ 65.00'},
    {src:product3,text:'Aviator Carbon',price:'$70.00'},{src:product4,text:'Horizon Flyback',price:'$70.00'},
    {src:product5,text:'Aeronaut',price:'$70.00'},{src:product6,text:'Chrono War II',price:'$70.00'},
    {src:product7,text:'Aeronaut Space',price:'$70.00'},{src:simon,text:'Space Grey',price:'$70.00'},
  ]
  const proImage=[
    {src:pro1,text:'Royal Heritage Chronograph',price:'$ 95.00'},
    {src:pro2,text:'Regent Sapphire',price:'$ 50.00'},
  ]
  const rolex=[
    {src:rolex1,text:'Legacy Tourbillon',price:'$ 70.00'},
    {src:rolex2,text:'Titanium Oceanmaster',price:'$ 55.00'},
    {src:rolex3,text:'Vortex Regatta',price:'$ 70.00'},
    {src:rolex4,text:'Skyquest GMT',price:'$ 70.00'},
  ]
  const blogSection=[
    {src:blog1,title:'How to look outstanding in pastel',content:'Dignissim lacus,turpis ut suspendisse vel tellus.Turpis purus,gravida orci,fringilla...'},
    {src:blog,title:'Top 10 fashion trend for summer',content:'Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus...'},
    {src:blog2,title:'Crazy fashion with unique moment',content:'Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus...'},
  ]
  const logos=[
    {src:logo1},{src:logo2},{src:logo3},{src:logo4}
  ]

function Sections() {
  const [active,setActive]=useState('li1')
  const getStyled=(li)=>({
    borderBottom : active === li ? '2px solid red' : 'none',
    fontWeight:active === li ? '700' : '400',
  })
  const navigate =useNavigate()
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 z-1'>
          {images.map((src,i)=>(
            <div key={i} className=''>
            <div onClick={()=>navigate(`${src.send}`)}
            className="w-[100%] cursor-pointer h-110 md:h-150 lg:h-180 overflow-hidden relative transition-all ease-in-out duration-400 hover:scale-95">
               <img
                src={src.src}
                alt=""
                className="h-140 md:h-180 sm:h-150 w-350 object-contain relative transition-all ease-in-out duration-400 hover:scale-110 overflow-hidden"
                />
                <div className="absolute bottom-15 left-[20px] lg:bottom-25 lg:left-10 z-10 truncate">
                <p className="lg:text-3xl md:text-2xl hidden md:block text-white font-[500] uppercase">
                 {src.text}</p>
                <button className='border-b-2 hidden md:block border-gray-300 uppercase text-white text-xs hover:border-black'>Shop it now</button>
               </div>
             </div>
           </div>
          ))}
        </div>
        <div className='mt-25'>
          <div>
              <ul className='uppercase flex sm:flex-row flex-col text-center gap-5 justify-center cursor-pointer sm:text-lg text-xs'>
                <li onClick={()=>setActive('li1')} style={getStyled('li1')}> best seller </li>
                <li onClick={()=>setActive('li2')} style={getStyled('li2')}> new arrivals </li>
                <li onClick={()=>setActive('li3')} style={getStyled('li3')}>best reviewed</li>
              </ul>
            </div>
          {active==='li1' && (
           <div className='grid grid-cols-1 md:grid-cols-4 place-content-center my-20 mx-5 md:mx-20 gap-4'>
            {productImage.map((pro,i)=>(
            <div key={i} onClick={()=>navigate('/shop')}
            className='text-center flex flex-col justify-center transition-all group duration-300 hover:scale-95 cursor-pointer'>
             <img src={pro.src} alt=""/>
             <div className='overflow-hidden uppercase mt-4 text-start text-start'>
              <p className='text-md lg:text-lg font-[600]'>{pro.text}</p>
              <div className="relative w-auto h-7 rounded-xl overflow-hidden  cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-start transition-all duration-500 group-hover:-translate-y-full">
                <p className="text-md">{pro.price}</p>
                </div>
                 <div className="absolute inset-0 flex items-center justify-start translate-y-full uppercase transition-all duration-500 group-hover:translate-y-0">
                 <p className="text-md">Shop Now</p>
                 </div>
                </div>
             </div>
            </div>
            ))}
          </div>  
          )}
          {active==='li2' && (
           <div className='grid grid-cols-1 md:grid-cols-4 place-content-center my-20 mx-5 md:mx-20 gap-4'>
            {proImage.map((pro,i)=>(
            <div key={i} onClick={()=>navigate('/shop')}
            className='text-center flex flex-col justify-center transition-all group duration-300 hover:scale-95 cursor-pointer '>
             <img src={pro.src} alt=""/>
             <div className='overflow-hidden uppercase mt-4 text-start text-start'>
              <p className='text-md lg:text-lg'>{pro.text}</p>
              <div className="relative w-auto h-7 rounded-xl overflow-hidden  cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-start transition-all duration-500 group-hover:-translate-y-full">
                <p className="text-md">{pro.price}</p>
                </div>
                 <div className="absolute inset-0 flex items-center justify-start translate-y-full uppercase transition-all duration-500 group-hover:translate-y-0">
                 <p className="text-md">Shop Now</p>
                 </div>
                </div>
             </div>
            </div>
            ))}
          </div>  
          )}
          {active==='li3' && (
           <div className='grid grid-cols-1 md:grid-cols-4 place-content-center my-20 mx-5 md:mx-20 gap-4'>
            {rolex.map((pro,i)=>(
            <div key={i} onClick={()=>navigate('/shop')}
            className='text-center flex flex-col justify-center transition-all group duration-300 hover:scale-95 cursor-pointer '>
             <img src={pro.src} alt=""/>
             <div className='overflow-hidden uppercase mt-4 text-start text-start'>
              <p className='text-md lg:text-lg'>{pro.text}</p>
              <div className="relative w-auto h-7 rounded-xl overflow-hidden  cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-start transition-all duration-500 group-hover:-translate-y-full">
                <p className="text-md">{pro.price}</p>
                </div>
                 <div className="absolute inset-0 flex items-center justify-start translate-y-full uppercase transition-all duration-500 group-hover:translate-y-0">
                 <p className="text-md">Shop Now</p>
                 </div>
                </div>
             </div>
            </div>
            ))}
          </div>  
          )}
        </div>
        <div className='mx-0 md:mx-10 lg:mx-20 mb-20'>
          <div className='uppercase text-2xl font-[500] mb-5'>
            read blog posts
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {blogSection.map((bg,i)=>(
            <div className='cursor-pointer'
            key={i} onClick={()=>navigate('/about')}>
             <img src={bg.src} alt="" />
             <div className='mt-3'>
              <p className='uppercase text-md opacity-[0.5]'>Fashion / jul 11, 2022</p>
              <p className='uppercase text-xl mt-2'>{bg.title}</p>
              <p className='opacity-[0.5] mt-5'>{bg.content}</p>
             </div>
            </div>
          ))}
          </div>
        </div>
        <div className='mx-20 my-10 grid grid-cols-2 gap-10 md:grid-cols-4'>
          {logos.map((log,i)=>(
            <div key={i}>
              <img src={log.src} alt="" />
            </div>
          ))}
        </div>
    </div>
  )
}

export default Sections