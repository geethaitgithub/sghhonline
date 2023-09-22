import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';



const MainContainer = () => {
  return (
    <div className=' flex'> 
      <SideBar />
       <Outlet />
    </div>
  )
};

export default MainContainer;