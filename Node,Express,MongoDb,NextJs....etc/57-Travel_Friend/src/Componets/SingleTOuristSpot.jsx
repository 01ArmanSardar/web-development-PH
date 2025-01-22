import { Link } from "react-router-dom";


const SingleTOuristSpot = ({ spot }) => {
    const { name, location, description, image, facilities, rating, category, _id } = spot

    // const HandelTOuristDetails = (id) => {
    //     fetch(`http://localhost:5000/touristSpot/${id}`,
    //     )
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    // }
    return (
        <div className="p-7">

            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>{location}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`}><button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleTOuristSpot;