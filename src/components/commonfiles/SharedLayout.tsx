import {useState} from 'react'
import { Outlet } from "react-router-dom";
import NavbarLarge from '../navbar/NavbarLarge';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MobileSidebar from '../navbar/MobileSidebar';
import NavbarSmall from '../navbar/NavbarSmall';



const SharedLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)


  return (
    <>
    <NavbarLarge />
    <NavbarSmall 
    setIsSidebarOpen={setIsSidebarOpen}
    isSidebarOpen={isSidebarOpen}
    />
    <MobileSidebar/>
      <ToastContainer />
    <Outlet />
    <Footer />
    </>
  )
}

export default SharedLayout