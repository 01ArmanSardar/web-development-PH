import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'
export  const giftContext = createContext('gold')
const Grandpa = () => {
    
    const asset = 'daimond'
  
    return (
        <div className="grandpa">
            <h1>Grandpa</h1>
            <giftContext.Provider value="gold">
                <section className="flex">
                    <Father asset={asset}></Father>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </section>
            </giftContext.Provider>
        </div>
    );
};

export default Grandpa;

/*
1. creat a context and export it
2. add Provider for the context with value,value code anything
3. useContext to access value in the context API

*/