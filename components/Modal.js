"use client";
import { use, useEffect, useRef, useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

export default function Index({ modal, projects, project }) {
  /* Move modal with mouse */
  const container = useRef(null);
  const modalImg = useRef(null);
  const [offset, setOffset] = useState(150);  

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

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {

    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }      
  }, []);  

  useEffect(() => {
    if (screenWidth > 768) {
      setOffset(150);
    } else {
      setOffset(50);
    }
  }, [screenWidth]);

  function imageSize() {
    if (screenWidth > 768) {
      return 300;
    } else {
      return 100;
    }
  }


  const images = projects.map(({ name, srcs }, index) => {
    return (
      <div className={`w-[${imageSize()}px] h-[${imageSize()}px]`} key={index}>
        {srcs.map((src, index) => {
          return (
            <Image src={src} alt={name} key={index} width={imageSize()} height={imageSize()} className="rounded-2xl"/>
          );
        })}
      </div>
    );
  });

  return (
    <motion.div 
      ref={container}     
      className={`${modal ? `opacity-100 scale-100 h-[${imageSize()}px]` : "opacity-0 scale-50 h-[0px]"} absolute overflow-hidden transition-opacity-0.5s transition-transform-0s pointer-events-none z-30`}      
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
      <div ref={modalImg} className={`relative flex flex-col justify-start items-center h-[${imageSize()}px] w-[${imageSize()}px]`}>
        {images}
      </div>
    </motion.div>
  );
}

