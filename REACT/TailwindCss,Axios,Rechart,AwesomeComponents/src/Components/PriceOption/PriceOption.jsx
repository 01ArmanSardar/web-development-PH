import Feature from "../Feature/Feature";
const PriceOption = ({ gymData }) => {
    const { name, price, features } = gymData
    console.log(name);
    return (
        <div className="bg-emerald-400 rounded-2xl m-3 pt-9 flex flex-col" >
            <h1 className="">
                <span className="text-2xl">{price}</span>
                <span> /Bdt </span>
            </h1>
            <h2 className="text-3xl">{name}</h2>
            <div className="p-7 flex-grow">
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }</div>
                <button className="bg-blue-900 text-zinc-100 w-fully p-2 m-2 rounded">Buy</button>

        </div>
    );
};

export default PriceOption;