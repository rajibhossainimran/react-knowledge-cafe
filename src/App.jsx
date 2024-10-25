
import { useState } from 'react'
import './App.css'
import Blogs from './component/blogs/Blogs'
import BookMarks from './component/bookMarks/BookMarks'
import Header from './component/header/Header'

function App() {
 const [bookmarks,setBookmarks] = useState([]);
  const [reading,setReading] = useState(0);
  const markAsRead = time =>{
    setReading(reading+time);
  }
 const addToBookMark =blog=>{
  const newBookMark = [...bookmarks,blog];
  setBookmarks(newBookMark);
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
