import { useState } from 'react'

import './App.css'
import Sunglass from './Components/sunglass/sunglass'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sunglass></Sunglass>
      <h1>Vite + React</h1>
     
    </>
  )
}

export default App
