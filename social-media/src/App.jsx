import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'

function App() {

  return (
    <div className='app-container'>
      <div className='sideBarContent'><SideBar/></div>
    <div className='content'>
    <Header/>
    <Footer/>
    </div>
    </div>


  )
}

export default App
