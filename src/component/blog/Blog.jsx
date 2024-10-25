
import PropTypes from 'prop-types';
const Blog = ({blog}) => {
   const {title,cover,author,author_img,reading_time,posted_date,hashtags} = blog;
   console.log(blog)
    return (
        <div className='py-12'>
            <img className='w-full' src={cover} alt="image" />
            <div className='flex justify-between py-4'>
                <div className='flex justify-center'>
                <img className='w-16' src={author_img} alt="image" />
                <div className='ms-3'>
                    <p className='text-xl font-bold'>{author}</p>
                    <p className='font-thin'>{posted_date}</p>
                </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <p className='text-4xl my-4'>{title}</p>
            {
                hashtags.map((hush,inx)=><span className='me-2' key={inx}><a href="#">#{hush}</a></span>)
            }
        </div>
    );
};
Blog.propTypes={
    blog: PropTypes.object.isRequired
}
export default Blog;