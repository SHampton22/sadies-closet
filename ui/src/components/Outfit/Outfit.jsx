import { GiClothes } from 'react-icons/gi'
import './Outfit.css'

export default function Outfit({ currentTop, setCurrentTop, currentBottom, setCurrentBottom }) {

  const clearOutfit = () => {
    setCurrentTop({})
    setCurrentBottom({})
  }

  return (
    <section className='outfit-section'>
      <p className='outfit-title'><GiClothes/> my next outfit!</p>
      <div className='outfit'>
        <div className='outfit-top'>
          <img className='outfit-img' src={currentTop.img_url} width={150}/>
        </div>
        <div className='outfit-bottom'>
          <img className='outfit-img' src={currentBottom.img_url} width={150}/>
        </div>
      </div>
        <button className='clear-outfit' onClick={() => clearOutfit()}>clear</button>
    </section>
  )
}