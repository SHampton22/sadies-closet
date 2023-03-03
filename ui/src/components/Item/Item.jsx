import './Item.css'

export default function Item({ id, image, handleClick }) {

  return (
      <div  id={id} >
        <img className='closet-img' src={image} onClick={() => handleClick(id)}/>
      </div>
  )
}