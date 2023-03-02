import React from 'react'
import Item from '../Item/Item'
import Dropdown from '../Dropdown/Dropdown'

export default function Closet({clothes, setCurrentTop, setCurrentBottom}) {

  const items = clothes.map(item => {
    return (
      <Item 
        key={item.id}
        id={item.id}
        type={item.type}
        image={item.img_url}
      />
    )
  })

  return (
    <section>
      <Dropdown />
      {items}
    </section>
  )
}