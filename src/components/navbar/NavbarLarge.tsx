import { useState } from "react";
import { FaShoppingCart, FaMapMarkerAlt, FaBell } from "react-icons/fa";
// import { HiOutlineUserCircle } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchResult } from "../../features/searchSlice";
import Logo from "../commonfiles/Logo";
import { selectAuth } from "../../features/authSlice";
// import { useAppSelector } from "../../constant/hooks";
import { RootState } from "../../features/store";

const NavbarLarge = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const {token, name, image} = useSelector(selectAuth)
  const searchValue = useSelector((state: RootState) => state.search.searchValue);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(image);
  const options = [
    { value: "23,234.6", change: "+0.005%", currency: "btc" },
    { value: "1,791.34", change: "-0.003%", currency: "eth" },
    { value: "0.2781", change: "-1.23%", currency: "ltc" },
  ];

  const handleOptionClick = () => {
    setIsModalOpen(false);
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  console.log(searchResult);

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(searchResult);
    navigate("/searchresult");
    dispatch(searchResult(''))
  };

  return (
    <section className="">
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex md:justify-between md:h-12">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span className="text-gray-300  ml-2 text-sm">
                  Download Tokosmile mobile app now
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="hidden md:block">
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Promo
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  News
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Language
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Help &amp; Center
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* // navigation two */}
      <nav className="bg-[#161828] text-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden  md:container md:mx-auto md:py-4 md:flex md:justify-between md:items-center">
            {/* Logo with shop icon */}
            <Logo />
            {/* Location icon with "deliver to" text */}
            <div className="flex items-center">
              <div className="text-xl mr-2">
                <FaMapMarkerAlt />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-300">
                  Deliver to:
                </div>
                <div className="ml-1 text-xs font-bold text-gray-300">
                  New York
                </div>
              </div>
            </div>

            {/* Search input field and button */}
            <div className="relative">
              <input
                value={searchValue}
                onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{dispatch(searchResult(event.target.value))}}
                type="text"
                placeholder="Search for products"
                className="rounded py-1.5 pl-6 pr-12 w-90 border-2 bg-[#161828] border-[#363741] border-transparent  focus:outline-none transition-colors duration-300"
              />
              <button
                type="submit"
                title="search"
                className="absolute right-0 top-0 bottom-0 px-4 rounded bg-[#24836C] focus:bg-[#24836C] transition-colors duration-300"
                onClick={handleSubmit}
              >
                <AiOutlineSearch className="text-white" />
              </button>
            </div>

            {/* Cart and notification icon */}
            <div className="flex items-center ">
              <Link to="/cart">
                <div className="text-xl mr-6">
                  <FaShoppingCart />
                </div>
              </Link>
              <div className="text-xl mr-6 relative">
                <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-xs flex justify-center items-center text-white font-bold">
                  3
                </div>
                <FaBell />
              </div>
            </div>

            {/* Avatar for account dropdown */}
            <div className="text-xl relative">
              <div className="flex justify-center">
                <h2>Welcome {token? `${name}` : 'Anonymous'}</h2>
              <img src={image?.toString()} className="rounded-full w-10 h-10 bg-white" alt={image?.toString()} onClick={handleModalToggle} />
              </div>
              {isModalOpen && (
                <div className="absolute top-full left-0 z-50 -ml-52 mt-8 w-60 max-h-200 overflow-y-auto border border-gray-300 rounded bg-gray-900">
                  {options?.map((option, index) => (
                    <div
                      key={index}
                      className="p-2 cursor-pointer hover:bg-gray-700"
                      onClick={() => handleOptionClick()}
                    >
                      <div className="flex gap-4">
                        <div className="text-white uppercase">
                          {option.currency.toUpperCase()}
                        </div>
                        <div className="text-white">${option.value}</div>
                        <div className="text-white">{option.change}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavbarLarge;
