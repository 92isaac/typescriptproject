import {useState} from 'react'
import { Outlet } from "react-router-dom";
import NavbarLarge from '../navbar/NavbarLarge';
import NavbarSmall from '../navbar/NavbarSmall';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SharedLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
    <NavbarLarge />
    <NavbarSmall 
    setIsSidebarOpen={setIsSidebarOpen}
    isSidebarOpen={isSidebarOpen}
    />
      <ToastContainer />
    <Outlet />
    <Footer />
    </>
  )
}

export default SharedLayout