import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './topNav.css';
import { HiChevronDown } from "react-icons/hi";

function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const submenuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubmenu = () => setSubmenuOpen(!submenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <nav className="flex justify-between items-center font-bold h-20 px-6 md:px-16 lg:px-32 relative bg-[#F1FCF7] nav-shadow text-[#2A2D22] border-b border-[#85A986]">

      {/* Logo */}
      <div className="relative z-30">
        <Link to="/">
          <h2 className="text-2xl lg:text-3xl relative">Paisley Highland Games</h2>
        </Link>
        <span
          className={`absolute left-0 bottom-0 h-1 bg-[#5A6C57] transition-width duration-500 ${isOpen ? 'animate-slide-in' : 'animate-slide-out'}`}
        ></span>
      </div>

      {/* Hamburger */}
      <div className="md:hidden z-20 relative" onClick={toggleMenu}>
        <div className={`hamburger ${isOpen ? 'open' : ''}`}>
          <span className="bg-[#2A2D22]"></span>
          <span className="bg-[#2A2D22]"></span>
          <span className="bg-[#2A2D22]"></span>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center justify-between space-x-8 text-xl tracking-wide">

        <div className="group relative">
          <div className="flex items-center">
            <Link
              to="/events"
              className="mx-2 duration-100 hover:text-[#525B44] hover:border-b-2 hover:border-[#525B44]"
            >
              Events
            </Link>

            <HiChevronDown
              onClick={toggleSubmenu}
              className={`cursor-pointer text-[#2A2D22] transition-transform duration-300 ${submenuOpen ? 'rotate-180' : 'rotate-0'}`}
            />
          </div>

          {submenuOpen && (
            <div
              ref={submenuRef}
              className="absolute left-0 mt-2 w-48 bg-[#F1FCF7] shadow-lg rounded-md py-2 z-20"
            >
              <Link to="/events/tug-o-war" className="block px-4 py-2 hover:bg-[#D3F1DA]">Tug O War</Link>
              <Link to="/events/cabor-toss" className="block px-4 py-2 hover:bg-[#D3F1DA]">Cabor Toss</Link>
              <Link to="/piping" className="block px-4 py-2 hover:bg-[#D3F1DA]">Piping Competition</Link>
            </div>
          )}
        </div>

        <div className="group">
          <Link
            to="/local"
            className="mx-2 duration-100 hover:text-[#525B44] hover:border-b-2 hover:border-[#525B44]"
          >
            Local Info
          </Link>
        </div>

        <div className="group">
          <HashLink
            to="/contact"
            className="mx-2 duration-100 hover:text-[#525B44] hover:border-b-2 hover:border-[#525B44]"
          >
            Contact
          </HashLink>
        </div>

      </div>

      {/* Mobile Menu */}
      <div className={`menu ${isOpen ? 'open' : ''} md:hidden text-2xl bg-[#F1FCF7] text-[#2A2D22]`}>
        <div className="group mb-2">
          <Link to="/">Home</Link>
        </div>

        <div className="group mb-2 relative">
          <Link to="/events">Gallery</Link>
        </div>

        <div className="group mb-2">
          <Link to="/local" onClick={toggleMenu}>Local Info</Link>
        </div>

        <div className="group">
          <HashLink to="/contact" onClick={toggleMenu}>Contact</HashLink>
        </div>
      </div>

    </nav>
  );
}

export default TopNav;
