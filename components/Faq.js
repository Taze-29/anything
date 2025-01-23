"use client";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";

const questions = [
  {
    q: "How much does web design and development typically cost?",
    a: "The majority of our projects sit between £30k and £150k, but project costs will depend on the final scope of work and vary from project to project. We generally have a minimum project size of £25k and prefer to agree a fixed cost with agreed milestone payments.",
  },
  {
    q: "How long does a project usually take?",
    a: "The duration of a project will depend on the scope of work and the complexity of the project. Most of our projects take between 3 and 6 months to complete, but this can vary depending on the size and complexity of the project. We will provide you with a timeline for your project during the discovery phase.",
  },
  {
    q: "What is the process for working with you?",
    a: "The process for working with us is simple. We start with a discovery phase where we get to know you, your business, and your goals. We then move into the design and development phase, where we create a beautiful website that is tailored to your brand and your customers. Finally, we launch your website and provide ongoing support to help you grow your business.",
  },
  {
    q: "What makes you different from other web design and development agencies?",
    a: "We are a creative web design and branding agency based in London that crafts beautiful work for brands who refuse to blend in. We believe that first impressions matter and that your website is an opportunity to wow your audience. We are passionate about creating meaningful and intuitive user experiences that build trust with your target audience and drive them to act.",
  },
  {
    q: "Do you offer ongoing support after the project is complete?",
    a: "Yes, we offer ongoing support to help you grow your business. We provide a range of services to help you maintain and improve your website, including website maintenance, content updates, and digital marketing services. We are here to help you succeed and grow your business.",
  },
  {
    q: "What is your approach to web design and development?",
    a: "We take a user-centered approach to web design and development, focusing on creating meaningful and intuitive user experiences that build trust with your target audience. We believe that your website is an opportunity to wow your audience and that first impressions matter. We are passionate about creating beautiful, responsive websites that are tailored to your brand and your customers.",
  },  
]

const Faq = () => {

  const [active, setActive] = useState(null);

  return (
    <div className="flex flex-col bg-black w-full text-white px-8 lg:px-36 gap-6 pt-24">
      <h1 className="text-5xl lg:text-9xl mb-8">FAQ's</h1>            
        {questions.map(({ q, a }, index) => {
          return (
            <div 
              className="flex flex-col"
              key={index}
            >
              <div 
                className="text-sm lg:text-4xl flex items-center gap-2 cursor-pointer z-10"
                onClick={() => setActive(active === index ? null : index)}
              >
                <FaPlus className={`${active === index ? "rotate-45" : "rotate-0"} transition duration-500`}/> {q}
              </div>    
              <div className={`dropdown ${active === index && "active"}`}>
                <div className="text-sm lg:text-xl xl:text-2xl pt-2 lg:pl-9 xl:pl-11 xl:w-1/2 xl:min-w-[1000px] overflow-hidden text-balance">{a}</div>
              </div>
            </div>
          );
        })}
    </div>
  )
}

export default Faq;