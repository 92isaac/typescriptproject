import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Product {
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  id: number;
  totalRating: number;
  category: string;
  rating: number;
}

interface Props {
  products: Product[];
}

const ProductPage: React.FC<Props> = ({ products }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Products</h1>
      <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-between gap-1 mt-6 md:w-full">
        {products.map((product: Product) => (
          <div
            className="border md:w-1/6 flex flex-col rounded-lg shadow-lg overflow-hidden mt-10"
            key={product?.id}
            onClick={() => {
              navigate("/product/" + product?.id);
            }}
          >
            <div className="bg-[#EAEFF5] flex-shrink-0">
              <img
                src={product?.thumbnail}
                alt=""
                className="object-cover w-full h-28 mx-auto transform hover:scale-105 transition duration-500 ease-in-out"
              />
            </div>
            <div className="text-sm px-2">
              <p className="mt-1">{product?.title}</p>
              <h4 className="my-3 font-bold text-xs">
                {product?.description.slice(0, 60)}...
              </h4>
              <div className="flex text-sm justify-between pb-2">
                <h3 className="text-[#349C83] font-medium">${product.price}</h3>
                <p className="text-xs text-gray-400 py-1">
                  <FaStar className="inline text-yellow-400 " />{" "}
                  {product?.rating} | {product?.totalRating}{" "}
                </p>
              </div>
            </div>
            <div className="w-3/4 px-2 pb-3">
              <div className="relative h-2 bg-gray-200 rounded-full mx-auto my-0">
                <div
                  className="absolute top-0 left-0 h-full bg-red-400 rounded-full"
                  // style={{
                  //   width: `${calPercentageRating(product?.rating)}%`,
                  // }}
                ></div>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default ProductPage;
