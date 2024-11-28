import Feed from '../../Components/Feed/Feed'
import SideBar from '../../Components/Sidebar/SideBar'
import './Home.css'
import React from 'react'

const Home = (sidebar) => {
  return (
    <>
      <SideBar sidebar={sidebar}/>
      <div className={`container ${sidebar? "":'large-container'}`}>
        <Feed/>
      </div>
    </>
  )
}

export default Home
