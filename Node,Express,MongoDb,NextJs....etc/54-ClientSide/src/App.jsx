import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [users, setUSers] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUSers(data))
  }, [])
  const handelUserForm = (e) => {

    e.preventDefault();
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    console.log(name, email, 'in handeluserForm');
    const user = { name, email }
    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const newUSers = [...users, data]
        setUSers(newUSers)
        form.reset()
      }

      )
  }
  return (

    <>

      <h1>this is second server client side</h1>
      <h4>lentgh of users is {users.length}</h4>
      <form onSubmit={handelUserForm} >

        <input type="text" name='name' placeholder='name' />
        <input type="email" name='email' placeholder='email' />
        <input type="submit" value="submit" />
      </form>
      {
        users.map(user => <p key={user.id}>{user.name} {user.email}</p>)
      }
    </>
  )
}

export default App
