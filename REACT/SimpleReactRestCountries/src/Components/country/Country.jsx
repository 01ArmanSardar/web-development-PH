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
        <div className='CountryCss'>

            <h4>Country: {name.common}</h4>
            <img src={flags.png} alt="flags" />
            <button onClick={Visithandeller}>{visited?'visitd':'not visitd'}</button>
            <h5>
                {visited?'visited ok':'not visited'}
            </h5>
            
        </div>
    )
}
export default Country 