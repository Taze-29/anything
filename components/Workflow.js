"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import { GoArrowRight } from "react-icons/go";

const data = [
  {
    num: "01",
    title: "Discovery",
    description: "Our team will work closely with you to understand your business goals, target audience, and project requirements. We will conduct a thorough analysis to identify your needs and develop a strategy that aligns with your objectives.",
    src: "/img/workflow/discovery.webp"
  },
  {
    num: "02",
    title: "Design",
    description: "Our designers will create a unique and visually appealing design that reflects your brand identity and engages your audience. We will focus on user experience and usability to ensure your website is intuitive and easy to navigate.",
    src: "/img/workflow/design.webp"
  },
  {
    num: "03",
    title: "Development",
    description: "Our developers will bring your design to life using the latest technologies and best practices. We will build a responsive and feature-rich website that meets your requirements and exceeds your expectations.",
    src: "/img/workflow/development.webp"
  },
  {
    num: "04",
    title: "Testing",
    description: "We will rigorously test your website to ensure it is bug-free, functional, and optimized for performance. Our QA team will identify and fix any issues to ensure your website is ready for launch.",
    src: "/img/service1.jpg"
  },
  {
    num: "05",
    title: "QA and Launch",
    description: "Once your website is complete, we will conduct a final round of testing to ensure everything is working as expected. We will then launch your website and provide ongoing support to ensure it continues to perform at its best.",
    src: "/img/service2.jpg"
  }
]

const WorkflowCard = ({ num, title, description, src }) => {
  return (
    <div className="w-[1000px] h-[400px] flex bg-white justify-between rounded-lg">
      <div className="flex flex-col gap-16 w-[600px] p-8">
        <div className="flex flex-col gap-4">
          <span className="text-gray-800">{num}</span>
          <h2 className="text-5xl">{title}</h2>
        </div>
        <p className="text-gray-800">{description}</p>
      </div>
      <div className="flex justify-center items-center m-4 w-[400px]">
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          <Image src={src} alt={title} fill objectFit="cover"/>
        </div>
      </div>      
    </div>    
  )
}

const Arrow = () => {
  return (
    <div className="h-full flex justify-center items-center text-5xl p-16 text-white">
      <GoArrowRight />
    </div>
  )
}

const Workflow = () => {

  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0.1, 0.9], ["1%", "-70%"]);

  return (
    <>
      <div className="w-full">
        <div
          ref={targetRef}
          className="relative h-[400svh]"
        >
          <div className="sticky top-0 h-screen flex flex-col items-start justify-center overflow-hidden -mx-32 bg-[#121212]">
            <h2 className="text-7xl mb-8 px-32 text-white">OUR DEVELOPMENT PROCESS</h2>
            <div className="p-16">
              <motion.div
                className="flex gap-4"              
                style={{ x }}
              >
                {data.map((item, index) => {
                  return (
                    <div key={index} className="flex gap-4">
                      <WorkflowCard num={item.num} title={item.title} description={item.description} src={item.src} />
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