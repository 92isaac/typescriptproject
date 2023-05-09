import {useState} from "react";
import { FaShoppingCart, FaMapMarkerAlt, FaBell } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useGetSearchProductQuery } from "../../features/apiSlice";
import { useDispatch } from "react-redux";
import { searchResult } from "../../features/searchSlice"; 


const NavbarLarge = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [ searchData, setSearch] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { value: '23,234.6', change: '+0.005%', currency: 'btc' },
    { value: '1,791.34', change: '-0.003%', currency: 'eth' },
    { value: '0.2781', change: '-1.23%', currency: 'ltc' },
  ];

  const handleOptionClick = () => {
    // setSelectedOption(option);
    setIsModalOpen(false);
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  // const { data: searchResult } = useGetSearchProductQuery(searchData)
  
  console.log(searchResult)

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    dispatch(searchResult({ searchData }));
    navigate('/searchresult')
    setSearch('')
    // return searchResult
  }
  

  return (
    <section>

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
          <Link to='/'>
        <div className="flex items-center">
          <div className="text-2xl mr-2">
            <FaShoppingCart className="inline"/>
          </div>
          <div className="font-bold text-xl uppercase text-white">Tokosmiles</div>
        </div>
          </Link>

        {/* Location icon with "deliver to" text */}
        <div className="flex items-center">
          <div className="text-xl mr-2">
            <FaMapMarkerAlt />
          </div>
         <div>
         <div className="text-xs font-bold text-gray-300">Deliver to:</div>
          <div className="ml-1 text-xs font-bold text-gray-300">New York</div>
         </div>
        </div>

        

        {/* Search input field and button */}
        <form className="relative">
            {/* All category dropdown button */}
        <button className=" text-sm left-0 top-0 bottom-0 bg-[#363741] py-2.5 rounded-r">
          All categories <RiArrowDropDownLine className="inline text-2xl" />
        </button>
          <input
            value={searchData}
            onChange={(e)=>setSearch(e.target.value)}
            type="text"
            placeholder="Search for products"
            className="rounded py-1.5 pl-6 pr-12 w-90 border-2 bg-[#161828] border-[#363741] border-transparent  focus:outline-none transition-colors duration-300"
          />
          <button type="submit" title="search" className="absolute right-0 top-0 bottom-0 px-4 rounded bg-[#24836C] focus:bg-[#24836C] transition-colors duration-300" onClick={handleSubmit}>
            <AiOutlineSearch className="text-white" />
          </button>
        </form>

        {/* Cart and notification icon */}
        <div className="flex items-center ">
          <Link to='/cart'>
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
          <HiOutlineUserCircle  onClick={handleModalToggle}/>
          {isModalOpen && (
        <div className="absolute top-full left-0 z-50 -ml-52 mt-8 w-60 max-h-200 overflow-y-auto border border-gray-300 rounded bg-gray-900">
          {options?.map((option, index) => (
            <div
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-700"
              onClick={() => handleOptionClick()}
            >
              <div className="flex gap-4">
                <div className="text-white uppercase">{option.currency.toUpperCase()}</div>
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
