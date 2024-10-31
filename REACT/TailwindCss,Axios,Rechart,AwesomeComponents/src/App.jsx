
import './App.css'
import Linechart from './Components/Linechart/Linechart'
// import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import PriceOptions from './Components/PriceOptions/PriceOptions'
PriceOptions
function App() {
 

  return (
    <>
  {/* <DaisyNav></DaisyNav> */}
<Navbar></Navbar>
<PriceOptions></PriceOptions>
<Linechart></Linechart>

    </>
  )
}

export default App
