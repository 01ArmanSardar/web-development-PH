import { useLoaderData } from "react-router-dom"

import './app.css'
import CoffeCard from "./components/CoffeCard"
function App() {
  
const coffes=useLoaderData()
  return (
    <>
    <h1>hot and cold coffe list {coffes.length}</h1>
    <div className="grid grid-cols-2 gap-3">

    {
      coffes.map(coffe=><CoffeCard coffe={coffe} ></CoffeCard>)
    }
    </div>
    </>
  )
}

export default App
