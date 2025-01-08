import React from 'react'
import Sidebar from './Sidebar'
import MainConatiner from './MainConatiner'
import usePopularVideos from '../hooks/usePopularVideos'
const Body = () => {
  usePopularVideos();
  return (
    <div className='flex'>
      <Sidebar />
      <MainConatiner/>
    </div>
  )
}

export default Body