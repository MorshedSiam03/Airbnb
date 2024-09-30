"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image"; // Correct import
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import logo from '/Images/Icons/Logo.webp';// Ensure correct path

function Header() {

    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Detect when user scrolls past a threshold and update `scrolled` state
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <header className={`flex justify-between items-center px-5 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
        {/* Logo */}
        <div className="flex items-center justify-start space-x-2">
          <Image src={logo} alt="Airbnb Logo" className="" width={35} height={35} /> {/* Use Next.js Image */}
          <span className="text-[#ff395c] font-bold text-2xl">airbnb</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex ml-40">
          <button className="btn px-4 py-2 font-normal text-lg bg-transparent border-0 shadow-none rounded-full">Stays</button>
        </nav>

        {/* User Icon */}
        <div className="flex justify-end items-center space-x-2">
            <button className="btn px-6 py-2 font-normal  bg-transparent border-0 shadow-none rounded-full">
                Airbnb your home
            </button>
            <button className="btn text-2xl rounded-full shadow-none border-0 bg-transparent">
                <TbWorld />
            </button>
          <button className="text-gray-600 flex items-center btn bg-transparent rounded-full text-2xl">
            <IoMdMenu />
            <FaUserCircle />
          </button>
        </div>
      </header>

      <div className="p-5 flex justify-center">
        {/* Search Bar */}
        <div className="flex items-center border border-gray-300 rounded-full py-2 px-4">
          <input
            type="text"
            placeholder="Where"
            className="bg-transparent outline-none text-gray-600 text-sm w-40"
          />
          <div className="border-l border-gray-300 mx-2"></div>
          <input
            type="text"
            placeholder="Check in"
            className="bg-transparent outline-none text-gray-600 text-sm w-24"
          />
          <div className="border-l border-gray-300 mx-2"></div>
          <input
            type="text"
            placeholder="Check out"
            className="bg-transparent outline-none text-gray-600 text-sm w-24"
          />
          <div className="border-l border-gray-300 mx-2"></div>
          <input
            type="text"
            placeholder="Who"
            className="bg-transparent outline-none text-gray-600 text-sm w-24"
          />
          <button className="ml-2 bg-[#ff395c] p-2 rounded-full text-white">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
