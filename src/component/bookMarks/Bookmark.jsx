import PropTypes from "prop-types";


const Bookmark = ({bookmark}) => {
    return (
        <div>
            <p className="my-4 text-2xl bg-white py-5 ps-3 border rounded">{bookmark.title}</p>
        </div>
    );
};


Bookmark.propTypes={
    bookmark: PropTypes.object.isRequired,
    
}
export default Bookmark;