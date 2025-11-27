import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './topNav.css';
import { HiChevronDown } from "react-icons/hi";

function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

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
    <nav className="flex justify-between items-center font-bold h-20 px-6 md:px-16 lg:px-32 relative bg-[#F1FCF7] text-[#2A2D22] border-b border-[#85A986]">

      {/* LOGO WITH ANIMATION */}
      <div className="relative z-30 group">
        <NavLink to="/">
          <h2 className="text-2xl lg:text-3xl relative inline-block">
            Paisley Highland Games
            {/* Animated underline */}
            <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-[#5A6C57] transition-all duration-500 group-hover:w-full"></span>
          </h2>
        </NavLink>
      </div>

      {/* MOBILE BURGER */}
      <div className="md:hidden z-20 relative" onClick={toggleMenu}>
        <div className={`hamburger ${isOpen ? 'open' : ''}`}>
          <span className="bg-[#2A2D22]"></span>
          <span className="bg-[#2A2D22]"></span>
          <span className="bg-[#2A2D22]"></span>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center justify-between space-x-2 text-xl tracking-wide">

        {/* EVENTS + SUBMENU */}
        <div className="relative group">
          <div className="flex items-center">
            <NavLink
              to="/events"
              className={({ isActive }) =>
                `mx-2 duration-100 pb-1 ${
                  isActive
                    ? "border-b-2 border-[#5A6C57] text-[#5A6C57]"
                    : "hover:text-[#525B44] hover:border-b-2 hover:border-[#525B44]"
                }`
              }
            >
              Events
            </NavLink>

            <HiChevronDown
              onClick={toggleSubmenu}
              className={`cursor-pointer ml-0 text-[#2A2D22] transition-transform duration-300 ${submenuOpen ? "rotate-180" : "rotate-0"}`}
            />
          </div>

          {submenuOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-[#F1FCF7] shadow-lg rounded-md py-2 z-20">
              <NavLink to="/events/tug-o-war" className="block px-4 py-2 hover:bg-[#D3F1DA]">
                Tug O War
              </NavLink>
              <NavLink to="/events/cabor-toss" className="block px-4 py-2 hover:bg-[#D3F1DA]">
                Cabor Toss
              </NavLink>
              <NavLink to="/piping" className="block px-4 py-2 hover:bg-[#D3F1DA]">
                Piping Competition
              </NavLink>
            </div>
          )}
        </div>

        {/* LOCAL INFO */}
        <NavLink
          to="/local"
          className={({ isActive }) =>
            `mx-2 duration-100 pb-1 ${
              isActive
                ? "border-b-2 border-[#5A6C57] text-[#5A6C57]"
                : "hover:text-[#525B44] hover:border-b-2 hover:border-[#525B44]"
            }`
          }
        >
          Local Info
        </NavLink>

        {/* CONTACT */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `mx-2 duration-100 pb-1 ${
              isActive
                ? "border-b-2 border-[#5A6C57] text-[#5A6C57]"
                : "hover:text-[#525B44] hover:border-b-2 hover:border-[#525B44]"
            }`
          }
        >
          Contact
        </NavLink>

      </div>

      {/* MOBILE MENU */}
      <div className={`menu ${isOpen ? "open" : ""} md:hidden text-2xl bg-[#F1FCF7] text-[#2A2D22]`}>
        <NavLink to="/" onClick={toggleMenu} className="block mb-2">Home</NavLink>
        <NavLink to="/events" onClick={toggleMenu} className="block mb-2">Events</NavLink>
        <NavLink to="/local" onClick={toggleMenu} className="block mb-2">Local Info</NavLink>
        <NavLink to="/contact" onClick={toggleMenu} className="block">Contact</NavLink>
      </div>

    </nav>
  );
}

export default TopNav;
