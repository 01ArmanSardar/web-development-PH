import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottels.css'
import Cart from "../cart/Cart";
import { addToLS, getStoredCart, removeFromLS } from "../localstorage";

const Bottles = () => {
    const [bottels, setBottels] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottels(data))
    }, [])

    useEffect(() => {
        const storedCart = getStoredCart()
        const saveCart = []
        for (const id of storedCart) {
            const bottle = bottels.find(bottle => bottle.id === id)
            if (bottle) {
                saveCart.push(bottle)
            }
            setCart(saveCart)
        }
    }, [bottels])

    const BottleHandeler = bottle => {
        const newcart = [...cart, bottle]
        setCart(newcart)
        addToLS(bottle.id)

    }
const handelRemoveFromCart=id=>{
    //remove from cart
    const remainIngCart=cart.filter(bottle=>bottle.id !==id)
    setCart(remainIngCart)
    //remove from ls
    removeFromLS(id)
}
    return (
        <div >
            <Cart cart={cart} handelRemoveFromCart={handelRemoveFromCart}></Cart>
            <br />
            <div className="BottelsContainer">
                {
                    bottels.map(bottle => <Bottle key={bottle.id} bottle={bottle} BottleHandeler={BottleHandeler}></Bottle>)
                }
            </div>

        </div>
    );
};


export default Bottles;