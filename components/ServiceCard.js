"use client";
import { useRef, useEffect, useState, use } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { motion, useTransform } from "framer-motion";

import { GoArrowRight } from "react-icons/go";

const ServiceCard = ({ title, tags, desc, link, imgSrc, range, progress, index }) => {


  let scale = 1;
  let opacity = 1;
  const imageScale = useTransform(progress, range, [1.25, 1]);

  if (index === 2){
    scale = 1;
    opacity = 1;
  } else {    
    scale = useTransform(progress, range, [1, 0.75]);
    opacity = useTransform(progress, range, [1, 0]);  
  }
  return (
    <div className="min-h-[100vh] flex justify-center items-center sticky top-0">
      <motion.div 
        className="relative top-[-10%] px-32 h-[90vh]"
        style={{
          scale,
          opacity: opacity,
        }}
      >        
        <div className="flex bg-white rounded-[60px]">
          <div className="flex flex-col w-[50%] px-16 py-48 gap-8">
            <div className="text-[110px] leading-none">{title}</div>

            <div className="flex gap-4">
              {tags.map((tag, index) => (
                <div key={index} className="border border-grey-100 rounded-3xl py-1 px-2 hover:bg-black hover:text-white transition duration-300 cursor-default">
                  {tag}
                </div>
              ))}
            </div>

            <div className="text-2xl">{desc}</div>
            
            <div className="w-[200px]">
              <Link href="/services" className="border-2 border-black rounded-full py-1 px-2 flex justify-center items-center gap-2 hover:bg-black hover:text-white transition-all duration-300">
                  <span>Find out more</span> <GoArrowRight /> 
              </Link>            
            </div>
          </div>
          <div className="flex px-16 w-[50%] justify-center items-center relative">
            
            {/* <div className="w-[100%] h-[80%] bg-red-500 border rounded-tr-[200px]" /> */}
                        
            <div className="w-[100%] h-[80%] overflow-hidden">
              <motion.div
                className="relative w-full h-full"
                style={{
                  scale: imageScale,
                }}
              >
                <Image src={imgSrc} alt="Service" className="w-[100%] h-[80%] rounded-tr-[200px]" fill objectFit="cover"/>
              </motion.div>
            </div>
            
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;