import Special from "../Special/Special";

const Myself = ({asset}) => {
    return (
        <div>
            <h1>ME</h1>
            <Special asset={asset}></Special>
        </div>
    );
};

export default Myself;