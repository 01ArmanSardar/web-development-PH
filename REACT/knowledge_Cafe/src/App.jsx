import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import './App.css'
import BookMarks from './Components/BookMarks/BookMarks'
import { useState } from 'react'

function App() {
  const [bookMarks, SetBookmark] = useState([])
  const [Readtime, SetReadtime] = useState(0)

  const addToBookmarks = (blog) => {
    const NewBookmark = [...bookMarks, blog]
    SetBookmark(NewBookmark)
  }
  const markAsRead = (reading_time, id) => {
    const Newtime = reading_time + Readtime
    SetReadtime(Newtime)
    //Remove readed blog
    const RemainingBookmarks = bookMarks.filter(bookmark => bookmark.id !== id)
    SetBookmark(RemainingBookmarks)

  }

  return (
    <div>
      <Header></Header>
      <div className='flex justify-evenly mx-8 mt-8'>
        <Blogs addToBookmarks={addToBookmarks} markAsRead={markAsRead} ></Blogs>
        <BookMarks bookMarks={bookMarks} Readtime={Readtime} ></BookMarks>
      </div>
    </div>
  )
}

export default App
