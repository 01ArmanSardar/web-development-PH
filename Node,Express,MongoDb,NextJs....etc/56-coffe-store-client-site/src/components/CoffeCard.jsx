import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const CoffeCard = ({ coffe,setcoffe,coffes }) => {
    const { _id, name, chef, supplier, taste, category, details, photo } = coffe

    const handelDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffe/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaing=coffes.filter(cof=>cof._id!=id)
                            setcoffe(remaing)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
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
                            <Link to={`Updatecoffe/${_id}`}><button className="btn join-item">edit</button></Link>
                            <button onClick={() => handelDelete(_id)} className="btn join-item">delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeCard;