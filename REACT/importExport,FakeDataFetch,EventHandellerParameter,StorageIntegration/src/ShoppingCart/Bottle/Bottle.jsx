import './Bottle.css'
const Bottle = ({ bottle,BottleHandeler }) => {
    const {img, price,id} =  bottle 
    return (
        <div className="BottleContainer">
            <img src={img} alt="bottleImage" />
            <h4>Price : {price}</h4>
            <button onClick={()=>BottleHandeler(bottle)} >purchese</button>
        </div>
    );
};

export default Bottle;