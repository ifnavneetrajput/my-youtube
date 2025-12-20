import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const categories = [
    "All",
    "Kapil Sharma",
    "Cricket",
    "Sports",
    "Entertainment",
    "Bollywood",
    "Comedy",
    "Movies",
    "Romantic",
  ];

  return (
    <div className="flex gap-3 px-4 py-3 overflow-x-auto no-scrollbar">
      {categories.map((item) => (
        <Button key={item} title={item} />
      ))}
    </div>
  );
};

export default ButtonList;
