"use client";
import { motion } from "framer-motion";

const Hero = () => {    

  return (
    <div>
      {/*Hero Text */}
      <div className={`relative flex flex-col w-full font-bold md:leading-[34svh] top-[-4vh]`}
      style={{
        fontFamily: "GrandSapphire",
      }}
      >

        <div className="text-[25vw] md:text-[30svh] md:pl-[12rem] -my-[2svh] overflow-hidden"> 
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: .5, delay: 0, timingFunction: "ease-in-out"  }}
          >
            Crafting
          </motion.div>
        </div>
        <div className="text-[25vw] md:text-[30svh] md:pl-[48rem] -my-[2svh] overflow-hidden"> 
          <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: .5, delay: .1, timingFunction: "ease-in-out" }}            
          >
            Digital
          </motion.div>
        </div>
        <div className="text-[25vw] md:text-[30svh] md:pl-[8rem] -my-[2svh] overflow-hidden"> 
          <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: .5, delay: .2, timingFunction: "ease-in-out"  }}            
          >
            Brilliance
          </motion.div>
        </div>

        <div 
          className="absolute bottom-[4svh] right-0 leading-normal h-42 w-[30%] flex justify-center items-center pr-[12rem] pb-[2rem] text-xl text-gray-700"
          style={{
            fontFamily: "Montreal",
          }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .5, delay: .5, timingFunction: "ease-in-out" }}
            className="overflow-hidden"          
          >                    
            <span className="font-normal">We’re a forward thinking web design and development agency located in England, dedicated to creating <span className="font-bold">stunning digital experiences</span> that stand out from the crowd.</span>
          </motion.div>
        </div>

      </div>
      {/*Background spots */}
      <div className="absolute -z-10 top-[33%] left-[33%] w-[33%] aspect-square transform-gpu -translate-x-1/2 -translate-y-1/2" style={{
        background: "rgb(2,0,36)",
        background: "radial-gradient(circle, rgba(229,115,115,1) 0%, rgba(0,0,0,0) 66%)",
      }} />
      <div className="absolute -z-10 top-[50%] left-[25%] w-[33%] aspect-square transform-gpu -translate-x-1/2 -translate-y-1/2" style={{
        background: "rgb(2,0,36)",
        background: "radial-gradient(circle, rgba(129,199,132,1) 0%, rgba(0,0,0,0) 66%)",
      }} />
      <div className="absolute -z-10 top-[75%] left-[33%] w-[33%] aspect-square transform-gpu -translate-x-1/2 -translate-y-1/2" style={{
        background: "rgb(2,0,36)",
        background: "radial-gradient(circle, rgba(100,181,246,1) 0%, rgba(0,0,0,0) 66%)",
      }} />


    </div>
  )
}

export default Hero;