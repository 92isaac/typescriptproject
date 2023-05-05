import React from "react";

const HeroSlider = () => {
  return (
    <div className="absolute">
      <div className="category">
        <div className="flex">
          <h4>Shop by category</h4>
          <p>
            <a href="#">see more</a>
          </p>
        </div>
        <div className="flex justify-between w-full border-4">
          <div className="border text-center w-1/4">
            <div className="border rounded-full">
              <img src="" alt="" />
            </div>
            <h3>Bag</h3>
          </div>
          <div className="border text-center">
            <div className="border rounded-full">
              <img src="" alt="" />
            </div>
            <h3>Bag</h3>
          </div>
          <div className="border text-center">
            <div className="border rounded-full">
              <img src="" alt="" />
            </div>
            <h3>Bag</h3>
          </div>
          <div className="border text-center">
            <div className="border rounded-full">
              <img src="" alt="" />
            </div>
            <h3>Bag</h3>
          </div>
        </div>
      </div>
      <div className="paybills"></div>
    </div>
  );
};

export default HeroSlider;
