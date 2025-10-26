import { useState, useEffect } from 'react';
import axios from 'axios';
import { RiCheckboxCircleFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

function PlaceOrder() {
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({
    name: '',
    address: '',
    payment: 'Cash on Delivery',
  });
  const navigate=useNavigate()
  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/cart',{
        headers: { Authorization: `Bearer ${token}`}
      });
      setCart(res.data);
    };
    fetchCart();
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleConfirm = async () => {
  if (!form.name || !form.address) {
    alert("Please fill all details");
    return;
  }
  try {
    const token = localStorage.getItem('token');
    await axios.post("http://localhost:5000/api/orders/place-order", {
      name: form.name,
      address: form.address,
      payment: form.payment
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });

    alert(`Order placed successfully!\nThank you, ${form.name}`);
    navigate('/home')
  } catch (err) {
    alert("Order failed");
    console.error(err);
  }
};

  return (
    <div>
      <div className=' font-serif font-[500] text-2xl sm:text-3xl tracking-widest my-10  uppercase flex justify-center items-center'>
        your orders 🎀
      </div>
    <div className='bg-gray-100 pb-5'>
       {cart.map(item => (
         <div key={item.productId} className='overflow-hidden my-1 grid grid-cols-3 lg:gap-40 md:gap-30 sm:gap-15 lg:mx-40 md:mx-30 sm:mx-15 border-b-1 pb-2'>
            <div className='flex justity-center items-center'>
               <img 
               src={item.image} 
               alt={item.name} 
               className='h-20 w-auto object-contain'
              />
            </div>
            <div className='sm:w-55 w-25 flex justify-center items-center'>
               {item.name} 
            </div>
            <div className=' flex justify-center items-center'>
           ₹ {item.price} × {item.quantity}
            </div>
        </div>
       ))}
       <div className='sm:mx-40 flex justify-center sm:justify-end lg:pr-30 lg-15 pt-5'>
        Total :<span className='border-b-3'>₹ {total}</span>
       </div>
    </div>
    <div className='flex sm:justify-center sm:items-center flex-col pb-20 bg-[#262626] text-gray-200 overflow-hidden'>
      <div className=' font-serif font-[500] text-2xl sm:text-3xl tracking-widest my-10  uppercase flex justify-center items-center'>
         Order summary <RiCheckboxCircleFill className='text-green-500'/>
      </div>
      <div className='text-start my-2'>
      <label>Name: </label>
      <input name="name" value={form.name} onChange={handleChange} className='border-2 p-1 rounded-sm w-67 bg-white text-black' />
      </div>
      <div className='flex my-2 gap-2 '>
      <label>Address: </label>
      <textarea 
      className='border-2 p-1 rounded-sm w-70 bg-white text-black'
      name="address" value={form.address} onChange={handleChange} ></textarea>      
      </div>
      <div className='my-2'>
      <label>Payment: </label>
      <select className='border-2 sm:w-70 p-1 rounded-sm bg-white text-black'
       name="payment" value={form.payment} onChange={handleChange}>
        <option className='text-black' value="Cash on Delivery">Cash on Delivery</option>
        <option className='text-black' value="UPI">UPI</option>
        <option className='text-black' value="Card">Card</option>
      </select>
      </div>
      <div className='my-2 py-2 flex gap-5'>
       <p>Total amount:</p> 
       <p>₹ {total}</p>
      </div>
       <button className='border-1 w-40 h-10 bg-orange-200 text-black font-[600] cursor-pointer rounded-lg'
        onClick={handleConfirm}>Confirm Order</button>
    </div> 
    </div>
  );
}

export default PlaceOrder;
