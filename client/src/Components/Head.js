import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResult } from "../utils/searchSlice";
import { BASE_URL } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    if (!searchQuery) return;

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery, searchCache]);

  const getSearchSuggestion = async () => {
    const data = await fetch(`${BASE_URL}/suggestions?q=${searchQuery}`);
    const json = await data.json();

    setSuggestions(json[1]);

    dispatch(
      cacheResult({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className="flex items-center justify-between px-5 py-2 shadow-sm sticky top-0 bg-white z-50">
      
      <div className="flex items-center gap-4">
        <img
          onClick={() => dispatch(toggleMenu())}
          className="h-6 w-6 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg"
        />
        <a href="/">
          <img
            className="h-8"
            alt="youtube logo"
            src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png"
          />
        </a>
      </div>

      <div className="relative w-1/2">
        <div className="flex border border-gray-300 rounded-full overflow-hidden">
          <input
            className="w-full px-4 py-2 focus:outline-none"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
          />
          <button className="px-4 bg-gray-100 border-l">
            <img
              className="h-5 w-5"
              alt="search"
              src="https://img.icons8.com/ios7/600/search.png"
            />
          </button>
        </div>

      
        {showSuggestions && suggestions.length > 0 && (
          <div
            className="absolute w-full bg-white mt-1 rounded-lg shadow-lg border z-50"
            onMouseDown={(e) => e.preventDefault()}
          >
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>


      <img
        className="h-8 w-8 rounded-full cursor-pointer"
        alt="profile"
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      />
    </div>
  );
};

export default Head;
