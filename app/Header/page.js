"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import logo from "/Images/Icons/Logo.webp"; // Ensure correct path

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      {/* Header */}
      <header
        className={`flex justify-between items-center px-5 transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-start space-x-2">
          <Image src={logo} alt="Airbnb Logo" width={35} height={35} />
          <span className="text-[#ff395c] font-bold text-2xl">airbnb</span>
        </div>

        {/* Navigation Links */}

        <nav className={`flex space-x-8`}>
          <button
            className={`btn px-4 ml-40 py-2 font-normal text-lg bg-transparent transition-all duration-500 ease-in-out border-0 shadow-none rounded-full ${
              scrolled ? "mt-[-100px]" : "mt-0"
            }`}
          >
            Stays
          </button>
        </nav>

        {/* User Icon */}
        <div className="flex justify-end items-center space-x-2">
          <button className="btn px-6 py-2 font-normal bg-transparent border-0 shadow-none rounded-full">
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

      {/* Search Bar */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          scrolled ? "mt-[-50px] " : "mt-0"
        } flex justify-center`}
      >
        <div
          className={`flex items-center justify-between border border-gray-300  rounded-full transition-all duration-500 ease-in-out ${
            scrolled ? "w-full max-w-sm h-12" : "w-full max-w-2xl h-16"
          }`}
        >
          {/* Where Button */}
          <button
            className={`bg-transparent block rounded-full shadow-none border-0 outline-none 
          ${scrolled ? "h-12 ml-4" : "h-16 py-3 w-60 pl-10 btn"}
          text-gray-600 text-sm text-left`}
          >
            <span className="font-semibold">
              {scrolled ? "Anywhere" : "Where"}
            </span>

            <p className="text-gray-500 text-xs">
              {scrolled ? "" : "Search destinations"}
            </p>
          </button>

          {/* Separator */}
          <div className="border-l border-1 h-7 border-gray-300"></div>

          {/* Check-in Button */}
          <button
            className={`bg-transparent  block rounded-full shadow-none border-0 outline-none 
          ${scrolled ? "h-12" : "h-16 py-3 w-32 btn "}
          text-gray-600 text-sm text-left`}
          >
            <span className="font-semibold">
              {scrolled ? "Any week" : "Check in"}
            </span>
            <p className="text-gray-500 text-xs">
              {scrolled ? "" : "Add dates"}
            </p>
          </button>

          {/* Separator */}
          <div className="border-l border-1 h-7 border-gray-300 "></div>

          {/* Check-out Button */}
          <button
            className={`bg-transparent block rounded-full shadow-none border-0 outline-none 
          ${scrolled ? "hidden" : "h-16 py-3 w-32 btn"}
          text-gray-600 text-sm text-left`}
          >
            <span className="font-semibold">
              {scrolled ? "Add guests" : "Check out"}
            </span>
            <p className="text-gray-500 text-xs">
              {scrolled ? "" : "Add dates"}
            </p>
          </button>

          {/* Separator */}
          <div
            className={`border-l ${
              scrolled ? "hidden" : "border-1 h-7 border-gray-300"
            } `}
          ></div>

          <button
            className={`bg-transparent justify-between rounded-full shadow-none border-0 outline-none 
          ${
            scrolled
              ? "h-12 flex items-center justify-between"
              : "h-16 py-3 w-40 btn"
          }
          text-gray-600 text-sm text-left`}
          >
            <div>
              <span className="font-semibold">
                {scrolled ? "Add guests" : "Who"}
              </span>
              <p className="text-gray-500 text-xs">
                {scrolled ? "" : "Add guests"}
              </p>
            </div>
            <FaSearch
              className={`bg-[#ff395c] 
                ${scrolled ? "text-2xl p-1 mx-4" : "text-4xl p-2"}
                text-white  rounded-full`}
            />
          </button>
        </div>
      </div>
      <hr className="my-4"></hr>
    </div>
  );
}

export default Header;
