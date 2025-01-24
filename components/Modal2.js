"use client";
import { use, useEffect, useRef, useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import { GiFlowers } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";
import { GiGooeyImpact } from "react-icons/gi";



export default function Index({ modal, projects, project }) {
  /* Move modal with mouse */
  const container = useRef(null);
  const modalImg = useRef(null);

  const imageSize = 300;
  const offset = imageSize/2;

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (container.current) {
        setMousePos({ x: e.clientX, y: e.clientY });        
      }
    });

    //Set initial y translate
    if (modalImg.current) {
      modalImg.current.style.transform = `translate(0%, ${-project * 100}%)`;
    }
    if (modal && container.current) {
      container.current.style.scale = 1;
    } 
    if (!modal && container.current) {
      container.current.style.scale = 0.5;
    }
    
    return () => {
      window.removeEventListener("mousemove", (e) => {
        if (container.current) {
          setMousePos({ x: e.clientX, y: e.clientY });          
        }
      });
    }
  }, [modal]);  

  useEffect(() => {    
    if (modalImg.current) {
      if (container.current && modal) {
        container.current.style.scale = 0.5;
        setTimeout(() => {
          modalImg.current.style.transform = `translate(0%, ${-project * 100}%)`;
          container.current.style.scale = 1;
        }, 200);        
      }
      } else {
      modalImg.current.style.transform = `translate(0%, ${-project * 100}%)`;
    }    
  }, [project]);

  const [scrollY, setScrollY] = useState(0);  

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {

    function handleResize() {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 768) {
          container.current.style.display = "none";
        } else {
          container.current.style.display = "block";
        }
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }      
  }, []);    

  return (
    <motion.div 
      ref={container}     
      className={`${modal ? `opacity-100 scale-100 h-[${imageSize}px]` : "opacity-0 scale-50 h-[0px]"} absolute overflow-hidden transition-opacity-0.5s transition-transform-0s pointer-events-none z-30`}      
      animate={{
        left: mousePos.x -offset + "px",
        top: scrollY + mousePos.y - offset + "px",
      }}
      transition={{
        type: "tween",
        ease: "backOut",
      }}
      style={{
        transition: "scale 0.2s",
      }}
    >
      <div ref={modalImg} className={`relative flex flex-col justify-start items-center h-[${imageSize}px] w-[${imageSize}px]`}>
        <div className={`absolute top-0 rounded-2xl bg-pink-300 w-[${imageSize}px] min-h-[${imageSize}px]`}>                            
            <GiFlowers className="text-pink-700 text-6xl w-full h-full p-8" />          
        </div>
        <div className={`absolute top-[100%] w-[${imageSize}px] h-[${imageSize}px]`}>                  
          <div className={`rounded-2xl bg-violet-300 w-[${imageSize}] h-[${imageSize}]`}>
            <GiBrain className="text-violet-700 text-6xl w-full h-full p-8" />
          </div>                  
        </div>
        <div className={`absolute top-[200%] w-[${imageSize}px] h-[${imageSize}px]`}>                  
          <div className={`rounded-2xl bg-orange-300 w-[${imageSize}] h-[${imageSize}]`}>
            <GiGooeyImpact className="text-orange-700 text-6xl w-full h-full p-8" />
          </div>                  
        </div>
      </div>
    </motion.div>
  );
}

