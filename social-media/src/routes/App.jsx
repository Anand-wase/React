import './App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
import { useState } from 'react'
import CreatePost from '../components/CreatePost'
import PostList from '../components/PostList'
import PostlistProvider from '../store/post-list-store'
import { Outlet } from 'react-router-dom'

function App() {
  const [selectedTab, setSelectedTab] = useState('Home')
  const handleClick = (tab) =>{
    setSelectedTab(tab);
  }
  return (
    <PostlistProvider>
          <div className='app-container'>
      <div className='sideBarContent'><SideBar selectedTab={selectedTab} onHandleClick={handleClick}/></div>
    <div className='content'>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
    </div>
    </PostlistProvider>

  )
}

export default App
