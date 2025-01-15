"use client";
import { useRef, useEffect, useState } from "react";
import Link from 'next/link';
import { motion, useTransform } from "framer-motion";

const ServiceCard = ({ title, tags, desc, link, imgSrc, range, progress }) => {

  const scale = useTransform(progress, range, [1, 0.75]);
  const opacity = useTransform(progress, range, [1, 0]);

  useEffect(() => {
    console.log(progress);
    console.log(range);
  }, []);

  return (
    <div className="min-h-[100vh] flex justify-center items-center sticky top-0">
      <motion.div 
        className="relative top-[-10%] w-[90%] h-[90vh]"
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

            <div>
              <Link href={link} className="border-2 border-black rounded-full py-1 px-2">
                Find out more ➡️
              </Link>
            </div>
          </div>
          <div className="flex px-16 w-[50%] justify-center items-center">
            <div className="w-[100%] h-[80%] bg-red-500 border rounded-tr-[200px]"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;