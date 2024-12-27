
import { FcHome } from "react-icons/fc";
import { IoPricetags } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
const SingleHouse = ({ house }) => {

    return (
        <div className="grid-cols-1">
            <div className="card bg-base-100  shadow-xl">
                <figure>
                    <img className="w-full"
                        src={house.image}

                        alt="house" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {house.estate_title}
                        <div className="badge badge-secondary">{house.status}</div>
                    </h2>
                    <div className="flex">
                        <FcHome></FcHome>
                        <h1 className="font-mono ">{house.segment_name}  </h1>
                    </div>

                    <p>{house.description}</p>
                    <div className="card-actions ">
                        {
                            house.facilities.map(facilitie => <div key={house.id} className="badge badge-outline">{facilitie}</div>)
                        }
                    </div>
                    <div className="flex">
                        <IoPricetags />
                        {house.price}
                    </div>
                    <div className="flex">
                        <IoLocationSharp />
                        {
                            house.location
                        }

                    </div>
                    <button className="btn btn-outline btn-info">{house.button_text}</button>
                </div>
            </div>
        </div>
    );
};

export default SingleHouse;