import PropTypes from "prop-types";
import Bookmark from "./Bookmark";


const BookMarks = ({bookmarks,reading}) => {
    return (
        <div className="md:w-1/3 ms-5 bg-gray-200 px-5 border rounded-2xl mt-5">
            <h3 className="text-4xl text-center mt-5 bg-orange-100 py-2 px-3 border rounded-lg">Reading time : {reading}</h3>
            <h1 className="text-3xl text-center  py-3">Book Marked : {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark=><Bookmark key={bookmark.id}
                bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};
BookMarks.propTypes={
    bookmarks: PropTypes.object.isRequired,
    reading: PropTypes.number
    
}
export default BookMarks;