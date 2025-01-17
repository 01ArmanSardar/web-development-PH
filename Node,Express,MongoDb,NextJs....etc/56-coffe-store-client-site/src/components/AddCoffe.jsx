

const AddCoffe = () => {
    const HandelCoffeAdd = (e) => {
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

        fetch('http://localhost:5000/coffe', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(CoffeObject)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged == true) {
                    alert('your coffe added in database succesfullly')
                }
            })
    }
    return (

        <div style={{ backgroundColor: '#F4F3F0' }}>
            <h1
                className="text-3xl font-semibold font-serif "
            >Add coffe </h1>
            <form onSubmit={HandelCoffeAdd}>
                <div className="flex justify-evenly mb-3">

                    <div className="w-3/4">
                        <input name="name" type="text" placeholder="coffe name" className="input w-full max-w-xs" />
                    </div>
                    <div className="w-3/4">
                        <input name="chef" type="text" placeholder="enter chef name" className="input w-full max-w-xs" />
                    </div>
                </div>
                <div className="flex justify-evenly mb-3">

                    <div className="w-3/4">
                        <input name="supplier" type="text" placeholder="Type supplier name" className="input w-full max-w-xs" />
                    </div>
                    <div className="w-3/4">
                        <input name="taste" type="text" placeholder="Type coffe test" className="input w-full max-w-xs" />
                    </div>
                </div>
                <div className="flex justify-evenly mb-3">

                    <div className="w-3/4">
                        <input name="category" type="text" placeholder="Type category" className="input w-full max-w-xs" />
                    </div>
                    <div className="w-3/4">
                        <input name="details" type="text" placeholder="Type details" className="input w-full max-w-xs" />
                    </div>
                </div>
                {/* <div className="flex justify-evenly mb-3">

                <div className="w-3/4">
                    <input name="" type="text" placeholder="Type here" className="input w-full max-w-xs" />
                </div>
                <div className="w-3/4">
                    <input name="" type="text" placeholder="Type here" className="input w-full max-w-xs" />
                </div>
            </div> */}
                <div>
                    <input name="photo" type="text" placeholder="Enter photo url" className="mb-3  w-3/4 " />
                </div>
                <input className="w-3/4 bg-lime-300 p-4 m-4" type="submit" value="add cofffe" />
            </form>
        </div>
    );
};

export default AddCoffe;