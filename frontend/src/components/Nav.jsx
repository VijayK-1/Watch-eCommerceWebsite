import React, { useState } from 'react'
import {Link,Outlet} from 'react-router-dom'
import icon from '../assets/ecom-logo.png'
import { IoCart } from "react-icons/io5";
import { FaFireAlt } from "react-icons/fa";
import { PiTruckFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";

function Nav() {
  const [active, setActive] = useState('btn1');
  const [dropDown,setDropDown]=useState(false)
  const getStyle=(btn)=>({
    color : active=== btn ? 'black' : 'gray',
    borderBottom : active === btn ? '2px solid blue' : 'none',
  })
  return (
    <>
   
     <div>
    <header>
    <nav className='fixed justify-evenly w-full h-16 flex sm:justify-between bg-white pt-5 shadow-md shadow-gray-500/50 z-10'>
       <div className='pl-4 sm:static sm:pl-15'>
        <img src={icon} alt="icon" className='sticky sm-hidden lg-block order-1'/>
       </div>
       <div className='lg:order-2 md:order-2 sm:order-3'>
        <div className='hidden md:block'>
        <ul className='flex gap-[70px] sm:text-[15px] md:text-[10px] lg:text-[13px] font-[sans-serif] font-[500] uppercase'>
         <li className='list' onClick={()=>setActive('btn1')} style={getStyle('btn1')} >
          <Link className='hover:text-black' to='/home' >Home</Link>
          </li>
         <li onClick={()=>setActive('btn2')} style={getStyle('btn2')}>
          <Link className='hover:text-black ' to="/shop">Shop 
          <sup><FaFireAlt className='inline text-red-500 animate-bounce'/></sup> 
          </Link>
          </li>
         <li className='list' onClick={()=>setActive('btn3')} style={getStyle('btn3')}>
          <Link className='hover:text-black' to="/about">About</Link>
          </li>
      </ul>
        </div>
        <div className='sm:w-25 md:w-50 top-0 block  md:hidden'>
          <button className='sm:pr-15 text-[30px]' onClick={()=>setDropDown(!dropDown)}> ☰ </button>
      {dropDown && (
       <div className=''>
         <div className='relative'>
         <div className='absolute bg-gray-100 h-70 sm:h-50 w-60 font-[600]'>
         <ul className='sm:p-6 p-2 flex flex-col gap-5 tracking-widest'>
          <li className='text-[13px] sm:text-[14px]  p-1' onClick={()=>setActive('btn1')} style={getStyle('btn1')} >
          <Link className='hover:text-black' to="/home">Home</Link>
          </li>
         <li className='text-[13px] sm:text-[14px] p-1' onClick={()=>setActive('btn2')} style={getStyle('btn2')}>
          <Link className='hover:text-black ' to="/shop">Shop 
          <sup><FaFireAlt className='inline text-red-500 animate-bounce'/></sup> 
          </Link>
          </li>
         <li className='text-[13px] sm:text-[14px]  p-1' onClick={()=>setActive('btn3')} style={getStyle('btn3')}>
          <Link className='hover:text-black' to="/about">About</Link>
          </li>
         <li className='text-[13px] sm:text-[14px] block sm:hidden p-1' onClick={()=>setActive('btn4')} style={getStyle('btn4')}>
            <Link className='hover:text-black' to="/fav">Wishlist</Link>
          </li>
         <li className='text-[13px] sm:text-[14px] block sm:hidden p-1' onClick={()=>setActive('btn5')} style={getStyle('btn5')}>
          <Link className='hover:text-black' to="/cart">Cart</Link>
          </li>
         <li className='text-[13px] sm:text-[14px] block sm:hidden p-1' onClick={()=>setActive('btn6')} style={getStyle('btn6')}>
          <Link className='hover:text-black' to="/order">Orders</Link>
          </li>
         </ul>
         </div>
        </div>
       </div>
      )}
        </div>
       </div>
       <div className='hidden sm:block sx:text-[20px] lg:order-3 md:order-3 sm:order-2 md:pr-20'>
         <Link className='pr-10 animate-pulse hover:text-blue-600' to="/fav">
         <FaHeart className='text-[26px] inline text-red-600'/> <sub>wish</sub>
         </Link>
         <Link className='pr-10 hover:text-blue-600' to="/cart">
         <IoCart className='text-[30px] inline text-gray-700'/> <sub>cart</sub>
         </Link>
         <Link className='hover:text-blue-600' to="/order">
         <PiTruckFill className='text-[30px] inline text-teal-700'/> <sub>order</sub>
         </Link>
       </div>
   </nav>
  </header>
  <div className='p-[31px]'>
        <Outlet />
      </div>
    </div>
      </>
  )
}

export default Nav