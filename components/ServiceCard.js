"use client";
import { useRef, useEffect, useState, use } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { motion, useTransform } from "framer-motion";
import Macbook from "@/components/anim/mac";

import { GoArrowRight } from "react-icons/go";

const ServiceCard = ({ title, tags, desc, content, color, range, progress, index }) => {

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
    <div className="min-h-[100svh] max-w-screen flex justify-center items-center sticky top-0">
      <motion.div 
        className="relative top-[-10%] px-8 md:px-32 min-h-[90svh]"
        style={{
          scale,
          opacity: opacity,
        }}
      >        
        <div className="flex flex-col-reverse md:flex-row bg-white rounded-lg md:rounded-[60px]">
          <div className="flex flex-col md:w-[50%] md:px-16 md:py-48 md:gap-8">
            <div className="text-2xl md:text-[90px] leading-none px-8 md:px-0 pt-1 pb-3 md:py-0">{title}</div>

            <div className="hidden md:flex gap-4">
              {tags.map((tag, index) => (
                <div key={index} className="border border-grey-100 rounded-3xl py-1 px-2 text-md hover:bg-black hover:text-white transition duration-300 cursor-default">
                  {tag}
                </div>
              ))}
            </div>

            <div className="text-sm md:text-2xl px-8 md:px-0 pb-1 md:pb-0">{desc}</div>
            
            <div className="md:w-[200px] text-sm md:text-md mx-8 md:mx-0 mb-8 mt-3 md:my-0">
              <Link href="/services" className="border-2 border-black rounded-full py-1 px-2 flex justify-center items-center gap-2 hover:bg-black hover:text-white transition-all duration-300">
                  <span>Find out more</span> <GoArrowRight /> 
              </Link>            
            </div>
          </div>
          <div className="flex px-8 md:px-16 pt-8 pb-4 md:py-0 w-[calc(100vw-4rem)] h-[calc(100vw-4rem)] md:h-auto md:w-[50%] justify-center items-center">                        
                        
            <div className={`w-[100%] h-[100%] md:h-[80%] py-4 md:py-0 overflow-hidden ${color} rounded-lg rounded-tr-[50px] md:rounded-tr-[200px]`}>
              {content}
            </div>
            
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;