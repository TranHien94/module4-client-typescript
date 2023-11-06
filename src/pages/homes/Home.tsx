import Navbar from "./components/Navbars/Navbar";
 import Footer from './components/Footers/Footer'
import './home.scss'
import { Outlet } from 'react-router-dom'


function Home() {
    return (
        <div className='home_page'>
            <div className='home_page_content'>
                <Navbar/>

                <div className='content_body'>
                    <Outlet/>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Home