import React from 'react'

export default function Dropdown() {



  return (
    <form>
      <label for="filterClothes"></label>
      <select  name="clothes" id="filterClothes">
        <option value="All Clothes">All Clothes</option>
        <option value="Tops">Tops</option>
        <option value="Bottoms">Bottoms</option>
      </select>
    </form>
  )
}