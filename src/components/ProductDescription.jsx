import React from "react";
import { FaStar } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";

const ProductDescription = ({detail}) => {
  return (
    <div className="px-4 ">
      <div className="">
        <h4 className="text-[#24836C] font-semibold text-sm w-1/2">
          {detail?.brand}
        </h4>
        <h2 className="font-bold text-2xl mt-4">
          {detail?.description.slice(0,40)}
        </h2>
        <p className="text-gray-300 text-sm mb-7">
          <FaStar className="text-yellow-500 inline" />{" "}
          <span className="mr-4"> 4.9 Ratings</span>{" "}
          <span className="mr-4"> 2.3k Reviews</span>{" "}
          <span className="mr-4"> 2.9k+ Sold</span>
        </p>
      </div>
      <div>
        <h4 className="font-bold mb-5">Choose Size:</h4>
        <div className="flex">
          <div className="border-full mr-4 uppercase border hover:bg-[#24836C] hover:text-white p-4 font-bold rounded-md">
            <h3>s</h3>
          </div>
          <div className="border-full mr-4 uppercase border hover:bg-[#24836C] hover:text-white p-4 font-bold rounded-md">
            <h3>m</h3>
          </div>
          <div className="border-full mr-4 uppercase border hover:bg-[#24836C] hover:text-white p-4 font-bold rounded-md">
            <h3>l</h3>
          </div>
          <div className="border-full mr-4 uppercase border text-white bg-[#24836C] hover:bg-[#24836C] hover:text-white p-4 font-bold rounded-md">
            <h3>xl</h3>
          </div>
        </div>
      </div>

      {/* about and review */}
      <div>
        <div className="flex justify-between border-b-2 mb-4">
          <h3 className="hover:border-b-4 border-[#24836C]">About Items</h3>
          <h3>Review</h3>
        </div>
        <div className="flex">
          <div className="flex gap-4">
            <ul>
              <li className="font-semibold text-sm leading-7">
                <span className="text-gray-300">Brand:</span> {detail?.brand}
              </li>
              <li className="font-semibold text-sm leading-7">
                <span className="text-gray-300">Category:</span> {detail?.category}
              </li>
              <li className="font-semibold text-sm leading-7">
                <span className="text-gray-300">Condition</span> New
              </li>
            </ul>
            <ul>
              <li className="font-semibold text-sm leading-7">
                <span className="text-gray-300">Brand:</span> CharmKpR
              </li>
              <li className="font-semibold text-sm leading-7">
                <span className="text-gray-300">Category:</span> Casual Shirt
              </li>
              <li className="font-semibold text-sm leading-7">
                <span className="text-gray-300">Condition</span> New
              </li>
            </ul>
          </div>
          <div className="review">{/*! to do later */}</div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Description:</h3>
        <ul className="list-disc pl-5">
          <li className="text-xs leading-6 text-gray-300">
          {detail?.brand}
          </li>
          <li className="text-xs leading-6 text-gray-300">
          {detail?.description}
          </li>
          <li className="text-xs leading-6 text-gray-300">
            Durable combination cotton fabric
          </li>
          <li className="text-xs leading-6 text-gray-300">
            Comfortable and quality {detail?.category}
          </li>
          <li className="text-xs leading-6 text-gray-300">
            Go to classic button down shirt for all occasion
          </li>
        </ul>
        <p className="text-xs leading-6 text-gray-300">
          Chat us if there is anything you need to ask about the product
        </p>
      </div>
      <button className="bg-inherit border-0 ">
        See more <RiArrowDropDownLine className="inline text-2xl" />{" "}
      </button>

      {/* shipping address */}

      <div className="text-sm font-bold">
        <h4 className="mb-4">Shipping Information:</h4>

        <div className="mb-6">
          <p>
            <span className="text-gray-300 mr-4 leading-7">Delivery:</span>{" "}
            Shipping from Jakarta, Indonesia
          </p>
          <p>
            <span className="text-gray-300 mr-4 leading-7">Shipping:</span> Free
            International Shipping
          </p>
          <p>
            <span className="text-gray-300 mr-4 leading-7">Arrive:</span>{" "}
            Estimated arrival on 25-27 Oct 2022
          </p>
        </div>

        <h4 className="mb-6">Seller Information:</h4>
        <div className="flex gap-4">
          <div className="rounded-full border w-20 h-20 bg-[#E9EBEC]">
            <h4 className="align-middle text-center mx-auto my-5">thrifting Store</h4>
          </div>
          <div className="font-bold">
            <h3 className="mb-3">Thrifting Store</h3>
            <p className="text-gray-300 text-xs mb-3">
              <span>Active 5Minutes ago</span> |{" "}
              <span>96.7% Positive Feedbacks</span>
            </p>
            <button className="bg-inherit border-[#24836C] text-[#24836C] mb-3">
              <FiShoppingBag className="inline"/> visit store{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
