import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import './Header.css'
import { TbHanger } from 'react-icons/tb'
import { GiClothes } from 'react-icons/gi'

export default function Header() {
  const navigate = useNavigate()
  return (
    <header>
      <h1 onClick={() => navigate('/closet')}>🦄 Sadie's Closet</h1>
      <nav>
        <NavLink to='/closet' >my closet<TbHanger className='nav-hanger'/></NavLink>
        <NavLink to='/outfit' >my outfit<GiClothes className='nav-outfit'/></NavLink>
      </nav>
    </header>
  )
}