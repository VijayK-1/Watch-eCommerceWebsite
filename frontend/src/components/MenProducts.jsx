import React,{useState,useEffect} from 'react'
import menBanner from '../assets/menBanner.png'
import product2 from '../assets/product2.jpg'
import product3 from '../assets/product3.jpg'
import product4 from '../assets/product4.jpg'
import product5 from '../assets/product5.jpg'
import product6 from '../assets/product6.jpg'
import product7 from '../assets/product7.jpg'
import rolex1 from '../assets/rolex1.jpg'
import rolex2 from '../assets/rolex2.jpg'
import rolex3 from '../assets/rolex3.jpg'
import rolex4 from '../assets/rolex4.jpg'
import men1 from '../assets/menPage (1).jpg'
import men2 from '../assets/menPage (2).jpg'
import men3 from '../assets/menPage (3).jpg'
import men4 from '../assets/menPage (4).jpg'
import men5 from '../assets/menPage (5).jpg'
import men6 from '../assets/menPage (6).jpg'
import men7 from '../assets/menPage (7).jpg'
import { FaHeart } from "react-icons/fa6";
import men9 from '../assets/men9.jpg'
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
import menad1 from '../assets/menad1.jpg'
import menad2 from '../assets/menad2.jpg'
import menad3 from '../assets/menad3.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import AOS from 'aos';
import 'aos/dist/aos.css';

  const products=[
    {image:men1,text:'Cotton off-white shirt',price: 3165.00},{image:men2,text:'Handmade crop',price: 2465.00},
    {image:men3,text:'Dark florish onepiece',price: 4625.00},{image:rolex1,text:'Chronosport X2',price: 4365.00},
    {image:men5,text:'Handmade crop sweater',price: 2365.00},{image:men6,text:'Tristique1',price: 5365.00},
    {image:men7,text:'Chronosport X1',price: 1465.00},{image:rolex4,text:'Skyquest GMT',price: 2370.00},
    {image:product2,text:'Tristique',price: 2185.00},{image:product3,text:'Aviator Carbon',price:1470.00},
    {image:product4,text:'Horizon Flyback',price:3170.00},{image:product5,text:'Aeronaut billon',price:3970.00},
    {image:product6,text:'Chrono War II',price:2270.00},{image:product7,text:'Aeronaut Space',price:570.00},
    {image:rolex2,text:'Titanium Oceanmaster',price: 1355.00},{image:rolex3,text:'Vortex Regatta',price: 4270.00},
    {image:men4,text:'Legacy Tourbillon',price: 2470.00},{image:men9,text:'Baggy Shirt',price: 4570.00},
  ]

  const logos=[
    {src:partner1},{src:partner4},
    {src:partner3},{src:partner2},
    {src:partner5},{src:partner6},
    {src:partner7},{src:partner8},
  ]

  const menAdd=[
    {src:menad1,text:'What Are the Types of Watch Movements?'},
    {src:menad2,text:'Automatic or Quartz Watches?'},
    {src:menad3,text:'Our List of Best Watches from Top Watchmakers'},
  ]


function MenProducts() {
  const handleAdd = async (item) => {
    const token = localStorage.getItem('token');
    await axios.post('/api/cart/add', {
      productId: item.text,
      name: item.text,
      price: item.price,
      image: item.image
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
      image:item.image,
      name:item.text,
      price:item.price
    }, {
      headers: { Authorization: `Bearer ${token}`}
    })
    alert('Add in your wish')        
       } catch (error) {
        alert('adding faild')
       }
  }
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh()
  }, [])
  return (
 <div>
     <div className='w-full relative'>
        <img src={menBanner} alt="" className='h-95 brightness-70 w-full object-cover relative' />
            <div className='absolute inset-0 flex flex-col justify-center items-center uppercase text-white overflow-hidden'>
               <div className='text-2xl font-[600] sm:text-5xl'> men's collections</div>
               <div className='my-1'>
                  <Link className='text-blue-500 uppercase hover:border-b-1 border-white' to='/women'>female collections</Link>
               </div>
            </div>
    </div>
    <div
    className='my-10 mx-0 md:mx-10 lg:mx-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0'>
         {products.map(p=>(
            <div key={p}
            className='flex flex-col bg-gray-50 shadow-lg pt-7 justify-center transition-all duration-200 hover:scale-95'>
             <img src={p.image} alt="productimg" data-aos='zoom-in'
             className='h-50 sm:h-75 lg:h-100 object-contain'/>
             <div className='overflow-hidden uppercase mt-4 text-start sm:mx-9 mx-2'>
              <p className='text-xs sm:text-md font-[500]'>{p.text}</p>
                <div className="flex items-center justify-start">
                <p className="sm:text-lg text-xs">₹ {p.price}</p>
                </div>
                 <div className="flex items-center justify-between uppercase my-3">
                 <p onClick={() => handleAdd(p)}
                 className="sm:text-[12px] border p-2 font-[500] bg-blue-300 text-white rounded-lg text-[10px] cursor-pointer">add to cart</p>
                 <div onClick={()=>addToFavotite(p)}>
                 <FaHeart onClick={()=>handleClick(p)}
                  style={{ color: likedItems.includes(p) ? "red" : "gray"}}
                 className='sm:text-2xl text-md cursor-pointer'/>                 
                 </div>
                 </div>
             </div>
            </div>
         ))}
    </div>
    <div className='h-20 sm:h-30 w-full bg-gray-900 flex items-center justify-center mb-4'>
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
    <div className='md:mb-10 mb-5 '>
      <div className='text-center lg:mx-85 md:mx-60 mb-10'>
        <p className='font-serif text-4xl my-7'>Journal & Blog</p>
        <p className='text-sm text-gray-500'>Apart from repair services, we are keeping a blog where we post useful tips on how to choose and maintain wrist watches and jewelry, and many other topics to educate and entertain our readers.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-30 md:mx-20 '>
        {menAdd.map((src,i)=>(
        <div key={i}
        className='relative text-white'>
          <img src={src.src} alt="menAdds" className='md:h-140 h-110 w-full object-cover relative brightness-75' />
          <div className='absolute bottom-0 left-0 py-10 sm:mx-10 mx-2 overflow-hidden'>
            <p className='uppercase text-xs'>26 jun.2019</p>
            <p className='md:text-3xl text-xl font-serif my-5'>{src.text}</p>
            <p className='uppercase text-xs inline-block hover:border-b-2'>
              <Link to='/about'>read more</Link>
            </p>
          </div>
        </div>
        ))}
      </div>
    </div>
    <Footer/>
 </div>
  )
}

export default MenProducts