
import { FaRegBookmark } from "react-icons/fa";
import BookMarks from "../BookMarks/BookMarks";
const Blog = ({ blog, addToBookmarks,markAsRead }) => {
    const { title, cover, author, author_img, reading_time, posted_date, hashtags ,id} = blog;

    return (

        <div className="mb-16">
            <div><img src={cover} alt="" /></div>
            <div className="flex justify-between ">
                <div className="flex">
                    <div><img className="w-10 mx-4" src={author_img} alt="" /></div>
                    <div><h6>{author}</h6>
                        <p>{posted_date}</p>
                        
                    </div>
                </div>
                <div className="flex gap-4"> reading time {reading_time}
                    <button onClick={() => addToBookmarks(blog)}><FaRegBookmark ></FaRegBookmark></button>
                </div>


            </div>
            <h1 className="font-bold text-4xl w-96">{title}</h1>
            <button className="text-fuchsia-500" onClick={()=>markAsRead(reading_time,id)}>Mark as Read</button>
            {/* <p> {hashtags.map((hashtag,idx) => <span key={idx}><a href="">#{hashtag} </a></span>)}</p> */}
        </div>
    );
};

export default Blog;