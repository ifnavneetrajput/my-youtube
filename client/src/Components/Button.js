import React from "react";

const Button = ({ title }) => {
  return (
    <button
      className="
        px-4 py-2 
        bg-gray-200 
        rounded-full 
        text-sm 
        font-medium 
        whitespace-nowrap
        hover:bg-gray-300 
        transition
      "
    >
      {title}
    </button>
  );
};

export default Button;
