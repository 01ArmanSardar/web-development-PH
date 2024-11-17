import { Link } from "react-router-dom";
import Bookdetails from "../BooksDetails/Bookdetails";


const Book = ({ book }) => {

    const { tags, bookName, author, rating, category, bookId } = book
    const HandelBookDetails = () => {
        //  <Bookdetails></Bookdetails>

        console.log('Done');
    }
    // <Link to={`/bookDetails/${bookId}` onClick={ HandelBookDetails}></Link>
    // <Bookdetails key={bookId} HandelBookDetails={HandelBookDetails()}></Bookdetails>
    return (
        <div className=" bg-amber-400  m-8">
            {/* <Link to={`/bookDetails/${bookId}` onClick={HandelBookDetails}></Link> */}
            <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="rounded-xl" />
            <div className="">
                {tags.map(tag => <p>{tag}</p>)}
                <h2 className="">{bookName}</h2>

                <p>by : {author}</p>
                <Link to={`/bookDetails/${bookId}`}><button className="btn btn-primary">Details</button></Link>
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