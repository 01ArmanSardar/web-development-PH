

const Banner = () => {
    return (
        <div  className="grid md:grid-cols-2 gap-4 bg-slate-400 rounded content-center ">
            <div className="text ">
                <h1 className="text-4xl mt-25 ">Books to freshen up your bookshelf</h1>
            </div>
            <div className="image"><img src="public\images\book-3088775_640.jpg" alt="Book Image" /> </div>
            
        </div>
    );
};

export default Banner;