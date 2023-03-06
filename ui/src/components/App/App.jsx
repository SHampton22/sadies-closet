import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'
import Closet from '../Closet/Closet'
import Outfit from '../Outfit/Outfit'
import ErrorPage from '../ErrorPage/ErrorPage'
import './App.css'

export default function App() {
  const [clothes, setClothes] = useState([])
  const [currentTop, setCurrentTop] = useState({})
  const [currentBottom, setCurrentBottom] = useState({})

  useEffect(() => {
      fetch("https://sadies-closet-api.vercel.app/api/v1/clothes")
          .then(res => res.json())
          .then(data => setClothes(data.clothes));  
  }, []) 


  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<Closet 
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

