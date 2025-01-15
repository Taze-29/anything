"use client";
import { useState } from "react";
import Link from "next/link";

const Nav = () => {

  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }

  return (
    <div className="w-full h-28 flex justify-between">
      <div className="flex items-center">

        {/* Logo */}
        <div className="w-28 h-28 text-5xl flex justify-center items-center">
        🕸️
        </div>

        {/* Title */}      
        <h1 className="text-md text-center">Website Name</h1>      

      </div>

      {/* Menu */}
      <div className="flex justify-center items-center mr-8">
        {/* Button */ }
        <div 
          className="w-12 h-12 border border-[2px] border-black rounded-full flex justify-center items-center cursor-pointer pt-1"
          //className="w-12 h-12 flex justify-center items-center cursor-pointer"
        >
          <div
            className={`hamburger hamburger--squeeze ${active ? "is-active" : ""}`}             
            onClick={() => handleClick()}
            style={{
              scale: 0.5,
            }}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </div>
        </div>
        {/* Menu */}
        <div 
          className="absolute -z-10 top-4 right-4 w-80 h-80 bg-white rounded-xl rounded-lg flex flex-col gap-4 p-4 transition-all ease-in-out duration-300 delay-200 origin-top-right pt-16 font-semibold text-xl pl-10" 
          style={{
            //display: active ? "block" : "none",
            scale: active ? 1 : 0.5,
            opacity: active ? 1 : 0
          }}
        >
          <Link href="/">Home</Link>
          <Link href="/work">Our work</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
          <div className="flex justify-center items-center border border-2 border-black rounded-full mr-10 mt-2 px-3 py-2 font-normal text-md">
            Start your project ➡️
          </div>
        </div>
      </div>

    </div>
  )
}

export default Nav;