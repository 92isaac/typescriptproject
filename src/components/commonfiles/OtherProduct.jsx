import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export const OtherProduct = ({product}) => {
    const navigate = useNavigate()
  return ( 
    <div>
    <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-between gap-1 mt-6 md:w-full">

    {product.map((products) => (
      <div className="border shadow md:w-1/6" key={products.id} onClick={()=>{
        navigate('/' + products.id)
      }}>
        <div className="bg-[#EAEFF5]">
          <img
            src={products.thumbnail}
            alt=""
            className="object-cover w-[90%] h-28 mx-auto transform hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>
        <div className="text-sm px-2">
          <p className="mt-1">{products.category}</p>
          <h4 className="my-3 font-bold text-xs">
            {products.description.slice(0,50)}
          </h4>
          <div className="flex text-sm justify-between pb-2">
            <h3 className="text-[#349C83] font-medium">${products.price}</h3>
            <p className="text-xs text-gray-400 py-1">
              <FaStar className="inline text-yellow-400 " />{" "}
              {products.rating} | {products.totalRating}{" "}
            </p>
          </div>
        </div>
      </div>
    ))}
    </div>

    <div className="mx-auto mt-8">
        <button className='block'>Load More</button>
    </div>
  </div>
  )
}
