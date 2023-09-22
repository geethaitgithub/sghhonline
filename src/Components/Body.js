import React from 'react';
import SideBar from "../Components/SideBar";
import MainContainer from './MainContainer';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className='flex'>
          
      <MainContainer />
    </div>
  )
};

export default Body;