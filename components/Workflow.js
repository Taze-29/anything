"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import { GoArrowRight } from "react-icons/go";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { GiVial } from "react-icons/gi";
import { FaRocket } from "react-icons/fa6";


const data = [
  {
    num: "01",
    title: "Discovery",
    description: "Our team will work closely with you to understand your business goals, target audience, and project requirements. We will conduct a thorough analysis to identify your needs and develop a strategy that aligns with your objectives.",
    icon: <FaMagnifyingGlass className="w-full h-full p-4 md:p-20 text-slate-800" />,
    color: "bg-[#5eead4]"  
  },
  {
    num: "02",
    title: "Design",
    description: "Our designers will create a unique and visually appealing design that reflects your brand identity and engages your audience. We will focus on user experience and usability to ensure your website is intuitive and easy to navigate.",
    icon: <FaWandMagicSparkles className="w-full h-full p-4 md:p-20 text-slate-800" />,
    color: "bg-indigo-300"  
  },
  {
    num: "03",
    title: "Development",
    description: "Our developers will bring your design to life using the latest technologies and best practices. We will build a responsive and feature-rich website that meets your requirements and exceeds your expectations.",
    icon: <FaCode className="w-full h-full p-4 md:p-20 text-slate-800" />,
    color: "bg-blue-300"  
  },
  {
    num: "04",
    title: "Testing",
    description: "We will rigorously test your website to ensure it is bug-free, functional, and optimized for performance. Our QA team will identify and fix any issues to ensure your website is ready for launch.",
    icon: <GiVial className="w-full h-full p-4 md:p-20 text-slate-800" />,
    color: "bg-yellow-300"  
  },
  {
    num: "05",
    title: "QA & Launch",
    description: "Once your website is complete, we will conduct a final round of testing to ensure everything is working as expected. We will then launch your website and provide ongoing support to ensure it continues to perform at its best.",
    icon: <FaRocket className="w-full h-full p-4 md:p-20 text-slate-800" />,
    color: "bg-green-300"  
  }
];


const WorkflowCard = ({ num, title, description, src, icon, color }) => {
  return (
    <div className="w-[80vw] md:w-[1000px] h-[350px] md:h-[400px] flex bg-white justify-between rounded-lg">
      <div className="flex flex-col gap-4 md:gap-16 w-[600px] p-8">

        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <span className="text-gray-800">{num}</span>
            <h2 className="text-xl md:text-5xl">{title}</h2>
          </div>
          <div className={`md:hidden w-1/3 h-full rounded-lg ${color}`}>
            {icon}
          </div>
        </div>

        <p className="text-gray-800 text-sm md:text-lg">{description}</p>
      </div>
      <div className="hidden md:flex justify-center items-center m-4 w-[400px]">
        <div className={`w-full h-full rounded-lg ${color}`}>
          {/*
          <Image src={src} alt={title} fill objectFit="cover"/>
          */}          
          {icon}
        </div>
      </div>      
    </div>    
  )
}

const Arrow = () => {
  return (
    <div className="h-full flex justify-center items-center text-5xl p-8 md:p-16 text-white">
      <GoArrowRight />
    </div>
  )
}

const Workflow = () => {

  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "-85%"]);

  return (
    <>
      <div className="w-full">
        <div
          ref={targetRef}
          className="relative h-[400svh]"
        >
          <div className="sticky top-0 h-screen flex flex-col items-start justify-center -mx-8 md:-mx-32 bg-[#121212] overflow-hidden">
            <h2 className="text-2xl md:text-7xl mt-[20px] md:mt-0 md:mb-8 pl-8 md:px-32 text-white">OUR DEVELOPMENT PROCESS</h2>
            <div className="px-8 py-4 md:p-16">
              <motion.div
                className="flex gap-4"              
                style={{ x }}
              >
                {data.map((item, index) => {
                  return (
                    <div key={index} className="flex gap-4">
                      <WorkflowCard {...item} />
                      {index < data.length - 1 && (
                        <Arrow />
                      )}
                    </div>
                  )
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Workflow;