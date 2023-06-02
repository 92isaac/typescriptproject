import { useState } from "react";
import { FiSearch, FiMessageSquare, FiShoppingCart } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../features/store";
import { useDispatch, useSelector } from "react-redux";
import { searchResult } from "../../features/searchSlice";
import { selectAuth } from "../../features/authSlice";
import { useGetUserCartQuery } from "../../features/cartApiSlice";

type Props = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavbarSmall: React.FC<Props> = ({ isSidebarOpen }) => {
  const id = useSelector(selectAuth)
  const {data: cartResult } = useGetUserCartQuery(id?.id)
  const [notificationCount] = useState<number>(cartResult?.carts[0]?.products.length);
  const [messageCount] = useState<number>(0);
  const dispatch = useDispatch();
  const searchValue = useSelector((state: RootState) => state.search.searchValue);
  const navigate = useNavigate();


  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(searchResult);
    navigate("/searchresult");
    dispatch(searchResult(''))
  };

  const { pathname } = useLocation();
  if (pathname === "/") return null;

  return (
    <div
      className={`${
        isSidebarOpen
          ? "fixed flex z-50 justify-between items-center px-4 py-2 bg-white shadow-lg w-full"
          : "fixed flex justify-between items-center px-4 py-2 bg-white shadow-lg md:hidden w-full z-50"
      }`}
    >
      <div className="flex items-center justify-center w-2/3 ">
        <span className="text-gray-400">
          <FiSearch size={20} />
        </span>
        <input
           value={searchValue}
           onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{dispatch(searchResult(event.target.value))}}
          type="text"
          placeholder="Search"
          className="w-full ml-2 outline-none border-none text-gray-700 text-sm"
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      <div className="flex items-center justify-center w-1/3 ">
          <Link to='/cart'>
        <div className="relative inline-block">
          <span className="text-gray-400">
            <FiShoppingCart size={20} />
          </span>
          {notificationCount > 0 && (
            <div className="absolute top-8 right-1 z-50 bg-red-500 text-white text-xs px-1 rounded-full">
              {notificationCount}
            </div>
          )}
        </div>
          </Link>
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
