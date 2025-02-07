import { useEffect, useState } from "react";
import SharedSections from "../../../Components/SharedSections";
import Menus from "../../../SharedComponets/Menu/Menus";


const PopularItems = () => {
    const [menu, SetMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const PopularItems = data.filter(menu => menu.category == 'popular')
                SetMenu(PopularItems)
            })

    }, [])
    return (
        <section className="mb-2">
            <SharedSections
                subHeading={'Popular items'}
                heading={'From our Menu'}
            >
            </SharedSections>
            <div className="grid lg:grid-cols-2">
                {
                    menu.map(item => <Menus item={item} key={item._id}></Menus>)
                }
            </div>



        </section>
    );
};

export default PopularItems;