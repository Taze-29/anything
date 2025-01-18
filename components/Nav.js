"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import { GoArrowRight } from "react-icons/go";

const Nav = () => {

  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {      
      console.log(window.scrollY);
      setScrollY(window.scrollY);
    });
  }
  , []);

  return (
    <div className="fixed w-full h-28 flex justify-between z-50">
      <Link href="/" className="flex items-center">

        {/* Logo */}
        <div className={`w-28 h-28 ml-2 mt-4 p-4 absolute transition transition-opacity duration-300 ${scrollY < 6160 ? "opacity-100" : "opacity-0"}`}>
          <img src="/logoBlack.svg" alt="Logo" />          
        </div>
        <div className={`w-28 h-28 ml-2 mt-4 p-4 absolute transition transition-opacity duration-300 ${scrollY >= 6160 ? "opacity-100" : "opacity-0"}`}>
          <img src="/logoWhite.svg" alt="Logo" />
        </div>                              

      </Link>

      {/* Menu */}
      <div className="flex justify-center items-center mr-8">
        {/* Button */ }
        <div 
          className={`z-20 w-12 h-12 border border-[2px] rounded-full flex justify-center items-center cursor-pointer pt-1 ${scrollY < 6160 ? "border-black" : "bg-white"}`}
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
        <div className="absolute -z-10 top-4 right-4 w-80 h-96 bg-white rounded-lg transition-all ease-in-out duration-300 delay-200 origin-top-right pt-16 pl-10"
          style={{            
            scale: active ? 1 : 0.5,
            opacity: active ? 1 : 0
          }}
        />            
        <div 
          className="absolute z-10 top-4 right-4 w-80 h-96 flex flex-col gap-4 p-4 pt-16 font-semibold text-xl pl-10 transition-all ease-in-out duration-300 origin-top-right delay-200" 
          style={{
            //display: active ? "flex" : "none",
            scale: active ? 1 : 0.5,
            opacity: active ? 1 : 0            
          }}
        >
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/work">Our work</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
          <div className="flex justify-center items-center gap-2 border border-2 border-black rounded-full mr-10 mt-2 px-3 py-2 font-normal text-[17px] hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
            Start your project <GoArrowRight />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Nav;