import { useEffect, useState } from "react";
import Recipie from "../Recipie/Recipie";
const Recipies = ({wantTocook}) => {
    const [Recipes, setRecipies] = useState([])
    useEffect(() => {
        fetch('Recipie.json')
            .then(res => res.json())
            .then(data => setRecipies(data))

    }, [])

    return (

        < div >
            {
                Recipes.map((recipie, idx) => <Recipie key={idx} recipie={recipie} wantTocook={wantTocook}></Recipie>)
            }

        </div >
    );
};

export default Recipies;