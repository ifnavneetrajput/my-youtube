import React from 'react'
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const toggleMenu = useSelector((store) => store.app.isMenuOpen);
  if (!toggleMenu) return null;
  return (
    <div className=" w-40 px-5 mx-6">
      <h1>Home</h1>
      <h1>shorts</h1>
      <h1>Subscription</h1>
      <hr></hr>
      <div>
        <h1 className="font-bold">You</h1>
        <ul>
          <li>History</li>
          <li>Playlist</li>
          <li>Your-video</li>
          <hr></hr>
        </ul>
      </div>

      <div>
        <h1 className="font-bold">Subscription</h1>
        <ul>
          <li>ABP-News</li>
          <li>ABP-Live</li>
          <li>Adda-247</li>
          <hr></hr>
        </ul>
      </div>

      <div>
        <h1 className="font-bold">Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Shoping</li>
          <li>Movies</li>
          <hr></hr>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar