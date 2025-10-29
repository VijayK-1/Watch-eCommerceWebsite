import React, { useEffect, useState } from 'react'
import love from '../assets/love.webp'
import love1 from '../assets/love1.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { FaCartArrowDown } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Footer from './Footer'

function Favorite() {
    const navigate=useNavigate()
    const [values,setValues]=useState([])
    const fetchFavorite=async()=>{
      let token=localStorage.getItem('token')
      const res=await axios.get('https://watch-ecommercewebsite-backend.onrender.com/api/fav/',{
      headers: { Authorization: `Bearer ${token}`}
    })
      console.log(res.data)
      setValues(res.data)
    }
 const removeFav = async (productId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/fav/remove', { productId }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchFavorite();
    } catch (err) {
      console.error("Failed to remove item");
    }
  };
  useEffect(()=>{fetchFavorite()},[])
  return (
    <div>
        <div className='grid md:grid-cols-3 grid-cols-1'>
           <div onClick={()=>navigate('/shop')}
           className='hidden md:block bg-[url(./assets/love.webp)] bg-cover bg-center cursor-pointer'>
           </div>
           <div className='col-span-2 bg-gray-200'>
            <img src={love1} alt="" className='w-full object-cover h-50' />
            <div>
              <p className='mx-10 text-xl font-[600] my-5'>My Wishlist</p>
              {values.map((p,index)=>(
                <div key={index} className='flex justify-center sm:mx-10 mx-4 items-center my-3 grid grid-cols-3 border-b-2 pb-5 border-gray-400'>
                    <div>
                      <img src={p.image} alt="images" className='h-25 object-contain ' />
                    </div>
                   <div>
                  <p className='font-[600] text-xs sm:text-md'>{p.name}</p>
                  <p>₹ {p.price}</p>
                   </div>
                  <div className='flex justify-evenly intems-center'>
                    <p onClick={()=>removeFav(p.productId)} ><MdDelete className='text-2xl cursor-pointer'/></p>
                    <p onClick={()=>navigate('/cart')}><FaCartArrowDown className='text-2xl cursor-pointer'/></p>
                  </div>
                </div>
              ))}
            </div>
           </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Favorite
