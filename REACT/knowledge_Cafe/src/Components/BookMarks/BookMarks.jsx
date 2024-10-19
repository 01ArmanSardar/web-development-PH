import BookMark from "../BookMark/BookMark";
const BookMarks = ({ bookMarks, Readtime }) => {

    return (
        <div className="bg-slate-600">
            <div className="bg-slate-400 gap-6 "><h1 className="p-8">spennt time on reading {Readtime}</h1></div>
            
            <div className="w-64">

                <h1 className="text-center">BookMarked Blogs {bookMarks.length}</h1>

                {
                    bookMarks.map((bookmark, idx) => <BookMark key={idx} bookmark={bookmark}></BookMark>)
                }
            </div>
        </div>
    );
};

export default BookMarks;