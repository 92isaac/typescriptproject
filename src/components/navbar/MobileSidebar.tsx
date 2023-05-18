import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../commonfiles/Logo";
import { Link, useNavigate } from "react-router-dom";
import { navlinks } from "../commonfiles/data";
import { useSelector } from "react-redux";
import { logOut, selectAuth } from "../../features/authSlice";
import { useAppDispatch } from "../../constant/hooks";
import { toast } from "react-toastify";

const MobileSidebar: React.FC = () => {
  const {token, name} = useSelector(selectAuth)
  const dispatch= useAppDispatch()
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout=()=>{
    dispatch(logOut)
    toast.success(`Good bye! ${name}.`)
    toggleSidebar()
    navigate('/login')
  }

  return (
    <div className="flex">
      <div
        className={`fixed z-20 inset-0 bg-black transition-opacity ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        className={`fixed z-30 inset-y-0 right-0 max-w-full flex flex-col bg-white shadow-md transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-black">
            <Logo />
          </h2>
          <button
            title="menu"
            className="text-gray-500 focus:outline-none"
            onClick={toggleSidebar}
          >
            <FiMenu className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-grow px-4 py-6">
          {/* Sidebar content goes here */}
          {navlinks.map((option) => (
            <ul key={option.id}>
              <li className="mb-2" onClick={toggleSidebar}>
                <Link to={`${option.path}`}>{option.icon} {option.title}</Link>
              </li>
            </ul>
          ))}
          <ul>
            {token ? 
            <li><Link className="mb-2"  onClick={handleLogout} to="/logout">Log Out</Link></li>
            :
            <li><Link className="mb-2"  onClick={toggleSidebar} to="/login">Log in</Link></li>
          }
          </ul>
        </div>
      </div>
      <button
        title="menu"
        className="fixed z-40 bottom-4 right-4 bg-gray-700 text-white rounded-full p-2 focus:outline-none"
        onClick={toggleSidebar}
      >
        <FiMenu className="w-6 h-6" />
      </button>
    </div>
  );
};

export default MobileSidebar;
