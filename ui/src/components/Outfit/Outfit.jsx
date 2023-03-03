import React from 'react'
import './Outfit.css'
import { GiClothes } from 'react-icons/gi'

export default function Outfit({clothes, currentTop, setCurrentTop, currentBottom, setCurrentBottom}) {
  console.log("currentTop", currentTop)
  console.log("currentBottom", currentBottom)
  const clearOutfit = () => {
    setCurrentTop({})
    setCurrentBottom({})
  }

  return (
    <section className='outfit-section'>
      <p className='outfit-title'><GiClothes/> my next outfit!</p>
      <div className='outfit'>
        <div className='outfit-top'>
          <img src={currentTop.img_url} width={150}/>
        </div>
        <div className='outfit-bottom'>
          <img src={currentBottom.img_url} width={150}/>
        </div>
      </div>
        <button className='clear-outfit' onClick={() => clearOutfit()}>clear</button>
    </section>
  )
}