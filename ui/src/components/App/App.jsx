import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '/src/components/header/Header.jsx'
import Closet from '/src/components/closet/Closet'
import Outfit from '/src/components/outfit/Outfit'
import ErrorPage from '/src/components/errorPage/ErrorPage'
import './App.css'

function App() {
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