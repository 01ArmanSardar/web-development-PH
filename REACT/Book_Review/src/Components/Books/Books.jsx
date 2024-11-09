import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [Books,SetBooks]=useState([])
    useEffect(()=>{
        fetch('BooksJsonData.json')
        .then(res=>res.json())
        .then(data=>SetBooks(data))
    },[])
    return (
        
        <div className="grid grid-cols-3">
            {
                Books.map(book=><Book key={book.bookId} book={book}></Book>)
            }
        </div>
    );
};

export default Books;