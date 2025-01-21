import ServicesLarge from "@/components/ServicesLarge";
import Workflow from "@/components/Workflow";
import CTABanner from "@/components/CTABanner";
//import FloatingShapes from "@/components/FloatingShapes/FloatingShapes";

import { GoArrowDown } from "react-icons/go";

export default function Home() {  

  return (
    <>    
    <section className="w-full h-[100svh]">
      <div className="absolute w-full h-full flex justify-center items-center">
        <h1 className="text-5xl md:text-9xl -mt-28 z-10">SERVICES</h1>
      </div>
      {/*
      <div className="md:hidden absolute w-full min-h-[100svh] flex justify-center items-end z-10 text-3xl p-16">
        <GoArrowDown />
      </div>
      
      <FloatingShapes />      
      */}
    </section>
    <div className="px-8 md:px-32">
      {/* Hero */}      
      <section>
      <ServicesLarge />
      </section>
      <section>
      <CTABanner />
      </section>      
      <Workflow />
      
    </div>
    </>
  )
}