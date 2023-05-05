import React from "react";
import {  FaFlag, FaShoppingBag } from "react-icons/fa";
import { FiMessageSquare, FiShare2 } from "react-icons/fi";
import img1 from "../assets/products/1.png";

export const ProductOrder = () => {
  return (
    <div className="md:w-1/3 ">
      <div className="flex justify-between text-white bg-[#2A8A97] rounded py-3 px-4 gap-2">
        <h3 className="font-bold">
          25% OFF{" "}
          <span className="block text-xs text-gray-400">
            If order above <span className="text-sm text-white">$120</span>
          </span>
        </h3>
        <div className="rounded p-2 bg-[#69A9B2] text-xs font-extralight">
          <p className="py-2 text-center align-middle">Until Oct 30, 2022</p>
        </div>
      </div>
      <div className="mt-6 rounded-md p-4 shadow-md">
        <div className="pb-4 shadowbotom">
          <h3 className="font-bold ">Set Order</h3>
        </div>
        <div className="mt-4">
          <div className="flex gap-6">
            <div className="w-16">
              <img src={img1} alt={img1.src} />
            </div>
            <div className="font-bold">
              <p className="text-gray-400 font-normal">Selected Size</p>
              <h3>XL (Extra Large)</h3>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex justify-between ">
              <div className="border py-1 px-4 rounded-md">
                <button className="w-10 h-10 p-2 rounded-full text-center">
                  -
                </button>
                <span className="mx-2">1</span>
                <button className="w-10 h-10 p-2 rounded-full text-center">
                  +
                </button>
              </div>
              <h3 className="font-bold p-3">
                <span className="text-base text-gray-300">Stock:</span> 856
              </h3>
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <p className="text-gray-400 text-sm">Total price:</p>
            <h3 className="font-bold">$45.00</h3>
          </div>

          <div className="mt-5 block shadowbotom pb-6">
            <button className="w-full mb-2 bg-[#2A977D] text-white">Buy Now</button>
            <button className="w-full mb-2 border-[#2A977D] text-[#2A977D] hover:border-[#2A977D]"> <FaShoppingBag className="inline"/> Buy Now</button>
          </div>

          <div className="my-6">
            <button className="bg-inherit px-2 border-0"> <FiMessageSquare className="inline"/> Chat Seller </button>
            <button className="bg-inherit px-2 border-0"> <FiShare2 className="inline"/> Share Product </button>
          </div>

          <p className="text-xs text-gray-400">Any problem with the product?  <span className="ml-2"><FaFlag className="inline"/> Report</span> </p>
        </div>
      </div>
    </div>
  );
};
