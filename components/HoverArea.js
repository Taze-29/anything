"use client";
import { useState } from "react";
import Modal from "./Modal2";

export default function Index() {

  /* Area data */
  const projects = [
    {
      name: "Beauty",
      number: "01/",
      desc: "We create visually captivating, custom designs that not only catch the eye but also tell your brand's story, making a lasting impression online.",
      srcs: [
        "/img/beauty.webp",
      ],
    },
    {
      name: "Thought",
      number: "02/",
      desc: "We believe in thoughtful design that goes beyond aesthetics—creating intuitive, user-friendly experiences that connect and build trust with your audience.",
      srcs: [
        "/img/thought.webp",
      ],
    },
    {
      name: "Impact",
      number: "03/",
      desc: "Every website we craft is a tailored solution designed to resonate with your customers and drive meaningful actions that propel your business forward.",
      srcs: [
        "/img/impact.webp",
      ],
    },
  ];

  const [project, setProject] = useState(null);

  /* Modal */
  const [modal, setModal] = useState(false);

  return (
    <>
      <Modal modal={modal} projects={projects} project={project} />
      <div className="flex flex-col justify-center items-start xl:h-[100vh] w-full px-8 lg:px-16 xl:px-36 mb-8 lg:mb-16 text-black lg:text-gray-300">
        {projects.map(({ name, number, desc }, index) => {
          return (
            <div 
              className="flex flex-col w-full cursor-default"
              onMouseOver={() => {
                setModal(true), setProject(index);
              }}
              onMouseOut={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setModal(false)
                }
                }}
              key={index}            
            >
              <div className="flex w-full py-4 lg:py-10 lg:hover:text-black justify-between">
                <div className="flex flex-col">
                <span className="text-xs lg:text-3xl lg:mb-10">{number}</span>
                <h2                
                  className={`w-[fit-content] text-xl lg:text-[6vw] 2xl:text-8xl z-40 transition-all duration-200 hover:color-[#d38d2c] ${modal && project === index ? "translate-x-[-2px] lg:translate-x-[-10px]" : "translate-x-0"}`}
                >
                  {name}
                </h2>
                </div>
                <div className={`flex w-2/3 xl:w-1/4 items-center z-40 text-sm lg:text-lg 2xl:text-2xl transition-opacity duration-500 ${modal && project === index ? "opacity-100" : "opacity-100 lg:opacity-0"}`}>
                  {desc}
                </div>
              </div>     
              <div className="relative w-full h-0.5">
                <div className={`z-10 absolute w-full h-full bg-gray-400`} />
                <div className={`z-20 absolute left-0 w-full h-full bg-black transform origin-left ${modal && project === index ? "scale-x-100" : "scale-x-0"} transition-transform duration-500 ease-in-out`} />
              </div>
              {/*       
              <div className={`animated-border w-full`}>
                <div className={`${modal && project === index ? "animate-border-in" : "animate-border-out"}`} />
              </div>
              */}
            </div>
          );
        })}
      </div>
    </>
  );
}
