import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Head = () => {
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-5 ">
      <div className="flex">
        <img
          className="col-span-1 h-8 w-1/4 object-cover cursor-pointer"
          onClick={handleToggleMenu}
          alt="menu"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg"
        />
        <img
          className="h-8 mx-2 w-3/4 object-cover"
          alt="youtube logo"
          src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png"
        />
      </div>
      <div className="flex col-span-10 mx-8">
        <input
          className="border border-gray-400 rounded-l-lg w-1/2 h-8 px-2 "
          placeholder="enter video"
        />
        <button className="cursor-pointer">
          <img
            className=" h-8 border border-gray-400 rounded-r-lg "
            alt="serach logo"
            src="https://img.icons8.com/ios7/600/search.png"
          />
        </button>
      </div>

      <img
        className="col-span-1 h-8"
        alt="profile logo"
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      />
    </div>
  );
};

export default Head;
