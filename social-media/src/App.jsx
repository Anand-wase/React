import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'

function App() {

  return (
    <div className='app-Container'>
    <SideBar/>
    <div className='content'>
    <Header/>
    <Footer/>
    </div>
    </div>


  )
}

export default App
