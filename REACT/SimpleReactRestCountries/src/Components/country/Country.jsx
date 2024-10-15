import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    const {name,flags}=country
    console.log(country);
    const [visited,SetVisited]=useState(false)
    const Visithandeller=()=>
    {
        SetVisited(!visited)
    }
    return (
        <div className={`CountryCss ${visited && 'visitedCountrey'}`}> {/* akhne amarh conditional css er kaj korlam */} 

            <h4 style={{color:visited?'yellow':'black'}}>Country: {name.common}</h4> {/* akhne amrha conditional style er kaj korlam */}
            <img src={flags.png} alt="flags" />
            <button onClick={Visithandeller}>{visited?'visitd':'not visitd'}</button>
            <h5>
                {visited?'visited ok':'not visited'}
            </h5>
            
        </div>
    )
}
export default Country 