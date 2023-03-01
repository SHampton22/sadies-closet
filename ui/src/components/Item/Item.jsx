import React from 'react'

export default function Item({id, image, type, handleClick}) {

  // const handleClick = (id) => {
  // }
  // onClick={handleClick(id)}

  return (
      <div  id={id} >
        <img src={image} width={150} />
        <p>{type}</p>
      </div>
  )
}