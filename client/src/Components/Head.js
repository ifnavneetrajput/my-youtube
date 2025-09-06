import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResult } from "../utils/searchSlice";
import { BASE_URL } from "../utils/constants";

const Head = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestions, setsuggestions] = useState([])
  const [showSuggestions ,setshowSuggestions]= useState(false)
 const searchCache = useSelector((store) => store.search);
  useEffect(() => {
  
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setsuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggeestion();
      }
    } , 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

const getSearchSuggeestion = async () => {
  const data = await fetch(
    `${BASE_URL}/suggestions?q=${searchQuery}`
  );
  const json = await data.json();
  console.log(json)
  setsuggestions(json[1]);

  dispatch(
    cacheResult({
      [searchQuery]: json[1],
    })
  );
};


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
        <a href="/">
          <img
            className="h-12 mx-2 w-full object-cover"
            alt="youtube logo"
            src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png"
          />
        </a>
      </div>
      <div className="flex col-span-10 mx-8 relative items-center">
        <div className="flex w-1/2 border border-gray-400 rounded-lg">
          <input
            className="w-full h-8 px-2 rounded-l-lg focus:outline-none"
            placeholder="Enter video"
            onChange={(e) => setsearchQuery(e.target.value)}
            onFocus={() => setshowSuggestions(true)}
            onBlur={() => setshowSuggestions(false)}
          />
          <button className="h-8 w-10 flex justify-center items-center bg-gray-200 rounded-r-lg border-l border-gray-400">
            <img
              className="h-4 w-4"
              alt="search logo"
              src="https://img.icons8.com/ios7/600/search.png"
            />
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute z-10 bg-white py-2 px-2 w-1/2 shadow-lg rounded-lg border border-gray-100 top-11">
            <ul>
              {suggestions?.map((s) => (
                <li
                  key={s}
                  className="py-1 px-2 hover:bg-gray-100 cursor-pointer"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
