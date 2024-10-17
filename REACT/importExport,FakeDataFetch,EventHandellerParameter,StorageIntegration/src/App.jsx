import { useState, useEffect } from 'react'

import './App.css'
import Sunglass from './Components/sunglass/sunglass'
import Watch from './Components/watch/Watch'

function App() {
  const [watches, setWatch] = useState([]);
  useEffect(() => {
    fetch('watch.json') //akhne watch.json tah ache public folder a , arkm fetch keh local/fake fetch boleh hoi, jkhn frontend a dekanor jonno kono bakend tekhe kono data nah ashe bha kono valid api tekeh data load nha korah jai tkhn frontend a dummy data hisebhe arm korah jeteh pareh
      .then(res => res.json())
      .then(data => setWatch(data))

  }, [])

  return (
    <>

      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
        
      }
      <Sunglass></Sunglass>


    </>
  )
}

export default App
