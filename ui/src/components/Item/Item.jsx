import React from 'react'
import './Item.css'

export default function Item({id, image, type, handleClick}) {

  // const handleClick = (id) => {
  // }
  // onClick={handleClick(id)}

  return (
      <div  id={id} >
        <img className='closet-img' src={image} onClick={() => handleClick(id)}/>
        {/* <p>{type}</p> */}
      </div>
  )
}