import { useState } from "react";

const ProductImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const selectImage = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="pt-10 flex flex-row-reverse w-2/5 md:block">
    {/* <div className="pt-10 flex flex-row-reverse md:col-span-1 md:block"> */}
        <div className="md:w-full">
        <img src={selectedImage} alt="" className="w-full h-auto" />
      </div>
      <div className="w-full md:w-full block md:flex md:justify-between mb-4 lg:mb-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={` lg:w-full mb-4 object-cover lg:mb-0  ${
              selectedImage === image ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => selectImage(image)}
          >
            <img src={image} alt="" className="w-full h-auto object-cover aspect-auto" />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default ProductImageGallery;
