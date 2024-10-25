import { ImAddressBook } from "react-icons/im";
import PropTypes from 'prop-types';
const Blog = ({blog,addToBookMark,markAsRead}) => {
   const {title,cover,author,author_img,reading_time,posted_date,hashtags} = blog;
//    console.log(blog)
    return (
        <div className=' border border-violet-600 mb-12 pb-5 border-b-1 rounded-xl'>
            <img className='w-full' src={cover} alt="image" />
            <div className='flex justify-between py-4 px-5'>
                <div className='flex justify-center'>
                <img className='w-16' src={author_img} alt="image" />
                <div className='ms-3'>
                    <p className='text-xl font-bold'>{author}</p>
                    <p className='font-thin'>{posted_date}</p>
                </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button
                    onClick={()=>addToBookMark(blog)}
                    className="ms-3 text-red-600 text-4xl"><ImAddressBook></ImAddressBook></button>
                </div>
            </div>
            <p className='text-4xl my-4 px-5'>{title}</p>
            <p className="px-5">
            {
                hashtags.map((hush,inx)=><span className='me-2' key={inx}><a href="#">#{hush}</a></span>)
            }
            </p>
            <button className="block ms-5 mt-6 px-8 py-2 text-amber-900 font-semibold bg-orange-100 border rounded-full" onClick={()=>markAsRead(reading_time)}>Mark As Read</button>
        </div>
    );
};
Blog.propTypes={
    blog: PropTypes.object.isRequired,
    addToBookMark:  PropTypes.func,
    markAsRead: PropTypes.func
}
export default Blog;