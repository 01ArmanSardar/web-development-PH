import { useLoaderData, useParams } from "react-router-dom";


const Bookdetails = () => {
    const Books = useLoaderData()
    console.log(Books);
    const { bookId,bookName } = useParams()
    const book = Books.find(book => book.id === bookId)
    // console.log(bookId);
    console.log(bookId);
    console.log(book);
    return (
        <div>
           {book.yearOfPublishing}
        </div>
    );
};

export default Bookdetails;