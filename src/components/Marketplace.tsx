import ProductDescription from "./ProductDescription";
import ProductImageGallery from "./ProductImageGallery";
import  ProductOrder  from "./ProductOrder";
import ReviewsRating from "./ReviewsRating";
import { useParams } from "react-router-dom";
import NavLocation from "./navbar/NavLocation";
import { useGetSingleProductsQuery } from "../features/productApiSlice";

export const Marketplace = () => {
  const { id } =useParams()
  const {data: singleproduct } = useGetSingleProductsQuery(id)
  
  // const displayitems = singleproduct.products.id
  console.log(singleproduct)
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NavLocation />
        <div className="block md:flex md:flex-row">
        {/* <div className="block md:grid md:grid-cols-3"> */}
          <ProductImageGallery images={singleproduct?.images} />
          <ProductDescription detail={singleproduct}/>
          <ProductOrder order={singleproduct}/>
        </div>
        <ReviewsRating images={singleproduct?.images.slice(0,4)}/>
      </div>

    </div>
  );
};
