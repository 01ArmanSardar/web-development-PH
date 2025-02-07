

const Menus = ({item}) => {
    const {name,image,price,recipe}=item
    return (
        <div className="flex space-x-4 p-4">
            <img style={{borderRadius : '0 200px 200px 200px'}} className=" w-[120px]" src={image} alt="food image" />

            <div>
                <h3 className="uppercase">{name}------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-amber-300">{price}$</p>
        </div>
    );
};

export default Menus;