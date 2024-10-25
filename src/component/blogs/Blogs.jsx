import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import Blog from "../blog/Blog";


const Blogs = ({addToBookMark,markAsRead}) => {

    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))

    },[])
    return (
        <div className="md:w-2/3 mt-4">
            {/* {console.log(blogs)} */}
           <div className="">
           {
                blogs.map(blog=><Blog
                key={blog.id}
                blog={blog}
                addToBookMark={addToBookMark}
                markAsRead={markAsRead}
                ></Blog>)
            }
           </div>
        </div>
    );
};
Blogs.propTypes={
    addToBookMark:  PropTypes.func,
    markAsRead: PropTypes.func
}
export default Blogs;