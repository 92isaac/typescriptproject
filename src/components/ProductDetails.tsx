import { useState } from "react";
import { ColorPicker } from "./commonfiles/ColorPicker";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaFlag, FaShoppingBag } from "react-icons/fa";
import { MdOutlineAssignmentReturn  } from "react-icons/md";
import { GrDeliver  } from "react-icons/gr";
// import { useAddCartMutation } from "../features/cartApiSlice";
import { addToCart } from "../features/cartSlice";
import { RatePro } from "./commonfiles/RatePro";
import { FiMessageSquare, FiShare2 } from "react-icons/fi";

interface Product {
  products: {
    title: string;
    description: string;
    thumbnail: string;
    images: [];
    price: number;
    id: number;
    stock: number;
    totalRating: number;
    category: string;
    rating: number;
    discountPercentage:number;
  };
}


const ProductDetails: React.FC<Product> = ({ products }) => {
  const [selectedImage, setSelectedImage] = useState<string>(
    products?.thumbnail
  );
  const [amount, setAmount] = useState(1)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const selectImage = (image: string) => {
    setSelectedImage(image);
  };

//   const { data:addToCart } = useAddCartMutation()
// console.log(addToCart(products.id, amount))

  return (
    <div className="max-w-7xl mx-auto py-7 px-4 sm:px-6 lg:px-8">
      <div className="block w-full md:flex md:justify-center md:gap-4">
        <div className="md:w-1/2">
          <div className="w-full">
            <img
              src={selectedImage ? selectedImage : products?.thumbnail}
              alt=""
              className="w-full h-96 object-contain aspect-auto rounded-md shadow-md"
            />
          </div>

          <div className="w-full  flex justify-between mb-4 lg:mb-0">
            {products?.images?.length > 1 && products?.images?.map((image: string, index: number) => (
              <div
                key={index}
                className={` lg:w-full mb-4 object-cover lg:mb-0 mx-3 mt-3 rounded-md shadow-md ${
                  selectedImage === image ? "border-2 border-[#2A977D]" : ""
                }`}
                onClick={() => selectImage(image)}
              >
                <img
                  src={image}
                  alt=""
                  className="w-full h-auto object-cover aspect-auto rounded-md"
                />
              </div>
            ))}
          </div>
          <div className="hidden mt-10  md:flex gap-4 items-center">
          <button className="py-2 px-6 bg-[#2A977D] text-white rounded-sm" onClick={()=>navigate(-1)}>Back</button>
            <button className=" py-2 border-[#2A977D] text-[#2A977D] hover:border-[#2A977D]" onClick={()=>{
             navigate('/')
            }}> 
            Home</button>
          </div>
        </div>
        <div className="md:w-1/2 px-10">
            <p className="font-bold capitalize">{products?.category}</p>
          <div className="first py-6">
            <h1 className="text-2xl font-bold capitalize">{products?.title}</h1>
            <p className="text-lg mb-2">{products?.description}</p>
            <RatePro rating={products?.rating}/>
          </div>
          <hr />

          <div className="second py-6">
            <h2 className="font-bold text-2xl">Price: ${products?.price}</h2>
            <p> {products?.discountPercentage}%  OFF <span className=" text-xs text-gray-400"> on order above <span className="text-sm font-bold text-[#2A977D]">$120</span></span></p>
          </div>
          <hr />
          <ColorPicker/>
          <hr className=""/>
          <div className="py-5 flex gap-4">
            <div className="bg-gray-200 rounded-full flex items-center md:px-4 border-4">
              <button className="rounded-t-2xl px-5 " onClick={()=>setAmount((prev)=>prev - 1)} disabled={amount <= 1 ? true : false} >-</button>
              <span className="bg-gray-200">{amount}</span>
              <button className="rounded-t-2xl px-5 " onClick={()=>setAmount((prev)=>prev + 1)}>+</button>
            </div>

            <div className="">
              <p>
                only <span className="text-yellow-500">{products?.stock} items </span>left
              </p>
              <p>Don't miss it</p>
            </div>
          </div>
          <div className="flex items-center">
          <button className="w-full mb-2 py-2 bg-[#2A977D] text-white rounded-full" onClick={()=>navigate('/cart')}>Buy Now</button>
            <button className="w-full mb-2 py-2 border-[#2A977D] text-[#2A977D] hover:border-[#2A977D]" onClick={()=>{
              console.log('Cliked me')
              dispatch(addToCart)
            }}> 
            <FaShoppingBag className="inline"/> Add to Cart</button>
          </div>
          <div className="mx-auto my-4 py-4 px-5 border rounded-md">
            <p className="py-2">
            <Link to='/' className="underline italic"><GrDeliver className='inline text-yellow-500 font-bold text-md mr-2 '/> Edit delivery details </Link>
            </p>
            <hr />
            <p className="py-2">
            <Link to='/' className="underline italic"><MdOutlineAssignmentReturn className='inline text-yellow-500 font-bold text-md mr-2 '/> Return policy</Link>
            </p>
            <hr />
            <div className="py-2">
            <button className="bg-inherit px-2 border-0"> <FiMessageSquare className="inline"/> Chat Seller </button>
            <button className="bg-inherit px-2 border-0"> <FiShare2 className="inline"/> Share Product </button>
          </div>
          <hr />
            <div className="flex justify-center items-center pt-2">
            <p className="text-xs text-red-400">Any problem with the product?  <span className="ml-2"><FaFlag className="inline text-red-300"/> Report</span> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
