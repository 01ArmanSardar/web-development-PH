import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [users, setUSers] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUSers(data))
  }, [])

  return (
    <>

      <h1>this is second server client side</h1>
      <h4>lentgh of users is {users.length}</h4>
    </>
  )
}

export default App
