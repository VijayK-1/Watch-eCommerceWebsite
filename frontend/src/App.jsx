import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import LoginRegister from './components/LoginRegister'
import ProductPage from './components/ProductPage'
import CartPage from './components/CartPage'
import PlaceOrder from './components/PlaceOrder'
import Home from './components/Home'
import Nav from './components/Nav'
import Sections from './components/Sections'
import Footer from './components/Footer'
import MenProducts from './components/MenProducts'
import WomenProducts from './components/WomenProducts'
import Shop from './components/Shop'
import About from './components/About'
import React, { Suspense, useEffect,useState,lazy } from 'react'
import { useLocation } from 'react-router-dom'
import ScrollToTop from './components/Scroll'
import Favorite from './components/Favorite'
 

function App() {
 const location = useLocation()
  const hideNavbar = location.pathname === '/'
  return (
   <>
   <ScrollToTop/>
      {!hideNavbar && <Nav/>}
    <Routes>
      <Route path='/'      element={<LoginRegister/>}/>
      <Route path='/nav'   element={<Nav/>}/>
      <Route path='/home'  element={<Home/>}/>
      <Route path='/fav'  element={<Favorite/>}/>
      <Route path='/cart'  element={<CartPage/>}/>
      <Route path='/order' element={<PlaceOrder/>}/>
      <Route path='/sec'   element={<Sections/>} />
      <Route path='/men'   element={<MenProducts/>}/>
      <Route path='/women' element={<WomenProducts/>}/>
      <Route path='/shop'  element={<Shop/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/foot'  element={<Footer/>}/>
    </Routes>
   </>
  )
}

export default App
