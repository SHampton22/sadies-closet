import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../header/Header'
import Closet from '../closet/Closet'
import Outfit from '../outfit/Outfit'
import ErrorPage from '../errorPage/ErrorPage'
import './App.css'

function App() {
  const [clothes, setClothes] = useState([])
  const [currentTop, setCurrentTop] = useState({})
  const [currentBottom, setCurrentBottom] = useState({})

  useEffect(() => {
      fetch("http://localhost:5500/api/v1/clothes")
          .then(res => res.json())
          .then(data => setClothes(data.clothes));  
  }, []) 


  return (
    <main>
      <Header />
      <Routes>
        <Route path='/closet' element={<Closet 
          clothes={clothes} 
          setCurrentTop={setCurrentTop} 
          setCurrentBottom={setCurrentBottom} />} />
        <Route path='/outfit' element={<Outfit 
          clothes={clothes}
          currentTop={currentTop}
          currentBottom={currentBottom}
          setCurrentTop={setCurrentTop} 
          setCurrentBottom={setCurrentBottom} />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </main>
  )
}

export default App