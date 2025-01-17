

const CoffeCard = ({ coffe }) => {
    const { name, chef, supplier, taste, category, details, photo } = coffe
    return (
        <div className="">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={photo}
                        alt="Movie" />
                </figure>
                <div className="flex justify-evenly p-4 mt-3">
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>{chef}</p>
                        <p>{supplier}</p>
                        <p>{taste}</p>
                        <p>{details}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical space-y-3">
                            <button className="btn join-item">details</button>
                            <button className="btn join-item">edit</button>
                            <button className="btn join-item">delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeCard;