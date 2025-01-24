"use client";

import Macbook from "@/components/anim/mac";
import Cogs from "@/components/anim/cogs";
import SEO from "@/components/anim/seo";

const cardData = [
  {
    title: "Website Development",
    tags: [
      "Custom websites",
      "Responsive design",
      "CMS integration",
      "User-friendly"
    ],
    desc: "We design and develop modern, responsive websites that are tailored to your business needs. From e-commerce platforms to custom CMS solutions, we build it all.",
    //link: "https://example.com/website-development",
    imgSrc: "/img/service1.jpg",
    content: <Macbook />,
    color: "bg-green-200",
  },
  {
    title: "Website Maintenance",
    tags: [
      "Regular updates",
      "Bug fixes",
      "Performance monitoring",
      "Security checks",
      //"backup solutions"
    ],
    desc: "We provide ongoing website maintenance to keep your site secure, fast, and up-to-date. Focus on your business while we handle the technical details.",
    //link: "https://example.com/website-maintenance",
    imgSrc: "/img/service2.jpg",
    content: <Cogs />,
    color: "bg-red-200",
  },
  {
    title: "Search Engine Optimization",
    tags: [
      "On-page SEO",
      "Keyword research",
      "Technical SEO",
      "Local SEO"
    ],
    desc: "Our SEO services ensure your website ranks higher in search results. We optimize your content, improve site performance, and help you attract more traffic.",
    //link: "https://example.com/seo-services",
    imgSrc: "/img/service3.jpg",
    content: <SEO />,
    color: "bg-blue-200",
  },
];

import ServiceCard from "@/components/ServiceCard";
import { useState, useRef, useEffect } from "react";
import { PiArrowDownLeftThin } from "react-icons/pi";
import { motion, useScroll, useTransform } from "framer-motion";

const Services = () => {  

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const scale = useTransform(scrollYProgress, [0, 0.33], [1, 0.75]);
  const opacity = useTransform(scrollYProgress, [0, 0.33], [1, 0]);
  const rotation = useTransform(scrollYProgress, [0, 0.22], [45, -45]);

  return (      
    <div className="relative flex flex-col -my-12 lg:my-0 lg:py-12 overflow-x-clip"
      ref={container}
    >       

      <div className="sticky top-0">      
        <div className="flex w-full px-12 lg:px-36 relative top-[-10%] w-[90%] h-[90vh] mb-24">

          <motion.div 
            className="flex w-full"
            style={{
              scale,
              opacity: opacity,
            }}
          >
            <div className="flex flex-col text-5xl lg:text-8xl xl:text-9xl leading-none w-[75%] justify-center">
              <span>OUR</span>
              <span className="pl-4 lg:pl-32 xl:pl-64">SERVICES</span>
            </div>
            <div className="flex justify-end items-end w-[100%] lg:w-[25%] h-[75%] lg:h-[100%]">
              <motion.div
                style={{
                  rotate: rotation
                }}
              >
                <PiArrowDownLeftThin className="text-7xl lg:text-9xl xl:text-[250px]" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

        {cardData.map((card, index) => {
          return (
            <ServiceCard key={index} index={index} {...card} range={[(index+1) * 0.33, (index+1) * 0.33 + 0.33]} progress={scrollYProgress}/>
          )
        })}

      
    </div>
  )
}

export default Services;