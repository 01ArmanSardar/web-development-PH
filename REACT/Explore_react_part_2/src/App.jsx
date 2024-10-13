import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // Way 01 of handel events 
  function handelClik() {
    alert('handelClick1 Done')
  }
  // Way 02 of handel events , use arrow function
  const handelClick2 =() => {
    alert('HandelClick 2 done')
  }
  // Way 04 of handel events , 
  function addnumber(num){
    alert(num+4)
  }
  return (
    <>
      <div>
        <h1> Diffrent way to handels event in React</h1>
        {/* Way 01 of handel events */}
        <button onClick={handelClik}>
          Click1
        </button>
        {/* Way 02 of handel events */}
        <button onClick={handelClick2}>Click2</button>
        {/* Way 03 of handel events */}
        <button onClick={()=>{alert('click 3 done')}} >Click 3</button>
{/* Way 03 of handel events */}
<button onClick={()=>{addnumber(3)}}>addNum</button>
      </div>
    </>

  )
}

export default App
