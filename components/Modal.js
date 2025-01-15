"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

export default function Index({ modal, projects, project }) {
  /* Move modal with mouse */
  const container = useRef(null);
  const modalImg = useRef(null);
  const xOffset = 150;
  const yOffset = 150;

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


  const images = projects.map(({ name, srcs }, index) => {
    return (
      <div className="w-[300px] h-[300px]" key={index}>
        {srcs.map((src, index) => {
          return (
            <Image src={src} alt={name} key={index} width={300} height={300} className="rounded-2xl"/>
          );
        })}
      </div>
    );
  });

  return (
    <motion.div 
      ref={container}     
      className={`${modal ? "opacity-100 scale-100 h-[300px]" : "opacity-0 scale-50 h-[0px]"} absolute overflow-hidden transition-opacity-0.5s transition-transform-0s pointer-events-none z-30`}      
      animate={{
        left: mousePos.x -xOffset + "px",
        top: scrollY + mousePos.y - yOffset + "px",
      }}
      transition={{
        type: "tween",
        ease: "backOut",
      }}
      style={{
        transition: "scale 0.2s",
      }}
    >
      <div ref={modalImg} className="relative flex flex-col justify-start items-center h-[300px] w-[300px]">
        {images}
      </div>
    </motion.div>
  );
}

