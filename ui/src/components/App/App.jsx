import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Header from '../Header/Header'

function App() {
  const [apiResponse, setApiResponse] = useState("")

  useEffect(() => {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => setApiResponse(res));
  }, []) 



  return (
    <div className="App">
      <Header />
      <div>{apiResponse}</div>
    </div>
  )
}

export default App
