import React from "react";
import { images, product } from "./commonfiles/data";
import ProductDescription from "./ProductDescription";
import ProductImageGallery from "./ProductImageGallery";
import { ProductOrder } from "./ProductOrder";
import ReviewsRating from "./ReviewsRating";
import { useParams } from "react-router-dom";
import NavLocation from "./navbar/NavLocation";

export const Marketplace = () => {
  const { id } =useParams()
  const displayitems = product[id]
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NavLocation />
        <div className="block md:flex md:flex-row">
        {/* <div className="block md:grid md:grid-cols-3"> */}
          <ProductImageGallery images={images} />
          <ProductDescription />
          <ProductOrder />
        </div>
        <ReviewsRating />
      </div>
    </div>
  );
};
