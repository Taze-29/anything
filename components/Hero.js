"use client";
import { motion } from "framer-motion";

export default function Hero2() {

  const heroStyle = {
    fontFamily: "GrandSapphire",
    fontWeight: "900",    
    maxWidth: "100%",
    wordWrap: "break-word",    
    textAlign: "center",
    whiteSpace: "nowrap",
    lineHeight: 1,
    
    position: "relative",
    overflow: "hidden",

  }

  return (
    <div className="flex flex-col justify-center items-center lg:items-start w-full h-[100vh] text-heroSmall lg:text-heroLarge">                
    
      <div className="lg:pl-[7.5%]" style={{...heroStyle}}>
        <motion.span 
          initial={{ top: "100%" }}
          animate={{ top: "-7.5%" }}
          transition={{ duration: .5, delay: 0 }}
          className="relative">
          Crafting
        </motion.span>
      </div>

      <div className="lg:pl-[15%]" style={{...heroStyle}}>
        <motion.span 
          initial={{ top: "100%" }}
          animate={{ top: "-7.5%" }}
          transition={{ duration: .5, delay: 0.15 }}
          className="relative">
          Digital
        </motion.span>
      </div>

      <div className="flex">
        <div className="lg:pl-[6%]" style={{...heroStyle}}>
          <motion.span 
            initial={{ top: "100%" }}
            animate={{ top: "-7.5%" }}
            transition={{ duration: .5, delay: 0.3 }}
            className="relative">
            Brilliance
          </motion.span>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.8 }}
          className="hidden lg:flex justify-center items-center max-w-[30%] px-8 2xl:px-16 text-balance text-gray-800 text-sm xl:text-base 2xl:text-xl">
          <span className="font-normal">We’re a forward thinking web design and development agency located in England, dedicated to creating <span className="font-bold">stunning digital experiences</span> that stand out from the crowd.</span>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex lg:hidden px-16 pt-16 -mb-16 text-gray-800 text-sm text-center sm:text-base md:text-lg">
        <span className="font-normal">We’re a forward thinking web design and development agency located in England, dedicated to creating <span className="font-bold">stunning digital experiences</span> that stand out from the crowd.</span>
      </motion.div>

      {/*Background spots */}      
        <div className="absolute -z-10 top-[35vh] left-[40vw] xl:left-[25vw] h-[35vh] xl:h-[45vh] aspect-square transform-gpu -translate-x-1/2 -translate-y-1/2" style={{          
          background: "radial-gradient(circle, rgba(229,115,115,1) 0%, rgba(0,0,0,0) 66%)",
        }} />
        <div className="absolute -z-10 top-[45vh] xl:top-[50vh] left-[60vw] xl:left-[33vw] h-[35vh] xl:h-[45vh] aspect-square transform-gpu -translate-x-1/2 -translate-y-1/2" style={{                    
          background: "radial-gradient(circle, rgba(100,181,246,1) 0%, rgba(0,0,0,0) 66%)",
        }} />
        <div className="absolute -z-10 top-[55vh] xl:top-[80vh] left-[40vw] xl:left-[25vw] h-[35vh] xl:h-[45vh] aspect-square transform-gpu -translate-x-1/2 -translate-y-1/2" style={{                    
          background: "radial-gradient(circle, rgba(129,199,132,1) 0%, rgba(0,0,0,0) 66%)",
        }} />      

    </div>
  )
}