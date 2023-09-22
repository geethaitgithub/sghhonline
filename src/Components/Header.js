import React from 'react';
import logo from '../Images/background.jpg'
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className='w-full bg-teal-700 shadow-lg'>
        
        
        <div className="bg-primary w-full overflow-hidden">
    <div className={`sm:px-16 px-6 flex justify-center items-center`}>
      <div className={`xl:max-w-[1280px] w-full`}>
        <Navbar />
      </div>
    </div>
  </div>
    </div>
  )
}

export default Header