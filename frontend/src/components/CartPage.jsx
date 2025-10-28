import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin7Line } from "react-icons/ri";

function CartPage() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    const token = localStorage.getItem('token');
    const res = await axios.get('/api/cart', {
      headers: { Authorization: `Bearer ${token}` }
    });
    setCart(res.data);
  };
  const updateQty = async (productId, type) => {
    const token = localStorage.getItem('token');
    await axios.post('/api/cart/update', { productId, type }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchCart();
  };
  const removeItem = async (productId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/cart/remove', { productId }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchCart();
    } catch (err) {
      console.error("Failed to remove item", err);
    }
  };
  useEffect(() => { fetchCart(); }, []);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div>
    <div className='grid grid-cols-1 lg:grid-cols-2 mt-10 lg:mx-20 mx-5'>
      <div className='overflow-hidden'>
        <div className='text-2xl mb-3 border-b-2 border-gray-300 pb-4 tracking-widest'>
          My cart
        </div>
      {cart.map(item => (
        <div key={item.productId} 
        className='flex sm:gap-20 items-center lg:justify-start justify-evenly mb-4 border-b-2 pb-3 border-gray-300 hover:scale-95 transtion-all duration-500  '>
          <div>
          <img src={item.image} alt="kk" className='h-35 w-auto object-contain' />
          </div>
          <div className='w-18 overflow-hidden sm:text-[15px] text-xs'>
            <p>{item.name}</p>
            <p>₹ {item.price}</p>
          </div>
          <div className='flex sm:gap-5 gap-1 border-1 sm:p-1'>
          <button className='cursor-pointer'
          onClick={() => updateQty(item.productId, "dec")}>-</button>          
          <p>{item.quantity}</p>
          <button className='cursor-pointer'
           onClick={() => updateQty(item.productId, "inc")}>+</button>
          </div>
          <button onClick={() => removeItem(item.productId)}><RiDeleteBin7Line className='sm:text-2xl text-lg text-gray-700 cursor-pointer' /></button>
        </div>
      ))}
      </div>
      <div className='bg-gray-50'>
        <div className='lg:mx-30 sm:mx-5 flex flex-col justify-start py-20'>
        <div className='sm:text-2xl text-lg mb-5 border-b-2 border-gray-300 pb-4 tracking-widest'>
          Price summary
        </div>
       <div className='my-10'>
        <h3>Total:<span className='sm:text-4xl text-2xl '> ₹ {total}</span></h3>
        <button  className='my-10 border-1 border-cyan-900 p-1 sm:w-65 bg-cyan-900 opacity-[0.6] text-white  
        tracking-widest text-sm cursor-pointer hover:opacity-[1] transition-all duration-400 hover:shadow-xl/30'
        onClick={() => navigate('/order')}>check it out</button>
       </div>        
       </div>
      </div>
    </div>
    </div>
  );
}

export default CartPage;
