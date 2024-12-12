import React from 'react'
import  {BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/login';
import Signup from '../pages/signUp'
import Product from '../pages/product';
import NotFound from '../pages/notFound';




export default function Approuter() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<NotFound/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<Signup/>}/>
        <Route path='/' element={<Product/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}
