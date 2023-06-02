import { useState } from "react";

interface Props {
  images: string[];
}

const ProductImageGallery: React.FC<Props> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string>(images ? images[1] : "");

  const selectImage = (image: string) => {
    setSelectedImage(image);
  };

  console.log(selectedImage);

  return (
    <div className="pt-10 flex flex-row-reverse w-2/5 md:block">
      <div className="md:w-full">
        <img src={selectedImage} alt="" className="w-full h-96 object-contain aspect-auto" />
      </div>
      <div className="w-full md:w-full block md:flex md:justify-between mb-4 lg:mb-0">
        {images?.map((image: string, index: number) => (
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
