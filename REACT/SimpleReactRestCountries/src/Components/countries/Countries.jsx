import { useEffect } from "react";
import { useState } from "react";
import Country from '../country/Country'
const Countries = () => {
    const [countries,setCountires]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountires(data))
    },[])
    return (
        <div>
            <h1>countries : {countries.length}</h1>
            {
               countries.map(country=><Country key={country.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;