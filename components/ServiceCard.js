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
    <div className="min-h-[100svh] w-full flex justify-center items-center sticky top-0">
      <motion.div 
        className="relative top-[-10%] min-h-[90svh] max-w-[90vw] xl:max-w-[100vw] xl:px-32 flex justify-center items-center"
        style={{
          scale,
          opacity: opacity,
        }}
      >        
        <div className="flex flex-col-reverse items-center md:flex-row bg-white rounded-lg lg:rounded-[60px] max-w-[90vw]">
          <div className="flex flex-col md:w-[50%] md:py-16 lg:p-8 xl:pl-14 xl:py-14 2xl:px-16 2xl:py-48 md:gap-8">
            <div className="text-2xl md:text-5xl xl:text-[5vw] leading-none px-8 lg:px-0 pt-1 pb-3 lg:py-0">{title}</div>

            <div className="hidden md:flex md:pl-8 lg:pl-0 flex-wrap gap-2">
              {tags.map((tag, index) => (
                <div key={index} className="border border-grey-100 rounded-3xl py-1 px-2 md:text-sm xl:text-md hover:bg-black hover:text-white transition duration-300 cursor-default overflow-hidden whitespace-nowrap">
                  {tag}
                </div>
              ))}
            </div>

            <div className="text-sm lg:text-base xl:text-2xl px-8 lg:px-0 pb-1 lg:pb-0">{desc}</div>
            
            <div className="lg:w-[200px] text-sm lg:text-md mx-8 lg:mx-0 mb-8 mt-3 lg:my-0">
              <Link href="/services" className="border-2 border-black rounded-full py-1 px-2 lg:py-2 lg:px-4 lg:text-lg flex justify-center items-center gap-2 hover:bg-black hover:text-white transition-all duration-300">
                  <span>Find out more</span> <GoArrowRight /> 
              </Link>            
            </div>
          </div>
          <div className="flex px-8 lg:px-16 pt-8 pb-4 lg:py-0 w-[calc(100vw-4rem)] h-[calc(100vw-4rem)] md:w-[50%] md:h-[100%] justify-center items-center">
                        
            <div className={`w-[100%] h-[100%] flex justify-center items-center p-4 lg:p-0 overflow-hidden ${color} rounded-lg rounded-tr-[50px] lg:rounded-tr-[200px]`}>
              <div className="aspect-square flex justify-center items-center w-[100%] h-[100%]">
              {content}
              </div>
            </div>
            
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;