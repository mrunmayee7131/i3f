import React from "react";
import { useState } from "react";
import { Link,NavLink,useLocation } from 'react-router-dom';
import logo2 from "./assets/logo2.jpg";

function Navbar () {
  const location = useLocation();
  const isActive = location.pathname === "/Rabi" || location.pathname === "/ecell" || location.pathname === "/NIIC" || location.pathname === "/Cisco";
  const isAbout = location.pathname==="/about" || location.pathname==="/team" || location.pathname==="/services"
  return (
    <div className="sticky top-0 z-10">
      <nav className="bg-white border-gray-200 dark:bg-purple-100 dark:border-purple-700 lg:rounded-full lg:mt-4 sticky backdrop-blur-md opacity-80">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Link to="/"><img src={logo2} className="h-16" /></Link>
          </a>
          <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-purple-100 dark:border-gray-700">
              <li>
                <NavLink to="/" target="_parent" 
                 className={({ isActive }) =>
                 `block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                   isActive ? "text-black" : "text-white"
                 }`
               } 
                aria-current="page">Home</NavLink>
              </li>
              <li>
                <button id="dropdrownNavbar" data-dropdown-toggle="dropdownNav" 
              className={`flex items-center justify-between w-full py-2 px-3  rounded ${isAbout ? "text-black" : "text-white"} hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto  md:dark:hover:text-black  dark:hover:bg-gray-700 md:dark:hover:bg-transparent `}
                >About<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg></button>
                <div id="dropdownNav" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                    <li>
                      <Link to="/about" target="_parent" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About I3F</Link>
                    </li>
                    <li>
                      <Link to="/team" target="_parent" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About Team</Link>
                    </li>
                    <li>
                      <Link to="/services" target="_parent" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Services/Facilities</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
              <button
      id="dropdownNavbarLink"
      data-dropdown-toggle="dropdownNavbar"
      className={`flex items-center justify-between w-full py-2 px-3  rounded ${isActive ? "text-black" : "text-white"} hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto  md:dark:hover:text-black  dark:hover:bg-gray-700 md:dark:hover:bg-transparent `}
    >
      Units
      <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
   
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg></button>
                <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                    <li aria-labelledby="dropdownNavbarLink">
                      <button  data-dropdown-toggle="doubleDropdown" id="doubleDropdownButton" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><Link to="/NIIC" target="_parent">NIIC</Link></button>
                      {/* <div id="doubleDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                          <li>
                            <Link to="/satellitecenter" target="_parent" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Satellite Center</Link>
                          </li>
                        </ul>
                      </div> */}
                    </li>
                    <li>
                      <Link to="/Cisco" target="_parent" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"> Cisco thinkQbator</Link>
                    </li>
                    <li>
                      <Link to="/Rabi" target="_parent" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">R-ABI</Link>
                    </li>
                    <li>
                      <Link to="/ecell" target="_parent" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">E-Cell IITBHU</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
              <NavLink
  to="/contactus"
  target="_parent"
  className={({ isActive }) =>
    `block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
      isActive ? "text-black" : "text-white"
    }`
  }
>
  Contact
</NavLink>
</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
