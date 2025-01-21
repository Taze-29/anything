import ServicesLarge from "@/components/ServicesLarge";
import Workflow from "@/components/Workflow";
import CTABanner from "@/components/CTABanner";
import FloatingShapes from "@/components/FloatingShapes/FloatingShapes";

export default function Home() {  

  return (
    <>
    <section className="w-full h-[100vh] -mt-28">
      <div className="absolute z-10 w-full h-full flex justify-center items-center">              
        <h1 className="text-9xl font">SERVICES</h1>
      </div>
      <FloatingShapes />
    </section>
    <div className="md:px-32">
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