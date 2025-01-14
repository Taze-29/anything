"use client";
import ServiceCard from "@/components/ServiceCard";
import { useRef, useEffect } from "react";
import { PiArrowDownLeftThin } from "react-icons/pi";


const cardData = [
  {
    title: "Web Design & development",
    tags: [
      "custom solution",
      "wordpress",
      "aedsfvnhjj",
      "custom solution",
      "custom solution"
    ],
    desc: "We design and develop beautiful, responsive websites that are tailored to your brand and your customers.",
    link: "",
    imgSrc: "",
  },
  {
    title: "Web Design & development",
    tags: [
      "custom solution",
      "wordpress",
      "aedsfvnhjj",
      "custom solution",
      "custom solution"
    ],
    desc: "We design and develop beautiful, responsive websites that are tailored to your brand and your customers.",
    link: "",
    imgSrc: "",
  },
  {
    title: "Web Design & development",
    tags: [
      "custom solution",
      "wordpress",
      "aedsfvnhjj",
      "custom solution",
      "custom solution"
    ],
    desc: "We design and develop beautiful, responsive websites that are tailored to your brand and your customers.",
    link: "",
    imgSrc: "",
  },
]

const Services = () => {  

  return (      
    <div className="relative flex flex-col py-12">
      <div className="sticky top-0">      
        <div className="flex w-full px-36 relative top-[-10%] w-[90%] h-[90vh] mb-24">
          
          <div
            className="flex w-full"             
          >
        
          <div className="flex flex-col text-[150px] leading-none w-[75%] justify-center">
            <span>OUR</span>
            <span className="pl-64">SERVICES</span>
          </div>
          <div className="flex justify-end items-end w-[25%]">
            <PiArrowDownLeftThin className="text-[250px]"/>
          </div>

          </div>
        </div>
      </div>
      
        {cardData.map((card, index) => {
          return (
            <ServiceCard key={index} {...card}/>
          )
        })}    
        
    </div>
  )
}

export default Services;