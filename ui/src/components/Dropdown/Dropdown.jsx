import React from 'react'
import { useState } from 'react'

export default function Dropdown({ selectedValue, setSelectedValue }) {

  // value={selectedValue}
  return (
    <select  name="clothes" id="filterClothes" onChange={(e) => setSelectedValue(e.target.value)}>
      <option value="All clothes">All Clothes</option>
      <option value="top">Tops</option>
      <option value="bottom">Bottoms</option>
    </select>
  )
}