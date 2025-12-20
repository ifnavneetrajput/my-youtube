import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className="w-56 p-4 shadow-md h-screen sticky top-0 overflow-y-auto bg-white">
  
      <div className="mb-4">
        <Link
          to="/"
          className="block px-3 py-2 rounded-lg hover:bg-gray-100 font-medium"
        >
          🏠 Home
        </Link>
        <p className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          🎬 Shorts
        </p>
        <p className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          📺 Subscriptions
        </p>
      </div>

      <hr />

     
      <div className="mt-4">
        <h1 className="px-3 mb-2 font-semibold text-sm text-gray-600">You</h1>
        <ul>
          <li className="sidebar-item">🕒 History</li>
          <li className="sidebar-item">📂 Playlists</li>
          <li className="sidebar-item">🎥 Your videos</li>
        </ul>
      </div>

      <hr className="my-4" />


      <div>
        <h1 className="px-3 mb-2 font-semibold text-sm text-gray-600">
          Subscriptions
        </h1>
        <ul>
          <li className="sidebar-item">📰 ABP News</li>
          <li className="sidebar-item">📡 ABP Live</li>
          <li className="sidebar-item">📘 Adda 247</li>
        </ul>
      </div>

      <hr className="my-4" />


      <div>
        <h1 className="px-3 mb-2 font-semibold text-sm text-gray-600">
          Explore
        </h1>
        <ul>
          <li className="sidebar-item">🔥 Trending</li>
          <li className="sidebar-item">🛒 Shopping</li>
          <li className="sidebar-item">🎞 Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
