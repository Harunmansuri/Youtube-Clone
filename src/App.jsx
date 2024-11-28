import React from 'react'
import NavBar from './Components/Navbar/NavBar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Video from './Pages/Video/Video.jsx';
const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
    </Routes>
    </>
  )
}

export default App
