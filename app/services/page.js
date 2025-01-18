import ServicesLarge from "@/components/ServicesLarge";
import Workflow from "@/components/Workflow";
import CTABanner from "@/components/CTABanner";

export default function Home() {  

  return (
    <>
    <div className="md:px-32">
      {/* Hero */}
      <div className="h-[100vh] flex flex-col justify-center items-center -mt-24">
        <h1 className="text-9xl font">SERVICES</h1>
      </div>

      <ServicesLarge />
      <CTABanner />
      <Workflow />
      
    </div>
    </>
  )
}