import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'
import { TbHanger } from 'react-icons/tb'
import { GiClothes } from 'react-icons/gi'

export default function Header() {
  const navigate = useNavigate()
  return (
    <header>
      <h1 onClick={() => navigate('/closet')}>🦄 Sadie's Closet</h1>
      <div>
        <TbHanger onClick={() => navigate('/closet')}Closet/>
        <GiClothes onClick={() => navigate('/outfit')}/>
      </div>
    </header>
  )
}