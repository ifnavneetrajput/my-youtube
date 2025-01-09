import React from 'react'
import Sidebar from './Sidebar'

import usePopularVideos from '../hooks/usePopularVideos'

import { Outlet } from 'react-router-dom'
const Body = () => {
  usePopularVideos();
  return (
    <div className='flex'>
      <Sidebar />
      <Outlet/>
    </div>
  )
}

export default Body