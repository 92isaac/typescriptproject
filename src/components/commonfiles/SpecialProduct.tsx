/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Buttons } from "./Buttons";
import { OtherProduct } from "./OtherProduct";
import { useNavigate } from "react-router-dom";
import {
  useGetAllProductsQuery,
  useGetByCategoriesQuery, 
  useGetProductCategoryQuery, 
  useGetSearchProductQuery
} from "../../features/productApiSlice";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";
import Modal from "./Modal";


interface Product {
  id: string;
  thumbnail: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  totalRating: number;
  }
  
  const SpecialProduct = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [categoryp, setCategory] = useState<string>("smartphones");
  const navigate = useNavigate();
  const {
  data: allProductsData,
  isError,
  isLoading,
  } = useGetAllProductsQuery(null);
  const { data: allCategory } = useGetProductCategoryQuery(null);
  const {data: searchQuery } = useGetSearchProductQuery(categoryp)
  const { data: productByCategory } = useGetByCategoriesQuery(categoryp);
  console.log(productByCategory);
  console.log(searchQuery);
  
  const calPercentageRting = (rate: number): number => {
  const rateVal = (rate / 5) * 100;
  return rateVal;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-md bg-white p-5 mt-40">
        <div className="flex justify-between">
          <div className="flex">
            <h3>Special Products for You</h3>
            <div className="flex gap-6">
              <h4>Ends in</h4>
              <div className="flex gap-2">
                <div className="bg-red-300 rounded">
                  <p className="p-1">02</p>
                </div>
                <div className="bg-red-300 rounded">
                  <p className="p-1">54</p>
                </div>
                <div className="bg-red-300 rounded">
                  <p className="p-1">04</p>
                </div>
              </div>
            </div>
          </div>
          <h4>See More</h4>
        </div>
        <div className="grid grid-cols-2 mb-4 md:flex md:flex-wrap md:justify-between gap-1 mt-6">
          {isLoading ? (
            <Loading />
          ) : (
            allProductsData?.products.slice(0, 10).map((product :  Product) => (
              <div
                className="border shadow md:w-1/6 mb-6"
                key={product?.id}
                onClick={() => {
                  navigate("/" + product?.id);
                }}
              >
                <div className="bg-[#EAEFF5]">
                  <img
                    src={product?.thumbnail}
                    alt=""
                    className="object-cover w-[90%] h-28 mx-auto transform hover:scale-105 transition duration-500 ease-in-out"
                  />
                </div>
                <div className="text-sm px-2">
                  <p className="mt-1">{product?.category}</p>
                  <h4 className="my-3 font-bold text-xs">
                    {product?.description.slice(0, 60)}...
                  </h4>
                  <div className="flex text-sm justify-between pb-2">
                    <h3 className="text-[#349C83] font-medium">
                      ${product.price}
                    </h3>
                    <p className="text-xs text-gray-400 py-1">
                      <FaStar className="inline text-yellow-400 " />{" "}
                      {product?.rating} | {product?.totalRating}{" "}
                    </p>
                  </div>
                </div>
                <div className="w-3/4 px-2 pb-3">
                  {/* <div className="w-2/3 h-2 bg-red-700 mx-auto "></div> */}
                  <div className="relative h-2 bg-gray-200 rounded-full mx-auto my-0">
                    <div
                      className="absolute top-0 left-0 h-full bg-red-400 rounded-full"
                      style={{
                        width: `${calPercentageRting(product.rating)}%`,
                      }}
                    ></div>
                  </div>
                  {/* <p className="text-xs">24/30</p> */}
                </div>
              </div>
            ))
          )}
          {isError ? <ErrorPage message={`Some thing went wrong`} /> : null}
        </div>
       <div>
      <button
        className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
        onClick={openModal}
      >
        Click to view more product by category
      </button>

      <Modal isOpen={isOpen} onClose={closeModal}>
      <div className="md:grid md:grid-cols-5 md:mt-16">
          {allCategory?.map((categ:any, index: number) => (
            <Buttons
              key={index}
              click={() => {setCategory(categ); 
                closeModal()
              }}
              name={categ}
            />
          ))}
        </div>
      </Modal>
    </div>
        {/* <OtherProduct product={productByCategory?.products}/> */}
        {
          isLoading ? (<Loading />) :
          <OtherProduct product={productByCategory ? productByCategory.products : []} />
        }
      </div>
    </div>
  );
};


export default SpecialProduct