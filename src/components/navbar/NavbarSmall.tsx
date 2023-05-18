import { useState } from "react";
import { FiSearch, FiBell, FiMessageSquare } from "react-icons/fi";
import { useLocation } from "react-router-dom";

type Props = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavbarSmall: React.FC<Props> = ({ isSidebarOpen }) => {
  const [notificationCount] = useState<number>(5);
  const [messageCount] = useState<number>(2);

  const { pathname } = useLocation();
  if (pathname === "/") return null;

  return (
    <div
      className={`${
        isSidebarOpen
          ? "fixed flex z-50 justify-between items-center px-4 py-2 bg-white shadow-lg w-full"
          : "fixed flex justify-between items-center px-4 py-2 bg-white shadow-lg md:hidden w-full"
      }`}
    >
      <div className="flex items-center justify-center w-1/3">
        <span className="text-gray-400">
          <FiSearch size={20} />
        </span>
        <input
          type="text"
          placeholder="Search"
          className="w-full ml-2 outline-none border-none text-gray-700 text-sm"
        />
      </div>
      <div className="flex items-center justify-center w-1/3">
        <div className="relative inline-block">
          <span className="text-gray-400">
            <FiBell size={20} />
          </span>
          {notificationCount > 0 && (
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
              {notificationCount}
            </div>
          )}
        </div>
        <div className="relative inline-block ml-4">
          <span className="text-gray-400">
            <FiMessageSquare size={20} />
          </span>
          {messageCount > 0 && (
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
              {messageCount}
            </div>
          )}

          {/* <Dropdown options={navlinks}/> */}
        </div>
      </div>
    </div>
  );
};

export default NavbarSmall;
