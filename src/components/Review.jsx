import React, { useState } from "react";
import { FaStar, FaThumbsUp } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import img1 from "../assets/products/1.png";
import { RxDot } from 'react-icons/rx'
import { reviews } from "./commonfiles/data";
import Pagination from "./commonfiles/Pagination";


export const Review = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const images = [img1, img1, img1, img1];
  return (
    <div className="px-4">
      <h3 className="px-4">Reviews with images and Videos</h3>

      <div className="flex gap-1 w-full">
        {images.map((image, i) => (
          <div className="rounded-md w-28 bg-gray-400" key={i}>
            <img src={image} className="object-cover" alt={image?.src} />
          </div>
        ))}
      </div>

      <div className="mt-4 px-4">
        <div className="md:flex md:justify-between">
          <div>
            <h3 className="">Top Reviews</h3>
            <p>Showing 3 of 2.3k+ reviews</p>
          </div>
          <div className="flex">
            <label htmlFor="sort" className="mr-4 py-2">
              Sort by
            </label>
            <div className="border px-4 py-2">
              popular <RiArrowDropDownLine className="inline text-2xl" />
            </div>
          </div>
        </div>

          {reviews.map((review)=>(
                    <div key={review.id}>
                    <div className="mt-8">
                      <div className="flex justify-between">
                        <div className="flex">
                          <img src={review.img} alt="" className="w-8 h-8 rounded-full" />
                          <p>{review.name}</p>
                        </div>
                        <div className="flex font-bold">
                          <FaStar className="text-yellow-300 " />
                          <p className="py-1">5.0</p>
                          <button className="text-xs flex bg-inherit font-thin border-0">
                            <RxDot/>
                            <RxDot/>
                            <RxDot/>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="chat">
                      <div className="md:flex md:justify-between mt-5">
                        <div className=" mb-2 border text-xs bg-[#E4F0EE] text-[#5BAE9A] px-1 rounded-md">
                          <p>{review.testimonies.product}</p>
                        </div>
                        <div className=" mb-2 border text-xs bg-[#E4F0EE] text-[#5BAE9A] px-1 rounded-md">
                        <p>{review.testimonies.delivery}</p>
                        </div>
                        <div className=" mb-2 border text-xs bg-[#E4F0EE] text-[#5BAE9A] px-1 rounded-md">
                        <p>{review.testimonies.response}</p>
                        </div>
                      </div>
                      <p className="text-xs font-bold pt-4">
                        According to expectation. This is the best. Thank you
                      </p>
          
                      <div className="flex my-3 pb-3 justify-between shadowbotom">
                        <p>
                          <FaThumbsUp className="inline" /> Helpful ?
                        </p>
                        <p>Yesterday</p>
                      </div>
                    </div>
                  </div>
          ))}

<div className="flex justify-between">
        <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <p className="py-5">See more reviews</p>
        </div>
      </div>
    </div>
  );
};
