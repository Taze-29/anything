"use client";
import Image from "next/image";
import { useState } from "react";
import { FiArrowDownRight } from "react-icons/fi";

const Project = ({name, year, src, desc, url, tags}) => {
  const [hover, setHover] = useState(false);
  return (
    <div 
      className="h-[250px] md:h-[500px] w-full rounded-2xl flex flex-col cursor-pointer"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => window.open(url)}
    >
      <div className="flex justify-between text-white p-3 md:p-4 border-t border-l border-r border-gray-600 rounded-t-3xl pb-8">
        <div className="flex justify-center gap-1">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          <svg width="0" height="0">
            <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop stopColor="#7a6ded" offset="0%" />
              <stop stopColor="#591885" offset="100%" />
            </linearGradient>
          </svg>
          <FiArrowDownRight className="text-3xl leading-none" style={{ stroke: "url(#blue-gradient)" }}/>
        </div>
        <h2 className="text-xl">{name}</h2>
        </div>
        <span className="text-xl">{year}</span>
      </div>      
      <div className="relative rounded-2xl w-full h-full z-10 -mt-5">        
        <Image src={src} layout="fill" objectFit="cover" alt={"Project Image"} className="rounded-2xl"/>
        <div className={`absolute bg-black bg-opacity-60 rounded-2xl w-full h-full flex flex-col justify-between px-8 md:px-16 transition-opacity duration-500 ${hover ? "opacity-100" : "opacity-0"}`}>
          <div className="flex justify-center items-center md:w-3/4 h-full">
            <span className="md:text-6xl md:leading-[5rem] text-white">{desc}</span>
          </div>

          <div className="-mx-4 md:mx-0 md:p-2 flex gap-2 md:gap-4 mb-4 md:mb-6">
            {tags && tags.map((tag, index) => {
              return (
                <div key={index} className="border border-white px-2 md:px-5 py-2 rounded-full text-white flex justify-center items-center text-xs md:text-lg text-center">{tag}</div>
              );            
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;