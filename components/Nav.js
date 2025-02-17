"use client";
import { useEffect, useState, useRef, use } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { GoArrowRight } from "react-icons/go";

const Nav = () => {  

  const pathname = usePathname();

  const [active, setActive] = useState(false);
  const logoBlack = useRef(null);
  const logoWhite = useRef(null);

  function handleClick() {
    setActive(!active);
  }

  const [targetSections, setTargetSections] = useState([]);


  /* Change logo color */

  function setSections() {
    const sections = document.querySelectorAll("section");
    if (sections.length > 0){
      setTargetSections(sections);
    }     
  }

  useEffect(() => {
    setSections();
  }, []);  

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {            
      setScrollY(window.scrollY);      
    });
    return () => {
      window.removeEventListener("scroll", () => {        
        setScrollY(window.scrollY);        
      });
    }
  }
  , []);  

  useEffect(() => {
    changeLogo();
  }, [scrollY]);

  function changeLogo() {    
    let currentSection = null;
    
    if (scrollY === 0 || null ){
      currentSection = 0;
    } else {
    targetSections.forEach((section, index) => {          
      if (scrollY >= section.offsetTop) {
        currentSection = index;
      }
    });
    };

    if (targetSections[currentSection] !== (null || undefined)) {            
      if (targetSections[currentSection].children[0].classList.contains("bg-black") || targetSections[currentSection].children[0].classList.contains("bg-[#121212]")) {
        logoBlack.current.style.opacity = 0;
        logoWhite.current.style.opacity = 1;        
      }
      else {
        logoBlack.current.style.opacity = 1;
        logoWhite.current.style.opacity = 0;
      }
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScrollY(window.scrollY);
    }
    changeLogo();
  }, []);  

  useEffect(() => {    
    setSections();
    changeLogo();    
  }, [pathname]);

  /************/


  function closeNav() {
    setActive(false);
  }

  return (
    <div className="fixed w-[100svw] h-28 flex justify-between z-50">
      <Link href="/" className="flex items-center">

        {/* Logo */}
        <div 
          ref={logoBlack}
          className={`w-28 h-28 lg:ml-2 mt-4 p-7 lg:p-4 absolute transition transition-opacity duration-300`}
        >
          <img src="/logoBlack.svg" alt="Logo" />          
        </div>
        <div 
          ref={logoWhite}
          className={`w-28 h-28 lg:ml-2 mt-4 p-7 lg:p-4 absolute transition transition-opacity duration-300 opacity-0`}>
          <img src="/logoWhite.svg" alt="Logo" />
        </div>                              

      </Link>

      {/* Menu */}
      <div className="flex justify-center items-center mr-8 mt-3 lg:mt-0">
        {/* Button */ }
        <div 
          className={`z-20 w-12 h-12 border border-[2px] rounded-full bg-white flex justify-center items-center cursor-pointer pt-1 ${scrollY < 6160 ? "border-black" : ""}`}
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
        <div className="absolute -z-10 top-4 right-4 w-60 lg:w-80 h-80 lg:h-96 bg-white rounded-lg transition-all ease-in-out duration-300 delay-200 origin-top-right pt-16 pl-10"
          style={{            
            scale: active ? 1 : 0.5,
            opacity: active ? 1 : 0
          }}
        />            
        <div 
          className="absolute z-10 top-4 right-4 w-60 lg:w-80 h-80 lg:h-96 flex flex-col gap-4 p-4 pt-16 font-semibold text-xl lg:pl-10 transition-all ease-in-out duration-300 origin-top-right delay-200" 
          style={{            
            scale: active ? 1 : 0.5,
            opacity: active ? 1 : 0            
          }}
        >
          {active && (
            <>
              <Link href="/" onClick={() => closeNav()}>
                Home
              </Link>
              <Link href="/services" onClick={() => closeNav()}>
                Services
              </Link>
              {/*
                <Link href="/work" onClick={() => closeNav()}>Our work</Link>
              */}
              <Link href="/pricing" onClick={() => closeNav()}>
                Pricing
              </Link>
              <Link href="/contact" onClick={() => closeNav()}>
                Contact
              </Link>
              <Link href="/contact" onClick={() => closeNav()}
                className="flex justify-center items-center gap-2 border border-2 border-black rounded-full lg:mr-10 lg:mt-8 px-3 py-2 font-normal text-[17px] hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
              >
                Start your project <GoArrowRight />
              </Link>
            </>
          )}
          {!active && (
            <>
              <div>
                Home
              </div>
              <div>
                Services
              </div>
              <div>
                Pricing
              </div>
              <div>
                Contact
              </div>
              <div
                className="flex justify-center items-center gap-2 border border-2 border-black rounded-full lg:mr-10 lg:mt-8 px-3 py-2 font-normal text-[17px] hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
              >
                Start your project <GoArrowRight />
              </div>
            </>
          )}
        </div>
      </div>

    </div>
  )
}

export default Nav;