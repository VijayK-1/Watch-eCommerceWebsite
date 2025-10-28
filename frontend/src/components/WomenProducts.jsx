import React,{useState,useEffect} from 'react'
import womenPage from '../assets/womenPage.jpg'
import womenBannerwatch from '../assets/womenBanimg.png'
import girl1 from '../assets/girl1.png'
import girl2 from '../assets/girl2.png'
import girl3 from '../assets/girl3.png'
import girl4 from '../assets/girl4.png'
import girl5 from '../assets/girl5.png'
import girl6 from '../assets/girl6.png'
import girl7 from '../assets/girl8.png'
import girl8 from '../assets/girl9.png'
import { FaHeart } from "react-icons/fa6";
import Footer from './Footer'
import partner1 from '../assets/partner1.png'
import partner2 from '../assets/partner2.png'
import partner3 from '../assets/partner3.png'
import partner4 from '../assets/partner4.png'
import partner5 from '../assets/partner5.png'
import partner6 from '../assets/partner6.png'
import partner7 from '../assets/partner7.png'
import partner8 from '../assets/partner8.png'
import Marquee from "react-fast-marquee";
import womenGrid from '../assets/womenGrid2.jpg'
import womenGrid1 from '../assets/womenGird.jpg'
import { FaStar } from "react-icons/fa";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const womenCollection=[
    {src:girl1,text:'Cotton off-white shirt',price:1500.00},{src:girl2,text:'Handmade crop',price: 1165.00},
    {src:girl3,text:'Dark florish onepiece',price: 2095.00},{src:girl4,text:'Chronosport X1',price:795.00},
    {src:girl5,text:'Handmade crop sweater',price:995.00},{src:girl6,text:'Tristique',price:2065.00},
    {src:girl7,text:'Chronosport X1',price:1205.00},{src:girl8,text:'Skyquest GMT',price:1130.00},
]
  const logos=[
    {src:partner1},{src:partner4},
    {src:partner3},{src:partner2},
    {src:partner5},{src:partner6},
    {src:partner7},{src:partner8},
  ]
function WomenProducts() {
    const handleAdd = async (item) => {
    const token = localStorage.getItem('token');
    await axios.post('/api/cart/add', {
      productId: item.text,
      name: item.text,
      price: item.price,
      image: item.src
    }, {
      headers: { Authorization: `Bearer ${token}`}
    });
    alert("Added to cart");
  };
     const [likedItems, setLikedItems] = useState([])
   const handleClick = (product) => {
    if (likedItems.includes(product)) {
      setLikedItems(likedItems.filter((item) => item !== product));
    } else {
      setLikedItems([...likedItems, product]);
    }
  }
  const addToFavotite=async(item)=>{
        const token = localStorage.getItem('token');
       try {
    await axios.post('/api/fav/addFav',{
      productId:item.text,
      image:item.src,
      name:item.text,
      price:item.price
    }, {
      headers: { Authorization: `Bearer ${token}`}
    })
    alert('Add in your wish')        
       } catch (error) {
        alert('adding faild')
       }
  };
  const navigate=useNavigate()
  return (
    <div>
      <div className='grid grid-cols-2 relative'>
        <div>
          <img src={womenPage} alt="banner" className='sm:h-150 h-100 w-full object-cover relative' />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='grid grid-cols-3'>
            <div>
            </div>
            <div className='col-span-3 mx-2 md:col-span-2 flex flex-col md:items-start items-center justify-center md:justify-start overflow-hidden'>
          <div className='capitalize lg:text-6xl md:text-5xl text-3xl font-serif'>
            small pleasures <br /> from elegant 
          </div>
          <div className='text-center md:text-start mt-3 text-gray-400'>
            <p>we transparently build high-quality minimal watches from the finest components and metirials.</p>
          </div>
          <button className='tracking-wide hidden sm:block h-10 w-40 text-center uppercase mt-10 text-sm animate-ping [animation-duration:1s]'>Shop now</button>
          </div>
        </div>
        </div>
      </div>
      <div className='absolute inset-0 justify-center items-center hidden md:flex '>
        <img src={womenBannerwatch} alt="" className='h-85 animate-bounce [animation-duration:9s]' />
      </div>
    <div className='my-10 mx-0 md:mx-10 lg:mx-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0'>
         {womenCollection.map(pro=>(
            <div key={pro}
             className='flex flex-col bg-gray-50 shadow-lg pt-7 justify-center cursor-pointer transition-all duration-200 hover:scale-95'>
             <img src={pro.src} alt="productimg"
             className='h-50 sm:h-75 lg:h-100 object-contain'/>
             <div className='overflow-hidden uppercase mt-4 text-start mx-3'>
              <p className='text-sm sm:text-md lg:text-lg'>{pro.text}</p>
              <div className="overflow-hidden cursor-pointer">
                <div className="flex items-center justify-start">
                <p className="text-md">₹ {pro.price}</p>
                </div>
                 <div className="flex items-center justify-between uppercase my-3">
                 <p onClick={() => handleAdd(pro)}
                 className="sm:text-[12px] border p-2 font-[500] bg-pink-400 text-white rounded-lg text-[10px] cursor-pointer">add to cart</p>
                 <div onClick={()=>addToFavotite(pro)}>
                 <FaHeart onClick={()=>handleClick(pro)}
                  style={{ color: likedItems.includes(pro) ? "red" : "gray"}}
                 className='sm:text-2xl text-md cursor-pointer'/>                 
                 </div>
                 </div>
                </div>
             </div>
            </div>
         ))}
    </div>
    <div className='h-20 sm:h-30 w-full bg-gray-900 flex items-center justify-center'>
        <Marquee>
      {logos.map((src,i)=>(
        <div>
         <div key={i}>
          <img src={src.src} alt="" className=' h-15 sm:h-20 p-1 mx-3' />
          </div>
        </div>
      ))}
      </Marquee>
    </div>
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='text-start flex flex-col lg:mx-30 md:mx-15 mx-5 justify-center overflow-hidden'>
                <p className='md:text-5xl text-2xl md:my-10 my-4 font-serif'>
                  Ideal Has Never Been Closer
                </p>
                <p className='md:mb-10 mb-4 text-gray-500 text-sm tracking-wide leading-7'>
               Have you ever come across a thing that is impossible to resist? Meet the Lawson Jefferson 38! Run by the vibration of a quartz crystal (32,786 times per second) under current to keep possibly accurate time. You will feel absolutely over the moon with it, we guarantee!               
                   </p>
                <button className='uppercase border-1 text-center w-35 border-gray-700 md:p-2 p-1 tracking-wide hover:bg-[#262626] hover:text-white md:text-sm text-xs font-[600] mb-5 md:mb-0'>
                    learn more
                </button>
            </div>
        <div className='grid md:grid-cols-3 grid-cols-1 bg-gray-50'>
          <div className='md:col-span-2 relative flex flex-col justify-center items-center m-5 md:m-20 md:group'>
            <img src={girl2} alt="" className='relative h-60 md:h-80 w-full object-cover cursor-pointer transition-all duration-200 md:hover:scale-115 hover:scale-105'/>
            <div className='absolute h-7 md:h-10 w-7 md:w-10 bg-blue-950 font-mono right-0 top-0 text-xs md:p-auto text-white items-center flex text-center justify-center'>
                -29%
             </div>
             <div className="md:relative md:w-74 md:mt-0 mt-3 h-20 rounded-xl overflow-hidden cursor-pointer text-center text-xs">
              <div className="md:absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 overflow-hidden group-hover:-translate-y-full">
               <p className='uppercase'>Guna red lawsons hand watch</p>
               <p className='flex justify-center my-2'>
                <FaStar className='text-yellow-400'/>
                <FaStar className='text-yellow-400'/> 
                <FaStar className='text-yellow-400'/> 
                <FaStar className='text-yellow-400'/> 
                <FaStar className='text-yellow-400'/> 
               </p>
              <p className='flex gap-2 justify-center'>
                <del className='text-gray-500'>$45.00</del>$31.99
              </p>
              </div>
              <div className="absolute inset-0 hidden md:flex items-center justify-center translate-y-full transition-all duration-500 group-hover:translate-y-0">
              <button className='border-1 hover:bg-black hover:text-white p-3 uppercase cursor-pointer'>buy now</button>
           </div>
           </div>
          </div>
          <div className='md:block hidden'>
            <img src={womenGrid} alt="" className='h-140 w-full object-cover object-top-right'/>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className='grid md:grid-cols-2 grid-cols-1'>
        <div>
          <img src={womenGrid1} alt="" className='md:h-175 h-110 w-full object-cover' />
        </div>
            <div className='text-start flex flex-col lg:mx-30 md:mx-15 mx-5 justify-center overflow-hidden'>
                <p className='md:text-5xl text-2xl md:my-10 my-4 font-serif'>
                 Swiss Essence
                </p>
                <p className='md:mb-10 mb-4 text-gray-500 text-sm tracking-wide leading-7'>
              The first association that comes to one’s mind with the phrase “a good wristwatch” is naturally a one made somewhere in Switzerland. Do you want to know what makes Swiss watches stand out?            
                   </p>
                <button className='uppercase border-1 text-center w-35 border-gray-700 md:p-2 p-1 tracking-wide hover:bg-[#262626] hover:text-white md:text-sm text-xs font-[600] mb-5 md:mb-0'>
                    learn more
                </button>
            </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default WomenProducts