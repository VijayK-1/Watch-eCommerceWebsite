import React, { useState } from 'react'
import foot1 from '../assets/foot1.jpg'
import foot2 from '../assets/foot2.jpg'
import foot3 from '../assets/foot3.jpg'
import foot4 from '../assets/foot4.jpg'
import foot5 from '../assets/foot5.jpg'
import foot6 from '../assets/foot6.jpg'
import icon from '../assets/ecom-logo.png'
import {Link} from 'react-router-dom'
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { BsPassportFill } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import axios from 'axios'

const footerImage=[
  {src:foot1},{src:foot2},{src:foot3},
  {src:foot4},{src:foot5},{src:foot6},
]

function Footer() {
  const[form,setForm]=useState({firstname:'',lastname:'',email:'',experience:'good',message:''})
  const handleChange=(e)=>{
       setForm({...form,[e.target.name] : e.target.value })
  }
  const submitFeedback=async(e)=>{
    e.preventDefault()
    try {
      const token = localStorage.getItem('token');
      await axios.post('https://watch-ecommercewebsite-backend.onrender.com/api/feedback/msg',{
        firstname:form.firstname,
        lastname:form.lastname,
        email:form.email,
        experience:form.experience,
        message:form.message
      },{
      headers: { Authorization: `Bearer ${token}` }
    })
      alert('Feedback send succesfull')
      setForm({firstname:'',lastname:'',email:'',message:''})
    } catch (error) {
      console.log('Feedback sending error',error)
      alert('Feedback sending error')
    }
  }
  return (
    <div>
        <div className='bg-[url(../src/assets/back3.jpg)] bg-cover bg-fixed
        '>
             <div className='text-black text-center flex flex-col justify-center items-center sm:py-10 py-5'>
               <p className='uppercase tracking-widest font-[500] text-2xl border-b-3 pb-2 mb-5 hidden sm:block'>WE WANT TO HEAR FROM YOU</p>
               <div className='overflow-hidden'>
               <p className=''>Please submit any questions, concerns, or general feedback in the 
                <br />space below along with your name and email address.</p>
                <form onSubmit={submitFeedback}
                action="" className='text-center'>
               <div className='mt-10 h-75 w-30 sm:w-75 text-start mb-10 text-shadow-lg'>
                 <div className='flex md:flex-row flex-col md:gap-10 gap-5 justify-between mb-3 '>
                    <div>
                    <label className='uppercase tracking-widest  font-[500]'>first name <span className='text-red-600'>*</span> </label>
                    <input name='firstname' value={form.firstname} onChange={handleChange}
                    type="text" className='border-1 bg-white text-black p-2 md:w-50 sm:w-105'required />
                    </div>
                    <div>
                    <label className='uppercase tracking-widest  font-[500]'>last name <span className='text-red-600'>*</span> </label><br />
                    <input name='lastname' value={form.lastname} onChange={handleChange}
                    type="text" className='border-1 bg-white text-black p-2 md:w-50 sm:w-105' required/>
                    </div>
                 </div>
                 <div className='mb-5'>
                    <label className='uppercase tracking-widest  font-[500]'>email <span className='text-red-600'>*</span></label> <br />
                    <input name='email' value={form.email} onChange={handleChange}
                    type="email"className='border-1 bg-white text-black p-2 sm:w-110' required />
                 </div>
                 <div className='mb-5'>
                  <label className='font-[500] uppercase' htmlFor="">Experience <span className='text-red-600'>*</span>
                  </label>
                  <select name="experience" onChange={handleChange}
                  className='border sm:ml-10 text-black bg-white resize-none p-1'
                  value={form.experience} id="">
                    <option value="very good">very Good</option>
                    <option value="good">Good</option>
                    <option value="average">average</option>
                    <option value="poor">Poor</option>
                  </select>
                 </div>
                   <div className="w-full mb-5">
                    <label htmlFor="message" className='font-[500]'>Type your message here...</label>
                       <textarea value={form.message} onChange={handleChange}
                           required
                           name="message"
                           placeholder="Enter your text here..."
                           className="border border-gray-400 text-black w-100 bg-white md:h-28 p-2 resize-none"
                        />
                    </div>
                  </div>
               <button className='border-1 cursor-pointer text-xl font-[500] bg-red-600 hover:bg-red-800 text-white
                border-black sm:w-85 sm:h-10 w-30 h-10 mt-30 lg:mt-5' type='submit'>Submit</button>
               </form>
               </div>
             </div>
        </div>
        <div className='grid gird-cols-2 md:grid-cols-6 mx-25 my-10 gap-5'>
            { footerImage.map((src,i)=>(
              <img src={src.src} key={i} alt="" className='hidden md:block mb-10' />
            ))
           }
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:mx-20 gap-2 mb-3 md:gap-10'>
          <div>
             <img src={icon} alt="" />
             <p className='mt-4 text-gray-500'>
               Your Trusted Source Since 1998. Located in NYC's Diamond District, we specialize in pre-owned fine watches. Audemars Piguet, Breitling, Cartier, Chopard, Hublot, IWC, Panerai, Patek Phillipe, Rolex, Omega, Luxury Watches
             </p>
             <div className='flex flex-row flex-wrap gap-5 mt-5'>
              <Link to='https://vijayk-1.github.io/portfoilo/' 
              className='md:text-3xl text-2xl'><BsPassportFill/></Link>
              <Link to='https://github.com/VijayK-1' 
              className='md:text-3xl text-2xl'><FaSquareGithub/></Link>
              <Link to='https://www.linkedin.com/in/vijay-k-a41890360/' 
              className='md:text-3xl text-2xl'><FaLinkedin/></Link>
              <Link to='https://www.instagram.com/berry_.hoo/' 
              className='md:text-3xl text-2xl'><FaInstagramSquare/></Link>
             </div>
          </div>
          <div>
             <p className='text-2xl mb-4'>Quick Links</p>
             <ul className='uppercase'>
              <li className='smoo my-1'><Link to='/home' >home</Link></li>
              <li className='smoo'><Link to='/shop' >shop</Link></li>
              <li className='my-1 smoo'><Link to='/about' >about</Link></li>
              <li className='smoo'><Link to='/cart' >cart</Link></li>
             </ul>
          </div>
          <div>
             <p className='text-2xl mb-4'>Help & Info</p>
             <ul className='uppercase'>
              <li className='my-1'>
                <div className='smoo'>
                Track Your Order
                </div>
              </li>
              <li className='smoo'>Returns + Exchanges</li>
              <li className='my-1 smoo'>Shipping + Delivery</li>
              <li className='smoo'>Find us easy</li>
             </ul>
          </div>
          <div>
             <p className='text-2xl mb-4'>Contact Us</p>
             <ul >
              <li className='my-1'>
                <p className='text-gray-500'>Do you have any questions or suggestions?</p>
                <p className='text-[12px] sm:text-lg'>vijaymsk123@gmail.com</p>
              </li>
              <li className='my-3'>
                <p className='text-gray-500'>Do you need support? Give us a call</p>
                <p>+91 9361417465</p>
              </li>
             </ul>
          </div>
        </div>
        <hr className='text-gray-300' />
        <div className='md:block hidden'>
        <div className='mx-20 my-5 flex justify-between text-gray-400 '>
          <div className='flex gap-1 text-lg '>
            <p>We accept:</p>
           <p className='text-2xl'><FaCcPaypal/></p> 
           <p className='text-2xl'><FaCcVisa/> </p>
          </div>
          <div className='flex gap-1'>
           <MdCopyright className='mt-1'/> Copyright 2025 Elegant.All rights reserved.
          </div>
        </div>
    </div>
     </div>
  )
}

export default Footer
