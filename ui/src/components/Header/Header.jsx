import { useNavigate, NavLink } from 'react-router-dom'
import { TbHanger } from 'react-icons/tb'
import { GiClothes } from 'react-icons/gi'
import './Header.css'

export default function Header() {
  const navigate = useNavigate()
  
  return (
    <header>
      <h1 onClick={() => navigate('/closet')}>🦄 Sadie's Closet</h1>
      <nav>
        <NavLink to='/closet' className={'nav-hanger'} >my clothes<TbHanger className='nav-hanger'/></NavLink>
        <NavLink to='/outfit' className={'nav-outfit'} >my outfit<GiClothes className='nav-outfit'/></NavLink>
      </nav>
    </header>
  )
}