import {useState} from 'react'
import { Link } from "react-router-dom";
import NavbarSmall from "../components/navbar/NavbarSmall";

const HeroSection = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const randValue = Math.floor(Math.random() * 1000);
  const randomImage = `https://picsum.photos/id/${randValue}/500/500`;

  console.log(randValue);
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-50 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <NavbarSmall
    setIsSidebarOpen={setIsSidebarOpen}
    isSidebarOpen={isSidebarOpen}
    />
          </div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Shop the latest trends</span>
                <span className="block text-[#349C83]">at our store</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Discover our wide range of products for women, men, and kids.
                From clothing and accessories to beauty and homeware, we have
                everything you need to update your style for the season.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/products"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#349C83] hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Shop now
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#349C83] bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-1/2 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={randomImage}
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default HeroSection;
