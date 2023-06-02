import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Product {
  id: string;
  thumbnail: string;
  title: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  totalRating: number;
}

interface Props {
  product: Product[];
}

export const ProductCartegory: React.FC<Props> = ({product}) => {
  const navigate = useNavigate();

  return (
    <div>
        <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-between gap-1 md:w-full">
        {product.map((products) => (
          <div
            className="border md:w-1/6 flex flex-col rounded-lg shadow-lg overflow-hidden mt-2"
            key={products.id}
            onClick={() => {
              navigate("/product/" + products?.id);
            }}
          >
            <div className="bg-[#EAEFF5] flex-shrink-0">
              <img
                src={products?.thumbnail}
                alt='products'
                className="object-cover w-full h-28 mx-auto transform hover:scale-105 transition duration-500 ease-in-out"
              />
            </div>
            <div className="text-sm px-2">
              <p className="mt-1">{products?.title}</p>
              <h4 className="my-3 font-bold text-xs">
                {products?.description.slice(0, 50)}
              </h4>
              <div className="flex text-sm justify-between pb-2">
                <h3 className="text-[#349C83] font-medium">
                  ${products?.price}
                </h3>
                <p className="text-xs text-gray-400 py-1">
                  <FaStar className="inline text-yellow-400 " />{" "}
                  {products?.rating} | {products?.totalRating}{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
