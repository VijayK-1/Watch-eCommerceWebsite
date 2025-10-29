import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const navigate =useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? 'login' : 'register';
    try {
      const res = await axios.post(`https://watch-ecommercewebsite-backend.onrender.com/api/${endpoint}`,{
        email,
        password,
      });
      alert(isLogin ? 'Login success' : 'Registration successful');
      if (isLogin) {
        localStorage.setItem('token', res.data.token);
        navigate('/home')
      }
    } catch (err) {
      alert(err.response.data.message || 'Error');
    }
  };

  return (
    <div className='bg-[url(./assets/login2.jpg)] overflow-hidden  bg-no-repeat w-full bg-cover bg-center text-white flex flex-col justify-center items-center'>
      <div className='border-2 h-100 flex flex-col overflow-hidden items-center border-gray-400 w-60 sm:w-85 my-43 backdrop-blur-md bg-white/30 rounded-2xl p-6 shadow-lg'>
        <div className='text-3xl tracking-widest'>
        <h2>{isLogin ? 'Welcome' : 'Register'}</h2>
      </div>
      <div>
      <form onSubmit={handleSubmit} className='overflow-hidden'>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} required
          className='my-3 p-2 border-1 border-white bg-white text-black'
        />
        <br/>
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} required
          className='my-3 p-2 border-1 border-white bg-white text-black'
        />
        <br/>
        <button className='my-3 text-center border-1 hover:bg-slate-900 border-slate-700 hover:scale-97 transition-all duration-400 p-2 rounded-lg w-25 bg-slate-700 cursor-pointer'
        type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      </div>
      <div>
      <p onClick={() => setIsLogin(!isLogin)} className='cursor-pointer text-blue-700 font-[500] sm:text-lg text-sm mt-10'>
        {isLogin ? 'Need to Register?' : 'Already have an account? Login'}
      </p>      
      </div>
      </div>
    </div>
  );
};

export default LoginRegister;
