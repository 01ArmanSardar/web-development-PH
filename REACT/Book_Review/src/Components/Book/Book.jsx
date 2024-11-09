

const Book = ({ book }) => {
    const { tags, bookName, author, rating, category } = book
    return (
        <div className=" bg-amber-400  m-8">

            <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="rounded-xl" />

            <div className="">
                {tags.map(tag => <p>{tag}</p>)}
                <h2 className="">{bookName}</h2>

                <p>by : {author}</p>
                <hr />
                <div className="flex justify-between">
                    <div>{category}</div>
                    <div>{rating}</div>
                </div>
            </div>
        </div>
    );
};

export default Book;