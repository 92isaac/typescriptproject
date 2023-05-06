import {useState} from 'react'
import { Outlet } from "react-router-dom";
import NavbarLarge from '../navbar/NavbarLarge';
import NavbarSmall from '../navbar/NavbarSmall';
import Footer from './Footer';


const SharedLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
    <NavbarLarge setIsSidebarOpen={setIsSidebarOpen} />
    <NavbarSmall 
    setIsSidebarOpen={setIsSidebarOpen}
    isSidebarOpen={isSidebarOpen}
    />
    <Outlet />
    <Footer />
    </>
  )
}

export default SharedLayout