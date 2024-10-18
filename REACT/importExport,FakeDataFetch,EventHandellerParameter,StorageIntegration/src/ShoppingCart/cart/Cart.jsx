import './cart.css'
const Cart = ({cart ,handelRemoveFromCart}) => {
    console.log(cart);
    return (
        <div>
            <h3>Cart list : {cart.length}</h3>
            <div className="cartContainer">

                {
                    cart.map(bottle=> <div key={bottle.id}>
                        <img  src={bottle.img}></img>
                        <button onClick={()=>handelRemoveFromCart(bottle.id)}> Remove</button>
                        </div> )
                }
                <hr />
            </div>

        </div>
    );
};

export default Cart;