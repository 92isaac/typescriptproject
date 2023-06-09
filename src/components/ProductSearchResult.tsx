import { FC } from "react";
import { useNavigate } from "react-router-dom";




interface Product {
    id: string;
    title: string;
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
  const navigate = useNavigate()


  return (
    <div className={`grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-4 gap-8 `}>

      {Object.values(products)?.map((product) => (
        <div
          key={product?.id}
          className={`flex flex-col rounded-lg shadow-lg overflow-hidden mt-10 `}
          onClick={() => {
            navigate("/product/" + product?.id);
          }}
        >
          <div className="flex-shrink-0">
            <img
              className="h-48 w-full object-cover transform hover:scale-105 transition duration-1000 ease-in-out"
              src={product?.thumbnail}
              alt={product?.description}
            />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-[#2A977D]">
                {product?.title}
              </p>
              <a href="#" className="block mt-2">
                <p className="text-xl font-semibold text-gray-900">
                  {product.title}
                </p>
                <p className="mt-3 text-base text-justify text-gray-500">{product?.description.slice(0,60)}...</p>
              </a>
            </div>
            <div className="mt-6 flex items-center">
              <p className="text-xl font-semibold text-gray-900">
                ${product?.price}
              </p>
              <button
                type="button"
                className="ml-4 inline-flex w-full items-center text-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-[#19e4b5] hover:bg-[#2A977D] focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
              >
                More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSearchResult;

