



const Watch = ({watch}) => {
    console.log(watch);
    const {brand,price}=watch
    console.log(brand,price);

    return (
        <div>
            
            
            <h4>brand name:{brand}</h4>
            <h4>price:{price}</h4>

        </div>
    );
};

export default Watch;