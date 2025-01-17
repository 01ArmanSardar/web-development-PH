import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const Updatecoffe = () => {
    const coffeInfo = useLoaderData()
    const { _id, name, chef, supplier, taste, category, details, photo } = coffeInfo


    const HandelUpdateCoffe = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const chef = form.chef.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const CoffeObject = { name, chef, supplier, taste, category, details, photo };
        console.log(CoffeObject);

        fetch(`http://localhost:5000/coffe/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(CoffeObject)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Your file has been Updated.",
                        icon: "cool"
                    });
                }
            })
    }
    return (

        <div style={{ backgroundColor: '#F4F3F0' }}>
            <h1
                className="text-3xl font-semibold font-serif "
            >Update {name} coffe </h1>
            <form onSubmit={HandelUpdateCoffe}>
                <div className="flex justify-evenly mb-3">

                    <div className="w-3/4">
                        <input name="name" defaultValue={name} type="text" placeholder="coffe name" className="input w-full max-w-xs" />
                    </div>
                    <div className="w-3/4">
                        <input name="chef" defaultValue={chef} type="text" placeholder="enter chef name" className="input w-full max-w-xs" />
                    </div>
                </div>
                <div className="flex justify-evenly mb-3">

                    <div className="w-3/4">
                        <input name="supplier" defaultValue={supplier} type="text" placeholder="Type supplier name" className="input w-full max-w-xs" />
                    </div>
                    <div className="w-3/4">
                        <input name="taste" defaultValue={taste} type="text" placeholder="Type coffe test" className="input w-full max-w-xs" />
                    </div>
                </div>
                <div className="flex justify-evenly mb-3">

                    <div className="w-3/4">
                        <input name="category" defaultValue={category} type="text" placeholder="Type category" className="input w-full max-w-xs" />
                    </div>
                    <div className="w-3/4">
                        <input name="details" defaultValue={details} type="text" placeholder="Type details" className="input w-full max-w-xs" />
                    </div>
                </div>

                <div>
                    <input name="photo" defaultValue={photo} type="text" placeholder="Enter photo url" className="mb-3  w-3/4 " />
                </div>
                <input className="w-3/4 bg-lime-300 p-4 m-4" type="submit" value="UPdate cofffe" />
            </form>
        </div>
    );
};

export default Updatecoffe;