
import './App.css'
import Blogs from './component/blogs/Blogs'
import BookMarks from './component/bookMarks/BookMarks'
import Header from './component/header/Header'

function App() {


  return (
    <>
      <Header></Header>
      
      <div className='flex max-w-6xl mx-auto'>
      <Blogs></Blogs>
      <BookMarks></BookMarks>

      </div>
      
    
    </>
  )
}

export default App
