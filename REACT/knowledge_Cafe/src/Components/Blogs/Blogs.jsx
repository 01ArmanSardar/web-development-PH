import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({addToBookmarks,markAsRead}) => {
    const [blogs,SetBlog] =useState([0])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>SetBlog(data))
    },[]
        
    )

    return (
        <div>
            {
                blogs.map((blog,idx)=><Blog key={idx} blog={blog} addToBookmarks={addToBookmarks} markAsRead={markAsRead}></Blog>)
            }
        </div>
    );
};

export default Blogs;