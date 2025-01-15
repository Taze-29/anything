"use client";
import { useState } from "react";
import Modal from "./Modal";

export default function Index() {

  /* Area data */
  const projects = [
    {
      name: "Beauty",
      number: "01/",
      desc: "Developing stunning one-of-a-kind digital design that catches people’s eyes and brings your brand to life online.",
      srcs: [
        "/img/beauty.webp",
      ],
    },
    {
      name: "Thought",
      number: "02/",
      desc: "As a web design agency, we love to deliver meaningful and intuitive user experiences that build trust with your target audience.",
      srcs: [
        "/img/thought.webp",
      ],
    },
    {
      name: "Impact",
      number: "03/",
      desc: "Designing tailor made solutions that resonate with your customers and drives them to act.",
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
      <div className="flex flex-col justify-center items-start h-[100svh] w-full px-36 text-gray-300">
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
              <div className="flex w-full py-10 hover:text-black justify-between">
                <div className="flex flex-col">
                <span className="text-3xl -mb-4">{number}</span>
                <h2                
                  className={`w-[fit-content] text-[6vw] z-40 transition-all duration-200 hover:color-[#d38d2c] ${modal && project === index ? "translate-x-[-10px]" : "translate-x-0"}`}
                >
                  {name}
                </h2>
                </div>
                <div className={`flex w-1/4 items-center z-40 text-2xl transition-opacity duration-500 ${modal && project === index ? "opacity-100" : "opacity-0"}`}>
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
