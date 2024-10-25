
import { useState } from 'react'
import './App.css'
import Blogs from './component/blogs/Blogs'
import BookMarks from './component/bookMarks/BookMarks'
import Header from './component/header/Header'

function App() {
 const [bookmarks,setBookmarks] = useState([]);

  const [reading,setReading] = useState(0);

 
 const addToBookMark =blog=>{
  const newBookMark = [...bookmarks,blog];
  setBookmarks(newBookMark);
   
 }
 const markAsRead = (time, id) =>{
  // console.log(time,id)
  const newReading = reading + time;
  setReading(newReading);
  const remainingBookmark = bookmarks.filter(bookmark =>bookmark.id !==id);
  // console.log(bookmarks.filter(bookmark =>bookmark.id !==id))
  setBookmarks(remainingBookmark);
}

  return (
    <>
      <Header></Header>
      
      <div className='flex max-w-6xl mx-auto'>
      <Blogs
      addToBookMark={addToBookMark}
      markAsRead={markAsRead}
      ></Blogs>
      <BookMarks 
      bookmarks={bookmarks}
      reading={reading}
      ></BookMarks>

      </div>
      
    
    </>
  )
}

export default App
