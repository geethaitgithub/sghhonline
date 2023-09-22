import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className=" w-48 shadow-lg   shadow-teal-700">
    <ul >
      <li>
    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
    
        <Link to='cvms'>
          <span className="ml-3">CVMS</span>
       </Link> </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        <Link to='torreyhills'>
         
          <span className="ml-3">TORREYHILLS</span>
          </Link>
        </a>
      </li>
      <li>
      <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

            <Link to="hscp2">
              <span className="ml-3">HSCP2</span>
        </Link>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <span className="ml-3">Tamil-Grade5</span>
        </a>
      </li>
    </ul>
   
    <ul>
      
     
   <li>
        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <span className="ml-3">LINKS</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <span className="ml-3">HINDI</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <span className="ml-3">SPANISH</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <span className="ml-3">Science Olympiad</span>
        </a>
      </li>
      
    </ul>

    <ul>
    <li>
        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <span className="ml-3">Favourites</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <span className="ml-3">Drive</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <span className="ml-3">Youtube</span>
        </a>
      </li>
    </ul>
  </div>
  )
}

export default SideBar