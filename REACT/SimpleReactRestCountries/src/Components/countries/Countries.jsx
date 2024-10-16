import { useEffect } from "react";
import { useState } from "react";
import Country from '../country/Country'
import './Countries.css'
const Countries = () => {
    const [countries, setCountires] = useState([])
    const [visited, setVisited] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountires(data))
    }, []);

    const handelVisitedlist=(country)=>{
        //visited.push(country) //avbhe array teh push korleh react er state a kono kaj hobh nha , react akhne array takeh immutable koreh rakhe
        const visiTedCountry=[...visited,country] // tai avbhe spread operator die array tah khe copy korthe notun aktah array teh rakteh hobhe 
        setVisited(visiTedCountry)// then set visited a notun array tah rakteh hobhe
        console.log(country);
    }

    return (
        <div>
            <h1>countries : {countries.length}</h1>
            <h3>Visited Country list  below</h3>
        <ol>

            {
                visited.map(country=><li key="{country.cca3}">  {country.name.common}</li>)
            }
        </ol>
            <h6>visited countriew :{visited.length}</h6>
            <div>
            </div>
            <div className="Country_Container">

                {
                    countries.map(country => <Country key={country.cca3} country={country} handelVisitedlist={handelVisitedlist}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;