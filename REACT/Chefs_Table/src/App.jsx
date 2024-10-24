import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Navbarr from './Components/Navbarr/Navbarr'
import Content from './Components/Content/Content'
import RecipiesANDsideBar from './Components/RecipiesANDSideBar/RecipiesANDsideBar'
import { useState } from 'react'

function App() {
  const [sidebars, setSidebars] = useState([])
  function wantTocook(recipie) {
    console.log('1 click want to cook', recipie);
    const newSidebars = [...sidebars, recipie]
    console.log('2', newSidebars);

    setSidebars(newSidebars)
    console.log('3', sidebars);

  }

  return (

    <div>
      <Navbarr></Navbarr>
      <Content></Content>
      <RecipiesANDsideBar wantTocook={wantTocook}></RecipiesANDsideBar>


    </div>


  )
}

export default App
