import React from "react";

export const Buttons = (props) => {
  return (
    <div className="mx-4 my-3">
      <button className=" w-full
      bg-blue bg-zinc-900 text-white  bg-gradient-to-br from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500  font-medium py-2 px-4 rounded-full shadow-md transform hover:scale-105 transition duration-500 ease-in-out
      " onClick={props.click}>
        {props.name}
      </button>
    </div>
  );
};


