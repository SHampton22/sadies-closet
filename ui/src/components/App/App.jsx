import { useState } from 'react'
import { useEffect } from 'react'
import Item from '../Item/Item'
import './App.css'
import Header from '../Header/Header'
import Closet from '../Closet/Closet'
import Outfit from '../Outfit/Outfit'
import { Routes, Route } from 'react-router-dom'
import ErrorPage from '../ErrorPage/ErrorPage'

function App() {
  const [clothes, setClothes] = useState([])
  const [currentTop, setCurrentTop] = useState({})
  const [currentBottom, setCurrentBottom] = useState({})

  useEffect(() => {
      fetch("http://localhost:5500/api/v1/clothes")
          .then(res => res.json())
          .then(data => setClothes(data.clothes));
          
          
  }, []) 

  const something = clothes.map(item => {
    return (
      <Item id={item.id} image={item.img_url}/>
    )
  })
 

  return (
    <main>
      <Header />
        {/* {something} */}
      <Routes>
        <Route path='/closet' element={<Closet clothes={clothes} setCurrentTop={setCurrentTop} setCurrentBottom={setCurrentBottom} />} />
        <Route path='/outfit' element={<Outfit setCurrentTop={setCurrentTop} setCurrentBottom={setCurrentBottom} />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </main>
  )
}

export default App
