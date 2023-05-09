import { FC } from "react";




interface Product {
    id: string;
    thumbnail: string;
    category: string;
    description: string;
    price: number;
    rating: number;
    totalRating: number;
    }

interface Props {
    products:Product[]
}

const ProductSearchResult: FC<Props> = ({ products }) =>
{

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 `}>

      {Object.values(products)?.map((product) => (
        <div
          key={product?.id}
          className="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
          <div className="flex-shrink-0">
            <img
              className="h-48 w-full object-cover"
              src={product?.thumbnail}
              alt={product?.description}
            />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-indigo-600">
                {product?.category}
              </p>
              <a href="#" className="block mt-2">
                <p className="text-xl font-semibold text-gray-900">
                  {product.description}
                </p>
                <p className="mt-3 text-base text-gray-500">{product?.description}</p>
              </a>
            </div>
            <div className="mt-6 flex items-center">
              <p className="text-xl font-semibold text-gray-900">
                {product?.price}
              </p>
              <button
                type="button"
                className="ml-4 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSearchResult;



// <div className="grid grid-cols-2 mb-4 md:flex md:flex-wrap md:justify-between gap-1 mt-6">
// {isLoading ? (
//   <Loading />
// ) : (
//   allProductsData?.products.slice(0, 10).map((product :  Product) => (
//     <div
//       className="border shadow md:w-1/6 mb-6"
//       key={product?.id}
//       onClick={() => {
//         navigate("/" + product?.id);
//       }}
//     >
//       <div className="bg-[#EAEFF5]">
//         <img
//           src={product?.thumbnail}
//           alt=""
//           className="object-cover w-[90%] h-28 mx-auto transform hover:scale-105 transition duration-500 ease-in-out"
//         />
//       </div>
//       <div className="text-sm px-2">
//         <p className="mt-1">{product?.category}</p>
//         <h4 className="my-3 font-bold text-xs">
//           {product?.description.slice(0, 60)}...
//         </h4>
//         <div className="flex text-sm justify-between pb-2">
//           <h3 className="text-[#349C83] font-medium">
//             ${product.price}
//           </h3>
//           <p className="text-xs text-gray-400 py-1">
//             <FaStar className="inline text-yellow-400 " />{" "}
//             {product?.rating} | {product?.totalRating}{" "}
//           </p>
//         </div>
//       </div>
//       <div className="w-3/4 px-2 pb-3">
//         {/* <div className="w-2/3 h-2 bg-red-700 mx-auto "></div> */}
//         <div className="relative h-2 bg-gray-200 rounded-full mx-auto my-0">
//           <div
//             className="absolute top-0 left-0 h-full bg-red-400 rounded-full"
//             style={{
//               width: `${calPercentageRting(product.rating)}%`,
//             }}
//           ></div>
//         </div>
//         {/* <p className="text-xs">24/30</p> */}
//       </div>
//     </div>
//   ))
// )}
// {isError ? <ErrorPage message={`Some thing went wrong`} /> : null}
// </div>