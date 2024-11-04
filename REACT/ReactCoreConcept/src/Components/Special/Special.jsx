import { useContext } from "react";
import { giftContext } from "../Grandpa/Grandpa";


const Special = ({asset}) => {
    const gift =useContext(giftContext)
    return (
        <div>
            <h1>SPECIAL</h1>
            <p>has a <strong>{asset}</strong> from Grandpa by PropDilling</p>
            <h5>als has <strong>{gift}</strong> from grndpa by useContex api</h5>
        </div>
    );
};

export default Special;