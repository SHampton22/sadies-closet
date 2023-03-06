import { useState } from 'react'
import { TbHanger } from 'react-icons/tb'
import Item from '../Item/Item'
import Dropdown from '../Dropdown/Dropdown'
import './Closet.css'

export default function Closet({ clothes, setCurrentTop, setCurrentBottom }) {
  const [selectedValue, setSelectedValue] = useState('')

  const selectedItems = () => {
    if (selectedValue === "top" || selectedValue === "bottom") {
      return filteredItems
    } 
    return allItems
  }
 
  const handleClick = (id) => {
    const findItem = clothes.find(item => item.id === id)
    if (findItem.type === 'top') {
      setCurrentTop(findItem)
    } else {
      setCurrentBottom(findItem)
    }
  }

  const allItems = clothes.map(item => {
    return (
      <Item 
        key={item.id}
        id={item.id}
        type={item.type}
        image={item.img_url}
        handleClick={handleClick}
      />
    )
  })

  const filteredItems = clothes.filter(item => item.type === selectedValue).map(item => {
    return (
      <Item 
        key={item.id}
        id={item.id}
        type={item.type}
        image={item.img_url}
        handleClick={handleClick}
      />
    )
  })

  return (
    <section className='closet-section' >
      <div className='closet-title'>
        <p><TbHanger/> Click a top and bottom to create your outfit!</p>
      <Dropdown selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
      </div>
      <div className='closet'>
        {selectedItems()}
      </div>
    </section>
  )
}