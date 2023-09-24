import React from 'react'
import { Link, Route, Routes, NavLink } from 'react-router-dom'
import Apple from './Apple'
import PC from './PC'
import Phukien from './Phukien'
import Product from '../Pages/Products/Product'

const CustomLinks = () => {
  return (
    <div className='navlinks'>
      <Link to='/'>Home</Link>
      <Link to='/Apple'>Apple</Link>
      <Link to='/PC'>PC</Link>
      <Link to='/Phukien'>Phụ Kiện</Link>
      <Link to='/Product'>Phụ Kiện</Link>
    </div>
  )
}

export default CustomLinks