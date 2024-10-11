import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
Todo
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Todo task="learn react" isDone={true}></Todo>
    <Todo task="explore React" isDone={false}></Todo>
    <Todo task="try jsx" isDone={true}></Todo>
      <Person></Person>
      <Student></Student>
      <Device name="laptop" price="56k"></Device>
      <Device name="phone" price="16k"></Device>
      <Device name="watch" price="6k"></Device>
      <Device name="watch" price="6k"></Device>
      <Person name="sakib" job="police"></Person>
      <Person name="rakib" job="teacher"></Person>
      <Person name="ralib" job="footballer"></Person>
      <Person name="ARMAN" job="criketer"></Person>

    </>
  )
}

function Device(props) {
  console.log(props);
  return (
    <div>
      <h3>this is a {props.name} that's Price is {props.price}</h3>
    </div>

  )
}


// const { name, job } = { name, job }
function Person({name='x',job='x'}/*amrah name,job parameter gulu 3rd baket a neor karone automatic Destructuring hoie geche*/) {
  // const name = "arman"
  // const age = '24'
  return (
    <div className='person'>
      <h3>Hello {name}</h3>
      <h1 >the person name is <small>{name}</small> job {job}</h1>
    </div>)
}

function Student() {
  const name = 'rakib'
  const age = '23'
  const scholName = 'vk high school';
  return (< div style={{
    margin: '2px',
    border: '3px solid black',
  }
  }>
    <h2>student name is {name}</h2>,
    <h4>age is {age}</h4>,
    <h6>school : {scholName}</h6>,

  </div >)
}

export default App
