import { useState } from "react";

interface Product {
  name: string;
  description: string;
  image: string;
  price: number;
}

const ProductPage = ({ product }: { product: Product }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6 sm:py-8">
        <h1 className="text-center text-3xl font-semibold leading-tight">
          {product?.name}
        </h1>
        <p className="text-center text-lg leading-relaxed">
          {product?.description}
        </p>
      </div>
      <div className="flex justify-between items-center bg-gray-200 py-5 sm:py-6">
        <div className="flex items-center">
          <img src={product?.image} alt={product?.name} className="w-20 h-20 rounded-full" />
          <div className="ml-3">
            <button
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md"
              onClick={handleLike}
            >
              {isLiked ? "Unlike" : "Like"}
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-gray-500">
            $ {product?.price}
          </span>
          <button
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md"
            // onClick={() => {}}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
