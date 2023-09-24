import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Apple from './components/Apple'
import PC from './components/PC'
import Phukien from './components/Phukien'
import CustomLinks from './components/CustomLinks'
import Product from './Pages/Products/Product'


const App = () => {

  return (
    <div>
      <CustomLinks></CustomLinks>
      <Routes>
        <Route path="/" element={<Home />} />Home
				<Route path="/Apple" element={<Apple />} />Apple
				<Route path="/PC" element={<PC />} />Product
				<Route path="/Phukien" element={<Phukien />} />Phụ Kiện
				<Route path="/Product" element={<Product />} />Product
      </Routes>
    </div>
  )
}

export default App
