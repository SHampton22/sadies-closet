import React from 'react'
import Item from '../Item/Item'
// import Filter from '../Filter/Filter'

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
      {/* <Filter /> */}
      {items}
    </section>
  )
}