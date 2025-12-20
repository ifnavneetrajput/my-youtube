import React from "react";
import Sidebar from "./Sidebar";
import usePopularVideos from "../hooks/usePopularVideos";
import { Outlet } from "react-router-dom";

const Body = () => {
  usePopularVideos();

  return (
    <div className="flex w-full">
     
      <Sidebar />


      <div className="flex-1 overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
