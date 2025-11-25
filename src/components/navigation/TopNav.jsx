import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './topNav.css';
import { HiChevronDown } from "react-icons/hi";


function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const submenuRef = useRef(null);

  // toggle for menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // toggle for submenu
  const toggleSubmenu = () => {
    if (submenuOpen) {
      setSubmenuOpen(false); // Close the submenu if it's already open
    } else {
      setSubmenuOpen(true); // Open the submenu if it's closed
    }
  };

    // Close menu on scroll
    useEffect(() => {
      const handleScroll = () => {
        if (isOpen) {
          setIsOpen(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [isOpen]);
  

  return (
    <nav className="flex justify-between items-center font-bold h-20 px-6 md:px-16 lg:px-32 relative bg-white nav-shadow">
      {/* <!-- logo --> */}
      <div className="relative z-30">
  <Link to="/"><h2 className="text-2xl lg:text-3xl relative">Paisley Highland Games</h2></Link>
  <span className={`absolute left-0 bottom-0 h-1 bg-black transition-width duration-500 ${isOpen ? 'animate-slide-in' : 'animate-slide-out'}`}></span>
</div>


      {/* <!-- hamburger menu button for small screens --> */}
      <div className="md:hidden z-20 relative" onClick={toggleMenu}>
        <div className={`hamburger ${isOpen ? 'open' : ''} `}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

    

      {/* <!-- standard menu--> */}
      <div className="hidden md:flex items-center justify-between space-x-8 text-xl tracking-wide">
        <div className="group relative">
          <div className="flex items-center">

        <Link to="/events" className=' mx-2 duration-100 hover:text-grey-darkest hover:border-b-2 hover:border-grey-dark'>Events </Link>
        <HiChevronDown onClick={toggleSubmenu}
    className={` cursor-pointer transition-transform duration-300 ${submenuOpen ? 'rotate-180' : 'rotate-0'}`}
/>
          </div>

          {/* submenu */}

          
          {submenuOpen && (
            <div ref={submenuRef} className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-20 ">
              <Link to="/events/tug-o-war" className="block px-4 py-2 hover:bg-gray-100">Tug O War</Link>
              <Link to="/events/cabor-toss" className="block px-4 py-2 hover:bg-gray-100">Cabor Toss</Link>
              <Link to="/piping" className="block px-4 pt-2 hover:bg-gray-100">Piping Competition</Link>
            </div>
          )}
        </div>

        <div className="group">
          <Link to="/local-info" className='mx-2 duration-100 group-hover:text-grey-darkest group-hover:border-b-2 group-hover:border-grey-dark'>Local Info</Link>
        </div>
        <div className="group">
          <HashLink to="/#contact" className='mx-2 duration-100 group-hover:text-grey-darkest group-hover:border-b-2 group-hover:border-grey-dark '>Contact</HashLink>
        </div>
        
      </div>


        {/* <!--  mobile menu --> */}
        <div className={`menu ${isOpen ? 'open' : ''} md:hidden text-2xl`} >
        <div className="group mb-2"> 
        <Link to="/" >Home</Link>
        </div>
        <div className="group mb-2 relative">
        
          <Link to="/events" >Gallery</Link>
       

        </div>
        <div className="group mb-2">
          <Link to="/writing" onClick={toggleMenu}>Local Info</Link>
        </div>
        <div className="group">
          <HashLink to="/#contact" onClick={toggleMenu}>Contact</HashLink>
        </div>
        
      </div>

    </nav>
  );
}

export default TopNav;
