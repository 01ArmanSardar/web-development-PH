

const BookMark = ({ bookmark }) => {
    const { title } = bookmark
    return (
        <div className="bg-orange-300 p-4">
           
           {
            title
           }

        </div>
    );
};

export default BookMark;