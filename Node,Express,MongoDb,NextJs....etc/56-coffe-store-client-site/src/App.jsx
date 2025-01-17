import { useLoaderData } from "react-router-dom"

import './app.css'
import CoffeCard from "./components/CoffeCard"
import { useState } from "react"
function App() {
  

const LoadeCoffes=useLoaderData()
const [coffes,setcoffe]=useState(LoadeCoffes)
  return (
    <>
    <h1>hot and cold coffe list {coffes.length}</h1>
    <div className="grid grid-cols-2 gap-3">

    {
      coffes.map(coffe=><CoffeCard coffe={coffe}
        coffes={coffes}
        setcoffe={setcoffe}
        ></CoffeCard>)
    }
    </div>
    </>
  )
}

export default App
