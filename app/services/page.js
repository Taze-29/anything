import ServicesLarge from "@/components/ServicesLarge";
import Workflow from "@/components/Workflow";
import CTABanner from "@/components/CTABanner";
import FloatingShapes from "@/components/FloatingShapes/FloatingShapes";
import ScrollIndicator from "@/components/ScrollIndicator/ScrollIndicator";

export default function Home() {  

  return (
    <>    
    <section className="w-full h-[100svh]">
      <div className="absolute w-full h-full flex justify-center items-center">
        <h1 className="text-5xl lg:text-9xl z-10 cursor-default">SERVICES</h1>
      </div>      
      <div className="hidden lg:flex absolute w-full h-full justify-center items-end pb-8">
        <ScrollIndicator />
      </div>
      
      <FloatingShapes />            
    </section>
    <div className="px-8 -mt-32 lg:px-32">
      {/* Hero */}      
      <section>
        <ServicesLarge />
      </section>
      {/*
      <section>
        <CTABanner />
      </section>
      */}
      <section>
        <Workflow />
      </section>
      
    </div>
    </>
  )
}